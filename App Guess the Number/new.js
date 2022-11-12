'use strict';

const guess = document.querySelector('.guess');
const message = document.querySelector('.message');
const number = document.querySelector('.number');
const checkBtn = document.querySelector('.check');
const again = document.querySelector('.again');
const credit = document.querySelector('.credits');

let creditValue = 3;
let scoreValue = 5;
let highscoreValue = 0;
let secretNumber = Math.trunc(Math.random() * 25) + 1;
let playing = true;

// CHECK BTN
checkBtn.addEventListener('click', function () {
  if (playing) {
    const guess = Number(document.querySelector('.guess').value);

    //   when there is no nubmer
    if (!guess || guess < 1 || guess > 20) {
      message.textContent =
        'Wrong Number , please enter a number between 1 and 20';
    }
    // When player win
    else if (guess === secretNumber) {
      message.textContent = 'correct number !';
      number.textContent = secretNumber;

      // for credits to go in + (Working)
      creditValue++;
      credit.textContent = creditValue;
      checkBtn.classList.add('hidden');

      // DOM
      document.querySelector('body').style.backgroundColor = '#07b839';
      number.style.width = '30rem';

      // HighScore keeping
      if (scoreValue > highscoreValue) {
        highscoreValue = scoreValue;
        document.querySelector('.highscore').textContent = highscoreValue;
      }
      //
    } else if (guess !== number) {
      if (scoreValue > 1) {
        message.textContent = guess > secretNumber ? 'too high' : 'too low';
        scoreValue--;
        document.querySelector('.score').textContent = scoreValue;
      }

      // game over
      else {
        message.textContent = `Please try again, the number was ${secretNumber}`;
        document.querySelector('.score').textContent = 0;

        // for Credits in - Working
        // creditValue--;
        // credit.textContent = creditValue;
        // checkBtn.classList.add('hidden');

        document.querySelector('body').style.backgroundColor = '#b01515';
        number.style.width = '30rem';
      }
    }
  }
});

// New Game

again.addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 25) + 1;
  scoreValue = 5;
  creditValue--;
  credit.textContent = creditValue;

  if (creditValue === 0) {
    playing = false;

    guess.value = '';
    number.textContent = 'game over';
    number.style.width = '30rem';
    credit.textContent = 0;
    document.querySelector('body').style.backgroundColor = '#b01515';
    document.querySelector('.score').textContent = 0;
    again.classList.add('hidden');
    message.classList.add('hidden');
    //
  } else {
    checkBtn.classList.remove('hidden');
    document.querySelector('.score').textContent = scoreValue;
    guess.value = '';
    message.textContent = 'Start guessing...';
    number.style.width = '15rem';
    number.textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
  }
});
