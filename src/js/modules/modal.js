export class Modal {
    constructor(optional) {
    }

    loginForm() {
        let container = document.createElement('div');
        container.classList.add("login-box")
        let containerHtml = ` 
        <button class="login-form-btn-cancel"><img src="./img/cancel (1).svg" alt=""></button>
        <h2>Login</h2>
        `

        container.innerHTML = containerHtml;
        document.body.appendChild(container);
        return container
    }

    formEdit() {
        let container = document.createElement('div');
        container.classList.add("create-form-background")
        container.setAttribute('id', this.id);
        let containerHtml = ` 
        <div class="create-box">
        <button class="form-btn-cancel"><img src="./img/cancel (1).svg" alt=""></button>
        <h2>Edit Card</h2>
        </div>
        `

        container.innerHTML = containerHtml;
        document.body.appendChild(container);
        return container
    }
    
    formCreateEdit() {
        let container = document.createElement('div');
        container.classList.add("create-form-background")
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