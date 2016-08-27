var questions= [ 
{question1: "How fast does the speed of light travel?",
choice: "299,792 km/s", "340.29 m/s","253,000 	km/h", "724,000 km/h"
answer:"299,792 km/s"



}]



function endQuestion() {
	count++;
	$('.questions').html(questions)
}

function startQuestion () {
	showQuestion=setInterval(endQuestion, 3000)
}


