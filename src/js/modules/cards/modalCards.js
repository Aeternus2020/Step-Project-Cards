    export class Modal {
    constructor() {}

    //Draw the header of the card change form
    formHeaderEdit() {
        let container = document.createElement("div");
        container.classList.add("create-form-background");
        container.setAttribute("id", this.id);
        let containerHtml = ` 
            <div class="create-box">
            <button class="form-btn-cancel"><img src="./img/cancel (1).svg" alt=""></button>
            <h2>Edit Card</h2>
            </div>
            `;
        container.innerHTML = containerHtml;
        document.body.appendChild(container);
        return container;
    }

    //Draw the card change form
    formMainEdit() {
        let cont = document.createElement("div");
        cont.classList.add("login-box");
        cont.classList.add("create-box");
        cont.classList.add("edit-box");
        let formm = ` <form action="#" class="form-box">
            <div class="create-form-select-container">
                <select name="doctor" class="doctor user-box" required="required">
                    <option value="Dentist">Dentist</option>
                    <option value="Cardiologist">Cardiologist</option>
                    <option value="Therapist">Therapist</option>
                </select>
                <select name="urgency" class="urgency user-box" required="required">
                    <option value="Hight">High</option>
                    <option value="Normal">Normal</option>
                    <option value="Low">Low</option>
                </select>
                <select name="status" class="stat user-box" required="required">
                    <option value="Open">Open</option>
                    <option value="Done">Done</option>
                </select>
            </div>
            <div class="create-form-input-container">
            <label for="title" class="user-box">Visit Title:</label>
            <input type="text" name="title" id="title" class="title user-box" placeholder="Visit Title:">
            
            <label for="description" class="user-box">Short Description:</label>
            <input type="text" name="description" id="description" class="description user-box" placeholder="Short Description:">
            
            <label for="name" class="user-box">Full Name:</label>
            <input type="text" name="name" id="name" class="name user-box" placeholder="Full Name:">
            
            <label for="date" class="user-box">Last Visit Date:</label>
            <input type="date" name="date" id="date" class="date user-box" placeholder="Last Visit Date:">
            
            <label for="pressure" class="user-box">Normal Blood Pressure:</label>
            <input type="text" name="pressure" id="pressure" class="pressure user-box" placeholder="Normal Blood Pressure:">
            
            <label for="index" class="user-box">Body Mass Index:</label>
            <input type="number" name="index" id="index" class="index user-box" placeholder="Body Mass Index:">
            
            <label for="disease" class="user-box">Previous Diseases:</label>
            <input type="text" name="disease" id="disease" class="disease user-box" placeholder="Previous Diseases:">
            
            <label for="age">Age:</label>
            <input type="number" name="age" id="age" class="age user-box" placeholder="Age:">
                
            <div required type="number" name="id" class="id user-box" style="display: none">
            
            </div>
            <div class="create-form-btn-container">
                <button id="push" class="btn-add-form-create">
                    Edit
                </button>
                <button class="clear btn-clear-form-create">
                    Clear</button>
            </div>
        </form>`;
        document
        .querySelector(".create-box")
        .insertAdjacentHTML("beforeend", formm);
    }

    //Draw the title of the card creation form
    formHeaderCreate() {
        let container = document.createElement("div");
        container.classList.add("create-form-background");
        let containerHtml = ` 
            <div class="create-box">
            <button class="form-btn-cancel"><img src="./img/cancel (1).svg" alt=""></button>
            <h2>Create new Card</h2>
            </div>
            `;
        container.innerHTML = containerHtml;
        document.body.appendChild(container);
        return container;
    }

    //Draw the card creation form
    formMainCreate() {
        let content = ` <form action="#" class="form-box">
            <div class="create-form-select-container">
                <select name="doctor" class="doctor user-box" required="required">
                    <option value="Dentist">Dentist</option>
                    <option value="Cardiologist">Cardiologist</option>
                    <option value="Therapist">Therapist</option>
                </select>
                <select name="urgency" class="urgency user-box" required="required">
                    <option value="Hight">High</option>
                    <option value="Normal">Normal</option>
                    <option value="Low">Low</option>
                </select>
                <select name="status" class="stat user-box" required="required">
                    <option value="Open">Open</option>
                    <option value="Done">Done</option>
                </select>
            </div>
            <div class="create-form-input-container">
            <label for="title" class="user-box">Visit Title:</label>
            <input type="text" name="title" id="title" class="title user-box" placeholder="Visit Title:" maxlength="30">
            
            <label for="description" class="user-box">Short Description:</label>
            <input type="text" name="description" id="description" class="description user-box" placeholder="Short Description:" maxlength="35">
            
            <label for="name" class="user-box">Full Name:</label>
            <input type="text" name="name" id="name" class="name user-box" placeholder="Full Name:" maxlength="20">
            
            <label for="date" class="user-box">Last Visit Date:</label>
            <input type="date" name="date" id="date" class="date user-box" placeholder="Last Visit Date:">
            
            <label for="pressure" class="user-box">Normal Blood Pressure:</label>
            <input type="text" name="pressure" id="pressure" class="pressure user-box" placeholder="Normal Blood Pressure:" maxlength="10">
            
            <label for="index" class="user-box">Body Mass Index:</label>
            <input type="number" name="index" id="index" class="index user-box" placeholder="Body Mass Index:" maxlength="2">
            
            <label for="disease" class="user-box">Previous Diseases:</label>
            <input type="text" name="disease" id="disease" class="disease user-box" placeholder="Previous Diseases:" maxlength="7">
            
            <label for="age">Age:</label>
            <input type="number" name="age" id="age" class="age user-box" placeholder="Age:" maxlength="3">

            </div>
            <div class="create-form-btn-container">
                <button class="add btn-add-form-create">
                    Create
                </button>
                <button class="clear btn-clear-form-create">
                    Clear</button>
            </div>
        </form>`;
        document
        .querySelector(".create-box")
        .insertAdjacentHTML("beforeend", content);
    }
    }
