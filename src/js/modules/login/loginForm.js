//Отрисовать форму логина или регистрации
export class modalLogin {
  constructor() {}

  loginFormHeader() {
    let container = document.createElement("div");
    container.classList.add("login-box");
    let containerHtml = ` 
      <button class="login-form-btn-cancel"><img src="./img/cancel (1).svg" alt=""></button>
      <h2>Login</h2>
      `;
    container.innerHTML = containerHtml;
    document.body.appendChild(container);
    return container;
  }

  loginForm() {
    let content = `<form>
          <div class="user-box">
              <input type="username" name="username" id='username' required="required" autocomplete="off">
              <label>Username</label>
          </div>
          <div class="user-box">
              <input type="password" name="password" id="password" required="required" autocomplete="off">
              <label>Password</label>
          </div>
          <a href="#" class="subLog">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Submit
          </a>
      </form>`;
    document
      .querySelector(".login-box")
      .insertAdjacentHTML("beforeend", content);
  }

  registrationFormHeader() {
    let container = document.createElement("div");
    container.classList.add("login-box");
    let containerHtml = ` 
      <button class="login-form-btn-cancel"><img src="./img/cancel (1).svg" alt=""></button>
      <h2>Registration</h2>
      `;
    container.innerHTML = containerHtml;
    document.body.appendChild(container);
    return container;
  }

  registrationForm() {
    let content = `<form>
          <div class="user-box">
              <input type="username" name="username" id='username' required="required" autocomplete="off">
              <label>Username</label>
          </div>
          <div class="user-box">
              <input type="password" name="password" id="password" required="required" autocomplete="off">
              <label>Password</label>
          </div>
          <a href="#" class="subReg">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Submit
          </a>
      </form>`;
    document
      .querySelector(".login-box")
      .insertAdjacentHTML("beforeend", content);
  }

}
