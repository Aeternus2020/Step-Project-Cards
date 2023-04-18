import { pulseButton, logout, hide } from "./login.js";
import { token, fetchData } from "./fetchGet.js";
import { render } from "./script.js";
import { filterSearch } from "./search.js";
import { NewModal } from "./visitClass.js";
import { Modal } from "./modal.js";
import { clearInputs } from "./search.js";
import { login } from "./login.js";



export function foundBtn() {
    pulseButton.addEventListener('click', () => {
        logout();
        const mod = new Modal;
        mod.formCreateEdit();
        const select = new NewModal;
        select.formCreate();
        let createFormInputsWrapper = document.querySelector(".create-form-input-container");
        let createFormInputs = Array.from(createFormInputsWrapper.querySelectorAll("input"));
        const doctor = document.querySelector('.doctor');
        const pressure = document.querySelector('.pressure');
        const index = document.querySelector('.index');
        const disease = document. querySelector('.disease');
        const age = document. querySelector('.age');
        const date = document.querySelector('.date');
        const excludedInputs = createFormInputs.slice(4);
        excludedInputs.forEach(e => e.style.display = "none");
        doctor.addEventListener("change", () => {
            const isCardiologist = doctor.value === "Cardiologist";
            const isDentist = doctor.value === "Dentist";
            const isTherapist = doctor.value === "Therapist";
        
            date.style.display = isDentist ? "block" : "none";
            age.style.display = isCardiologist || isTherapist ? "block" : "none";
            index.style.display = isCardiologist ? "block" : "none";
            pressure.style.display = isCardiologist ? "block" : "none";
            disease.style.display = isCardiologist ? "block" : "none";
        });
        found();
    })
}

function found() {
    const clearBtn = document.querySelector('.clear');
    const form = document.querySelector(".form-box");
    const btnCansel = document.querySelector('.form-btn-cancel');
    const btnAdd = document.querySelector('.add');
    
    btnAdd.addEventListener('click', (event) => {
        event.preventDefault();
        writeInputToObject();
        btnCreate();
    })
    
    async function btnCreate() {
        await fetchData();
    }
    
    clearBtn.addEventListener('click', (event) => {
        event.preventDefault();
        clear(form);
    });
    
    btnCansel.addEventListener('click', () => {
        const createBox = document.querySelector('.create-box');
        clear(form);
        createBox.remove();
        hide();
    })
}

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

 //Функция сбора информации из инпутов
function writeInputToObject() {
    const inputElements = document.querySelector('.form-box').querySelectorAll('.user-box');
    const outputObj = {}; 
  
    inputElements.forEach(input => {
      const name = input.getAttribute('name');
      const value = input.value; 
      if (input.value) {
        (input.type === "number") ? outputObj[name] = +value : outputObj[name] = value;
      } else {
        outputObj[name] = "Інформація відсутня";
      }
    });
    pushChange(outputObj);
  }

    //Функция отправки карточки
    function pushChange(formObj) {
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


            
                document.querySelector(".create-box").remove();
                hide(); // закриває модалку
                clearInputs();// очищаються інпути фільтрації, якщо в них уже були дані
                console.log('1');
                let Newcard = [];             // пустий масив
                console.log("2");
                Newcard.push(response);  // додати результат в масив
                console.log(Newcard);
            render(Newcard);       // показати картку
        })
           .catch(() => console.log('Error',Error));
    }

