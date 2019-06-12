(function() {
    var questions = [{
      question: "What is 2*5?",
      choices: [2, 5, 10, 15, 20],
      correctAnswer: 2
    }, {
      question: "What is 3*6?",
      choices: [3, 6, 9, 12, 18],
      correctAnswer: 4
    }, {
      question: "What is 8*9?",
      choices: [72, 99, 108, 134, 156],
      correctAnswer: 0
    }, {
      question: "What is 1*7?",
      choices: [4, 5, 6, 7, 8],
      correctAnswer: 3
    }, {
      question: "What is 8*8?",
      choices: [20, 30, 40, 50, 64],
      correctAnswer: 4
    }];
    
    var questionCounter = 0; //Tracks question number
    var selections = []; //Array containing user choices
    var quiz = $('#quiz'); //Quiz div object
    
    // Display initial question
    displayNext();

    // Click handler for the 'next' button
    $('#next').on('click', function (e) {
    e.preventDefault();
  
    // Suspend click listener during fade animation
    if(quiz.is(':animated')) {        
    return false;
    }
    choose();
  
    // If no user selection, progress is stopped
    if (isNaN(selections[questionCounter])) {
        alert('Please make a selection!');
    } else {
        questionCounter++;
        displayNext();
  }
});
// Click handler for the 'prev' button
$('#prev').on('click', function (e) {
    e.preventDefault();
    
    if(quiz.is(':animated')) {
      return false;
    }
    choose();
    questionCounter--;
    displayNext();
  });
  
  // Click handler for the 'Start Over' button
  $('#start').on('click', function (e) {
    e.preventDefault();
    
    if(quiz.is(':animated')) {
      return false;
    }
    questionCounter = 0;
    selections = [];
    displayNext();
    $('#start').hide();
  });
});