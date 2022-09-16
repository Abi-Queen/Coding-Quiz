// Global variables

// HOW to dynamically create the end, start, scores html, and show and hide? ???

//Create an array of questions and options
var questions = [{
    q: "Where is the correct place to insert a JavaScript?",
    o: [{ text: "The <head> section"},
        { text: "Both the <head> section and the <body> section"},
        { text: "The beginning of the <body> section"},
        { text: "The end of the <body> section"}
    ],
    a: "The end of the <body> section"
},
{
    q: "What is the correct syntax for referring to an external script called 'file.js'?",
    o: [{ text: "<script href='file.js'>"},
        { text: "<script name='file.js'>"},
        { text: "<script src='file.js'>"},
        { text: "<script al='file.js'>"}
    ],
    a: "<script src='file.js'>"
},
{
    q: "How many columns are in a Bootstrap grid row?",
    o: [{ text: "unlimited"},
        { text: "12"},
        { text: "1"},
        { text: "6"}
    ],
    a: "12"
},
{
    q: "Which of the following is a Third-Party API?",
    o: [{ text: "DOM"},
        { text: "JSTOR"},
        { text: "JavaScript"},
        { text: "jQuery"}
    ],
    a: "jQuery"
},
{
    q: "To save array items to local storage, use:",
    o: [{ text: "setInterval"},
        { text: "Bootstrap"},
        { text: "JSON.stringify"},
        { text: "getElementById"}
    ],
    a: "JSON.stringify"
},
{
    q: "Which of the following is function-scoped, NOT block-scoped?",
    o: [{ text: "var"},
        { text: "const"},
        { text: "let"},
        { text: ".forEach"}
    ],
    a: "var"
},
{
    q: "Which of the following locks a variable's definition so that it can't change over tiem?",
    o: [{ text: "let and var"},
        { text: "val"},
        { text: "arrow functions"},
        { text: "const"}
    ],
    a: "const"
},
{
    q: "Which CSS attribute can be used to created rounded corners?",
    o: [{ text: "border-radius"},
        { text: "radius"},
        { text: "gradient"},
        { text: "d-flex"}
    ],
    a: "border-radius"
},
{
    q: ".slice()",
    o: [{ text: "changes the original array"},
        { text: "leaves the original array intact"},
        { text: "includes all indices"},
        { text: "captures 0 index"}
    ],
    a: "leaves the original array intact"
}
];

var time = 180;
var counter = 0;
var timerId;

$('#questions').hide();
$('#end').hide();
$('#scores').hide();

//timer function to count down (time is score)
function timer(){
    timerId = setInterval(countdown, 1000);
        function countdown() {
            if (time === -1) {
                clearTimeout(timerId);
            }
            else{
                $("#hour").text(time);
                time--;
                localStorage.setItem("time",time);
            }
        };
};

//on start button, hide start/end divs and show questions div
$('#start-btn').on('click', function(){
    $('#start').hide();
    $('#end').hide();
    $('#questions').show();
    timer();
    showQuestion();
});

//function to show next question
function showQuestion(){
    $('#options').empty(); 
    var h3 = $('#question-text');
    h3.text(questions[counter].q);
     for(var i=0; i<questions[counter].o.length;i++){
        var btn = $("<button>");
        btn.text(questions[counter].o[i].text);
        btn.attr("data-answer", questions[counter].o[i].text);
        btn.click(checkAnswer);
        $("#options").append(btn);
     }
};

// function to check if clicked answer is correct answer
function checkAnswer(){
    //if correct answer go to next question
    if($(this).attr("data-answer") === questions[counter].a)
    {
        console.log("correct");
        counter++;
        showQuestion(); 
    }
    //if wrong answer decrement timer by 10 seconds
    else if ($(this).attr("data-answer") != questions[counter].a) {
        console.log("wrong answer");
        time-10;
    };
}; 

//function to end quiz on last answered question
function end(){
    if(counter === (questions.length)-1) {
        console.log("string");
        // show end div and hide questions div
        function showEnd() {
        $('#questions').hide();
        $('#end').show();
        // if end, stop timer
        clearTimeout(timerId); 
        // if end, create var savedScore (timer) and save to localStorage
        function saveScore() {
            var savedScore = $('#hour').innerText; 
            //will this capture the time at ending? (above)?
            localStorage.setItem("score", savedScore);
        };
    };
    };
};
end();
//or does this go above with start function?

//prompt for initials
//Accept user input for initials, display with score (in ol?) in 'scores' html by id
$('#initials').click(function () {
    var initials = $('input[name=initials]').val(); //sets var as form input
    $('#initialsSaved').innerText = initials; //sets initials entered in score page
    $('input[name=initials]').val(''); //re-sets form on end page to empty string
});

//Save score and initials to local storage
// localStorage.setItem("initials", savedScore)