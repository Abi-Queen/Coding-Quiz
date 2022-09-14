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
    q: "How do you write 'Hello World' in an alert box?",
    o: [{ text: "alert('Hello World')"},
        { text: "alertBox('Hello World')"},
        { text: "msg('Hello World')"},
        { text: "msgBox('Hello World')"}
    ],
    a: "alert('Hello World')"
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
    o: [{ text: "let and var", key: false },
        { text: "val", key: false },
        { text: "arrow functions", key: false},
        { text: "const", key: true}
    ]
},
{
    q: "=> replaces",
    o: [{ text: "DOM"},
        { text: "function"},
        { text: "HTML tags"},
        { text: "const"}
    ],
    a: "function"
},
{
    q: "Which CSS attribute can be used to created rounded corners?",
    O: [{ text: "border-radius", key: true },
        { text: "radius", key: false },
        { text: "gradient", key: false},
        { text: "d-flex", key: false}
    ]
},
{
    id: 10,
    q: ".slice()",
    O: [{ text: "changes the original array", key: false },
        { text: "leaves the original array intact", key: true },
        { text: "includes all indices", key: false},
        { text: "captures 0 index", key: true}
    ]
},
{
    id: 11,
    q: "Global variables:",
    O: [{ text: "cannot be ready by Node.js", key: false },
        { text: "are declared inside a code block", key: false },
        { text: "belong to the page", key: true},
        { text: "cannot contain string", key: false}
    ]
}
];

var time = 180;
var counter = 0;
var timerId;
var score = 0; 

$("#questions").hide();

//timer function to count down
function timer(){
    timerId = setInterval(countdown, 1000);
        function countdown() {
            if (time === -1) {
                clearTimeout(timerId);
               /* resultCount();
                $("#ques_div").hide();
                $("#res_div").show(); */
            }
            else{
                $("#hour").text(time);
                time--;
            }
        }
}

// function to check if clicked answer is correct answer
function checkAnswer(){
    if($(this).attr("data-answer") === questions[counter].a)
    {
        alert("Correct");
        //add point to score
        counter++;
        //add if to end quiz if it's the last question in the array; if end start new function end() to create var savedScore
        showQuestion();
    }
    //add else for wrong asnwer
    //else: decrement time by 10 sec if the answer is wrong
    //else: add 0 points to score
    //else: increment counter by 1 and add IF condition to see if it's a last question

}

//function to show next question
function showQuestion(){
$("#questions").empty();
 var h3 = $("<h3>");
 h3.text(questions[counter].q);
 $("#questions").append(h3);

 for(var i=0; i<questions[counter].o.length;i++){
    var btn = $("<button>");
    btn.text(questions[counter].o[i].text);
    btn.attr("data-answer", questions[counter].o[i].text);
    btn.click(checkAnswer);
    $("#questions").append(btn);

 }
}

//show question on start button, hide start div and show questions div
$("#start-btn").on("click", function(){
    $("#start").hide();
    $("#questions").show();
    timer();
    showQuestion();
})

// if answered last question, hide questions div and show end div

//prompt for initials
//Accept user input for initials, display with score (in ol?) in 'scores' html by id
$('#initials').click(function () {
    var initials = $('input[name=initials]').val(); //sets var as form input
    $('#initialsSaved').innerText = initials; //sets initials entered in score page
    $('input[name=initials]').val(''); //re-sets form on end page to empty string
});

//Save score and initials to local storage
localStorage.setItem("initials", savedScore)