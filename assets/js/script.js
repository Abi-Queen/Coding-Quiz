//create global variables
const question = document.getElementById("question");
const options = document.getElementsByClassName("option-text");
const choices = Array.from(document.getElementsByClassName("option-text"));

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0; 
let availableQuestions = [];


const correctScore = 1;
const maxQuestions = 5;

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
    questionCounter++; 
    const questionIndex = Math.floor(Math.random() + availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    options.forEach(option => {
        const number = option.dataset["number"];
        option.innerText = currentQuestion["option" + number];
    });
};

startQuiz();

//Quiz functionality 2: end, record score to localstorage, stop timer





// // Start timer when quiz starts; end with question 5 submission 
// var timer = setTimeout(timer, 1000)
// var minute = 0;
// var second = 0;

// document.form_main.start-btn.onclick = timerStart();

// function timerStart() {
//     time = setInterval(() => { timer(); }, 1000);
// }

// function timerReset() {
//     minute = 0;
//     second = 0;
//     document.getElementById('minute').innerText = '00';
//     document.getElementById('second').innerText = '00';
// }

// function timer() {
//     if (second == 60) {
//         second = 0;
//         minute++;
//     }
//     if (minute == 60) {
//         minute = 0;
//         hour++;
//     }
//     document.getElementById('minute').innerText = returnData(minute);
//     document.getElementById('second').innerText = returnData(second);
// }

// // Iterate through questions
// function iterate(id) {

// //Get result 
// var result = document.getElementsByClassName("result");
// result[0].innerText = "";

// // Get question
// var question = document.getElementById("question");


// // Set question text
// question.innerText = Questions[id].q;

// // Get options
// var op1 = document.getElementById('op1');
// var op2 = document.getElementById('op2');
// var op3 = document.getElementById('op3');
// var op4 = document.getElementById('op4');


// // Provide option text
// op1.innerText = Questions[id].a[0].text;
// op2.innerText = Questions[id].a[1].text;
// op3.innerText = Questions[id].a[2].text;
// op4.innerText = Questions[id].a[3].text;

// // Provide the true or false value to the options
// op1.value = Questions[id].a[0].isCorrect;
// op2.value = Questions[id].a[1].isCorrect;
// op3.value = Questions[id].a[2].isCorrect;
// op4.value = Questions[id].a[3].isCorrect;

// var selected = "";

// // Show selection for op1
// op1.addEventListener("click", () => {
// op1.style.backgroundColor = "lightgoldenrodyellow";
// op2.style.backgroundColor = "lightskyblue";
// op3.style.backgroundColor = "lightskyblue";
// op4.style.backgroundColor = "lightskyblue";
// selected = op1.value;
// })

// // Show selection for op2
// op2.addEventListener("click", () => {
// op1.style.backgroundColor = "lightskyblue";
// op2.style.backgroundColor = "lightgoldenrodyellow";
// op3.style.backgroundColor = "lightskyblue";
// op4.style.backgroundColor = "lightskyblue";
// selected = op2.value;
// })

// // Show selection for op3
// op3.addEventListener("click", () => {
// op1.style.backgroundColor = "lightskyblue";
// op2.style.backgroundColor = "lightskyblue";
// op3.style.backgroundColor = "lightgoldenrodyellow";
// op4.style.backgroundColor = "lightskyblue";
// selected = op3.value;
// })

// // Show selection for op4
// op4.addEventListener("click", () => {
// op1.style.backgroundColor = "lightskyblue";
// op2.style.backgroundColor = "lightskyblue";
// op3.style.backgroundColor = "lightskyblue";
// op4.style.backgroundColor = "lightgoldenrodyellow";
// selected = op4.value;
// })

// // Grab evaluate button
// var evaluate = document.getElementsByClassName("evaluate");

// // Evaluate method
// evaluate[0].addEventListener("click", () => {
// 	if (selected == "true") {
// 		result[0].innerHTML = "True";
// 		result[0].style.color = "green";
// 	} else {
// 		result[0].innerHTML = "False";
// 		result[0].style.color = "red";
// 	}
// 	})
// }

// if (start) {
// 	iterate("0");
// }



// // Next button and method
// var next = document.getElementsByClassName('next')[0];
// var id = 0;

// next.addEventListener("click", () => {
// 	start = false;
// 	if (id < 2) {
// 		id++;
// 		iterate(id);
// 		console.log(id);
// 	}

// })
// //add conditionals to give "try again" message for wrong questions, "correct" message and next question for correct questions:
// //add click event listener for selecting an answer

// //add conditionals to display "correct" or "try again" message

// //set the question for loop to display in the div container

// //add a timer penalty

// //add a score-keeper that records time

// //display score at end of loop; select last item in aray with nameOfArray.length-1

// //add option to enter initials

// //add form for user to enter initials

// //add table to display high scores 

// //add button to retake quiz

// //add eventlistener at end of quiz to start again

// //