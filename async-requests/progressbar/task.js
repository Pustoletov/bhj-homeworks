const progress = document.getElementById("progress");
const send = document.getElementById("send");
const form = document.getElementById("form");

let xhr = new XMLHttpRequest();
let formData = new FormData(form);
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/upload.php');

send.addEventListener("click", (e) => {
  e.preventDefault();
  xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState === 0 && xhr.status === 200) {
      progress.value = 0;
    }
    if (xhr.readyState === 1 && xhr.status === 200) {
      progress.value = 0.3;
    }
    if (xhr.readyState === 2 && xhr.status === 200) {
      progress.value = 0.6;
    }
    if (xhr.readyState === 3 && xhr.status === 200) {
      progress.value = 0.8;
    }
    if (xhr.readyState === 4 && xhr.status === 200) {
      progress.value = 1;
    }
  });
});

xhr.send(formData);