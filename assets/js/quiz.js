//Array of questions and options
var questions = [
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
    q: "Which of the following locks a variable's definition so that it can't change over time?",
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

var time = 60;
var counter = 0;
var timerId; 

$('#questions').hide();
$('#end').hide();
$('#scores').hide();
$('#scores-list').on('click', function(){
    $('#start').hide();
    $('#end').hide();
    $('#questions').hide();
    $('#scores').show();
});

//timer function to count down (time is score), display time
function timer(){
    timerId = setInterval(countdown, 1000);
        function countdown() {
            if (time === -1) {
                clearTimeout(timerId);
            }
            else{
                $('#hour').text(time);
                time--;
                localStorage.setItem('time',time);
            }
        };
};

//function to show next question
function showQuestion(){
    console.log(counter);
    if (counter < 7)
    {
    $('#questions').empty();
     var h3 = $('<h3>');
    h3.text(questions[counter].q);
     $('#questions').append(h3);

     for(var i = 0; i < questions[counter].o.length; i++){
        var btn = $('<button>');
        btn.text(questions[counter].o[i].text);
        btn.attr('data-answer', questions[counter].o[i].text);
        btn.click(checkAnswer);
        $('#questions').append(btn);
        $('button').addClass('btn-block');
     }
    } else 
    {
        end();
    }
};
    
//on start button, hide start/end, scores divs and show questions div
$('#start-btn').on('click', function(){
    $('#start').hide();
    $('#end').hide();
    $('#scores').hide();
    $('#questions').show();
    timer();
    showQuestion();
});

// function to check if clicked answer is correct answer
function checkAnswer(){
    //if correct answer go to next question
    if($(this).attr('data-answer') === questions[counter].a)
    {
        console.log('correct');
        counter++;
    }
    //if wrong answer decrement timer by 10 seconds
    else if ($(this).attr('data-answer') != questions[counter].a) {
        console.log('wrong answer');
        time = time-10;
    };
    showQuestion();
}; 

//function to end quiz on last question
function end(){
        console.log('the end');
        // show end div and hide questions div
        function showEnd() {
        $('#questions').hide();
        $('#end').show();
        };
        clearTimeout(timerId);  
        showEnd();
};

//Accept user input for initials, save with score in localStorage, display in for loop on scores page
$('#submit-btn').click(function () {
    var initials = $('input[name=initials]').val();
    localStorage.setItem('initials', initials);
    var data = JSON.parse(localStorage.getItem("data")) || [];
    data.push({
        score: time,
        initials: initials
    })
    localStorage.setItem('data', JSON.stringify(data));
    displayScores(data); 
    $('#end').hide();
    $('#scores').show();
});

const displayScores = function(data) {
    for(var i=0; i<data.length; i++)
    {
        var li = $('<li>');
        $('li').addClass('.scores-table');
        $('li').text(data[i].initials + ": " + data[i].score);
        $('#high-scores').append(li);
    }
};

displayScores();

$('.resetBtn').click(function() {
    var initials = $('input[name=initials]').val();
    $('.scores-table').val('');
    initials = '';
    score = '';
    localStorage.setItem('data', null);
    var initials = $('input[name=initials]').val();
    $('li').text('');
});

$('.backBtn').click(function() {
    $('#scores').hide();
    $('#start').show();
    location.reload();
});

