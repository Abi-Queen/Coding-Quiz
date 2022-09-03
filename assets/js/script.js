//create an array of questions and answers
var Questions = [{
    id: 0,
    q: "Where is the correct place to insert a JavaScript?",
    a: [{ text: "The <head> section", isCorrect: false },
        { text: "Both the <head> section and the <body> section", isCorrect: false },
        { text: "The beginning of the <body> section", isCorrect: false },
        { text: "The end of the <body> section", isCorrect: true }
    ]
},
{
    id: 1,
    q: "What is the correct syntax for referring to an external script called 'file.js'?",
    a: [{ text: "<script href='file.js'>", isCorrect: false, isSelected: false },
        { text: "<script name='file.js'>", isCorrect: false },
        { text: "<script src='file.js'>", isCorrect: true },
        { text: "<script al='file.js'>", isCorrect: false }
    ]

},
{
    id: 2,
    q: "How do you write 'Hello World' in an alert box?",
    a: [{ text: "alert('Hello World')", isCorrect: true },
        { text: "alertBox('Hello World')", isCorrect: false },
        { text: "msg('Hello World')", isCorrect: false },
        { text: "msgBox('Hello World')", isCorrect: false }
    ]

},
{
    id: 3,
    q: "How many columns are in Bootstrap?",
    a: [{ text: "unlimited", isCorrect: false },
        { text: "12", isCorrect: true},
        { text: "1", isCorrect: false},
        { text: "6", isCorrect: false}
    ]
},
{
    id: 4,
    q: "Which of the following is a Third-Party API?",
    a: [{ text: "DOM", isCorrect: false },
        { text: "Flexbox", isCorrect: false },
        { text: "JavaScript", isCorrect: false},
        { text: "jQuery", isCorrect: true}
    ]
},
{
    id: 5,
    q: "Your score is . Enter your initials to save your score: ",
    a: [{text: "Save", isCorrect: true }]
}
]

// Quiz function
document.form_main.start-btn.onclick = function()
    {for(vari=0; i<Questions.length; 1++) {
    quiz(Questions[i]);
    };
//end if Questions.length-1
};

// End quiz
query-enterinitdiv



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