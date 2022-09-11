// Global variables


//Create an array of questions and options
var questions = [{
    id: 0,
    qu: "Where is the correct place to insert a JavaScript?",
    op: [{ text: "The <head> section", key: false },
        { text: "Both the <head> section and the <body> section", key: false },
        { text: "The beginning of the <body> section", key: false },
        { text: "The end of the <body> section", key: true }
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
},
{
    id: 5,
    q: "To save array items to local storage, use:",
    a: [{ text: "setInterval", key: false },
        { text: "Bootstrap", key: false },
        { text: "JSON.stringify", key: true},
        { text: "getElementById", key: false}
    ]
}
{
    id: 6,
    q: "Which of the following is function-scoped, NOT block-scoped?",
    a: [{ text: "var", key: true },
        { text: "const", key: false },
        { text: "let", key: false},
        { text: ".forEach", key: false}
    ]
},
{
    id: 7,
    q: "Which of the following locks a variable's definition so that it can't change over tiem?",
    a: [{ text: "let and var", key: false },
        { text: "val", key: false },
        { text: "arrow functions", key: false},
        { text: "const", key: true}
    ]
},
{
    id: 8,
    q: "=> replaces",
    a: [{ text: "DOM", key: false },
        { text: "function", key: true },
        { text: "HTML tags", key: false},
        { text: "const", key: false}
    ]
},
{
    id: 9,
    q: "Which CSS attribute can be used to created rounded corners?",
    a: [{ text: "border-radius", key: true },
        { text: "radius", key: false },
        { text: "gradient", key: false},
        { text: "d-flex", key: false}
    ]
},
{
    id: 10,
    q: ".slice()",
    a: [{ text: "changes the original array", key: false },
        { text: "leaves the original array intact", key: true },
        { text: "includes all indices", key: false},
        { text: "captures 0 index", key: true}
    ]
},
{
    id: 11,
    q: "Global variables:",
    a: [{ text: "cannot be ready by Node.js", key: false },
        { text: "are declared inside a code block", key: false },
        { text: "belong to the page", key: true},
        { text: "cannot contain string", key: false}
    ]
}
];

//Function to iterate through questions, on startBtn, display question in html by id
$('#start-btn').on("click", function(){
    startQuiz = () => {
        var question = questions.forEach(displayQuestion(questions, 0))
        var displayQuestion = $('#question').innerText=question.text
    };
});

//add question counter
var questionCounter = function(


//Display options 1-4 in html by ID


//Timer function: start on start-btn, display in header, end when 10th question answered, save to localStorage
let hour = 0;
let minute = 0;
let second = 0;

let cron;

$('#start-btn').onclick = () => startTimer();

//save timer to localStorage when question counter = 10, save timer to localStorage, then reset
$('#questioncounter=0') = () => pause();
var savedScore = localStorage.setItem("timer at 10th question")

$('#submit-btn').onclick = () => reset();

function startTimer() {
    pause();
    cron = setInterval(() => {timer(); }, 1000);
};

function pause() {
    clearInterval(cron);
};

function reset() {
    hour = 0;
    minute = 0;
    second = 0;
    millisecond = 0;
    $('#hour').innerText = '0';
    $('#minute').innerText = '0';
    $('#second').innerText = '0';
};

function timer() {
    if ((millisecond += 10) == 1000) {
        millisecond = 0;
        second++;
    }
    if (second == 60) {
        second = 0;
        minute++;
    }
    if (minute == 60) {
        minute = 0;
        hour++;
    }
    $('#hour').innerText = returnData(hour);
    $('#minute').innerText = returnData(minute);
    $('#second').innerText = returnData(second);
}


//Save score: display score in 'end' html by ID
$('#display-score').innerText = savedScore; 

//Accept user input for initials, display with score in ol in 'scores' html by id
$('#initials').click(function () {
    var initials = $('input[name=initials]').val(); //sets var as form input
    $('#initialsSaved').innerText = initials; //sets initials entered in score page
    $('input[name=initials]').val(''); //re-sets form on end page to empty string
});

//Save score and initials to local storage
localStorage.setItem("initials", savedScore)

//If clicked option has value "true", display new question

//If clicked option has value "false", deduct 10 seconds from timer
