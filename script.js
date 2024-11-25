'use strict';
//selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0; //it`s need to be outside switchPlayer function
let activePlayer = 0;
let playing = true;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;

  //to change background with active player
  player0El.classList.toggle('player-active');
  player1El.classList.toggle('player-active');
};
//rolling dice functionality
btnRoll.addEventListener('click', function () {
  //generating a random dice roll
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;

    //display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //check for rolled 1: if true
    if (dice !== 1) {
      //add dice to current score
      currentScore += dice; //currentScore= currentScore + dice
      //  current0El.textContent = currentScore;//set the score not dynamicaly
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore; //select the score dynamicaly based on witch the active player right now
    } else {
      //switch to next player
      switchPlayer();
    }
  }
});
//implement the hold button
btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    //scores[1] = scores[1] + currentScore

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 20) {
      playing = false;

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

//button new game logic
btnNew.addEventListener('click', function () {
  //get all elements to 0 point
  scores[0] = 0;
  scores[1] = 0;
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  //set all numbers to 0 point
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  //erase previous classes from players
  player0El.classList.remove('player--winner', 'player--active');
  player1El.classList.remove('player--winner', 'player--active');

  //to start with 0 player
  player0El.classList.add('player--active');
});
