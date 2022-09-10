
//Create an array of questions and answers
var questions = [{
    id: 0,
    qu: "Where is the correct place to insert a JavaScript?",
    op: [{ text: "The <head> section", isCorrect: false },
        { text: "Both the <head> section and the <body> section", isCorrect: false },
        { text: "The beginning of the <body> section", isCorrect: false },
        { text: "The end of the <body> section", isCorrect: true }
    ]

},
{
    id: 1,
    q: "What is the correct syntax for referring to an external script called 'file.js'?",
    a: [{ text: "<script href='file.js'>", key: false },
        { text: "<script name='file.js'>", key: false },
        { text: "<script src='file.js'>", key: true },
        { text: "<script al='file.js'>", key: false }
    ]

},
{
    id: 2,
    q: "How do you write 'Hello World' in an alert box?",
    a: [{ text: "alert('Hello World')", key: true },
        { text: "alertBox('Hello World')", key: false },
        { text: "msg('Hello World')", key: false },
        { text: "msgBox('Hello World')", key: false }
    ]

},
{
    id: 3,
    q: "How many columns are in a Bootstrap grid row?",
    a: [{ text: "unlimited", key: false },
        { text: "12", key: true},
        { text: "1", key: false},
        { text: "6", key: false}
    ]
},
{
    id: 4,
    q: "Which of the following is a Third-Party API?",
    a: [{ text: "DOM", key: false },
        { text: "JSTOR", key: false },
        { text: "JavaScript", key: false},
        { text: "jQuery", key: true}
    ]
}
]

// Quiz functionality 1: start
//startbtn startQuiz
startQuiz = () => {
    questionCounter = 0;
    var question = getNewQuestion(questions,0);
    displayQuestion(question);
}

// Quiz functionality 2: display questions and options
displayQuestion = (question) => {
    $('#question').innerText=question.text
    document.getElementById('display-question').innerText = question.question
    document.querySelector(".option-container:nth-child(1)").innerText = question.option1
    document.querySelector(".option-container:nth-child(2)").innerText = question.option2
    document.querySelector(".option-container:nth-child(3)").innerText = question.option3
    document.querySelector(".option-container:nth-child(4)").innerText = question.option4
    // answer: 4
    // option1: "The <head> section"
    // option2: "Both the <head> section and the <body> section"
    // option3: "The beginning of the <body> section"
    // option4: "The end of the <body> section"
    // question: "Where is the correct place to insert a JavaScript?"
    // div:nth-child(2)
}

getNewQuestion = (questions, position) => {
    var question = questions[position]
    return question;
//     console.log(availableQuestions)
//     if(availableQuestions.length === 0 || questionCounter > maxQuestions){
//         // display end page
//         //return window.location.assign("/end.html"); 
//     }
//     questionCounter++; 
//     var questionIndex = Math.floor(Math.random() + availableQuestions.length);
//     currentQuestion = availableQuestions[questionIndex];
//     question.innerText = currentQuestion.question;

//     options.forEach(option => {
//         const number = option.dataset['number'];
//         option.innerText = currentQuestion['option' + number];
//     });
//     //omit question we just used from current array
//     availableQuestions.splice(questionIndex, 1);
};

//check answers to see if they are correct by inspecting element of clicked option
// options.forEach(option => {
//     option.addEventListener('click', e => {
//         const selectedOption = e.target;
//         const selectedAnswer = selectedOption.dataset['number'];

//         const classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

//         //add points to score for correct answer
//         if (classToApply === "correct") {
//             incrementScore(correctPoints);
//         }

//     selectedOption.parentElement.classList.add(classToApply);

//     setTimeout( () => {
//         selectedOption.parentElement.classList.remove(classToApply);
//         getNewQuestion();
//     }, 1000);
//     });
// });

document.querySelector(".options-container").onclick = (event) => {
    var clickedElement = event.target;
    if(clickedElement.matches('.option-container') && clickedElement.getAttribute("data-option")=="4")
    /** TODO. Change "1" to question.answer */
        alert("Correct!")
    else
        alert("Incorrect!")
}

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

