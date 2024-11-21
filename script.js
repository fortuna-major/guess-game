'use strict';
/*
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCLoseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');
console.log(btnShowModal);
/*
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
const showModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnShowModal.length; i++)
  btnShowModal[i].addEventListener('click', showModal);
btnCLoseModal.addEventListener('click', closeModal);
//прибрати вікно клікнувши за межами його
overlay.addEventListener('click', closeModal);
*/
/* function () {
    console.log('Button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  }); */
/*
//const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCLoseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');

//to open modal
const showModal = modalId => {
  const modal = document.getElementById(modalId);
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//to close model
const closeModal = modalId => {
  const modal = document.getElementById(modalId);
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

//event listener to open button
openButton.forEach(button => {
  button.addEventListener('click', () => {
    const target = button.getAttribute('data-target');
    showModal(target);
  });
});

//event listener for close buttons

closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    const target = button.getAttribute('data-target');
    closeModal(target);
  });
});

//close when click on overlay

overlay.addEventListener('click', () => {
  document.querySelectorAll('.modal').forEach(modal => {
    modal.classList.add('hidden');
  });
  overlay.classList.add('hidden');
});
*/

// Select elements
const showButtons = document.querySelectorAll('.show-modal');
const closeButtons = document.querySelectorAll('.close-modal');
const overlay = document.querySelector('.overlay');

// Function to open modal
const showModal = modalId => {
  const modal = document.getElementById(modalId);
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// Function to close modal
const closeModal = modalId => {
  const modal = document.getElementById(modalId);
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Attach event listeners to showModalons
showButtons.forEach(button => {
  button.addEventListener('click', () => {
    const target = button.getAttribute('data-target');
    showModal(target);
  });
});

// Attach event listeners to close buttons
closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    const target = button.getAttribute('data-target');
    closeModal(target);
  });
});

// Close modal when clicking on the overlay
overlay.addEventListener('click', () => {
  document.querySelectorAll('.modal').forEach(modal => {
    modal.classList.add('hidden');
  });
  overlay.classList.add('hidden');
});
