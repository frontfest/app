const functions = require('firebase-functions');
const cors = require('cors')({ origin: true });
const admin = require('firebase-admin');

admin.initializeApp();

exports.ask = functions.https.onRequest((req, res) => {
    cors(req, res, () => { });
    const userId = req.query.userId;
    const question = req.query.question;
    return admin.database().ref('currentTalkId').once('value') // get the current talk
        .then(snapshot => {
            const currentTalkId = snapshot.val();
            return admin.database().ref(`/questions/${currentTalkId}`) // add question to the talk
                .push({
                    userId,
                    text: question,
                    votes: 0,
                });
        })
        .then(snapshot => {
            return res.sendStatus(200).send({ id: snapshot.key });
        });
});

exports.vote = functions.https.onRequest((req, res) => {
    cors(req, res, () => { });
    const userId = req.query.userId;
    const questionId = req.query.questionId;
    return admin.database().ref(`votes/${userId}/${questionId}`).once('value') // check if the question has already been voted
        .then(snapshot => {
            const voted = snapshot.val() || false;
            return voted
                ? Promise.reject('already voted')
                : admin.database().ref('currentTalkId').once('value'); // get the current talk
        })
        .then(snapshot => { // vote the question
            const currentTalkId = snapshot.val();
            return admin.database().ref(`/questions/${currentTalkId}`)
                .child(questionId)
                .child('votes')
                .transaction(votes => votes + 1);
        })
        .then(() => { // store that the question has been voted
            return admin.database().ref(`votes/${userId}`).update({
                [questionId]: true,
            });
        })
        .then(
            () => res.sendStatus(200),
            error => res.sendStatus(500).send({ message: error })
        );
});
