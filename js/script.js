$(document).ready(function() {
  var currentQuestion = 0;
  var currentUser = '';
  var score = 0;

  // when the start button is clicked, start the quiz
  $('#start-button').click(function() {
    $('#start-page').hide(); // hide start page

    startQuiz();
  })


  function startQuiz() {
    handleUserName();
  }

  // ask the user for its name
  function handleUserName() {
    $('#name-page').css('display', 'flex');

    $('#name-page').on('keypress', function(event) {
      if (event.key == 'Enter') {
        if (event.target.value) {
          currentUser = event.target.value; // save current user
          $('#name-page').hide(); // hide page

          renderQuestion(); // start quiz
        }
      }
    })
  }



  // populate the page with each question content corresponding the current question index
  function renderQuestion() {
    var question = questions[currentQuestion];

    $('#question-page').show() // show question page

    $('#question').text(question.title) // add value to the title

    $('#responses').html(''); // delete all the li

    var responses = question.choices;
    responses.forEach((text, index) => {
      var li = document.createElement('li');

      li.innerText = text; // add some text to the li
      $('#responses').append(li);
    });
  }

  // on li click, go to next question or display my score
  $('#question-page').click(function() {
    if (event.target.matches('li')) {
      var lastQuestion = questions.length-1;

      if (currentQuestion == lastQuestion) {
        handleQuestion(event.target.innerText);

        $('#question-page').hide(); // hide questions
        $('#highscores-page').show(); // show scores
      }

      else {
        handleQuestion(event.target.innerText)

        currentQuestion++ // next question
        renderQuestion();
      }
    }
  })


  // handles if user selection is right or wrong
  function handleQuestion(selection) {
    var answer = questions[currentQuestion].answer;

    if (selection == answer) {
      showAlert('Right', 400);
    }

    else {
      showAlert('Wrong', 400);
    }
  }


  function showAlert(text, time, bcolor) {
    $('#alert').show();
    $('#alert').text(text);

    // timer done show background in red
    $('#alert').css('background-color', bcolor);

    setTimeout(function() {
      $('#alert').hide();
    }, time);
  }
})
