const modalMain = document.getElementById("modal_main");
const modalSuccess = document.getElementById("modal_success");
const showSuccess = document.getElementsByClassName("show-success");
const modalClose = document.getElementsByClassName("modal__close_times");
const modalActive = document.getElementsByClassName("modal_active");

modalMain.classList.add("modal_active");

showSuccess[0].onclick = () => {
  modalMain.classList.remove("modal_active");
  modalSuccess.classList.add("modal_active");
}

let arrforModalClose = Array.from(modalClose);
 
arrforModalClose.forEach(elem => elem.onclick = () => {
  modalActive[0].classList.remove("modal_active");   
})

