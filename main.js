'use strict';

let currentQuestion = 0;
let score = 0;

function landingPage() {
    //display quiz instructions
    //display a cool picture
    //call startQuiz
    $('.js-top-text').text('Welcome to our quiz app!');
    $('.js-inner-sect').html(
        '<img src=\'images/jupiter.jpg\' alt=\'cool picture 1\'></img>'
    );
    $('.butt').text('Start Quiz!');
    startQuiz();
}

//starts the quiz
function startQuiz() {
    //Listen for the submit on the 'start quiz' button
    //call renderQuestion()
    $('.butt').click(event => {
        renderQuestion();
    });
}

//generates the next question
function nextQuestion() {
    //listen for submit on next question button
    //calls renderQuestion
    //calls displayFinalQuestion after 
    $('.butt').click(event => {
        currentQuestion++;
        console.log(currentQuestion);
        if (currentQuestion === STORE.length) {
            displayFinalResults();
        }
        else renderQuestion();
    });
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
    <span>Question # ${currentQuestion + 1}/${STORE.length}</span><span> - Score: ${score}/${currentQuestion}</span>`);
    $('.js-inner-sect').html(`<form>
    <input type='radio' name='option' id='A' value='${option1}'>
    <label for='A'>${option1}</label><br />
    <input type='radio' name='option' id='B' value='${option2}'>
    <label for='A'>${option2}</label><br />
    <input type='radio' name='option' id='C' value='${option3}'>
    <label for='A'>${option3}</label><br />
    <input type='radio' name='option' id='D' value='${option4}'>
    <label for='A'>${option4}</label><br />
    <input type='submit' value='Submit' class='butt'>
  </form>`);
    $('.button-bottom').text('Next Question').attr('disabled', '');
    submitOption();
}

//handles user option selection and submit button
function submitOption() {
    //listens for submit button
    //if no option selected, log error
    //checks user seclected option against the STORE.answer
    //call either wrongAnswer or correctAnswer
    //create next question button
    //call nextQuestion()
    $('.js-inner-sect form').on('submit', function(event) {
        event.preventDefault();
        console.log('submit pressed');
        let input = $('input[name="option"]:checked').val();
        console.log(input);
        if (!input) alert('Please select an answer!');
        if (input === STORE[currentQuestion].answer) {
            correctAnswer();
        }
        else wrongAnswer();
    });
}


//gives feedback for wrong answer
function wrongAnswer() {
    //input html for wrongAnswer content
    $('.js-inner-sect').html(`
        <h2>Oops!</h2>
        <img src=\'images/jupiter.jpg\' alt=\'cool picture 1\'></img>
        <p>The correct answer is: ${STORE[currentQuestion].answer}
    `);
    $('.button-bottom').removeAttr('disabled', '');
    nextQuestion();
}

//gives feedback for correct answer
function correctAnswer() {
    //input html for correctAnwser content
    //call updateScore
    $('.js-inner-sect').html(`
        <h2>That is correct!</h2>
        <img src=\'images/jupiter.jpg\' alt=\'cool picture 1\'></img>
    `);
    $('.button-bottom').removeAttr('disabled', '');
    score++;
    nextQuestion();
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

$(document).ready(landingPage());

