export const btnRegistration = document.querySelector('.registration');
import { cardsHolder, pulseButton, filterContainer, check } from "./login.js";
import { modalLogin } from "./loginForm.js";
import { logVal } from "./checkLogin.js";
import { foundBtn } from "../cards/create.js";

btnRegistration.addEventListener('click', () => {
    if (!document.querySelector('.login-box')) {
        const background = new modalLogin;
        background.registrationFormHeader();
        background.registrationForm();
        logVal();
        check();
        document.querySelector('.vacuum').style.display = 'none';
        document.querySelector('.login-form-btn-cancel').addEventListener('click', ()=>{
        document.querySelector('.login-box').remove();
        document.querySelector('.vacuum').style.display = 'block';
        })
    }
})