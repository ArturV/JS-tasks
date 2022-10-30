/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

const buttonElement = document.querySelector("#btn__element");
const areaForResult = document.querySelector("#btn__state");
let counter = 0;

const getClicks = () => {
  counter++;
  areaForResult.innerText = counter;
};

const clickCounter = buttonElement.addEventListener("click", getClicks);
