/* ------------------------------ TASK 5 -----------------------------------
Turimas "users" masyvas. 

Parašykite funckijas, kurios atlikas nurodytas užduotis:
1. funkcija "filterDogOwers" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins "users", kurie turi augintinį.
2. funkcija "filterAdults" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins masyvą su "users", kurie yra pilnamečiai.
-------------------------------------------------------------------------- */

const users = [
  { id: "1", name: "John Smith", age: 20, hasDog: true },
  { id: "2", name: "Ann Smith", age: 24, hasDog: false },
  { id: "3", name: "Tom Jones", age: 31, hasDog: true },
  { id: "4", name: "Rose Peterson", age: 17, hasDog: false },
  { id: "5", name: "Alex John", age: 25, hasDog: true },
  { id: "6", name: "Ronald Jones", age: 63, hasDog: true },
  { id: "7", name: "Elton Smith", age: 16, hasDog: true },
  { id: "8", name: "Simon Peterson", age: 30, hasDog: false },
  { id: "9", name: "Daniel Cane", age: 51, hasDog: true },
];

const filterDogOwers = (usersArray) => {
  const userWithDog = JSON.stringify(usersArray.filter((user) => user.hasDog));

  for (let index = 0; index < usersArray.length; index++) {
    if (usersArray[index].hasDog) {
      console.log(usersArray[index].name);
    }
  }
};

const filterAdults = (userAge) => {
  const adultAgeIs = 18;
  const isAdult = userAge.filter((user) => user.age >= adultAgeIs);

  console.log(isAdult);
  return isAdult;
};

filterDogOwers(users);
filterAdults(users);
