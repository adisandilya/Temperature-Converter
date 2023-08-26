const form = document.querySelector("#form");
console.log("HEloo1");
form.addEventListener("submit", (e) => {
    console.log("HEloo2");
    e.preventDefault();
    console.log("HEloo3");
    const resultOne = document.querySelector("#result");
    let type = document.querySelector("#unitselector").value;
    let degrees = document.querySelector("#degrees").value;
    degrees = parseFloat(degrees);
    if (type === "F") {
        console.log(converttofah(degrees, "F"));
        resultOne.innerHTML = converttofah(degrees, "F");
    }
    else if (type === "K") {
        console.log(converttokel(degrees, "K"));
        resultOne.innerHTML = converttokel(degrees, "K");
    }
    else {
        console.log(converttocel(degrees, "C"));
        resultOne.innerHTML = converttocel(degrees, "C");
    }
});
const converttofah = (value, from) => {
    if (from === "F") {
        return `${(value * 1.8 + 32).toFixed(2)} f`;
    }
};
const converttokel = (value, from) => {
    if (from === "K") {
        return `${(value + 273.15).toFixed(2)} k`;
    }
};
const converttocel = (value, from) => {
    if (from === "C") {
        return `${((value - 32) * (5 / 9)).toFixed(2)} C`;
    }
};