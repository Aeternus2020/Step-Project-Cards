import { pulseButton, createBox, login, logout } from "./login.js";
const clearBtn = document.querySelector('.clear');
const form = document.querySelector(".form-box");
const btnCansel = document.querySelector('.form-btn-cancel');

function clear() {
    const inputs = form.querySelectorAll('input');
    inputs.forEach(input => {
        input.value = '';
    })
    const selects = form.querySelectorAll('select');
    selects.forEach(select => {
        select.value = " ";
    })
    }

clearBtn.addEventListener('click', (event) => {
    event.preventDefault();
    clear();
});

pulseButton.addEventListener('click', () => {
    createBox.style.display = 'block';
    logout();
})

btnCansel.addEventListener('click', ()=> {
    clear();
    createBox.style.display = 'none';
    login();
})
