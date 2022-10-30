/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";

const populateCarsList = (cars) => {
  const outputElement = document.querySelector("#output");

  cars.forEach((car) => {
    const brand = document.createElement("h3");
    brand.innerText = car.brand;

    const models = document.createElement("p");
    models.innerText = car.models;

    const divElement = document.createElement("div");
    divElement.append(brand, models);

    outputElement.append(divElement);
  });
};

const getCars = async () => {
  try {
    const response = await fetch(ENDPOINT);
    const cars = await response.json();

    populateCarsList(cars);
  } catch (error) {
    console.error(error);
  }
};
getCars();
