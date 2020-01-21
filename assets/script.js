var questions = [
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    choices: [
      'posible solution',
      'posible solution',
      'posible solution',
      'posible solution'
    ],
    answer: 'to be determined'
  },
  {
    title: 'Question 2',
    choices: [
      'posible solution',
      'posible solution',
      'posible solution',
      'posible solution'
    ],
    answer: 'to be determined'
  },
  {
    title: 'Question 3',
    choices: [
      'posible solution',
      'posible solution',
      'posible solution',
      'posible solution'
    ],
    answer: 'to be determined'
  },
  {
    title: 'Question 4',
    choices: [
      'posible solution',
      'posible solution',
      'posible solution',
      'posible solution'
    ],
    answer: 'to be determined'
  },
]

// handle start page
var startPage = document.getElementById('start-page');
var startButton = document.getElementById('start-button');

startButton.addEventListener('click', function() {
  // hide start page
  startPage.style.display = 'none';

  // show questions
  handleQuestion();
})


// handle question page
var questionPage = document.getElementById('question-page');
var questionTitle = document.getElementById('question-title');
var questionsContainer = document.getElementById('questions-container');

function handleQuestion() {
  questionPage.style.display = 'block';

  questionTitle.innerText = questions[0].title;

  var choices = ['posible solution', 'posible solution', 'posible solution', 'posible solution'];

  choices.forEach(generateListItem);
}

function generateListItem(item, index) {
  var li = document.createElement('li');
  // index = index+1;
  li.innerText = (index+1)+'. '+item;

  questionsContainer.appendChild(li);
}

/*
get the li to be width of the text inside not the width of the parent

generate the list using the values of the array

when the answer is clicked, show next question

if the answer correct display 'correct' message, if wrong display 'wrong' messages
*/




























// /*
//
// 1. generate template using html, css
// 2. get information from question.js file and display it on our html
// 3. validate user response and display if answer was right or wrong
// 4. keep track of correct responses
// 5. set timer when quiz begins and if the timer is done before the user answers all questions, user looses
// 6. save scores on client side storage and display it to the user at the end of each game and in 'view highscore page'
//
// */
//
// var questions = [
//   {
//     title: 'first question',
//     choices: ['1string', '1string','1string', '1string'],
//     answer: ''
//   },
//   {
//     title: 'second question',
//     choices: ['2string', '2string','2string', '2string'],
//     answer: ''
//   },
//   {
//     title: 'third question',
//     choices: ['3string', '3string','3string', '3string'],
//     answer: ''
//   },
//   {
//     title: 'fourth question',
//     choices: ['4string', '4string','4string', '4string'],
//     answer: ''
//   },
// ];
//
// // start page
// var title = document.getElementById('title');
// var rules = document.getElementById('rules');
//
// // question page
// var questionTitle = document.getElementById('questionTitle');
// var orderedResponses = document.getElementById('orderedResponses');
//
// var startButton = document.createElement('button');
//
// function startPage() {
//   title.innerText = 'Coding Quiz Challenge';
//   rules.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
//
//   startButton.innerText = 'Start Now';
// }
//
// startPage();
//
// var start = false;
// startButton.addEventListener('click', startQuiz);
//
//
// function startQuiz() {
//   // delete all text from start page
//   title.innerText = '';
//   rules.innerText = '';
//   startBttn.innerText = '';
//
//   // want to add all the info in an object and send all the information at the begining of the app
//
//   questionTitle.innerText = 'first question';
//   orderedResponses.innerHTML = 'allAnswers';
// }
//
//
//
//
// // // h2 tag
// // var questionTag = document.getElementById('question');
// //
// // questionTag.innerText = questions[0].title;
// //
// // for (var i=0; i < questions.length; i++) {
// //   questionTag.innerText = questions[i].title;
// //
// //   var ol = document.getElementById('allAnswers');
// //   var choices = questions[i].choices;
// //
// //   choices.forEach(item => {
// //     var li = document.createElement('li');
// //     li.innerText = item;
// //     console.log(li);
// //     // ol.appendChild(li);
// //   });
// //
// //   // console.log(questions[i].choices);
// //   // generateListItem(i);
// // }
// //
// //
// // function generateListItem(index) {
// //   var li = document.createElement('li');
// //   var ol = document.getElementById('allAnswers');
// //
// //   for (var i = 0; i < questions[index].choices.length; i++) {
// //
// //     // li.innerText = questions[index].choices[i];
// //     //
// //     // ol.appendChild(li);
// //   }
// // }
//
// // // orderd list elemnt
// // var orderedList = document.getElementById('allAnswers');
// // // create li tag
// // var li = document.createElement('li');
// //
// // // add text to each li element with the values inside the choices array
// // for (var c = 0; c < questions.choices.length; c++) {
// //   li.innerText = questions[i].choices[c];
// // }
// // orderedList.appendChild()
