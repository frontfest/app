firebase.initializeApp({
    apiKey: "AIzaSyBuD3x6onxSJU-GS0K-ndyZgArI5xI1hUM",
    authDomain: "front-fest.firebaseapp.com",
    databaseURL: "https://front-fest.firebaseio.com",
    projectId: "front-fest",
    storageBucket: "front-fest.appspot.com",
    messagingSenderId: "919245595569"
});

const database = firebase.database();
const CLOUD_FUNCTIONS = 'https://us-central1-front-fest.cloudfunctions.net';

const app = new Vue({
    el: '#app',
    data: {
        eventMessages: [],
        userId: '',
        userVotes: {},
        currentTalkId: '',
        allowAskQuestions: false,
        enableModeration: false,
        newQuestionText: '',
        sendingQuestion: false,
        questions: [],
        sendingVote: {},
    },
    computed: {
        currentTalk() {
            return TALKS_INFO[this.currentTalkId];
        },
        sortedQuestions() {
            return this.questions.sort((a, b) => b.votes - a.votes);
        },
    },
    watch: {
        currentTalkId() {
            if (!this.currentTalkId) return;
            database.ref(`/questions/${this.currentTalkId}`)
                .on('value', snapshot => {
                    const questionsMap = snapshot.val() || {};
                    this.questions = Object.keys(questionsMap)
                        .map(questionId => ({
                            id: questionId,
                            ...questionsMap[questionId],
                        }));
                });
        },
    },
    methods: {
        addQuestion() {
            if (!this.newQuestionText) return;
            this.sendingQuestion = true;
            axios
                .get(CLOUD_FUNCTIONS + '/ask', {
                    params: {
                        userId: this.userId,
                        question: this.newQuestionText.slice(0, 500), // max 500 characters
                    },
                })
                .then(() => this.sendingQuestion = false);
            this.newQuestionText = '';
        },
        voteQuestion(question) {
            if (
                !this.allowAskQuestions ||
                this.userVotes[question.id] ||
                question.userId === this.userId
            ) return;
            this.$set(this.userVotes, question.id, true);
            this.$set(this.sendingVote, question.id, true);
            return axios
                .get(CLOUD_FUNCTIONS + '/vote', {
                    params: {
                        userId: this.userId,
                        questionId: question.id,
                    },
                })
                .then(() => {
                    this.$set(this.sendingVote, question.id, false);
                });
        },
    },
    created() {
        database.ref('currentTalkId').on('value', snapshot => {
            this.currentTalkId = snapshot.val() || 0;
        });
        database.ref('allowAskQuestions').on('value', snapshot => {
            this.allowAskQuestions = snapshot.val() || false;
        });
        database.ref('enableModeration').on('value', snapshot => {
            this.enableModeration = snapshot.val() || false;
        });
        database.ref('eventMessages').on('value', snapshot => {
            const messages = snapshot.val() || {};
            this.eventMessages = Object.values(messages);
        });
        let userId = localStorage.getItem('userId');
        if (!userId) {
            userId = Math.random().toString(36).slice(2); // random id
            localStorage.setItem('userId', userId);
        }
        this.userId = userId;
        database.ref(`votes/${userId}`).on('value', snapshot => {
            this.userVotes = snapshot.val() || {};
        });
    },
});