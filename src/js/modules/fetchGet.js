
export async function fetchData() {
    localStorage.removeItem("cardsData");
    const data = await fetch("https://ajax.test-danit.com/api/v2/cards", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token()}`,
        },
    });
    const result = await data.json();

    localStorage.setItem("cardsData", JSON.stringify(result));
}

export function token() { return localStorage.getItem("token"); };