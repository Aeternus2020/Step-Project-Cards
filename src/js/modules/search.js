import { render } from "./renderCards.js";

const clearBtn = document.querySelector(".clear__btn");
clearBtn.addEventListener("click", clearData);
function clearData(event) {
    event.preventDefault();
    let filterInputs = document.querySelectorAll(".inp-clear");
    filterInputs.forEach((el) => {
        el.value = "";
        document.querySelector(".cards-holder").innerHTML = "";
        cards.innerHTML = "";
        searchValue = "";
    });

}

export function clearInputs() {
  let filterInputs = document.querySelectorAll(".inp-clear");
  filterInputs.forEach((el) => {
    el.value = "";
    document.querySelector(".cards-holder").innerHTML = "";
    cards.innerHTML = "";
    searchValue = "";
  }) }
const cards = document.getElementById("cards");

//Linked dropdowns 
document.querySelectorAll(".dropdown").forEach(function (dropdownWrapper) {
    const dpopList = dropdownWrapper.querySelector(".list");
    const dropItems = dpopList.querySelectorAll(".dpopdown-item");
    const dropInput = dropdownWrapper.querySelector(".select-inp");
    dropInput.addEventListener("click", showList);

    //Click on the button
    function showList() {
        dpopList.classList.add("list-visible");
        this.classList.toggle("select-inp:active");
    }

    //Selecting a list item
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

    //Click outside the dropdown
    document.addEventListener("click", function (e) {
        if (e.target !== dropInput) {
            dpopList.classList.remove("list-visible");
        }
    });

    //Closing the list with tab or escape
    document.addEventListener("keydown", function (e) {
        if (e.key === "Tab" || e.key === "Escape") {
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

//Search by dropdowns and text field
export async function filterSearch() {
  let cardsData = JSON.parse(localStorage.getItem("cardsData"));

  let filterData = [];
  document.querySelector(".cards-holder").innerHTML = "";
  cards.innerHTML = "";
  let count = 0;
  let rgxSearch = new RegExp(searchValue.replace(/[,.\s]+/g, "\\W*"), "i");
  let rgxUrgency = new RegExp(inpUrgency.value, "i");

  if (inpUrgency.value === "All") {
    rgxUrgency = RegExp("", "i");
  }
    let rgxStatus = new RegExp(inpStatus.value, "i");
    if (inpStatus.value === "All") {
      rgxStatus = RegExp("", "i");
    }

    cardsData.forEach((card) => {
      if ((rgxSearch.test(card.title)
          || rgxSearch.test(card.description)
          || rgxSearch.test(card.age)
          || rgxSearch.test(card.disease)
          || rgxSearch.test(card.doctor)
          || rgxSearch.test(card.name)
          || rgxSearch.test(card.pressure))
          && rgxUrgency.test(card.urgency) 
          && rgxStatus.test(card.status)) {
        filterData.push(card);
        count++;
      }
    });
    if (count === 0) {
      cards.insertAdjacentHTML(
        "afterbegin",
        '<h2 class="search-result">No results</h2>'
      );
    }
    render(filterData);
}
