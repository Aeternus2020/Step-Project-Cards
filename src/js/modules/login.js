import { del } from "./delete.js";
import { del } from "./delete.js";

const username = document.getElementById('username');
const password = document.getElementById('password');
export const btnLogin = document.querySelector('.login');
export const cardsHolder = document.querySelector('.cards-holder');
export const loginBox = document.querySelector('.login-box');
export const pulseButton = document.querySelector('.pulse-button');
export const filterContainer = document.querySelector('.field-search');
export const createBox = document.querySelector('.create-box');

document.querySelector('.login-form-btn-cancel').addEventListener('click', (event) => {
  loginBox.style.display = 'none';
});

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
    createBox.style.display = 'none';
    createBox.style.display = 'none';
  } else if ((btnLogin.value = 'Logout')) {
    loginBox.style.display = 'none';
  }
});


export function login() {
export function login() {
  btnLogin.value = 'Logout';
  loginBox.style.display = 'none';
  cardsHolder.style.display = 'block';
  pulseButton.style.display = 'block';
  filterContainer.style.display = 'flex';
  del();
  del();
}

export function logout() {
export function logout() {
  cardsHolder.style.display = 'none';
  pulseButton.style.display = 'none';
  filterContainer.style.display = 'none';
}

logout();
