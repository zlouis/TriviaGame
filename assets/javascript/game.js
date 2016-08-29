$('document').ready(function() {
var questionCounter=0;
var correctAnswers=0;
var wrongAnswers=0;
var time=600;
var universe;
var louis;

var questionDiv= $('.question');
var choices=$('.choices');
var nextQuestion=$('.nextQuestion');
var correctAns=$('.answeredCorrect');
var wrongAns=$('.answeredWrong');
var timer=$('.timer');
var notify=$('.notify');




var questions= [ 
	{
	 question: "How fast does the speed of light travel?",
	 choices: ["299,792 km/s", "340.29 m/s", "253,000 km/h", "724,000 km/h"],
	 answer: 1,
	},

	{
	 question: "123How fast does the speed of light travel?",
	 choices: ["123299,792 km/s", "340.29 m/s", "253,000 km/h", "724,000 km/h"],
	 answer: 0,

	},
	{
	  question: "1234How fast does the speed of light travel?",
	 choices: ["123299,792 km/s", "340.29 m/s", "253,000 km/h", "724,000 km/h"],
	 answer: 0,
	}
	]

  var question = questions[questionCounter].question;

  $('.start').on('click', function() {
  	countDown();

  });

  $('.start').on('click', function(){
    countDown();
    $('.intro').addClass('hidden');
    $('.gameBoard').removeClass('hidden');
  })
  //show questions
  function int() {
  	questionDiv.html(question);
  	startQuestions(questions);

  }
  int();

  //loop question array and choices
  function startQuestions(questions) {
  	for (var i=0; i< questions[questionCounter].choices.length; i++) {
  		var newDiv = $('<button class="btn btn-primary guess" value="'+ i +'">'+ questions[questionCounter].choices[i] + '</button>');
      choices.append(newDiv);
  	}
  
  $('.guess').on('click', function(){
  	if(this.value == questions[questionCounter].answer) {
  		notify.removeClass('hidden notify-wrong');
  		notify.addClass('notify-right');
  		nextQuestion.html('NextQuestion!');
  		correctAnswers++;
  		correctAns.html(correctAnswers);
  		nextQuestion.addClass('btn-success');
  		nextQuestion.removeClass('btn-danger');
  		nextQuestion.removeClass('hidden');
  		$('.guess').prop('disabled', true);
  	} else{
  		notify.removeClass('hidden alert-sucess');
  		notify.addClass('')
  		nextQuestion.html('next!');
  		wrongAnswers++;
  		wrongAns.html(wrongAnswers);
  		nextQuestion.addClass('btn-success');
  		nextQuestion.removeClass('btn-danger');
  		nextQuestion.removeClass('hidden');
  		$('.guess').prop('disabled', true);


  	}

  	});
}

  	nextQuestion.on('click', function(){
  		if(questionCounter +1 == questions.length){
  			$('.answeredCorretedBox').html("You answered" + correctAnswers + 'questions correctly');
  			$('.answeredWrongBox').html("You answered" + wrongAnswers+ 'questions wrong');
  			questionCounter=0;
  			correctAnswers=0;
  			wrongAnswers=0;
  			choices.empty();
  			questions=questions[questionCounter.question];
  			$('.questioncounter').html(questionCounter+1)
  			$('questionDiv').html(questions);
  			notify.addClass('hidden');
  			nextQuestion.addClass('hidden');
  		} else {
  			questionCounter++;
  			question = questions[questionCounter].question;
  			questionDiv.html(question);
  			$('.questionCounter').html(questionCounter+1);
  			choices.empty();
  			notify.addClass('hidden');
  			nextQuestion.addClass('hidden');
  			int()

  		}

  		// if (questionCounter + 2  questions.length) {
  		// 	nextQuestion.html('All Done!');
  		// }



  		



  	})





function endQuestion() {
	count++;
	$('.questions').html(questions)
}

function startQuestion () {
	showQuestion=setInterval(endQuestion, 3000)
}


function countDown(){
  var countDown;
    countDown = setInterval(function(){
      if(time > 0){
        time--;
        timer.html(timeConverter(time));
      }else if (time <= 0 ){
        clearInterval(countDown);
        timer.html(timeConverter(time));
      }
    }, 1000);
}

function timeConverter(t){
  var minutes = Math.floor(t/60);
  var seconds = t - (minutes * 60);
  if (seconds < 10){
      seconds = "0" + seconds;
  }
  if (minutes === 0){
      minutes = "00";
  } else if (minutes < 10){
      minutes = "0" + minutes;
  }
  return minutes + ":" + seconds;
}

})