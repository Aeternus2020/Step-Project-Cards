export const btnLogin = document.querySelector('.login');
export const cardsHolder = document.querySelector('.cards-holder');
export const pulseButton = document.querySelector('.pulse-button');
export const filterContainer = document.querySelector('.field-search');
export const vacuum = document.querySelector('.vacuum');
import { modalLogin } from "./loginForm.js";
import { logVal} from "./checkLogin.js";
import { foundBtn } from "../cards/create.js";
import { btnRegistration } from "./registration.js";
let clickHandler;

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
      document.removeEventListener("click", clickHandler);
      document.querySelector('.login-form-btn-cancel')?.addEventListener('click', () => show())
  }
    clickHandler = (e) => {
    !document.querySelector(".login-box")?.contains(e.target) && !btnLogin.contains(e.target) ? show() : null;
    };
    document.addEventListener("click", clickHandler);
  }
});

//Function to hide blocks when opening a modal window
export function hide() {
  cardsHolder.style.display = 'none';
  pulseButton.style.display = 'none';
  vacuum.style.display = 'none';
  filterContainer.style.display = 'none';
}

//The function of opening blocks when closing a modal window
export function show() {
  const loginBox = document.querySelector('.login-box');
  if (loginBox) {
    document.removeEventListener("click", clickHandler);
    loginBox.remove();
  }
  check();
}


//The function of hiding content when logging into your account
export function login() {
  btnLogin.innerHTML = 'Logout';
  btnRegistration.style.display = 'none';
  pulseButton.style.display = 'block';
  cardsHolder.style.display = 'block';
  vacuum.style.display = 'none';
  filterContainer.style.display = 'flex';
}

//The function of opening content when logging out of the account
export function logout() {
  cardsHolder.style.display = 'none';
  vacuum.style.display = 'block';
  pulseButton.style.display = 'none';
  filterContainer.style.display = 'none';
}  

//The function of checking for login by button
export function check() {
  if (btnLogin.innerHTML === 'Login') {
    vacuum.style.display = 'block';
  } else if (btnLogin.innerHTML === 'Logout') {
    vacuum.style.display = 'none';
  }
}

(localStorage.getItem("token")) ? login() : logout();
foundBtn();
