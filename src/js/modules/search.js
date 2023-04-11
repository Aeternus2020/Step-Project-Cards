import { Modal } from "./modal.js";
import { visitCardiologist } from "./cardiolog.js";
import { visitDentist } from "./dentist.js";
import { visitTherapist } from "./therapist.js";
import { render } from "./script.js";
import { fetchData } from "./fetchGet.js";
fetchData()

let cardsData = JSON.parse(localStorage.getItem("cardsData"));
console.log(cardsData);



const clearBtn = document.querySelector(".clear__btn");
clearBtn.addEventListener("click", clearData);
function clearData(event) {
  event.preventDefault();
  let filterInputs = document.querySelectorAll(".inp-clear");
  filterInputs.forEach((el) => { el.value = ""; document.querySelector(".cards-holder").innerHTML = ""; });

}

const cards = document.getElementById("cards");



// ЭTO ВАРИАНТ КОГДА ВСЕ ИНПУТ И СПИСОК В ДИВЕ И ПРБЕГАЕМСЯ ПО СПИСКАМ

document.querySelectorAll(".dropdown").forEach(function (dropdownWrapper) {
  const dpopList = dropdownWrapper.querySelector(".list");
  const dropItems = dpopList.querySelectorAll(".dpopdown-item");
  const dropInput = dropdownWrapper.querySelector(".select-inp");
  dropInput.addEventListener("click", showList);

  // клик по кнопке
  function showList() {
    dpopList.classList.add("list-visible");
    this.classList.toggle("select-inp:active");
  }

  // вибір елементу списку
  dropItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      e.stopPropagation();
      dropInput.innerText = this.innerText;
      dropInput.focus();
      dropInput.value = this.dataset.value;
      filterSearch();
      dpopList.classList.remove("list-visible");
    });
  });

  // клік ззовні дропдауна
  document.addEventListener("click", function (e) {
    if (e.target !== dropInput) {
      // dropInput.classList.remove("input:active");
      dpopList.classList.remove("list-visible");
    }
  });

  // закриття списку табом чи ескейпом
  document.addEventListener("keydown", function (e) {
    if (e.key === "Tab" || e.key === "Escape") {
      // dropInput.classList.remove("input:active");
      dpopList.classList.remove("list-visible");
    }
  });
});

let searchInp = document.getElementById("search-input");

const inpUrgency = document.getElementById("urgency");
const inpStatus = document.getElementById("status");

let searchValue = "";
searchInp.oninput = (event) => {
  event.stopPropagation();
  searchValue = event.target.value;
  filterSearch();
};



async function filterSearch() {
 let filterData = [];
  document.querySelector(".cards-holder").innerHTML = "";
  cards.innerHTML = ""; // поставить div в который вставляются карточки в html
  let count = 0;
  const rgxSearch = new RegExp(searchValue.replace(/[,.\s]+/g, "\\W*"), "i");
  let rgxUrgency = new RegExp(inpUrgency.value, "i");
  if (inpUrgency.value === "All") {
    rgxUrgency = RegExp("", "i");
  }
  let rgxStatus = new RegExp(inpStatus.value, "i");
  if (inpStatus.value === "All") {
    rgxStatus = RegExp("", "i");
  }
  cardsData.forEach((card) => {
    console.log(card);
    if (
      (rgxSearch.test(card.title) || rgxSearch.test(card.description)) &&
      rgxUrgency.test(card.urgency) &&
      rgxStatus.test(card.status)
    ) {
        filterData.push(card);
      //render(card);
      //  console.log("yes");
      count++;
    }
  });
  if (count === 0) {
    cards.insertAdjacentHTML(
      "afterbegin",
      '<h2 class="search-result">No results</h2>'
    );
    }
    render(filterData)
}


