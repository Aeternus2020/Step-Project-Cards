import { token, fetchData } from "./fetchGet.js";
import { logout, hide} from "./login.js";
import { clear} from "./create.js";
import { NewModal } from "./visitClass.js";
import { Modal } from "./modal.js";
import { filterSearch } from "./search.js";

export function edit() {
    let editBtn = document.querySelectorAll('.btn-edit');
    editBtn.forEach(elem => {
        elem.addEventListener('click', () => {
            logout();
            let cardid = elem.parentNode.parentElement.id;
            const edit = new Modal;
            edit.formEdit();
            const editMain = new NewModal;
            editMain.formEdit();
            get(cardid);
            let createBox = document.querySelector('.create-box');
            let form = document.querySelector(".form-box");
            formSelect(form);
            document.querySelector('.form-btn-cancel').addEventListener('click', ()=> {
                clear(form);
                createBox.remove();
                hide();
            })
            form.querySelector('.clear').addEventListener('click', (event)=> {
                clear(form);
                event.preventDefault();
            })
            document.getElementById('push').addEventListener('click', (event)=> {
                event.preventDefault();
                writeInputToObject();
                hide();
                createBox.remove();
            })
        })
    })
}

export function formSelect(form) {
  let doctor = form.querySelector('.doctor');
  doctor.addEventListener("change", ()=> {
  select(doctor.value, form)})
}

//Функция получения карточки по id
function get(id) {
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


export function select(value, form) {
  const isCardiologist = value === "Cardiologist";
  const isDentist = value === "Dentist";
  const isTherapist = value === "Therapist"; 

  form.querySelector('.date').style.display = isDentist ? "block" : "none";
  form. querySelector('.age').style.display = isCardiologist || isTherapist ? "block" : "none";
  form.querySelector('.index').style.display = isCardiologist ? "block" : "none";
  form.querySelector('.pressure').style.display = isCardiologist ? "block" : "none";
  form.querySelector('.disease').style.display = isCardiologist ? "block" : "none";
}

//Функция заполнения формы
function fillInputsFromObject(obj) {
  const form = document.querySelector(".form-box");
    for (const [key, value] of Object.entries(obj)) {
        const input = document.querySelector(`[name="${key}"]`);
        if (input) {
            input.value = value;
            select(value, form);
            }
    }
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
    pushEdit(outputObj, outputObj.id);
  }

//Функция отправки изменений
async function pushEdit(formObj, id) {
    fetch(`https://ajax.test-danit.com/api/v2/cards/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token()}`,
      },
      body: JSON.stringify(formObj),
    })
  
        .then(response => response.json())
        .catch(() => console.log('Error'));
    await fetchData();
    await filterSearch();
}
