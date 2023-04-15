
import { visitCardiologist } from "./cardiolog.js"
import { visitTherapist } from "./therapist.js"
import { visitDentist } from "./dentist.js";
import { del } from "./delete.js";

export function render(arrCardData) {
    
    // let users = await getData("22272608 - 2570 - 4723 - a573 - 9e9451138488");
    arrCardData.forEach((user) => {
        if (user.doctor == 'Dentist') {
            let test = new visitDentist(user).addDentistCard();
            //return user;
        }
        else if (user.doctor == 'Cardiologist') {
            let test = new visitCardiologist(user).addCardiologistCard();
           // return user;
        } else if (user.doctor == 'Therapist') {
            let test = new visitTherapist(user).addTherapistCard();
          //  return user;
        } else {
            console.log(`Карточка з цим айді:"${user.id}", не підходить під категорії лікарів`);
            fetch(`https://ajax.test-danit.com/api/v2/cards/${user.id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
            })
        }
    });

    let btnsShowMore = document.querySelectorAll(".btn-showMore");
    let btnShowLess = document.querySelectorAll(".btn-showLess")

    btnShowLess.forEach(function (btnShowLess) {
        btnShowLess.addEventListener("click", function () {

            let btnsParent = this.parentNode;
            let btnMore = btnsParent.children[0]
            let mainParent = btnsParent.parentNode

            let hiddenPElems = mainParent.querySelectorAll("p.hidden");
            hiddenPElems.forEach(function (hiddenPElem) {
                hiddenPElem.classList.toggle("card-p-display-visible");
            });

            let btnsShowLessEdit = mainParent.querySelectorAll(".btn-showLess, .btn-edit");
            btnsShowLessEdit.forEach(function (btnShowLessEdit) {
                btnShowLessEdit.classList.toggle("hidden");
            });

            this.classList.add("hidden");
            btnMore.classList.remove("hidden")
        });
    });

    btnsShowMore.forEach(function (btnShowMore) {
        btnShowMore.addEventListener("click", function () {

            let btnsParent = this.parentNode;
            let mainParent = btnsParent.parentNode

            let hiddenPElems = mainParent.querySelectorAll("p.hidden");
            hiddenPElems.forEach(function (hiddenPElem) {
                hiddenPElem.classList.toggle("card-p-display-visible");
            });

            let btnsShowLessEdit = mainParent.querySelectorAll(".btn-showLess, .btn-edit");
            btnsShowLessEdit.forEach(function (btnShowLessEdit) {
                btnShowLessEdit.classList.toggle("hidden");
            });
            this.classList.add("hidden");
        });
    });
    del();
}
