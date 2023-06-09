import { Visit } from "../modalVisit.js";

export class visitDentist extends Visit {
    constructor(optional) {
        super(optional)
        this.date = optional.date
    }

    addDentistCard() {
        let card = super.printCard()
        let lastDate = document.createElement('p');
        const imgSrc = './img/Star 1.svg';
        lastDate.innerHTML = `<img src="${imgSrc}" alt=""> Date of last visit: ${this.date}`;
        lastDate.classList.add("date", "hidden")
        card.children[0].append(lastDate)
    }

}