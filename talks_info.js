const TALKS_INFO = {
    1: {
        title: 'Duendecillos en tu navegador: service workers',
        speakers: [
            { name: 'Paqui Calabria', twitter: 'zurribulle', img: './images/paqui.jpg' },
            { name: 'Ismael Navarro', twitter: 'ismanapa', img: './images/ismael.jpg' },
        ],
        description: `
        <p>¿Nunca has pensado que sería genial poder contar con una ayuda extra a la hora de que tus aplicaciones trabajaran? Ahora es posible contar con unos pequeños ayudantes en tu navegador, los service workers.</p>
        <p>En esta charla pretendemos dar a conocer todas las posibilidades que hay detras de los Services Workers más allá del cacheo de recursos en cliente. Tenemos como objetivo desmitificar lo que se esconde detrás de esta tecnología y mostrar algunas de las muchas posibilidades que ofrece.</p>
        <p>Tras una introducción inicial mostraremos algunos ejemplos de como crear tu service workers y las distintas apliciones prácticas que puedes llegar a conseguir.</p>
        `,
    },
    2: {
        title: 'Road to Web Components',
        speakers: [
            { name: 'Cristina Ponce', twitter: 'CristinaGrim', img: './images/cristina.jpg' },
        ],
        description: `
        <p>El concepto webcomponent lleva sonando un tiempecillo y cada vez suena más fuerte gracias a librerías como Polymer o Stencil.</p>
        <p>Por ello, en esta charla veremos cuáles son los conceptos clave de un webcomponent, veremos como crear algunos de ejemplo y como aplicarlos en un proyecto real.</p>
        <p>Así también, analizaremos como está el estándar en este sentido, las ventajas de utilizarlos y como podemos aprovecharlo para hacer de nuestro proyecto algo más nativo y menos pegado al framework que usemos en nuestro proyecto.</p>
        `,
    },
    3: {
        title: '¿Cómo funciona un router SPA? Caso práctico con Vue Router',
        speakers: [
            { name: 'Eduardo San Martín', twitter: 'posva', img: './images/eduardo.jpg' },
        ],
        description: `
        <p>Cuando desarrollamos una Single Page Application, es necesario usar un Router. Cada framework tiene su propio router, React incluso tiene varios paquetes disponibles. Y, aunque cada framework sea diferente y cada router tenga un enfoque diferente, todos comparten los mismos principios.</p>
        <p>¿Qué se esconde detrás de una API simple y fácil de usar? ¿Es realmente tan difícil implementar un router por sí mismo? ¿Qué cosas fallan hoy en día en Vue Router?</p>
        <p>Durante esta charla, responderemos a estas preguntas usando el Router oficial de Vue como ejemplo y explicando su funcionamiento interno.</p>
        `,
    },
    4: {
        title: 'La igualdad en los espacios laborales: retos y beneficios',
        speakers: [
            { name: 'José Antonio Vela', twitter: 'ecosdegenero', img: './images/jose.jpg' },
        ],
        description: `
        <p>Los espacios laborales son lugares de puesta en común del trabajo de personas muy distintas. La diversidad es una oportunidad de aprendizaje y de pluralidad de soluciones pero, sin una valoración de la misma puede transformarse en una fuente de desentendimiento y freno.</p>
        <p>La presencia de mujeres en ámbitos tradicionalmente considerados masculinos puede ser percibida como una ganancia en riqueza de recursos humanos o, por el contrario, como un ataque a las dinámicas tradicionales de trabajo. Del mismo modo, otras diversidades, como la LGBT o de capacidades pueden aprovecharse o perderse al generar espacios violentos.</p>
        <p>La percepción de la diversidad misma está influida por la posibilidad de entender nuevas realidades y de cuestionarse prejuicios adquiridos. A lo largo de esta ponencia se visitarán estrategias y planteamientos que nos permitan visibilizar la diversidad y los patrones sociales que nos impiden crecer igualitariamente y aprovecharnos de nuevos caminos capacitantes.</p>
        `,
    },
    5: {
        title: 'Cómo te la "colamos" los diseñadores todos los días',
        speakers: [
            { name: 'James Heda Weng', twitter: 'JamesHedaWeng', img: './images/james.jpg' },
        ],
        description: `
        <p>Hace años se podía dibujar una línea entre el trabajo de un diseñador y el de un desarrollador frontend fácilmente: el diseñador organiza la apariencia del producto y se la pasa al desarrollador para construir la interfaz. Sin embargo, ahora invertimos más en la experiencia de usuario, además de fijarnos en la apariencia de los elementos en la interfaz también trabajamos en su comportamiento.</p>
        <p>Como resultado, la dificultad en la comunicación entre diseñadores y desarrolladores frontend está creciendo en el workflow diario: la forma tradicional de documentación de diseño no es suficientemente flexible para reflejar cómo funciona los elementos, tampoco viene en un formato developer-friendly. En esta charla propongo unos trucos para mejorar la comunicación diseño/frontend en nuestro trabajo diario.</p>
        En 40 minutos veremos de forma práctica:
        <ul>
        <li>Unificación del lenguaje en la comunicación de diseño/frontend.</li>
        <li>Optimización y personalización del contenido y responsabilidad del trabajo de ambos lados tanto diseñadores como desarrolladores frontend.</li>
        <li>Como diseñador, la forma de proveer el diseño en un formato que sea más developer-friendly.</li>
        <li>La introducción de un mediador entre diseño y frontend en el workflow.</li>
        </ul>
        `,
    },
    6: {
        title: 'Cómo programar un motor de animaciones cuidando el rendimiento',
        speakers: [
            { name: 'Vicente Lucendo', twitter: 'vlucendo', img: './images/vicente.jpg' },
        ],
        description: `
        <p>Existen varios motores de animaciones muy populares entre la comunidad frontend (TweenMax, Anime.js, Velocity, Popmotion...) pero pocos saben cómo funciona uno realmente.</p>
        <p>En ésta charla aprenderemos cómo programar uno desde cero, repasando por el camino conceptos básicos de animación, aprendiendo sobre algunos aspectos importantes del funcionamiento de un navegador y finalmente añadiendo todas las funcionalidades necesarias para dotar a nuestras webs de un "motion design" de primera.</p>
        <p>Una vez terminado lo pondremos a prueba comparando su rendimiento con otros y veremos algunas de las ventajas e inconvenientes de programar nuestras propias librerías en lugar de usar otras ya hechas.</p>
        `,
    },
    7: {
        title: 'Las reglas han cambiado, Custom Properties!',
        speakers: [
            { name: 'Jesús Olazagoitia', twitter: 'goiblas', img: './images/jesus.jpg' },
        ],
        description: `
        <p>Es el momento de aprovechar el potencial de las custom properties, no vienen a sustituir las variables de los preprocesadores sino a brindarnos nuevas formas de construir la web, la siguiente revolución después del responsive web design.</p>
        <p>Las custom properties nos brindan un nuevo canal de comunicación con nuestros archivos CSS, dotándolos de potencia y reduciendo el número de clases que necesitamos.</p>
        <p>Pero no todo es perfecto, las custom properties tienen sus peculiaridades y es necesario conocerlas para no llevarse sorpresas.</p>
        <p>Se verán agunos ejemplos en la charla, como <a href="https://codepen.io/goiblas/pen/jvvOwy" target="_blank">este</a> o <a href="https://codepen.io/goiblas/pen/pOOvRZ" target="_blank">este</a>.</p>
        <p>Por supuesto que se verá como modificarlas desde Javascript, con varios ejemplos espectaculares y con muy pocas lineas de código.</p>
        `,
    },
    8: {
        title: 'Testing sin dogmas',
        speakers: [
            { name: 'Sergio Arbeo', twitter: 'serabe', img: './images/sergio.jpg' },
        ],
        description: `
        <p>Las charlas de testing pueden dividirse en dos grupos: las introductorias, con generalidades y comparaciones sin mucha profundidad; y las dogmáticas, en las que se enumera lo que hacer como si nos aprendiéramos los diez mandamientos.</p>
        <p>Esta charla trata de huir de estas dos aproximaciones y aportar una serie de principios, con sus razonamientos para que sepas usarlos y descartarlos según la situación.</p>
        `,
    },
};