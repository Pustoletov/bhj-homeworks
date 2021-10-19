const signinBtn = document.getElementById("signin__btn");
const signinForm = document.getElementById("signin__form");



signinBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let xhr = new XMLHttpRequest();
  let formData = new FormData(signinForm);
  xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
  xhr.responseType = 'json';
  xhr.send(formData);
  let resp = xhr.response
  console.log(xhr)
  console.log(resp);
});
