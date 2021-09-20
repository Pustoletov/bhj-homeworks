const hasTooltip = document.querySelectorAll(".has-tooltip");
ArrForHasTooltip = Array.from(hasTooltip);

ArrForHasTooltip.forEach(elem => {
  let coords = elem.getBoundingClientRect();
  elem.insertAdjacentHTML("afterEnd", `<div class="tooltip" style="left: ${coords.left}px;">${elem.title}</div>`);
})

ArrForHasTooltip.forEach(elem => {
    // if (elem.nextElementSibling.classList.contains(".tooltip_active")) {
    //   document.querySelector(".tooltip").classList.remove('tooltip_active');
    // }
  elem.addEventListener("click", (e) =>  {
    e.preventDefault();
    // if (document.querySelector('.tooltip_active')) {
    //   document.querySelector('.tooltip_active').classList.remove('tooltip_active');
    // }
    elem.nextElementSibling.classList.toggle("tooltip_active")
  });
})
