'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉 correect nummber';

document.querySelector('.number').textContent = 10;
document.querySelector('.score').textContent = 3;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;

*/

//developing app step by step

//document.querySelector('.check').addEventListener('click'); //actually usking our check box to react on click in it

//using function to manipulate the value in check box
//(document.querySelector('.guess').value)
/*
let score = 20;
const secretNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '❌ no number';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct!';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'too high';
      score--;
      document.querySelector('body').style.backgroundColor = '#F60505';
      document.querySelector('.score').textContent = 0;
    } else {
      document.querySelector('.message').textContent = 'you have lost';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#F60505';
    }
  } else if (quess < secretNumber) {
    document.querySelector('.message').textContent = 'too low';
    score--;
    document.querySelector('body').style.backgroundColor = '#F60505';
    document.querySelector('.score').textContent = 0;
  }
});
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

//document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ enter a number';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉CORRECT';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '😏 too high';
      score = score - 10;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💀 проїбав';
      document.querySelector('body').style.backgroundColor = '#F60505';
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🙁 too low';
      score = score - 10;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💀 проїбав';
      document.querySelector('body').style.backgroundColor = '#F60505';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
});
