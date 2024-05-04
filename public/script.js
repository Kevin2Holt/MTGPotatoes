var currentQuestion = 0;// 0 is the first question (like arrays)

function switchQuestion(questionNum = currentQuestion+1) {// questionNum starts at 0
	document.getElementById("question_"+currentQuestion).style.display = "none";
	document.getElementById("question_"+questionNum).style.display = "inline-block";
	currentQuestion = questionNum;
}




$(function() {// On document ready
});
