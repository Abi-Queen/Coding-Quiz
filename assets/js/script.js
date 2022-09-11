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
}
];

//Function to iterate through questions, on startBtn, display question in html by id
$('#start-btn').on("click", function(){
    startQuiz = () => {
        var question = questions.forEach(displayQuestion(questions, 0))
        var displayQuestion = $('#question').innerText=question.text
    };
});


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
