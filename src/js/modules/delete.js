import { token } from "./fetchGet.js";

export function del() {
    let del = document.querySelectorAll('.card-container-btn-cancel');
    console.log(del);
    del.forEach(elem => {
        elem.addEventListener('click', () => {
            let cardid = elem.parentNode.offsetParent.id;
            let card = elem.parentNode.offsetParent;
            console.log(cardid, card);
            fetch(`https://ajax.test-danit.com/api/v2/cards/${cardid}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                })
                card.innerHTML = `<div class="card">Картка під номером: ${cardid} видалена</div>`;
                setTimeout(() => {
                    card.remove();
                }, 2000);
        })
    })
}