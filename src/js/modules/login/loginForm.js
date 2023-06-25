//Draw a login or registration form
export class modalLogin {
  constructor() {}

  loginFormHeader() {
    let container = document.createElement('div');
    container.classList.add('login-box');
    let containerHtml = ` 
      <button class='login-form-btn-cancel'><img src='./img/cancel (1).svg' alt=''></button>
      <h2>Login</h2>
      `;
    container.innerHTML = containerHtml;
    document.body.appendChild(container);
    return container;
  }

  loginForm() {
    let content = `<form class="form">
          <div class='user-box'>
              <input type='text' name='email' id='email' required='required' autocomplete='off'>
              <label for='email'>Username</label>
          </div>
          <div class='user-box'>
              <input type='password' name='password' id='password' required='required' autocomplete='off'>
              <label for='password'>Password</label>
          </div>
          <a href='#' id='subLog' class="submit">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Submit
          </a>
      </form>`;
    document
      .querySelector('.login-box')
      .insertAdjacentHTML('beforeend', content);
  }

  registrationFormHeader() {
    let container = document.createElement('div');
    container.classList.add('login-box');
    let containerHtml = ` 
      <button class='login-form-btn-cancel'><img src='./img/cancel (1).svg' alt=''></button>
      <h2>Registration</h2>
      `;
    container.innerHTML = containerHtml;
    document.body.appendChild(container);
    return container;
  }

  registrationForm() {
    let content = `<form class="form">
          <div class='user-box'>
              <input type='text' name='email' id='email' required='required' autocomplete='off'>
              <label for='email'>Username</label>
          </div>
          <div class='user-box'>
              <input type='password' name='password' id='password' required='required' autocomplete='off'>
              <label for='password'>Password</label>
          </div>
          <a href='#' id='subReg' class="submit">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Submit
          </a>
      </form>`;
    document
      .querySelector('.login-box')
      .insertAdjacentHTML('beforeend', content);
  }

}
