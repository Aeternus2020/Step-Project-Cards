export class Visit  {
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
        <p class="hidden"><img src="./img/Star 1.svg" alt=""> The purpose of the visit: ${this.title}</p>
        <p class="hidden"><img src="./img/Star 1.svg" alt=""> Description of the visit: ${this.description}</p> 
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
}
