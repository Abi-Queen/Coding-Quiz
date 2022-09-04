//create global variables
const question = document.getElementById('display-question');
const options = Array.from(document.getElementsByClassName('option-text'));

let currentQuestion = {};
let score = 0;
let questionCounter = 0; 
let availableQuestions = [];

const correctPoints = 1;
const maxQuestions = 5;

var timer = setTimeout(timer, 1000)
var minute = 0;
var second = 0;

//create an array of questions and answers
var questions = [
    {
    question: "Where is the correct place to insert a JavaScript?",
    option1: "The <head> section",
    option2: "Both the <head> section and the <body> section",
    option3: "The beginning of the <body> section",
    option4: "The end of the <body> section",
    answer: 4
},
{
    question: "What is the correct syntax for referring to an external script called 'file.js'?",
    option1: "<script href='file.js'>",
    option2: "<script name='file.js'>",
    option3: "<script src='file.js'>",
    option4: "<script al='file.js'>",
    answer: 3
},
{
    question: "How do you write 'Hello World' in an alert box?",
    option1: "alert('Hello World')",
    option2: "alertBox('Hello World')",
    option3: "msg('Hello World')",
    option4: "msgBox('Hello World')",
    answer: 1
},
{
    question: "How many columns are in a Bootstrap row?",
    option1: "unlimited",
    option2: "12",
    option3: "1",
    option4: "5",
    answer: 2
},
{
    question: "Which of the following is a Third-Party API?",
    option1: "DOM",
    option2: "Flexbox",
    option3: "JavaScript",
    option4: "jQuery",
    answer: 4
}
]

// Quiz functionality 1: start, get and display questions and answers
startQuiz = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
}

getNewQuestion = () => {

    if(availableQuestions.length === 0 || questionCounter > maxQuestions){
        // display end page
        return window.location.assign("/end.html"); 
    }

    questionCounter++; 
    var questionIndex = Math.floor(Math.random() + availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    options.forEach(option => {
        const number = option.dataset['number'];
        option.innerText = currentQuestion['option' + number];
    });

    //omit question we just used from current array
    availableQuestions.splice(questionIndex, 1);
};

//check answers to see if they are correct by inspecting element of clicked option
options.forEach(option => {
    option.addEventListener('click', e => {
        const selectedOption = e.target;
        const selectedAnswer = selectedOption.dataset['number'];

        const classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        //add points to score for correct answer
        if (classToApply === "correct") {
            incrementScore(correctPoints);
        }

    selectedOption.parentElement.classList.add(classToApply);

    setTimeout( () => {
        selectedOption.parentElement.classList.remove(classToApply);
        getNewQuestion();
    }, 1000);
    });
});

//keep score
incrementScore = num => {
    score +=num;
    scoreText.innerText = score;
};


startQuiz();


//timer start
function timerStart() {
    time = setInterval(() => {timer(); }, 1000);
}

document.getElementbyId('#start-quiz-btn').onclick = timerStart();

//timer reset
function timerReset() {
    minute = 0;
    second = 0;
    document.getElementById('minute').innerText = '00';
    document.getElementById('second').innerText = '00';
}; 

// timer functionality 
function timer() {
    if (second == 60) {
        second = 0;
        minute ++;
    }
    if (minute == 60) {
        minute = 0;
        hour ++; 
    }
    document.getElementById('hour').innerText = returnData(hour);
    document.getElementById('minute').innerText = returnData(minute);
    document.getElementById('second').innerText = returnData(second);
}; 

