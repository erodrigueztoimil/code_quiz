var startButton = document.getElementById('start-button');
var questionPage = document.getElementById('question-page');
var highscoresPage = document.getElementById('highscores-page');
var viewHighscoresButton = document.getElementById('highscores-page');

var currentQuestion = 0;
var currentUser = '';

// when the start button is clicked, start the quiz
startButton.addEventListener('click', function() {
  var startPage = document.getElementById('start-page');
  startPage.style.display = 'none'; // hide start page

  startQuiz();
})


function startQuiz() {
  handleUserName();
}

// ask the user for its name
function handleUserName() {
  var userNamePage = document.getElementById('name-page');
  userNamePage.style.display = 'flex';

  userNamePage.addEventListener('keypress', function(event) {
    if (event.key == 'Enter') {
      if (event.target.value) {
        currentUser = event.target.value; // save current user
        userNamePage.style.display = 'none'; // hide page

        console.log(currentUser);
        renderQuestion(); // start quiz
      }
    }
  })
}


// populate the page with each question content corresponding the current question index
function renderQuestion() {
  var question = questions[currentQuestion];

  questionPage.style.display = 'block'; // show question page

  var h1 = document.getElementById('question');
  h1.innerText = question.title; // add value to the title

  var ul = document.getElementById('responses');
  ul.innerHTML = ''; // delete all the li

  var responses = question.choices;
  responses.forEach((text, index) => {
    var li = document.createElement('li');

    li.innerText = text; // add some text to the li
    ul.appendChild(li);
  });
}

// when li is clicked go to next question
questionPage.addEventListener('click', function(event) {
  if (event.target.matches('li')) {
    var answer = questions[currentQuestion].answer;
    var lastQuestion = questions.length-1;

    if (currentQuestion < lastQuestion) {
      var myAlert = document.getElementById('alert');

      // if the questions matches the answer then alert correct else wrong
      if (event.target.innerText == answer) {
        // myAlert.style.display = 'block';
        // myAlert.innerText = 'Correct';
        console.log('right');


      }

      else {
        // myAlert.style.display = 'block';
        // myAlert.innerText = 'Wrong';
        console.log('wrong');
      }

      currentQuestion++ // next question
      renderQuestion();
    }

    else if (lastQuestion) {
      if (event.target.innerText == answer) {
        // myAlert.style.display = 'block';
        // myAlert.innerText = 'Correct';
        console.log('right');
      }

      else {
        // myAlert.style.display = 'block';
        // myAlert.innerText = 'Wrong';
        console.log('wrong');
      }
    }

    else {
      questionPage.style.display = 'none'; // hide questions
      highscoresPage.style.display = 'block'; // show highscores
    }
  }
})
