const coooooooockieClick = document.getElementById("cookie");

const counter = document.getElementById("clicker__counter");

let bigCoocki = () => { coooooooockieClick.width = "200" }

let smolCoocki = () => { coooooooockieClick.width = "180" }

coooooooockieClick.onclick = () => {
  counter.textContent = Number(counter.textContent) + 1;
  setTimeout(smolCoocki, 50)
  setTimeout(bigCoocki, 100)
}
