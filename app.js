const mytext = document.getElementById("mytext");
const tofarenheit = document.getElementById("tofarenheit");
const tocelsius = document.getElementById("tocelsius");
const celsiustoKelvin = document.getElementById("celsiustoKelvin");
const kelvintocelsius = document.getElementById("kelvintocelsius");
const result = document.getElementById("result");

let temp;

function convert() {
    if (tofarenheit.checked) {
        temp = Number(mytext.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "°F";
    } else if (tocelsius.checked) {
        temp = Number(mytext.value);
        temp = (temp - 32) * (5 / 9);
        result.textContent = temp.toFixed(1) + "°C";
    } else if (celsiustoKelvin.checked) {
        let celtemp = Number(mytext.value);
        temp = celtemp + 273.15;
        result.textContent = temp.toFixed(1) + "K";
    } else if (kelvintocelsius.checked) {
        let fartemp = Number(mytext.value);
        temp = fartemp - 273.15;
        result.textContent = temp.toFixed(1) + "°C";
    } else {
        result.textContent = "SELECT A UNIT";
    }
}
