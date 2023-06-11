import { pulseButton, logout, login } from "../login/login.js";
import { Modal } from "./modalCards.js";
import { clearInputs } from "../search.js";
import { formSelect, writeInputToObject, clear, pushChange, select } from "../functions.js";

export function foundBtn() {
    pulseButton.addEventListener('click', () => {
      logout();
      if (!document.querySelector('.create-form-background')) {
        const mod = new Modal();
        mod.formHeaderCreate();
        mod.formMainCreate();
        let createFormInputsWrapper = document.querySelector(".create-form-input-container");
        let createFormInputs = Array.from(createFormInputsWrapper.querySelectorAll("input"));
        const excludedInputs = createFormInputs.slice(4);
        excludedInputs.forEach(e => e.style.display = "none");
        const form = document.querySelector(".form-box");
        formSelect(form);
        select("Dentist", form)
        const createBox = document.querySelector('.create-form-background');
        document.querySelector('.add').addEventListener('click', (event) => {
          let createFormInputsWrapper = document.querySelector(".create-form-input-container");
          let createFormInputs = Array.from(createFormInputsWrapper.querySelectorAll("input"));

            const inputElements = createFormInputsWrapper.querySelectorAll('input');
            const labelElements = createFormInputsWrapper.querySelectorAll('label');
            console.log(inputElements, labelElements)
            inputElements.forEach(input => {
            input.addEventListener('input', () => {
                const inputId = input.id;
                const correspondingLabel = Array.from(labelElements).find(label => label.getAttribute('for') === inputId);
                if (correspondingLabel) {
                    console.log(inputId)
                }
            });
            });

          if (createFormInputs.some(input => input.localName === 'input' && input.style.display !== 'none' && input.value === "")) {
            alert("Заполните все поля формы.");
            event.preventDefault();
          } else {
            let outputObj = {};
            writeInputToObject(outputObj);
            pushChange(outputObj);
            clearInputs();
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
          login();
        });
      }
    });
  }
  