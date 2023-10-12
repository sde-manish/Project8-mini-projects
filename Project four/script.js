const randomNumber = Math.floor(((Math.random())*30+1));
    console.log(randomNumber);
const remainingAttempts = document.getElementById('attempts');
const previusGuessText = document.getElementById('previus-guess');
const submit =document.getElementById('submit');
let attemptsCounter = 10;
const previusGuesses = [];

// const form = document.getElementById('form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    // console.log('selected');

    const guessedNumber = document.getElementById('guess-number').value;
    const message = document.getElementById('validation-message');
    document.getElementById('guess-number').value = ''

    if (guessedNumber > 100 || guessedNumber < 1) {
        message.innerHTML = 'Enter a number between 1 and 30';
    } else {
        if (guessedNumber > randomNumber) {
            message.innerHTML = 'Your guessed number is Too High'
        } else if (guessedNumber < randomNumber) {
            message.innerHTML = 'Your guessed number is Too Low';
        } else if (guessedNumber == randomNumber) {
            message.innerHTML = `Wow! You guessed it. The Random Number is : ${randomNumber}`
        }
        attemptsCounter--;
        remainingAttempts.innerHTML = attemptsCounter;
        previusGuesses.push(guessedNumber);
        previusGuessText.innerHTML = previusGuesses;
        if (attemptsCounter === 0) {
            submit.style.display = 'none';
            newgame.style.display = 'block';
            message.innerHTML = `Your attempts are over`;
            // submit.innerHTML = `<h2 id='newgame'>Start New Game</h2>`
        }
    }

})

const newgame = document.getElementById('newgame');
newgame.addEventListener('click', function(e){
    randomNumber = Math.floor(((Math.random())*30+1));
    console.log(randomNumber);
})

function sta (){

}
