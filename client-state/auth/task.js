const signinBtn = document.querySelector("#signin__btn");
const signinForm = document.querySelector("#signin__form");
const userId = document.querySelector("#user_id");
const welcome = document.querySelector(".welcome");

if (localStorage.userId !== undefined) {
  userId.textContent = localStorage.getItem("userId");
  welcome.classList.add("welcome_active");
}

signinBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let xhr = new XMLHttpRequest();
  let formData = new FormData(signinForm);
  xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
  xhr.responseType = 'json';

  xhr.addEventListener("load", ()=>{

    localStorage.userId = xhr.response.user_id;

    if (xhr.response.success === true) {
      userId.textContent = localStorage.getItem("userId");
      welcome.classList.add("welcome_active");
    } else if (xhr.response.success === false) {
      alert("Неверный логин/пароль");
    }
  });
  xhr.send(formData);
});
