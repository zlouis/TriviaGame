$('document').ready(function() {
var questionCounter=0;
var correctAnswers=0;
var wrongAnswers=0;
var time=300;
var universe;
var starWars;

var questionDiv= $('.question');
var choices=$('.choices');
var nextQuestion=$('.nextQuestion');
var correctAns=$('.answeredCorrect');
var wrongAns=$('.answeredWrong');
var timer=$('.timer');
var notify=$('.notify');  
var gif=$('.gif')




var questions= [ 
	{
	 question: "On the planet Jakku, where does Rey live?",
	 choices: ["In the remains of an AT-AT", "In a Tie-Fighter", "Outskirts in a mud hut", "In the remains of a Star Destroyer"],
	 answer: 0,
	},

	{
	 question: "According to Han Solo, who stole the Millennium Falcon from him first?",
	 choices: ["Unkar Plutt", "Ducane ", "Un sak", "Ducaine"],
	 answer: 1,

	},
	{
	  question: "How long after Return of the Jedi is The Force Awakens set?",
	 choices: ["50 years", "40 years", "30 years", "20 years"],
	 answer: 2,
	},
  {
   question: "In which department on the Starkiller Base did Finn once work?",
   choices: ["Sanitation", "Accounts", "Weapons", "Maintenance"],
   answer: 0,
  },

  {
   question: "BB-8 thumbs up was directed towards who?",
   choices: ["Rey", "Han Solo", "Finn", "Chewy"],
   answer: 2,
   },
   {
   question: "What character speaks the first line in The Force Awakens?",
   choices: ["Poe Dameron", "Lor San Tekka", "Finn", "Captain Phasma"],
   answer: 1,
  },

  {
   question: "What is Finn's Stormtrooper designation?",
   choices: ["FP-2177", "FN-2871", "FN-2187", "FN-2099"],
   answer: 3,
 },

  {
   question: "What was Kylo Ren's previous name?",
   choices: ["Ben", "Anakin", "Luce", "Bach"],
   answer: 0,
   },
  {
   question: "What vehicle does Rey hope to use to escape the First Order on Jakku?",
   choices: ["Millennium Falcon", "Tie Fighter", "a Quadd Jumper", "Speed Pod"],
   answer: 2,
  },

  {
   question: "Who did Unkar Plutt steal the Millennium Falcon from?",
   choices: ["Han Solo", "Ducane", "the Irving Boys", "No one"],
   answer: 2,
   },
  {
   question: "What currency is Rey paid for the junk she scavenges on Jakku?",
   choices: ["Credits", "Daktaris", "Food Rations", "Food Checks"],
   answer: 2,
  },
  {
   question: "May the force be with You",
   choices: ["", "", "", ""],
   answer: 2,
  }
   
  
	];

  var question = questions[questionCounter].question;


  

  $('.start').on('click', function(){
    countDown();
    $('.intro').addClass('hidden');
    $('.gameBoard').removeClass('hidden');
    $('.start').addClass('hidden')
  })
  //show questions
  function int() {
  	questionDiv.html(question);
  	startQuestions(questions);
    starWars();

  }
  int();

  //loop question array and choices
  function startQuestions(questions) {
  	for (var i=0; i< questions[questionCounter].choices.length; i++) {
  		var newDiv = $('<button class="btn btn-primary guess" value="'+ i +'">'+ questions[questionCounter].choices[i] + '</button>');
      choices.append(newDiv);

  	};
  
  $('.guess').on('click', function(){
  	if(this.value == questions[questionCounter].answer) {
  		notify.removeClass('hidden notify-wrong');
  		notify.addClass('notify-right');
  		nextQuestion.html('NextQuestion!');
  		correctAnswers++;
  		correctAns.html(correctAnswers);
      gif.html('The Force is with you, great answer!!!')
  		nextQuestion.addClass('btn-success');
  		nextQuestion.removeClass('btn-danger');
  		nextQuestion.removeClass('hidden');
      gif.append('<img class="starWarsGif" src="' +starwars +'">');
  		$('.guess').prop('disabled', true);
  	} else{
  		notify.removeClass('hidden alert-sucess');
  		notify.addClass('notify-danger')
  		nextQuestion.html('next!');
  		wrongAnswers++;
  		wrongAns.html(wrongAnswers);
      gif.html('Sorry, wrong answer!!!')
  		nextQuestion.addClass('btn-success');
  		nextQuestion.removeClass('btn-danger');
  		nextQuestion.removeClass('hidden');
      gif.append('<img class="starWarsGif" src="' +starwars +'">');
  		$('.guess').prop('disabled', true);


  	}

  	});
}

  	nextQuestion.on('click', function(){
  		if(questionCounter +1 == questions.length){
  			// $('.answeredCorretedBox').html("You answered" + correctAnswers + 'questions correctly');
  			// $('.answeredWrongBox').html("You answered" + wrongAnswers+ 'questions wrong');
  			questionCounter=0;
  			correctAnswers=0;
  			wrongAnswers=0;
  			choices.empty();
        
        $('.gameBoard').addClass('hidden');
  			questions=questions[questionCounter].question;
  			$('.questioncounter').html(questionCounter+1)
  			$('questionDiv').html(questions);
  			notify.addClass('hidden');
  			nextQuestion.addClass('hidden');
        console.log("no")
       
        int();
        
  		} else {
  			questionCounter++;
  			question = questions[questionCounter].question;
  			questionDiv.html(question);
  			$('.questionCounter').html(questionCounter+1);
        
  			choices.empty();
  			notify.addClass('hidden');
  			nextQuestion.addClass('hidden');
        console.log("no1")
        
  			int();

  		}

  		if (questionCounter +1  == questions.length) {
  			nextQuestion.html('All Done!');
        alert("finished!")
        $('.answeredCorretedBox').html("You answered " + correctAnswers + ' questions correctly.');
        $('.answeredWrongBox').html("You answered " + wrongAnswers + ' questions wrong.');
  		}


    


  	})





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

function starWars(){
    $.ajax({
      url:'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=starwars',
      method: 'GET',
    }).done(function(obj){
      starwars= obj.data.image_original_url;
    })
  }












});
