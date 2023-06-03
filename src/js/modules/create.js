import { pulseButton, logout, login} from "./login.js";
import { NewModal } from "./visitClass.js";
import { Modal } from "./modal.js";
import { clearInputs } from "./search.js";
import { formSelect, writeInputToObject, clear, pushChange, update, checked} from "./functions.js";

export function foundBtn() {
    pulseButton.addEventListener('click', () => {
        logout();
        if (!document.querySelector('.create-form-background')) {
        const mod = new Modal;
        mod.formCreateEdit();
        const select = new NewModal;
        select.formCreate();
        let createFormInputsWrapper = document.querySelector(".create-form-input-container");
        let createFormInputs = Array.from(createFormInputsWrapper.querySelectorAll("input"));
        const excludedInputs = createFormInputs.slice(4);
        excludedInputs.forEach(e => e.style.display = "none");
        const form = document.querySelector(".form-box");
        formSelect(form);
        const createBox = document.querySelector('.create-form-background');
        document.querySelector('.add').addEventListener('click', (event) => {
            let createFormInputsWrapper = document.querySelector(".create-form-input-container");
            let createFormInputs = Array.from(createFormInputsWrapper.querySelectorAll("input"));
        
            if (createFormInputs.some(input => input.localName === 'input' && input.style.display !== 'none' && input.value === "")) {
                alert("Заполните все поля формы.");
                event.preventDefault();
            } else {
                let outputObj = {}; 
                writeInputToObject(outputObj);
                pushChange(outputObj);
                clearInputs();
                update();
                createBox.remove();
                login();
            }
        });
        
        document.querySelector('.clear').addEventListener('click', (event) => {
            event.preventDefault();
            clear(form);
        });
        document.querySelector('.form-btn-cancel').addEventListener('click', () => {
            clear(form);
            createBox.remove();
            login()
        })
    }
    })
}