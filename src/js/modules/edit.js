import { token, fetchData } from "./fetchGet.js";
import { logout, hide} from "./login.js";
import { clear, foundBtn} from "./create.js";
import { NewModal } from "./visitClass.js";
import { Modal } from "./modal.js";


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
          
            const form = document.querySelector(".form-box");
            const createBox = document.querySelector('.create-box');
            const doctor = document.querySelector('.doctor');
            const pressure = document.querySelector('.pressure');
            const index = document.querySelector('.index');
            const disease = document. querySelector('.disease');
            const age = document. querySelector('.age');
            const date = document.querySelector('.date'); 
        
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
            document.querySelector('.form-btn-cancel').addEventListener('click', (event)=> {
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
                
            })
        })
    })
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




//Функция заполнения формы
function fillInputsFromObject(obj) {
    for (const [key, value] of Object.entries(obj)) {
        const input = document.querySelector(`[name="${key}"]`);
        if (input) {
          
        input.value = value;
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
