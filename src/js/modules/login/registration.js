export const btnRegistration = document.querySelector('.registration');
import { hide, show } from "./login.js";
import { modalLogin } from "./loginForm.js";
import {logVal } from "./checkLogin.js";
let clickHandler;

btnRegistration.addEventListener('click', () => {
    if (!document.querySelector('.login-box')) {
        const background = new modalLogin;
        background.registrationFormHeader();
        background.registrationForm();
        hide();
        logVal();
        document.querySelector('.login-form-btn-cancel')?.addEventListener('click', () => show())
    }
    clickHandler = (e) => {
        !document.querySelector(".login-box")?.contains(e.target) && !btnRegistration.contains(e.target) ? show() : null;
        };
        document.addEventListener("click", clickHandler);
})