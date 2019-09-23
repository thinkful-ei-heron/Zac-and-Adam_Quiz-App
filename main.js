'use strict';

let currentQuestion = 0;
let score = 0;

function landingPage() {
    //display quiz instructions
    //display a cool picture
    //call startQuiz
    console.log('landing page');
    $('.js-top-text').text('Welcome to our quiz app!');
    $('.js-inner-sect').html(
        '<img src=\'images/jupiter.jpg\' alt=\'cool picture 1\'></img>'
    );
    $('.butt').addClass('button-start').text('Start Quiz!');
    startQuiz();
}

//starts the quiz
function startQuiz() {
    //Listen for the submit on the 'start quiz' button
    //call renderQuestion()
    $('.butt').click(event => {
        renderQuestion();
        $('.button-bottom').addClass('.button-next');
        $('.button-bottom').removeClass('.button-start');
    });
}

//generates the next question
function nextQuestion() {
    //listen for submit on next question button
    //calls renderQuestion
    //calls displayFinalQuestion after 
}

//renders a question
function renderQuestion() {
    //displays currentQuestion and currentScore
    //displays currentQuestion options
    //calls submitOption
    let option1 = STORE[currentQuestion].options[0];
    let option2 = STORE[currentQuestion].options[1];
    let option3 = STORE[currentQuestion].options[2];
    let option4 = STORE[currentQuestion].options[3];
    $('.js-top-text').html(`<span>${STORE[currentQuestion].question}</span>
    <br /><br />
    <span>Question # ${currentQuestion}/${STORE.length}</span><span> - Score: ${score}/${currentQuestion}</span>`);
    $('.js-inner-sect').html(`<form>
    <input type='radio' name='option' id='A' value='A'>
    <label for='A'>${option1}</label><br />
    <input type='radio' name='option' id='B' value='B'>
    <label for='A'>${option2}</label><br />
    <input type='radio' name='option' id='C' value='C'>
    <label for='A'>${option3}</label><br />
    <input type='radio' name='option' id='D' value='D'>
    <label for='A'>${option4}</label><br />
    <input type='submit' value='Submit' class='butt'>
  </form>`);
    $('.button-bottom').text('Next Question').attr('disabled', 'true');
    
}

//handles user option selection and submit button
function submitOption() {
    //listens for submit button
    //if no option selected, log error
    //checks user seclected option against the STORE.answer
    //call either wrongAnswer or correctAnswer
    //create next question button
    //call nextQuestion()
    $('.js-inner-sect').on('submit', 'form', event => {
        event.preventDefault();
        console.log('submit pressed');
        let input = $($('input:checked').val());
        if (!input) alert('Please selet an answer!');
        if (input === STORE[currentQuestion].answer) {
            correctAnswer();
        }
        else wrongAnswer();
    });
}


//gives feedback for wrong answer
function wrongAnswer() {
    //input html for wrongAnswer content
}

//gives feedback for correct answer
function correctAnswer() {
    //input html for correctAnwser content
    //call updateScore
}

//updates the score in the header
function updateScore() {
    //increments score variable
}

//displays the final results view
function displayFinalResults() {
    //input html for final results
    //create restart quiz button
    //call restartQuiz
}

//resets the question number and score
function resetStats() {
    //sets currentQuestion to 0
    //sets score to 0
}

//restarts the quiz
function restartQuiz() {
    //listen for submit on restart quiz button
    //call resetStats
    //takes user back to main view
}

//Document ready function to call other functions
function handleQuizApp() {
    landingPage();
    startQuiz();
    nextQuestion();
    renderQuestion();
    submitOption();
    wrongAnswer();
    correctAnswer();
    updateScore();
    displayFinalResults();
    resetStats();
    restartQuiz();
}

$(document).ready(landingPage());

