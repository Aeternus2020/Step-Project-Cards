export class Modal {
  constructor() {}

  //Отрисовать заголовок формы изменения карточки
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

  //Отрисовать форму изменения карточки
  formMainEdit() {
    let cont = document.createElement("div");
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
            <label for="title">Visit Title:</label>
            <input required type="text" name="title" id="title" class="title user-box">
            
            <label for="description">Short Description:</label>
            <input required type="text" name="description" id="description" class="description user-box">
            
            <label for="name">Full Name:</label>
            <input required type="text" name="name" id="name" class="name user-box" >
            
            <label for="date">Last Visit Date:</label>
            <input required type="date" name="date" id="date" class="date user-box" >
            
            <label for="pressure">Normal Blood Pressure:</label>
            <input required type="text" name="pressure" id="pressure" class="pressure user-box" >
            
            <label for="index">Body Mass Index:</label>
            <input required type="number" name="index" id="index" class="index user-box" >
            
            <label for="disease">Previous Diseases:</label>
            <input required type="text" name="disease" id="disease" class="disease user-box" >
            
            <label for="age">Age:</label>
            <input required type="number" name="age" id="age" class="age user-box" >
            
            <input required type="number" name="id" class="id user-box" style="display: none">
        
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
  //Отрисовать заголовок формы создания карточки
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
        <label for="title" class="user-box">Visit Title:</label>
        <input type="text" name="title" id="title" class="title user-box">
        
        <label for="description" class="user-box">Short Description:</label>
        <input type="text" name="description" id="description" class="description user-box">
        
        <label for="name" class="user-box">Full Name:</label>
        <input type="text" name="name" id="name" class="name user-box" >
        
        <label for="date" class="user-box">Last Visit Date:</label>
        <input type="date" name="date" id="date" class="date user-box" >
        
        <label for="pressure" class="user-box">Normal Blood Pressure:</label>
        <input type="text" name="pressure" id="pressure" class="pressure user-box" >
        
        <label for="index" class="user-box">Body Mass Index:</label>
        <input type="number" name="index" id="index" class="index user-box" >
        
        <label for="disease" class="user-box">Previous Diseases:</label>
        <input type="text" name="disease" id="disease" class="disease user-box" >
        
        <label for="age">Age:</label>
        <input type="number" name="age" id="age" class="age user-box" >

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
