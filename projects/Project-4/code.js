const randonNum = parseInt(Math.random()*100+1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true


if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Enter valid number')
    } else if(guess < 1){
        alert('Enter a number greater than 1')
    } else if(guess > 100){
        alert('Enter a number less than 100')
    } else {
        prevGuess.push(guess)
        if(numGuess === 1){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randonNum}`)
            endGame()
        } else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randonNum){
        displayMessage('You guessed it right ')
        endGame()
    } else if(guess < (randonNum-10)){
        displayMessage('Number is TOO Low')
    } else if(guess < randomNum){
        displayMessage('The number is Low')
    } else if(guess > (randomNum+10)){
        displayMessage('Number TOO High')
    } else if (guess > randonNum) {
        displayMessage('The number is high')
    }
}

function displayGuess(guess){
    userInput = ''
    guessSlot.innerHTML += ``
}

function displayMessage(message){

}