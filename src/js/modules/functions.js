import { filterSearch } from "./search.js";
import {token} from "./fetchGet.js";

export async function update() {
    await filterSearch();
}

//Функция получения карточки по id
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

//Функция заполнения формы
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

 //Функция сбора информации из инпутов
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

//Функция очистки  формы
export function clear(form) {
    const inputs = form.querySelectorAll('input');
    inputs.forEach(input => {
        input.value = '';
    })
    const selects = form.querySelectorAll('select');
    selects[0].value = "Dentist";
    selects[1].value = "hight";
    selects[2].value = "open";
}

//Функция отправки изменений
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
        .then(response => {
            const parseCards = JSON.parse(localStorage.getItem("cardsData"));
            const cardIndex = parseCards.findIndex(card => card.id === id);
            if (cardIndex !== -1) {
                parseCards.splice(cardIndex, 1);
            }
            parseCards.push(response);
            localStorage.setItem("cardsData", JSON.stringify(parseCards));
            update();
        })
        .catch(() => console.log('Error'));
}

//Функция отправки новой карточки
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
        .then(response => {
            const parseCards = JSON.parse(localStorage.getItem("cardsData")); 
            parseCards.push(response);
            localStorage.setItem("cardsData", JSON.stringify(parseCards));
            update();
        })
        .catch(() => console.log('Error',Error));
}

export function formSelect(form) {
    let doctor = form.querySelector('.doctor');
    doctor.addEventListener("change", ()=> {
    select(doctor.value, form)})
}

export function select(value, form) {
    const isCardiologist = value === "Cardiologist";
    const isDentist = value === "Dentist";

    form.querySelector('.date').style.display = isDentist ? "block" : "none";
    form. querySelector('.age').style.display = isDentist ? "none":"block" ;
    form.querySelector('.index').style.display = isCardiologist ? "block" : "none";
    form.querySelector('.pressure').style.display = isCardiologist ? "block" : "none";
    form.querySelector('.disease').style.display = isCardiologist ? "block" : "none";
}
