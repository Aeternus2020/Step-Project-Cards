import { logout, hide} from "./login.js";
import { NewModal } from "./visitClass.js";
import { Modal } from "./modal.js";
import { clearInputs } from "./search.js";
import { get, writeInputToObject, clear, pushEdit, formSelect, update } from "./functions.js";

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
            let form = document.querySelector(".form-box");
            formSelect(form);
            let createBox = document.querySelector('.create-box');
            document.getElementById('push').addEventListener('click', (event)=> {
                event.preventDefault();
                // document.querySelector(".cards-holder").innerHTML = "";
                let outputObj = {};
                writeInputToObject(outputObj);
                pushEdit(outputObj, outputObj.id);
                clearInputs();
                update();
                createBox.remove();
                hide();
            })
            document.querySelector('.form-btn-cancel').addEventListener('click', ()=> {
                clear(form);
                createBox.remove();
                hide();
            })
            document.querySelector('.clear').addEventListener('click', (event)=> {
                clear(form);
                event.preventDefault();
            })
        })
    })
}
