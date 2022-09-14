// Global variables


//Create an array of questions and options
var questions = [{
    id: 0,
    q: "Where is the correct place to insert a JavaScript?",
    o: [{ text: "The <head> section", key: false },
        { text: "Both the <head> section and the <body> section", key: false },
        { text: "The beginning of the <body> section", key: false },
        { text: "The end of the <body> section", key: true }
    ],
    a: "The end of the <body> section"
},
{
    id: 1,
    q: "What is the correct syntax for referring to an external script called 'file.js'?",
    o: [{ text: "<script href='file.js'>", key: false },
        { text: "<script name='file.js'>", key: false },
        { text: "<script src='file.js'>", key: true },
        { text: "<script al='file.js'>", key: false }
    ],
    a: "<script src='file.js'>"

},
{
    id: 2,
    q: "How do you write 'Hello World' in an alert box?",
    o: [{ text: "alert('Hello World')", key: true },
        { text: "alertBox('Hello World')", key: false },
        { text: "msg('Hello World')", key: false },
        { text: "msgBox('Hello World')", key: false }
    ]

},
{
    id: 3,
    q: "How many columns are in a Bootstrap grid row?",
    o: [{ text: "unlimited", key: false },
        { text: "12", key: true},
        { text: "1", key: false},
        { text: "6", key: false}
    ]
},
{
    id: 4,
    q: "Which of the following is a Third-Party API?",
    o: [{ text: "DOM", key: false },
        { text: "JSTOR", key: false },
        { text: "JavaScript", key: false},
        { text: "jQuery", key: true}
    ]
},
{
    id: 5,
    q: "To save array items to local storage, use:",
    o: [{ text: "setInterval", key: false },
        { text: "Bootstrap", key: false },
        { text: "JSON.stringify", key: true},
        { text: "getElementById", key: false}
    ]
},
{
    id: 6,
    q: "Which of the following is function-scoped, NOT block-scoped?",
    o: [{ text: "var", key: true },
        { text: "const", key: false },
        { text: "let", key: false},
        { text: ".forEach", key: false}
    ]
},
{
    id: 7,
    q: "Which of the following locks a variable's definition so that it can't change over tiem?",
    o: [{ text: "let and var", key: false },
        { text: "val", key: false },
        { text: "arrow functions", key: false},
        { text: "const", key: true}
    ]
},
{
    id: 8,
    q: "=> replaces",
    o: [{ text: "DOM", key: false },
        { text: "function", key: true },
        { text: "HTML tags", key: false},
        { text: "const", key: false}
    ]
},
{
    id: 9,
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
        //add if to end quiz if it's the last question in the array
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