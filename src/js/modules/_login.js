'use strict';

const username = document.getElementById('username');
const password = document.getElementById('password');
const btnLogin = document.querySelector('.login');
const cardsHolder = document.querySelector('.cards-holder');
const loginBox = document.querySelector('.login-box');
const pulseButton = document.querySelector('.pulse-button');
const filterContainer = document.querySelector('.filter-container');

document.querySelector('.sub').addEventListener('click', (event) => {
  event.preventDefault();
  username.value && password.value ? login() : logout();
});

btnLogin.addEventListener('click', () => {
  if ((btnLogin.value = 'Login')) {
    document.querySelector('.vacuum').style.display = 'none';
    loginBox.style.display = 'block';
    username.value = '';
    password.value = '';
    logout();
  } else if ((btnLogin.value = 'Logout')) {
    loginBox.style.display = 'none';
  }
});

window.addEventListener('click', (e) => {
  let trg = e.target;
  if (trg !== loginBox && !loginBox.contains(trg) && trg !== btnLogin && !btnLogin.contains(trg)
  ) {
    loginBox.style.display = 'none';
  }
});

function login() {
  btnLogin.value = 'Logout';
  loginBox.style.display = 'none';
  cardsHolder.style.display = 'block';
  pulseButton.style.display = 'block';
  filterContainer.style.display = 'block';
}

function logout() {
  btnLogin.value = 'Login';
  cardsHolder.style.display = 'none';
  pulseButton.style.display = 'none';
  filterContainer.style.display = 'none';
}

logout();
