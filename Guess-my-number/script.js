'use strict';

let target = Math.trunc(Math.random() * 20) + 1;
let tries = 10;
let highScore = 0;

//Change message
const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

//Change heading
const displayHead = message => {
  document.querySelector('.heading').textContent = message;
};

//Change background color
const bgColor = theColor => {
  document.querySelector('body').style.backgroundColor = theColor;
};

//Change full text color
const textColor = theColor => {
  document.querySelector('.header').style.color = theColor;
  document.querySelector('.main').style.color = theColor;
};

//-------------Checking function----------------------
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //No input scenario
  if (!guess) {
    displayMessage('No number entered ❌');
  }

  //Correct guess scenario
  else if (guess === target) {
    displayMessage('It is Correct! 🏆');
    displayHead('Whoohoo You Got It!');
    bgColor('#60b347');
    document.querySelector('.number').textContent = target;
    if (tries > highScore) {
      highScore = tries;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  //Really low guess
  else if (target > guess && target - guess > 2 * guess) {
    if (tries > 1) {
      displayMessage('Yeesh! Try a bit higher 😵');
      tries--;
      document.querySelector('.tries').textContent = tries;
      if (tries === 5) {
        displayHead('Only 5 more chances left');
        bgColor('#FDDA0D');
        textColor('black');
      }
    } else {
      displayHead(`And that's...Game Over!`);
      document.querySelector('body').style.backgroundColor = 'red';
      displayMessage('You ran out of chances 🥴');
      document.querySelector('.number').textContent = target;
      document.querySelector('.tries').textContent = 0;
    }
  }

  //Really high guess
  else if (target < guess && guess - target > 2 * guess) {
    if (tries > 1) {
      displayMessage('Whoa lower it  😬');
      tries--;
      document.querySelector('.tries').textContent = tries;
      if (tries === 5) {
        displayHead('Only 5 more chances left');
        bgColor('#FDDA0D');
        textColor('black');
      }
    } else {
      displayHead(`And that's...Game Over!`);
      document.querySelector('body').style.backgroundColor = 'red';
      displayMessage('You ran out of chances 🥴');
      document.querySelector('.number').textContent = target;
      document.querySelector('.tries').textContent = 0;
    }
  }

  //Not too high or low guess
  else {
    if (tries > 1) {
      displayMessage('Not quite there yet 😕');
      tries--;
      document.querySelector('.tries').textContent = tries;
      if (tries === 5) {
        displayHead('Only 5 more chances left');
        bgColor('#FDDA0D');
        textColor('black');
      }
    } else {
      displayHead(`And that's...Game Over!`);
      bgColor('red');
      displayMessage('You ran out of chances 🥴');
      document.querySelector('.number').textContent = target;
      document.querySelector('.tries').textContent = 0;
    }
  }
});

//---------------------Reset function----------------------------------
document.querySelector('.again').addEventListener('click', function () {
  target = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  tries = 10;
  document.querySelector('.tries').textContent = '10';
  displayHead('Guess My Number!');
  document.querySelector('.number').textContent = '?';
  bgColor('#222');
  document.querySelector('.guess').value = '';
  textColor('#eee');
});
