/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const userInputValue = document.querySelector("#weight-converter");
const converterOutput = document.querySelector("#output");

const poundsMultiplier = 2.2046;
const gramsDivisor = 0.001;
const ozMultiplier = 35.274;

userInputValue.addEventListener("submit", (event) => {
  event.preventDefault();

  const converterOutput = document.querySelector("#output");
  const getWeightInputValue = +document.querySelector("#search").value;
  const convertedPoundsResult = document.createElement("h2");
  const convertedGramsResult = document.createElement("h2");
  const convertedOzResult = document.createElement("h2");
  const delimiter = document.createElement("hr");

  let convertedPounds = getWeightInputValue * poundsMultiplier;
  let convertedGrams = getWeightInputValue / gramsDivisor;
  let convertedOz = getWeightInputValue * ozMultiplier;

  convertedPoundsResult.textContent = convertedPounds.toFixed(3);
  convertedGramsResult.textContent = convertedGrams;
  convertedOzResult.textContent = convertedOz.toFixed(3);

  const spanElement = document.createElement("span");
  spanElement.setAttribute("id", "converted");

  document.getElementById("output").innerHTML = "";

  spanElement.append("Pounds (lb): ", convertedPoundsResult);
  spanElement.append("Grams (g): ", convertedGramsResult);
  spanElement.append("Unions (oz): ", convertedOzResult);
  spanElement.append(delimiter);

  converterOutput.append(spanElement);
  converterOutput.style =
    "  background-color: green; border-radius: 9px; color: #fff; margin: auto; width: 15%; padding: 20px; text-align: center";
});
