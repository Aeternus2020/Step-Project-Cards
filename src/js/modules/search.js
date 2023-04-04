


fetch("https://ajax.test-danit.com/api/v2/cards", {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${"22272608-2570-4723-a573-9e9451138488"}`,
    },
})
    .then((response) => response.json())
    .then((data) => {
        localStorage.clear();

        localStorage.setItem("cardsData", JSON.stringify(data));
        console.log(data);
    })
    .catch((error) => console.error(error));

let cardsData = JSON.parse(localStorage.getItem("cardsData"));



//Проходимся по обох дропдаунах і вибираєм значення, або з одного
let dropDown = document.querySelectorAll(".dropdown");
dropDown.forEach(function (dropdownWrapper) {
    const dpopList = dropdownWrapper.querySelector(".list");
    const dropItems = dpopList.querySelectorAll(".dpopdown-item");
    const dropInput = dropdownWrapper.querySelector(".select-inp");
    dropInput.addEventListener("click", showList);

    // клик по кнопке
    function showList() {
        dpopList.classList.toggle("list-visible");
        this.classList.add("input:active");
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

const cards = document.getElementById("cards");

function ShowCards(elem) {
    cards.insertAdjacentHTML(
        "afterbegin",
        `<h3 data-id='${elem.id}'>${elem.title}</h3>`
    );
}

let searchInp = document.getElementById("search-input");

let searchBtn = document.querySelector(".search__btn");

const inpHigh = document.getElementById("priority");
const inpOpen = document.getElementById("status");

let searchValue = "";
searchInp.oninput = (event) => {
    event.stopPropagation();
    searchValue = event.target.value;
    filterSearch();
};

searchBtn.onclick = () => {
    filterSearch();
};

function filterSearch() {
    cards.innerHTML = "";
    let count = 0;
    const rgx = new RegExp(searchValue.replace(/[,.\s]+/g, "\\W*"), "i");
    const rgp = new RegExp(inpHigh.value, "i");
    const rgo = new RegExp(inpOpen.value, "i");
    cardsData.forEach((card) => {
        if (
            rgx.test(card.title && card.description) &&
            rgp.test(card.priority) &&
            rgo.test(card.status)
        ) {
            ShowCards(card);
            count++;
            //   console.log(inpHigh.value, inpOpen.value);
        }
    });
    if (count === 0) {
        cards.insertAdjacentHTML(
            "afterbegin",
            '<h2 class="search-result">No results</h2>'
        );
    }
}
