import { pulseButton, createBox, login, logout } from "./login.js";
import { token } from "./fetchGet.js";
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

btnAdd.addEventListener('click', (event) => {
    event.preventDefault();
    post(doctor);
})

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
    selects.forEach(select => {
        select.value =" ";
    })
    }

    function post(doctor) {
        fetch("https://ajax.test-danit.com/api/v2/cards", {
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
                console.log(response);
                console.log(response.doctor);
                clear();
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

btnCansel.addEventListener('click', ()=> {
    clear();
    createBox.style.display = 'none';
    login();
})
