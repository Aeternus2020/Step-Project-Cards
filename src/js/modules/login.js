
export const btnLogin = document.querySelector('.login');
export const cardsHolder = document.querySelector('.cards-holder');
export const pulseButton = document.querySelector('.pulse-button');
export const filterContainer = document.querySelector('.field-search');
import { NewModal } from "./visitClass.js";
import { Modal } from "./modal.js";
import { logVal } from "./checkLogin.js";

btnLogin.addEventListener('click', () => {
  const background = new Modal;
  background.loginForm();
  const log = new NewModal;
  log.loginForm();
  logVal();
  check();
  document.querySelector('.login-form-btn-cancel').addEventListener('click', ()=>{
    document.querySelector('.login-box').remove();
  })
});

function check() {
  if (btnLogin.value = 'Login') {
    document.querySelector('.vacuum').style.display = 'none';
    logout();
  } else if ((btnLogin.value = 'Logout')) {
    document.querySelector('.login-box').remove();
  }
}
export function hide() {
  btnLogin.value = 'Logout';
  cardsHolder.style.display = 'block';
  pulseButton.style.display = 'block';
  filterContainer.style.display = 'flex';
}

export function login() {
  hide();
  document.querySelector('.login-box').remove();
}

export function logout() {
  cardsHolder.style.display = 'none';
  pulseButton.style.display = 'none';
  filterContainer.style.display = 'none';
}
logout();