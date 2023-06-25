import { login, show } from "./login.js";
import { foundBtn } from "../cards/create.js";
import { update } from "../functions.js";

let errorPasword = "Password";
let errorEmail = "Email";
let mail;
let password;

//Re-getting the token after registration
async function getToken(username, password) {
  const data = await fetch("https://ajax.test-danit.com/api/v2/cards/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: `${username}`,
      password: `${password}`,
    })
  });
  const res = await data.text();

  if (res === "Incorrect username or password") {
      
      document.querySelector('.form').innerHTML = res;
      return false;
  } else {
    localStorage.setItem("token", res);
    login();
    show();
    update();
      return true;
  }
}

// email
// : 
// "123456789@mail.ru"
// password
// : 
// "123456789"

//New user registration function
async function registration(username, password) {
  const data = await fetch("https://ajax.test-danit.com/api/cards/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: username,
      password: password,
    }),
  }).catch(err => console.error(err));
  
  const res = await data.text();
  if (!res.includes(" ")) {
    localStorage.setItem("token", res);
    let timeLeft = 30;
    document.querySelector('.form').innerHTML =
      `Please remember your password ${password} and login ${username}, 
      we do not have a password recovery function. <br> <span class="timer">${timeLeft}</span> seconds left before the window closes.`;

    const countdown = setInterval(() => {
      timeLeft--;
      document.querySelector('.timer').textContent = timeLeft;

      if (timeLeft < 0) {
        clearInterval(countdown);
        login();
        show();
        update();
      }
    }, 1000);

    return true;
  } else {
    document.querySelector('.form').innerHTML = res;
    return false;
  }
}


function user(email, pass)  {
    const regex = /^\S+@\S+\.\S+$/;
    if (pass.length < 8) {
      errorPasword = "Password must be more than 8 characters"
    } else {
      errorPasword = "Password";
      password = pass;
    }
    if (!regex.test(email)) {
      errorEmail = "You entered not email"
    } else {
      errorEmail = "Email";
      mail = email
    }
}

//Login and validation
export function logVal () {
  document.querySelector('#email').addEventListener("input", checkUserLogIn);
  document.querySelector('#password').addEventListener("input", checkUserLogIn);
  document.querySelector('.submit').addEventListener("click", function (event) {
    if (event.target.innerText === "SUBMIT") {
      checkSubmit(event);
    }
  });
}

export function checkSubmit(event) {
  user(document.getElementById("email").value, document.getElementById("password").value);

  if (errorPasword === "Password" && errorEmail === "Email") {
    if (event.target.innerText === "SUBMIT") {
      event.target.id === "subLog" ? getToken(mail, password) : null;
    }
    if (event.target.innerText === "SUBMIT") {
      event.target.id === "subReg" ? registration(mail, password) : null;
    }
  } else {
    document.querySelector('label[for="password"]').innerHTML = errorPasword;
    document.querySelector('label[for="email"]').innerHTML = errorEmail;
  }
}

export async function checkUserLogIn() {
  let inpEmail = document.getElementById("email").value;
  let inpPassword = document.getElementById("password").value;
  let labelUsername = document.querySelector('label[for="email"]');
  let labelPassword = document.querySelector('label[for="password"]');

  if (inpEmail !== '') {
    user(inpEmail, '');
    labelUsername.innerHTML = errorEmail;
  }

  if (inpPassword !== '') {
    user('', inpPassword);
    labelPassword.innerHTML = errorPasword;
  }
  foundBtn();
}
