const dropdownValue = document.querySelector(".dropdown__value");
const dropdownList = document.querySelector(".dropdown__list");
const dropdownLink = document.querySelectorAll(".dropdown__link");
const arrForDropdownLink = Array.from(dropdownLink);

function dropdownMenu() {
  dropdownList.classList.toggle("dropdown__list_active")
}

(()=>{
  arrForDropdownLink.forEach(elem  => elem.addEventListener("click", (e) => {
    e.preventDefault();
    dropdownValue.textContent = elem.textContent;
  }))
})()

// (()=>{
//   arrForDropdownLink.forEach(elem  => elem.addEventListener("click", () => {
//     dropdownValue.textContent = elem.textContent;
//     return false;
//   }, false))
// })()


dropdownValue.addEventListener("click", dropdownMenu);


