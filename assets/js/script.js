
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
$(".startBtn").on("click", function(){
    startQuiz = () => {
        questionCounter = 0;
        var question = getNewQuestion(questions,0);

        // Quiz functionality 2: display questions and options
        displayQuestion = (question) => {
        $('#question').innerText=question.text
    
    