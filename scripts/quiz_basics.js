const questions = [
    //Add questions and answer options here
    
    // 5 Turn Questions

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
    {
        question: "How many phases are there in a standard turn?",
        category: "turnOverview",
        answers: [
            {answer: "4", correct: true},
            {answer: "3", correct: false},
            {answer: "7", correct: false},
            {answer: "5", correct: false},
        ]
    },
    {
        question: "In what turn phase may players cast instants or activate abilities?",
        category: "turnOverview",
        answers: [
            {answer: "Untap", correct: false},
            {answer: "Main", correct: true},
            {answer: "Upkeep", correct: false},
            {answer: "Draw", correct: false},
        ]
    },
    {
        question: "The process of removing effects from the game is called what?",
        category: "turnOverview",
        answers: [
            {answer: "Dispensing", correct: false},
            {answer: "Removal", correct: false},
            {answer: "Resolving", correct: false},
            {answer: "Cleanup", correct: true},
        ]
    },

    // 5 Deck Questions

    {
        question: "In the Constructed deck format, what is the minimum deck size?",
        category: "deckOverview",
        answers: [
            {answer: "90", correct: false},
            {answer: "60", correct: true},
            {answer: "25", correct: false},
            {answer: "40", correct: false},
        ]
    },
    {
        question: "In a Commander formatted game (exlcuding the Commander), how many cards are allowed in the deck?",
        category: "deckOverview",
        answers: [
            {answer: "100", correct: true},
            {answer: "60", correct: false},
            {answer: "50", correct: false},
            {answer: "125", correct: false},
        ]
    },
    {
        question: "What word best describes a deck that relies heavily on a variation of card types to win the game?",
        category: "deckOverview",
        answers: [
            {answer: "Aggressive", correct: false},
            {answer: "Midranged", correct: false},
            {answer: "Combination", correct: true},
            {answer: "Control", correct: false},
        ]
    },
    {
        question: "What word best describes a deck that focuses on slowly increasing resources to overwhelm their opponent for victory?",
        category: "deckOverview",
        answers: [
            {answer: "Control", correct: false},
            {answer: "Aggressive", correct: false},
            {answer: "Midranged", correct: false},
            {answer: "Ramp", correct: true},
        ]
    },
    {
        question: "In which format do players bring two decks?",
        category: "deckOverview",
        answers: [
            {answer: "Standard", correct: false},
            {answer: "Sideboard", correct: true},
            {answer: "Commander", correct: false},
            {answer: "Modern", correct: false},
        ]
    },

    // 5 Card Questions

    {
        question: "What is the term describing a card's cost to be played?",
        category: "cardOverview",
        answers: [
            {answer: "Mana Cost", correct: true},
            {answer: "Playing Cost", correct: false},
            {answer: "HP Cost", correct: false},
            {answer: "Power Cost", correct: false},
        ]
    },
    {
        question: "What term indicates a creatures offensive strength?",
        category: "cardOverview",
        answers: [
            {answer: "Damage", correct: false},
            {answer: "Toughness", correct: false},
            {answer: "Power", correct: true},
            {answer: "Strength", correct: false},
        ]
    },
    {
        question: "What term defines a creatures ability to resist damage?",
        category: "cardOverview",
        answers: [
            {answer: "Toughness", correct: true},
            {answer: "Defense", correct: false},
            {answer: "Rarity", correct: false},
            {answer: "Hardness", correct: false},
        ]
    },
    {
        question: "What ability is commonly associated with creature cards?",
        category: "cardOverview",
        answers: [
            {answer: "Instant healing", correct: false},
            {answer: "Direct damaging", correct: false},
            {answer: "Flying", correct: true},
            {answer: "Drawing additional cards", correct: false},
        ]
    },
    {
        question: "What term represents how often a card's scarcity?",
        category: "cardOverview",
        answers: [
            {answer: "Power", correct: false},
            {answer: "Rarity", correct: true},
            {answer: "Scarcity", correct: false},
            {answer: "Probability", correct: true},
        ]
    },

    // 5 Playing Questions

    {
        question: "What is a common strategy to maintain a balanced mana base in a deck?",
        category: "playingOverview",
        answers: [
            {answer: "Prioritize non-land cards", correct: false},
            {answer: "Maximize only one type of land", correct: false},
            {answer: "Ignore mana curving", correct: false},
            {answer: "Diversify land types", correct: true},
        ]
    },
    {
        question: "What is the best way to improve at playing?",
        category: "playOverview",
        answers: [
            {answer: "Play by your own rules", correct: false},
            {answer: "Avoid reading any card descriptions", correct: false},
            {answer: "Always play with a similar deck", correct: false},
            {answer: "Learn from more experienced players", correct: true},
        ]
    },
    {
        question: "What is a common mistake new players tend to make?",
        category: "playOverview",
        answers: [
            {answer: "Commonly reading card descriptions", correct: false},
            {answer: "Overcommitting to the board", correct: true},
            {answer: "Analyzing the opponents strategy", correct: false},
            {answer: "Understanding the game fundamentals", correct: false},
        ]
    },
    {
        question: "What best defines the strategy for predicting and appropriately responding to opponents?",
        category: "playOverview",
        answers: [
            {answer: "Randomly playing", correct: false},
            {answer: "Ignoring opponent", correct: false},
            {answer: "Analyzing opponent", correct: true},
            {answer: "Focusing on only one's strategy", correct: false},
        ]
    },
    {
        question: "What concept should be considered heavily when choosing cards?",
        category: "playOverview",
        answers: [
            {answer: "Flavors", correct: false},
            {answer: "Synergy", correct: true},
            {answer: "Rarity", correct: false},
            {answer: "Artwork", correct: false},
        ]
    },
];

/*
Copy to add new question easily
{
        question: "",
        category: "",
        answers: [
            {answer: "", correct: false},
            {answer: "", correct: false},
            {answer: "", correct: false},
            {answer: "", correct: true},
        ]
    },
*/ 

const questionElement = document.getElementById("question")
const resultElement = document.getElementById("result")
const answerButton = document.getElementById("answer-buttons")
const nextButton = document.getElementById("next-btn")

//reset the question number to show the first question
let currentQuestionNumber = 0;
//reset score
let score = 0;

//reset how many times the player got the category questions wrong
let incorrectTurnOverview, incorrectDeckOverview, incorrectCardOverview, incorrectPlayOverview = 0;

//Executes when the quiz starts
function startQuiz(){

    //Shows the first question
    currentQuestionNumber = 0;

    //Sets the score to zero
    score = 0;

    incorrectTurnOverview, incorrectDeckOverview, incorrectCardOverview, incorrectPlayOverview = 0;

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
    const deckOverview = questions[currentQuestionNumber].category === "deckOverview";
    const cardOverview = questions[currentQuestionNumber].category === "cardOverview";
    const playOverview = questions[currentQuestionNumber].category === "playOverview";

    selectedBtn.classList.add("selected");
    if(isCorrect){
        score++;
    }else{
      
        if(turnOverview){
            incorrectTurnOverview ++;
        }

        if(deckOverview){
            incorrectDeckOverview ++;
        }

        if(cardOverview){
            incorrectCardOverview ++;
        }

        if(playOverview){
            incorrectPlayOverview ++;
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
    
    //I NEED THIS PART EDITED SO IT DISPLAYS THE CATEGORY PROPERLY PLZ

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

$(document).ready( () => {
	startQuiz();
});

