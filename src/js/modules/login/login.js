export const btnLogin = document.querySelector('.login');
export const cardsHolder = document.querySelector('.cards-holder');
export const pulseButton = document.querySelector('.pulse-button');
export const filterContainer = document.querySelector('.field-search');
export const vacuum = document.querySelector('.vacuum');
import { modalLogin } from "./loginForm.js";
import { logVal} from "./checkLogin.js";
import { foundBtn } from "../cards/create.js";
import { btnRegistration } from "./registration.js";

btnLogin.addEventListener('click', () => {
  if (btnLogin.innerHTML === 'Logout') {
      localStorage.removeItem("token");
      localStorage.removeItem("cardsData");
      logout();
      btnLogin.innerHTML = 'Login';
      btnRegistration.style.display = 'block';
  } else {
    if (!document.querySelector('.login-box')) {
      const background = new modalLogin;
      background.loginFormHeader();
      background.loginForm();
      hide();
      logVal();
      document.querySelector('.login-form-btn-cancel')?.addEventListener('click', () => show())
  }
  }
});

//Функция скрытия блоков при открытии модального окна
export function hide() {
  cardsHolder.style.display = 'none';
  pulseButton.style.display = 'none';
  vacuum.style.display = 'none';
}

//Функция открытия блоков при закрытии модального окна
export function show() {
    document.querySelector('.login-box').remove();
    check();
}

//Функция скрытия контента при входе в аккаунт
export function login() {
  btnLogin.innerHTML = 'Logout';
  btnRegistration.style.display = 'none';
  pulseButton.style.display = 'block';
  cardsHolder.style.display = 'block';
  vacuum.style.display = 'none';
  filterContainer.style.display = 'flex';
}

//Функция открытия контента при выходе из аккаунта
export function logout() {
  cardsHolder.style.display = 'none';
  vacuum.style.display = 'block';
  pulseButton.style.display = 'none';
  filterContainer.style.display = 'none';
}  

//Функция проверки на логинизацию по кнопке
export function check() {
  if (btnLogin.innerHTML === 'Login') {
    vacuum.style.display = 'block';
  } else if (btnLogin.innerHTML === 'Logout') {
    vacuum.style.display = 'none';
  }
}

(localStorage.getItem("token")) ? login() : logout();
foundBtn();