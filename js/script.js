$(document).ready(function() {
  var currentQuestion = 0;
  var currentUser = '';
  var score = 0;
  var quizDone = false; // tells the timer if the user is done


  // when the start button is clicked, start the quiz
  $('#start-button').click(function() {
    $('#start-page').hide(); // hide start page

    startQuiz();
  })

  // on goAgain click, start quiz again
  $('#replay-button').click(function() {
    $('#highscores-page').hide(); // hide scores

    // reset all values
    currentQuestion = 0;
    currentUser = '';
    score = 0;
    quizDone = false;

    startQuiz(); // restart quiz
  })

  $('#home-button').click(function() {
    $('#highscores-page').hide(); // hide scores
    $('#start-page').show(); // show start page

    // reset all values
    currentQuestion = 0;
    currentUser = '';
    score = 0;
    quizDone = false;
  })


  function startQuiz() {
    handleName();
  }

  // ask the user for its name
  function handleName() {
    $('#name-page').css('display', 'flex');

    $('#name-page').on('keypress', function(event) {
      if (event.which == 13) { // 13 = enter key
        if (event.target.value) {
          currentUser = event.target.value; // save current user
          $('#name-page').hide(); // hide page

          renderQuestion(); // start quiz
          setTimer();
        }
      }
    })
  }


  // generate questuion
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


  // on li click, go to next question or display score
  $('#question-page').click(function() {
    if (event.target.matches('li')) {
      var lastQuestion = questions.length-1;

      if (currentQuestion == lastQuestion) {
        handleQuestion(event.target.innerText);

        quizDone = true; // the user is done
        $('#question-page').hide(); // hide questions
        $('#highscores-page').show(); // show scores

        handleScores();
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
      score++
    }

    else {
      showAlert('Wrong', 400);
    }
  }


  function setTimer() {
    var sec = 10;
    var interval = setInterval(function functionName() {
      sec--
      $('#timer').html(sec);

      if (sec == 0) {
        clearInterval(interval);
        showAlert('Time is over!', 1200, 'red');

        $('#question-page').hide(); // hide questions
        $('#highscores-page').show(); // show scores
      }

      if (quizDone) {
        clearInterval(interval);
      }
    }, 1000)
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

  var records = [];
  var record = {};


  function handleScores() {
    record.user = currentUser;
    record.result = score;

    console.log(record);

    $('#scores-list').append("<li><b>"+record.user+"</b> - "+record.result+"/4</li>");
  }

  // save the current user score

  // localStorage.setItem(JSON.stringify())
})
