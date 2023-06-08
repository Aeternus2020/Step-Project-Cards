import { logout, login} from "../login/login.js";
import { Modal } from "./modalCards.js";
import { clearInputs } from "../search.js";
import { get, writeInputToObject, clear, pushEdit, formSelect, update } from "../functions.js";

export function edit() {
    let editBtn = document.querySelectorAll('.btn-edit');
    editBtn.forEach(elem => {
        elem.addEventListener('click', (event) => {
            event.preventDefault();
            logout();
            let cardid = elem.parentNode.parentElement.id;
            const edit = new Modal;
            edit.formHeaderEdit();
            edit.formMainEdit();
            get(cardid);
            let form = document.querySelector(".form-box");
            formSelect(form);
            let createBox = document.querySelector('.create-form-background');
            document.getElementById('push').addEventListener('click', (event)=> {
                let createFormInputsWrapper = document.querySelector(".create-form-input-container");
                let createFormInputs = Array.from(createFormInputsWrapper.querySelectorAll("input"));
            
                if (createFormInputs.some(input => input.localName === 'input' && input.style.display !== 'none' && input.value === "")) {
                    alert("Заполните все поля формы.");
                    event.preventDefault();
                } else {
                    let outputObj = {};
                    writeInputToObject(outputObj);
                    pushEdit(outputObj, outputObj.id);
                    clearInputs();
                    update();
                    createBox.remove();
                    login();
                }
            })
            document.querySelector('.clear').addEventListener('click', (event)=> {
                event.preventDefault();
                clear(form);
            })
            document.querySelector('.form-btn-cancel').addEventListener('click', ()=> {
                clear(form);
                createBox.remove();
                login()
            })
        })
    })
}
