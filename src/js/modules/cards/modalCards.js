export class Modal {
    constructor() {
    }

    //Отрисовать заголовок формы изменения карточки
    formHeaderEdit() {
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

    //Отрисовать форму изменения карточки
    formMainEdit() {
        let cont = document.createElement('div');
        cont.classList.add("login-box");
        cont.classList.add("create-box");
        cont.classList.add("edit-box");
        let formm = ` <form action="#" class="form-box">
        <div class="create-form-select-container">
            <select name="doctor" class="doctor user-box" required="required">
                <option value="Dentist">Стоматолог</option>
                <option value="Cardiologist">Кардіолог</option>
                <option value="Therapist">Терапевт</option>
            </select>
            <select name="urgency" class="urgency user-box" required="required">
                <option value="hight">High</option>
                <option value="normal">Normal</option>
                <option value="low">Low</option>
            </select>
            <select name="status" class="stat user-box" required="required">
                <option value="open">Open</option>
                <option value="done">Done</option>
            </select>
        </div>
        <div class="create-form-input-container">
            <input required type="text" name="title" class="title user-box" placeholder="Мета візиту">
            <input required="required" type="text" name="description" class="description user-box" placeholder="Короткий опис візиту">
            <input required="required" type="text" name="name" class="name user-box" placeholder="ПІБ">
            <input required="required" type="date" name="date" class="date user-box" placeholder="Дата останнього відвідування">
            <input required="required" type="text" name="pressure" class="pressure user-box" placeholder="Звичайний тиск">
            <input required="required" type="number" name="index" class="index user-box" placeholder="Індекс маси тіла">
            <input required="required" type="text" name="disease" class="disease user-box" placeholder="Перенесені захворювання">
            <input required="required" type="number" name="age" class="age user-box" placeholder="Вік">
            <input required="required" type="number" name="id" class="id user-box" style="display: none">
        </div>
        <div class="create-form-btn-container">
            <button id="push" class="btn-add-form-create">
                Edit
            </button>
            <button class="clear btn-clear-form-create">
                Clear</button>
        </div>
    </form>`
            document.querySelector('.create-box').insertAdjacentHTML('beforeend', formm);
    }
    //Отрисовать заголовок формы создания карточки
    formHeaderCreate() {
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

    //Отрисовать форму создания карточки
    formMainCreate() {
        let content = ` <form action="#" class="form-box">
        <div class="create-form-select-container">
            <select name="doctor" class="doctor user-box" required="required">
                <option value="Dentist">Стоматолог</option>
                <option value="Cardiologist">Кардіолог</option>
                <option value="Therapist">Терапевт</option>
            </select>
            <select name="urgency" class="urgency user-box" required="required">
                <option value="hight">High</option>
                <option value="normal">Normal</option>
                <option value="low">Low</option>
            </select>
            <select name="status" class="stat user-box" required="required">
                <option value="open">Open</option>
                <option value="done">Done</option>
            </select>
        </div>
        <div class="create-form-input-container">
            <input type="text" name="title" class="title user-box" placeholder="Мета візиту">
            <input type="text" name="description" class="description user-box" placeholder="Короткий опис візиту">
            <input type="text" name="name" class="name user-box" placeholder="ПІБ">
            <input type="date" name="date" class="date user-box" placeholder="Дата останнього відвідування">
            <input type="text" name="pressure" class="pressure user-box" placeholder="Звичайний тиск">
            <input type="number" name="index" class="index user-box" placeholder="Індекс маси тіла">
            <input type="text" name="disease" class="disease user-box" placeholder="Перенесені захворювання">
            <input type="number" name="age" class="age user-box" placeholder="Вік">
        </div>
        <div class="create-form-btn-container">
            <button class="add btn-add-form-create">
                Create
            </button>
            <button class="clear btn-clear-form-create">
                Clear</button>
        </div>
    </form>`
        document.querySelector('.create-box').insertAdjacentHTML('beforeend', content);
    }
}