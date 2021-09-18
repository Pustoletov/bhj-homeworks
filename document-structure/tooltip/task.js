const hasTooltip = document.querySelectorAll(".has-tooltip");
const tooltip = document.querySelectorAll(".tooltip");

let arrForTooltips = Array.from(hasTooltip);
let arrForTooltip = Array.from(tooltip);

// arrForTooltip.forEach(elem => {
//   let coords = elem.getBoundingClientRect();
//   elem.style.left = coords.left + "px";
//   elem.style.top = cords.top + "px";
// });

arrForTooltips.forEach(elem => {
  elem.addEventListener("click", (e) =>  {
    e.preventDefault();
    let coords = elem.getBoundingClientRect();
    elem.innerHTML += `
    <div class="tooltip tooltip_active" style="left: ${coords.left}px; top: ${coords.top +20}px">${elem.title}</div>
    `
  });
});