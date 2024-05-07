const questions = [
    //Add questions and answer options here
    
    // 5 Turn Questions

    {
        question: "What is the first thing you should do at the beginning of your turn?",
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
        question: "What is the last step of each turn?",
        category: "turnOverview",
        answers: [
            {answer: "Untap", correct: false},
            {answer: "Begin combat", correct: false},
            {answer: "Declare blockers", correct: false},
            {answer: "Cleanup", correct: true},
        ]
    },
    {
        question: "How many phases are there in a turn?",
        category: "turnOverview",
        answers: [
            {answer: "4", correct: true},
            {answer: "3", correct: false},
            {answer: "7", correct: false},
            {answer: "5", correct: false},
        ]
    },
    {
        question: "In which phase can you case sorceries or creatures?",
        category: "turnOverview",
        answers: [
            {answer: "Untap", correct: false},
            {answer: "Main", correct: true},
            {answer: "Upkeep", correct: false},
            {answer: "Draw", correct: false},
        ]
    },
    {
        question: "Creatures with \"First Strike\" and/or \"Double Strike\" ____.",
        category: "turnOverview",
        answers: [
            {answer: "Deal extra damage based on the number of creatures you control", correct: false},
            {answer: "have the chance to critically hit the defending creature", correct: false},
            {answer: "Deal damage first, before most creatures", correct: true},
            {answer: "Always kill the defending creature", correct: false},
        ]
    },

    // 5 Deck Questions

    {
        question: "In the Standard format, what is the minimum deck size?",
        category: "deckOverview",
        answers: [
            {answer: "90", correct: false},
            {answer: "60", correct: true},
            {answer: "25", correct: false},
            {answer: "40", correct: false},
        ]
    },
    {
        question: "In a Commander formatted game, how many cards are allowed in a deck (including the commander)?",
        category: "deckOverview",
        answers: [
            {answer: "100", correct: true},
            {answer: "60", correct: false},
            {answer: "80", correct: false},
            {answer: "120", correct: false},
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
        question: "Many tournaments and events allow players to have extra cards and sometimes an extra deck. What is this called?",
        category: "deckOverview",
        answers: [
            {answer: "Standard", correct: false},
            {answer: "Sideboard", correct: true},
            {answer: "Extra Cards", correct: false},
            {answer: "Swap-Ins", correct: false},
        ]
    },

    // 5 Card Questions

    {
        question: "The term \"CMC\" stands for ____.",
        category: "cardOverview",
        answers: [
            {answer: "Creating Magic Cards", correct: false},
            {answer: "Converted Mana Cost", correct: true},
            {answer: "Constructed Monster Combat", correct: false},
            {answer: "Creature Management Cost", correct: false},
        ]
    },
    {
        question: "Creatures have two numbers \"##/##\". Which term does the first number mean?",
        category: "cardOverview",
        answers: [
            {answer: "Damage", correct: false},
            {answer: "Toughness", correct: false},
            {answer: "Power", correct: true},
            {answer: "Strength", correct: false},
        ]
    },
    {
        question: "Creatures have two numbers \"##/##\". Which term does the second number mean?",
        category: "cardOverview",
        answers: [
            {answer: "Toughness", correct: true},
            {answer: "Defense", correct: false},
            {answer: "Rarity", correct: false},
            {answer: "Hardness", correct: false},
        ]
    },
    {
        question: "What ability is commonly associated with only creature cards?",
        category: "cardOverview",
        answers: [
            {answer: "Cycling", correct: false},
            {answer: "Ward", correct: false},
            {answer: "Flying", correct: true},
            {answer: "Kicker", correct: false},
        ]
    },
    {
        question: "Which of these is NOT a card type?",
        category: "cardOverview",
        answers: [
            {answer: "Planeswalker", correct: false},
            {answer: "Clash", correct: true},
            {answer: "Instant", correct: false},
            {answer: "Enchantment", correct: true},
        ]
    },

    // 5 Playing Questions

    {
        question: "What is a common strategy to maintain a balanced mana base in a deck?",
        category: "playOverview",
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
            {answer: "Make up interpretations of the rules", correct: false},
            {answer: "Bring snacks so your opponents like you more", correct: false},
            {answer: "Always play with a similar deck", correct: false},
            {answer: "Learn from more experienced players", correct: true},
        ]
    },
    {
        question: "What is a common mistake new players tend to make?",
        category: "playOverview",
        answers: [
            {answer: "Focusing on the cards' flavor text", correct: false},
            {answer: "Feeling over-confident", correct: false},
            {answer: "Overanalyzing the opponent's strategy", correct: false},
            {answer: "Never asking questions", correct: true},
        ]
    },
    {
        question: "What concept should be heavily considered when choosing which card(s) to play?",
        category: "playOverview",
        answers: [
            {answer: "Flavors", correct: false},
            {answer: "Synergy", correct: true},
            {answer: "Rarity", correct: false},
            {answer: "Artwork", correct: false},
        ]
    },
    {
        question: "The \"Library\" refers to ____.",
        category: "playOverview",
        answers: [
            {answer: "The cards in your hand", correct: false},
            {answer: "The deck of cards you draw from", correct: true},
            {answer: "The place where your cards are stored for later use after casting", correct: false},
            {answer: "The cards you've played on the table", correct: false},
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

    incorrectTurnOverview = 0;
    incorrectDeckOverview = 0;
    incorrectCardOverview = 0;
    incorrectPlayOverview = 0;

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
        questionElement.innerHTML += " <a href='./turnOverview.html'> Turn Overview </a>"
    }
    
    if(incorrectDeckOverview > 0 ){
        questionElement.innerHTML += " <a href='./decksList.html'> Starter decks </a>";
    }
    if(incorrectCardOverview > 0 ){
        questionElement.innerHTML += " <a href='./cardOverview.html'> Card Overview </a>";
    }
    if(incorrectPlayOverview > 0 ){
        questionElement.innerHTML += " <a href=''> play Overview </a>";
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

