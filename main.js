'use strict';
    let currentQuestion;
    let score;

//set up landing page
function landingPage() {
    //display quiz instructions
    //display a cool picture
    $('.js-top-text').text('Welcome to our quiz app!');
    $('.js-inner-sect').html(
        '<img src=\'images/jupiter.jpg\' alt=\'cool picture 1\'></img>'
    );
    $('.button-bottom').text('Start Quiz!');
    currentQuestion = 0;
    score = 0;
}

//listening function for button handler
function clickButton() {
    $('.button-bottom').click(event => {
        if (currentQuestion === 0) {
            $('.button-bottom').text('Next Question');
            renderQuestion();
        }
        else if (currentQuestion < STORE.length) nextQuestion();
        else if (currentQuestion === STORE.length) displayFinalResults();
        else landingPage();
    });
}

//generates the next question
function nextQuestion() {
    //listen for submit on next question button
    //calls renderQuestion
    //calls displayFinalQuestion after 
    if (currentQuestion === STORE.length) {
        displayFinalResults();
    }
    else renderQuestion();
    };

function questionText(q) {
    $('.js-top-text').html(`
    <h2>Question #${currentQuestion} / ${STORE.length}</span><span> - Score: ${score} / ${q}</h2>
    <p>${STORE[currentQuestion - 1].question}</p>`
    );
}

//renders a question
function renderQuestion() {
    //displays currentQuestion and currentScore
    //displays currentQuestion options
    //calls submitOption
    currentQuestion++;
    let option1 = STORE[currentQuestion - 1].options[0];
    let option2 = STORE[currentQuestion - 1].options[1];
    let option3 = STORE[currentQuestion - 1].options[2];
    let option4 = STORE[currentQuestion - 1].options[3];
    questionText(currentQuestion - 1);
    $('.js-inner-sect').html(`
    <form>
        <input type='radio' name='option' id='A' value='${option1}'>
        <label for='A'>${option1}</label><br />
        <input type='radio' name='option' id='B' value='${option2}'>
        <label for='A'>${option2}</label><br />
        <input type='radio' name='option' id='C' value='${option3}'>
        <label for='A'>${option3}</label><br />
        <input type='radio' name='option' id='D' value='${option4}'>
        <label for='A'>${option4}</label><br />
        <input type='submit' value='Submit' class='butt'>
    </form>`
    );
    $('.button-bottom').attr('disabled', '');
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
    $('.js-inner-sect form').on('submit', event => {
        event.preventDefault();
        console.log('submit pressed');
        let input = $('input[name="option"]:checked').val();
        console.log(input);
        if (!input) alert('Please select an answer!');
        if (input === STORE[currentQuestion - 1].answer) {
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
        <p>The correct answer is: ${STORE[currentQuestion - 1].answer}
    `);
    $('.button-bottom').removeAttr('disabled', '');
    questionText(currentQuestion);
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
    questionText(currentQuestion);
}

//displays the final results view
function displayFinalResults() {
    //input html for final results
    //create restart quiz button
    //call restartQuiz
    currentQuestion++;
    if (score < 4) {
        $('.js-top-text').html(
            '<h2>Sorry!</h2>'
        )
        $('.js-inner-sect').html(
            `<p>Final Score: ${score}/${STORE.length}</p>
            <p>Being an Astronaut is not written in your stars!</p>`
        )
    } else {
        $('.js-top-text').html(
            '<h2>Congratulations!</h2>'
        );
        $('.js-inner-sect').html(`
            <p>Final Score: ${score}/${STORE.length}</p>
            <p>insert witty comment</p>`
        );
    }
    $('.button-bottom').text('Restart Quiz');
}

function docReady() {
    clickButton();
    landingPage();
}

$(document).ready(docReady());
    