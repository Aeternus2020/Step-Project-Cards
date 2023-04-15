
// export const token = "1e4f8f83-4aca-4288-bd8a-df89ee91db97";
export const token = localStorage.getItem("token");

export async function fetchData() {

    // const token = "22272608-2570-4723-a573-9e9451138488";
    // const token = "1e4f8f83-4aca-4288-bd8a-df89ee91db97";
    const data = await fetch("https://ajax.test-danit.com/api/v2/cards", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    });
    const result = await data.json();

    localStorage.removeItem("cardsData");
    localStorage.setItem("cardsData", JSON.stringify(result));

}
// fetchData();

// let cardsData = JSON.parse(localStorage.getItem("cardsData"));
// console.log(cardsData);