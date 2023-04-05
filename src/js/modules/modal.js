export class Modal {
    constructor(optional) {
        this.doctor = optional.doctor;
        this.name = optional.name;
        this.id = optional.id;
        this.title = optional.title;
        this.description = optional.description;
        this.urgency = optional.urgency;
    }



    printCard() {
        let container = document.createElement('div');
        container.classList.add("card-container")
        container.setAttribute('id', this.id);
        let textPart = ` 
        <div class="card-container-p">
        <p>${this.name}</p>
        <p>${this.doctor}</p>
        <button class="card-container-btn-cancel"><img src="./img/cancel (1).svg" alt=""></button>
        <p class="hidden"><img src="./img/Star 1.svg" alt="">${this.urgency}</p>
        <p class="hidden"><img src="./img/Star 1.svg" alt="">Мета візиту:${this.title}</p>
        <p class="hidden"><img src="./img/Star 1.svg" alt="">Опис візиту:${this.description}</p> 
        </div>
        `
        let btnsPart = `<div class="btns-card-container">
        <button class="btn-showMore">SHOW MORE...</button>
        <button class="btn-showLess hidden">HIDE</button>
        <button class="btn-edit hidden">EDIT</button>
    </div>`
        container.innerHTML = textPart + btnsPart;
        let cardHolder = document.querySelector(".cards-holder")
        cardHolder.appendChild(container);
        return container
    }

    createCard() {
        let container = document.createElement('div');
        container.classList.add("container", "card-container")
        container.setAttribute('id', this.id);
        let containerHtml = ` 
        <div class="dropdown">
        <input class="dropdown-toggle" type="text">
        <div class="dropdown-text">Doctor</div>
        <ul class="dropdown-content">
        <li><a href="#">Cardiologist</a></li>
        <li><a href="#">Therapist</a></li>
        <li><a href="#">Dentist</a></li>
        </ul>
        </div>
        <input id="name" type="text" placeholder="name">
        <input id="purpose" type="text" placeholder="purpose">
        <input id="description" type="text" placeholder="description">
        <input id="urgency" type="text" placeholder="urgency">
        `

            ;
        container.innerHTML = containerHtml;
        document.body.appendChild(container);
        return container
    }

}