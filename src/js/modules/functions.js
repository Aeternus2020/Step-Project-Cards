import { checkToken } from "./renderCards.js";
import { token } from "./fetchGet.js";
import { fetchData } from "./fetchGet.js";
import { login } from "./login/login.js";

export async function update() {
    await fetchData();
    checkToken();
}

//The function of getting a card by id
export function get(id) {
    fetch(`https://ajax.test-danit.com/api/v2/cards/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token()}`
        }
    })
        .then(response => response.json())
        .then(response => {
            fillInputsFromObject(response);
        })
}

//Form fill function
export function fillInputsFromObject(obj) {
    const form = document.querySelector(".form-box");
    for (const [key, value] of Object.entries(obj)) {
        const input = document.querySelector(`[name="${key}"]`);
        if (key === "doctor") {
            select(value, form);
        }
        if (input) {
            input.value = value;
            }
    }
}

 //The function of collecting information from inputs
    export function writeInputToObject(outputObj) {
    const inputElements = document.querySelector('.form-box').querySelectorAll('.user-box');
    inputElements.forEach(input => {
        const name = input.getAttribute('name');
        const value = input.value; 
        if (input.value) {
        (input.type === "number") ? outputObj[name] = +value : outputObj[name] = value;
        } 
    });
    }

//Form cleanup function
export function clear(form) {
    const inputs = form.querySelectorAll('input');
    inputs.forEach(input => {
        input.value = '';
    })
    const selects = form.querySelectorAll('select');
    selects[0].value = "Cardiologist";
    selects[1].value = "hight";
    selects[2].value = "open";
}

//Closing modal function
export function closeModal(form, box) {
    clear(form);
    box.remove();
    login();
}

//Submit Changes Function
export async function pushEdit(formObj, id) { 
    fetch(`https://ajax.test-danit.com/api/v2/cards/${id}`, {
        method: "PUT",
        headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token()}`,
        },
        body: JSON.stringify(formObj),
    })
        .then(response => response.json())
        .then(update())
        .catch(() => console.log('Error',Error));
}

//Function of sending a new card
export async function pushChange(formObj) {
    fetch(`https://ajax.test-danit.com/api/v2/cards`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token()}`
        },
            body: JSON.stringify(formObj)
        })
        .then(response => response.json())
        .then(update())
        .catch(() => console.log('Error',Error));
}

 //Doctor switching function
export function formSelect(form) {
    let doctor = form.querySelector('.doctor');
    doctor.addEventListener("change", () => {
        select(doctor.value, form);
    });
}

export function select(value, form) {
    const isCardiologist = value === "Cardiologist";
    const isDentist = value === "Dentist";

    form.querySelector('.date').style.display = isDentist ? "block" : "none";
    form.querySelector('label[for="date"]').style.display = isDentist ? "block" : "none";
    form.querySelector('.age').style.display = isDentist ? "none" : "block";
    form.querySelector('label[for="age"]').style.display = isDentist ? "none" : "block";
    form.querySelector('.index').style.display = isCardiologist ? "block" : "none";
    form.querySelector('label[for="index"]').style.display = isCardiologist ? "block" : "none";
    form.querySelector('.pressure').style.display = isCardiologist ? "block" : "none";
    form.querySelector('label[for="pressure"]').style.display = isCardiologist ? "block" : "none";
    form.querySelector('.disease').style.display = isCardiologist ? "block" : "none";
    form.querySelector('label[for="disease"]').style.display = isCardiologist ? "block" : "none";
}
