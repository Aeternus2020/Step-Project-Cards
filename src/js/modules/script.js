

async function getData(token) {
    return await fetch("https://ajax.test-danit.com/api/v2/cards/", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
        .then(response => response.json())
}
console.log(getData("22272608-2570-4723-a573-9e9451138488"));

let token = "22272608-2570-4723-a573-9e9451138488"





function post(doctor) {
    fetch("https://ajax.test-danit.com/api/v2/cards", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            "name": "Daniel",
            "doctor": `${doctor}`,
            "title": "Почки Нету",
            "description": "Вернуть Почку Хочу",
            "urgency": "Срочно",
            "age": "21",
            "index": "3425",
            "disease": "Не вистачає клапана",
            "pressure": "120.70",
        })
    })
        .then(response => response.json())
        .then(response => console.log(response))
}
//post("caiologist")





import { visitCardiologist } from "./cardiolog.js"
import { visitTherapist } from "./therapist.js"
import { visitDentist } from "./dentist.js"



//fetch(`https://ajax.test-danit.com/api/v2/cards/158407`, {
//    method: 'DELETE',
//    headers: {
//        'Authorization': `Bearer ${token}`
//    },
//})

async function render() {
    let users = await getData('22272608-2570-4723-a573-9e9451138488')
    users.forEach((user) => {
        if (user.doctor == 'dentist') {
            let test = new visitDentist(user).addDentistCard()
        }
        else if (user.doctor == 'cardiologist') {
            let test = new visitCardiologist(user).addCardiologistCard()
        } else if (user.doctor == 'therapist') {
            let test = new visitTherapist(user).addTherapistCard()
        } else {
            console.log(`Карточка з цим айді:"${user.id}", не підходить під категорії лікарів`);

        }
    });

    //let btnsShowMore = document.querySelectorAll(".btn-showMore");
    //let btnShowLess = document.querySelectorAll(".btn-showLess")

    //btnShowLess.forEach(function (btnShowLess) {
    //    btnShowLess.addEventListener("click", function () {

    //        let btnsParent = this.parentNode;
    //        let mainParent = btnsParent.parentNode
    //        console.log(mainParent);

    //        let hiddenPElems = mainParent.querySelectorAll("p.hidden");
    //        console.log(hiddenPElems);
    //        hiddenPElems.forEach(function (hiddenPElem) {
    //            hiddenPElem.classList.toggle("card-p-display-visible");
    //        });

    //        let btnsShowLessEdit = mainParent.querySelectorAll(".btn-showLess, .btn-edit");
    //        btnsShowLessEdit.forEach(function (btnShowLessEdit) {
    //            btnShowLessEdit.classList.toggle("hidden");
    //        });
    //        btnsShowMore.forEach(e => e.classList.remove("hidden"))
    //        this.classList.add("hidden");
    //        console.log("less");

    //    });
    //});

    //btnsShowMore.forEach(function (btnShowMore) {
    //    btnShowMore.addEventListener("click", function () {

    //        let btnsParent = this.parentNode;
    //        let mainParent = btnsParent.parentNode
    //        console.log(mainParent);

    //        let hiddenPElems = mainParent.querySelectorAll("p.hidden");
    //        console.log(hiddenPElems);
    //        hiddenPElems.forEach(function (hiddenPElem) {
    //            hiddenPElem.classList.toggle("card-p-display-visible");
    //        });

    //        let btnsShowLessEdit = mainParent.querySelectorAll(".btn-showLess, .btn-edit");
    //        btnsShowLessEdit.forEach(function (btnShowLessEdit) {
    //            btnShowLessEdit.classList.toggle("hidden");
    //        });
    //        this.classList.add("hidden");
    //        console.log("more");
    //    });
    //});

    const btnsShowMore = document.querySelectorAll(".btn-showMore");
    const btnShowLess = document.querySelectorAll(".btn-showLess");

    for (const btn of btnShowLess) {
        const btnsParent = btn.parentNode;
        const mainParent = btnsParent.parentNode;
        const hiddenPElems = mainParent.querySelectorAll("p.hidden");
        const btnsShowLessEdit = mainParent.querySelectorAll(".btn-showLess, .btn-edit");

        btn.addEventListener("click", () => {
            for (const elem of hiddenPElems) {
                elem.classList.toggle("card-p-display-visible");
            }

            for (const btnEdit of btnsShowLessEdit) {
                btnEdit.classList.toggle("hidden");
            }

            btnsShowMore.forEach(e => e.classList.remove("hidden"));
            btn.classList.add("hidden");
        });
    }

    for (const btn of btnsShowMore) {
        const btnsParent = btn.parentNode;
        const mainParent = btnsParent.parentNode;
        const hiddenPElems = mainParent.querySelectorAll("p.hidden");
        const btnsShowLessEdit = mainParent.querySelectorAll(".btn-showLess, .btn-edit");

        btn.addEventListener("click", () => {
            for (const elem of hiddenPElems) {
                elem.classList.toggle("card-p-display-visible");
            }

            for (const btnEdit of btnsShowLessEdit) {
                btnEdit.classList.toggle("hidden");
            }

            btn.classList.add("hidden");
        });
    }


}

render()


