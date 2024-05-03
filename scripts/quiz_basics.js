const questions = [
    //Add questions and answer options here
    
    {
        question: "What is something you should do on the first phase of a turn?",
        //Add a category to the question so we know what the user needs to improve on.
        category: "turnOverview",
        answers: [
            {answer: "Untap", correct: true},
            {answer: "Begin combat", correct: false},
            {answer: "Declare blockers", correct: false},
            {answer: "Cleanup", correct: false},
        ]
    },
    {
        question: "What is something you should do on the last phase of a turn?",
        category: "turnOverview",
        answers: [
            {answer: "Untap", correct: false},
            {answer: "Begin combat", correct: false},
            {answer: "Declare blockers", correct: false},
            {answer: "Cleanup", correct: true},
        ]
    },

];

const questionElement = document.getElementById("question")
const resultElement = document.getElementById("result")
const answerButton = document.getElementById("answer-buttons")
const nextButton = document.getElementById("next-btn")

//reset the question number to show the first question
let currentQuestionNumber = 0;
//reset score
let score = 0;

//reset how many times the player got the turn overview questions wrong
let incorrectTurnOverview = 0;

//Executes when the quiz starts
function startQuiz(){
    //Shows the first question
    currentQuestionNumber = 0;
    //Sets the score to zero
    score = 0;

    incorrectTurnOverview = 0;
    //Sets this button HTML to next, this is necessary because it gets changed later on
    nextButton.innerHTML = "Next";
    //displays the questions
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionNumber];
    let questionNum = currentQuestionNumber + 1;
    //Displays the question and its number
    questionElement.innerHTML = questionNum + ". " + currentQuestion.question;

    //For each answer associated with the current question
    currentQuestion.answers.forEach(answer => {
        //create a button
        const button = document.createElement("button");
        //Display the answer on that button
        button.innerHTML = answer.answer;
        //Adds a class to style the button
        button.classList.add("answer-btn");
        //displays the button in the answer-buttons div
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

//resets the question and answers on the quiz
function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

//if answer is correct add a point to their score else add a point to whatever category they got incorrect.
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    const turnOverview = questions[currentQuestionNumber].category === "turnOverview";
    selectedBtn.classList.add("selected");
    if(isCorrect){
        score++;
    }else{
      
        if(turnOverview){
            incorrectTurnOverview ++;
        }
    
    }
    Array.from(answerButton.children).forEach(button => {
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

//Shows users score once quiz is complete
function showScore(){
    resetState();
    questionElement.innerHTML = 'You got ' + score + ' out of ' + questions.length + " questions correct<br>";
    
    //if score is less then half right
    if(score < .5 * questions.length){
    questionElement.innerHTML+= "Your not ready to start a real game yet. Here's some areas you should brush up on: "
    }

    //If score is perfect add this message to the HTML
    else if(score == questions.length ){
    questionElement.innerHTML+= "Congrats you have a perfect score!" 
    }

    //if score is greater or equal to half right and less then perfect
    else{
        questionElement.innerHTML+= "Your almost ready to start a real game. Here's some areas you should brush up on: " 
    }
    
    //if user got turn overview questions incorrect
    if(incorrectTurnOverview > 0 ){
        questionElement.innerHTML += " <a href='./turnOverview.html'> Turn Overview </a>";
    }
    
    //Sets the text for the next button to retake quiz
    nextButton.innerHTML = "Retake quiz";
    nextButton.style.display = "block";
}
//if there is another question display it else display score
function handleNextButton(){
    currentQuestionNumber++;
    if(currentQuestionNumber < questions.length){
        showQuestion();
    }else{
        showScore();
    } 
}
// if there are still questions call the handle next button function
nextButton.addEventListener("click", ()=>{
    if(currentQuestionNumber < questions.length){
        handleNextButton();
    //else turn the next button into a retake the quiz button
    }else{
        startQuiz();
    }
})
startQuiz();
