/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

const renderUserGrid = (users) => {
  const outputElement = document.querySelector("#output");
  const hideIntroMessage = document.querySelector("#message");

  hideIntroMessage.style = "visibility: hidden; position:absolute;";

  users.forEach((user) => {
    const login = document.createElement("h3");
    login.innerText = user.login;

    const avatarImage = document.createElement("img");
    avatarImage.src = user.avatar_url;
    avatarImage.alt = `${user.login} avatar picture`;
    avatarImage.style = "width:100%; max-width:200px; height:auto;";

    const divElement = document.createElement("div");
    divElement.append(avatarImage, login);

    outputElement.append(divElement);
  });
};

const getUsers = async () => {
  try {
    const response = await fetch(ENDPOINT);
    const users = await response.json();

    renderUserGrid(users);
  } catch (error) {
    console.error(error);
  }
};

document.querySelector("#btn").addEventListener("click", getUsers);
