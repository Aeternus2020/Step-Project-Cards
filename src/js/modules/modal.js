export class Modal {
    constructor(optional) {
        this.id = optional.id;
    }








    formCreateEdit() {
        let container = document.createElement('div');
        container.classList.add("create-form-background")
        container.setAttribute('id', this.id);
        let containerHtml = ` 
        <div class="create-box">
        <button class="form-btn-cancel"><img src="./img/cancel (1).svg" alt=""></button>
        <h2>Create new Card</h2>
        </div>
        `

        container.innerHTML = containerHtml;
        document.body.appendChild(container);
        return container
    }

}