import { token } from "../fetchGet.js";
import { update } from "../functions.js";

//Card removal function
export async function del() {
    let del = document.querySelectorAll('.card-container-btn-cancel');
    del.forEach(elem => {
        elem.addEventListener('click', () => {
            let cardid = elem.parentNode.offsetParent.id;
            let card = elem.parentNode.offsetParent;
            fetch(`https://ajax.test-danit.com/api/v2/cards/${cardid}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token()}`
                }
            })
            card.innerHTML = `<div class="card">Card number: ${cardid} deleted </div>`;
            setTimeout(() => {
                card.remove();
                update();
            }, 2000);
        });
    })
}