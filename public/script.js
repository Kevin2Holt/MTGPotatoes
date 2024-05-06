/* * * * * * * * * * * * * * * * * * * * * * * *
	PLEASE REFERENCE THE "INFO.txt" FILE
	FOR INFORMATION ABOUT THE GENERAL PURPOSE
	OF EACH FILE. THANKS!
* * * * * * * * * * * * * * * * * * * * * * * */

// These values start at 0 and are initialized as "-1" to indicate that it doesn't have an actual value
var curQuestion = -1;// Marks which question is currently displayed
var curSelected = -1;// Marks which answer is currently selected
var curCorrect = -1;// Marks the correct answer for the current question

var totalCorrect = 0;// Keeps a running total of the number of correct answers submitted
var isSubmitted = false;// Marks if an answer has been submitted


// When the "Submit" or "Next" button is clicked, this function is called; Default values are used in nearly every case
function switchQuestion(questionNum = curQuestion+1, adminSkip = false) {// questionNum starts at 0
	
	// adminSkip is only used in the browser's console to bypass needing to select an answer
	if(adminSkip) {
		// Despite not being needed, there is still a check for any currently selected answers
		if(curSelected != -1) {
			document.getElementById("quiz_q"+curQuestion+"_"+curSelected).classList.remove("selected");
		}

		// 
		isSelected = false;
		isSubmitted = false;
		curSelected = -1;
		curCorrect = -1;

		document.getElementById("next-btn").innerHTML = "Submit";
		document.getElementById("next-btn").toggleAttribute("disabled", true);
		document.getElementById("next-btn").classList.add("mtgp_disabled");

		document.getElementById("question_"+curQuestion).style.display = "none";
		document.getElementById("quiz_description-container").style.display = "none";

		// Set up next question
		if(questionNum >= document.getElementById("mtgp_quiz-container").dataset.numQuestions) {
			submitQuiz();
		} else {
			curQuestion = questionNum;
			
			quizStartup();
		}
	} else if(curQuestion == -1) {// Checks if the quiz has actually started, then starts it if not
		quizStartup();
	} else {
		if(isSubmitted) {// If an answer has been submitted, switch to the next question
			
			// Clean up previous question
			if(curSelected == curCorrect) {
				document.getElementById("quiz_q"+curQuestion+"_"+curCorrect).classList.remove("mtgp_quiz_correct");
			} else {
				document.getElementById("quiz_q"+curQuestion+"_"+curSelected).classList.remove("mtgp_quiz_wrong");
				document.getElementById("quiz_q"+curQuestion+"_"+curCorrect).classList.remove("mtgp_quiz_correct");
			}

			cleanup();



			// Set up next question
			if(questionNum >= document.getElementById("mtgp_quiz-container").dataset.numQuestions) {
				submitQuiz();
			} else {
				curQuestion = questionNum;
				
				quizStartup();
			}


		} else {// If no answer has been submitted, lock in the selected answer and display the correct/wrong answers
			document.getElementById("next-btn").innerHTML = "Next";
			isSubmitted = true;

			// Track score & Mark correct/incorrect
			document.getElementById("quiz_q"+curQuestion+"_"+curSelected).classList.remove("selected");
			for(i=0; i<4; i++) {
				if(i == curCorrect) {
					document.getElementById("quiz_q"+curQuestion+"_"+i).classList.add("mtgp_quiz_correct");
				} else if(i == curSelected) {
					document.getElementById("quiz_q"+curQuestion+"_"+i).classList.add("mtgp_quiz_wrong");
				} else {
					document.getElementById("quiz_q"+curQuestion+"_"+i).classList.add("mtgp_quiz_ans-disabled");
				}
			}
			if(curSelected == curCorrect) {
				totalCorrect++;
				
			} else {
				document.getElementById("quiz_q"+curQuestion+"_"+curSelected).classList.add("mtgp_quiz_wrong");
				document.getElementById("quiz_q"+curQuestion+"_"+curCorrect).classList.add("mtgp_quiz_correct");
			}

			// Set description text & visibility
			document.getElementById("quiz_description-container").style.display = "inline-block";
		}
	}
}

function chooseAnswer(num) {
	if(!isSubmitted) {
		if(curSelected != -1) {
			document.getElementById("quiz_q"+curQuestion+"_"+curSelected).classList.remove("selected");
		}
		curSelected = num;
		document.getElementById("quiz_q"+curQuestion+"_"+curSelected).classList.add("selected");

		// Check & activate "Next"/"Submit" button
		document.getElementById("next-btn").toggleAttribute("disabled", false);
		if(document.getElementById("next-btn").classList.contains("mtgp_disabled")) {
			document.getElementById("next-btn").classList.remove("mtgp_disabled");
		}
	}
}

function submitQuiz() {
	document.getElementById("next-btn").style.display = "none";
	document.getElementById("quiz_description-container").style.display = "inline-block";
	document.getElementById("quiz_description-link").style.display = "none";
	document.getElementById("quiz_description").innerHTML = document.getElementById("mtgp_quiz-container").dataset.submitText;
	document.getElementById("quizScore").innerHTML = totalCorrect + " / " + document.getElementById("mtgp_quiz-container").dataset.numQuestions;
}

function cleanup() {
	isSelected = false;
	isSubmitted = false;
	curSelected = -1;
	curCorrect = -1;

	document.getElementById("question_"+curQuestion).style.display = "none";
	document.getElementById("quiz_description-container").style.display = "none";
}

function quizStartup() {
	if(curQuestion == -1) {
		curQuestion = 0;
	}
	document.getElementById("question_"+curQuestion).style.display = "inline-block";

	for(i=0; i<4; i++) {
		if(document.getElementById("quiz_q"+curQuestion+"_"+i).dataset.correct === "true") {
			curCorrect = i;
		}
	}
	document.getElementById("quiz_description").innerHTML = document.getElementById("question_"+curQuestion).dataset.description;
	document.getElementById("quiz_description-link").innerHTML = document.getElementById("question_"+curQuestion).dataset.link.split("#:~:")[0];
	document.getElementById("quiz_description-link").href = document.getElementById("question_"+curQuestion).dataset.link;

	document.getElementById("next-btn").innerHTML = "Submit";
	document.getElementById("next-btn").toggleAttribute("disabled", true);
	document.getElementById("next-btn").classList.add("mtgp_disabled");
}

function adminHelp() {
	console.log("");
	console.log("switchQuestion(questionNum, adminSkip)");
	console.log("    questionNum starts at 0");
	console.log("    Use \"adminSkip = true\" if you don't have anything selected")
	console.log("");
	console.log("chooseAnswer(num)");
	console.log("    num = [0-3]");
}


$(function() {// On document ready
});
