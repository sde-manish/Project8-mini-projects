let randomNumber = Math.floor(((Math.random())*30+1));

const userInput = document.getElementById('guess-number');
const remainingAttempts = document.getElementById('attempts');
const previusGuessText = document.getElementById('previus-guess');
const Submitbtn = document.getElementById('submitbtn');
const newgame = document.getElementById('newgame');
const message = document.getElementById('validation-message');
let attemptsCounter = 10;
let previusGuesses = [];


let play = true;



if (play) {
    Submitbtn.addEventListener('click', function(e){
        e.preventDefault();
        console.log("Clicked");

        const guessedNumber = userInput.value;
        validate(guessedNumber);


    })    
}

function validate(guessedNumber){
        if (guessedNumber > 30 || guessedNumber < 1) {
                message.innerHTML = 'Enter a number between 1 and 30';
                document.getElementById('guess-number').value = ''
        } else {
            checkGuess(guessedNumber);
        }

}

function checkGuess(guessedNumber){
    if (guessedNumber > randomNumber) {
        message.innerHTML = 'Your guessed number is Too High'
    } else if (guessedNumber < randomNumber) {
        message.innerHTML = 'Your guessed number is Too Low';
    } else if (guessedNumber == randomNumber) {
        message.innerHTML = `Wow! 🎆🎉✨ You guessed it. The Random Number is : ${randomNumber}`;
        message.style.backgroundColor = 'green';
        userInput.setAttribute('disabled','');
        Submitbtn.style.display = 'none';
        newgame.style.display = 'block';
        newGame();
    }
    
    attemptsCounter--;
    remainingAttempts.innerHTML = attemptsCounter;
    previusGuesses.push(guessedNumber);
    previusGuessText.innerHTML = previusGuesses;
    document.getElementById('guess-number').value = ''
    if (attemptsCounter == 0) {
        endGame();
        newGame();
    }

}
function endGame(){
    document.getElementById('guess-number').value = '';
    userInput.setAttribute('disabled','');
    Submitbtn.style.display = 'none';
    newgame.style.display = 'block';
    message.innerHTML = ` 'Game Over!' Your attempts are over. The random number was ${randomNumber} `;
    message.style.backgroundColor = '#a80011';
    play = false;


}

function newGame(){
    newgame.addEventListener('click', function(e){
        e.preventDefault();
        randomNumber = Math.floor(((Math.random())*30+1));

        userInput.removeAttribute('disabled');
        attemptsCounter = 10;
        previusGuesses = [];
        remainingAttempts.innerHTML = attemptsCounter;
        previusGuessText.innerHTML = previusGuesses;
        Submitbtn.style.display = 'block';
        newgame.style.display = 'none';
        message.innerHTML = '';
        message.style.backgroundColor = 'transparent';

        play = true;
    })    

}
