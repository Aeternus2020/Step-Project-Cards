import { login, hide} from "../login/login.js";
import { Modal } from "./modalCards.js";
import { clearInputs } from "../search.js";
import { get, writeInputToObject, clear, pushEdit, formSelect, closeModal } from "../functions.js";

export function edit() {
    let editBtn = document.querySelectorAll('.btn-edit');
    editBtn.forEach(elem => {
        elem.addEventListener('click', (event) => {
            event.preventDefault();
            hide();
            let cardid = elem.parentNode.parentElement.id;
            const edit = new Modal();
            edit.formHeaderEdit();
            edit.formMainEdit();
            get(cardid);
            let form = document.querySelector(".form-box");
            formSelect(form);
            let createBox = document.querySelector('.create-form-background');
                
                const clickHandler = (e) => {
                    if (!document.querySelector(".create-box").contains(e.target) && !elem.contains(e.target)) {
                    document.removeEventListener("click", clickHandler);
                    closeModal(form, createBox);
                    }
                };
            
                document.addEventListener("click", clickHandler);
                
                document.getElementById('push').addEventListener('click', (event) => {
                    let createFormInputsWrapper = document.querySelector(".create-form-input-container");
                    let createFormInputs = Array.from(createFormInputsWrapper.querySelectorAll("input"));
                
                    const inputElements = createFormInputsWrapper.querySelectorAll('input');
                    const labelElements = createFormInputsWrapper.querySelectorAll('label');
                    let shouldPreventDefault = false;
                
                    inputElements.forEach(input => {
                    if (input.style.display !== 'none') {
                        const inputId = input.id;
                        const correspondingLabel = Array.from(labelElements).find(label => label.getAttribute('for') === inputId);
                        if (correspondingLabel) {
                        if (input.value === "") {
                            correspondingLabel.innerHTML = "Fill in the form field";
                            shouldPreventDefault = true;
                        } else {
                            correspondingLabel.innerHTML = input.placeholder;
                        }
                        }
                    }
                    });
                
                    (createFormInputs.some(input => input.localName === 'input' && input.style.display !== 'none' && input.value === "")) ? shouldPreventDefault = true : null
                
                    if (shouldPreventDefault) {
                    event.preventDefault();
                    } else {
                        let outputObj = {};
                        writeInputToObject(outputObj);
                        pushEdit(outputObj, outputObj.id);
                        clearInputs();
                        createBox.remove();
                        login();
                        document.removeEventListener("click", clickHandler);
                    }
                });

            document.querySelector('.clear').addEventListener('click', (event) => {
                event.preventDefault();
                clear(form);
            });

            document.querySelector('.form-btn-cancel').addEventListener('click', () => {closeModal(form, createBox); document.removeEventListener("click", clickHandler)});
        });
    });
}

