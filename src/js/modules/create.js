import { pulseButton, createBox, login, logout } from "./login.js";
<<<<<<< HEAD
import { token } from "./fetchGet.js";
import { render } from "./script.js";
import {clearInputs} from "./search.js"  //імпорт з мого файлу
=======
import { token, fetchData } from "./fetchGet.js";
import { render } from "./script.js";
import { filterSearch } from "./search.js"
>>>>>>> 4305a6e2c524a36864679be932b6df07b7742b27
const clearBtn = document.querySelector('.clear');
const form = document.querySelector(".form-box");
const btnCansel = document.querySelector('.form-btn-cancel');
const btnAdd = document.querySelector('.add');
const doctor = document.getElementById('doctor');
const urgency = document.getElementById('urgency');
const stat = document.getElementById('stat');
const purpose = document.getElementById('purpose');
const description = document.getElementById('description');
const pib = document.getElementById('name');
const pressure = document.getElementById('pressure');
const index = document.getElementById('index');
const disease = document.getElementById('disease');
const age = document.getElementById('age');
const date = document.getElementById('date');

let cardsData = JSON.parse(localStorage.getItem("cardsData"));

btnAdd.addEventListener('click', (event) => {
    event.preventDefault();
    btnCreate()
})

async function btnCreate() {

    await post(doctor);
    await fetchData()
    await filterSearch()
    render(cardsData)
}

function ucFirst(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
}

function clear() {
    const inputs = form.querySelectorAll('input');
    inputs.forEach(input => {
        input.value = '';
    })
    const selects = form.querySelectorAll('select');

    selects[0].value = "Dentist";
    selects[1].value = "hight";
    selects[2].value = "open";


}

async function post(doctor) {
    await fetch("https://ajax.test-danit.com/api/v2/cards", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            title: purpose.value,
            description: description.value,
            doctor: ucFirst(doctor.value),
            name: pib.value,
            urgency: urgency.value,
            status: stat.value,
            bp: +index.value,
            age: +age.value,
            weight: pressure.value,
            disease: disease.value,
            lastDate: date.value,
        })
    })
        .then(response => response.json())
        .then(response => {

            clear();
           createBox.style.display = "none"; //  модалка ховається
            login();
            clearInputs();                      // очищаються інпути фільтрації, якщо в них уже були дані
            let Newcard = [];             // пустий масив
            Newcard.push(response);  // додати результат в масив
            render(Newcard);       // показати картку
        });
    
}

clearBtn.addEventListener('click', (event) => {
    event.preventDefault();
    clear();
});

pulseButton.addEventListener('click', () => {
    createBox.style.display = 'block';
    logout();
})

btnCansel.addEventListener('click', () => {
    clear();
    createBox.style.display = 'none';
    login();
})
//----------------
let createFormInputsWrapper = document.querySelector(".create-form-input-container")
let createFormInputs = Array.from(createFormInputsWrapper.querySelectorAll("input"))
const excludedInputs = createFormInputs.slice(4);
excludedInputs.forEach(e => e.style.display = "none")


doctor.addEventListener("change", function () {
    const isCardiologist = doctor.value === "Cardiologist";
    const isDentist = doctor.value === "Dentist";
    const isTherapist = doctor.value === "Therapist";

    date.style.display = isDentist ? "block" : "none";
    age.style.display = isCardiologist || isTherapist ? "block" : "none";
    index.style.display = isCardiologist ? "block" : "none";
    pressure.style.display = isCardiologist ? "block" : "none";
    disease.style.display = isCardiologist ? "block" : "none";
});
