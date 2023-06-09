import { Visit } from "../modalVisit.js";

export class visitCardiologist extends Visit {
    constructor(optional) {
        super(optional)
        this.index = optional.index
        this.disease = optional.disease
        this.pressure = optional.pressure
        this.age = optional.age
    }

    addCardiologistCard() {
        const card = super.printCard();
        const variables = [
            { name: 'Age', value: this.age },
            { name: 'BMIndex', value: this.index },
            { name: 'Disease', value: this.disease },
            { name: 'Pressure', value: this.pressure }
        ];
        variables.forEach(variable => {
            const element = document.createElement('p');
            const imgSrc = './img/Star 1.svg';
            element.innerHTML = `<img src="${imgSrc}" alt=""> ${variable.name}: ${variable.value}`;
            element.classList.add(variable.name, "hidden");
            card.children[0].append(element);
        });
    }
}