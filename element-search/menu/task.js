const menuLink = document.getElementsByClassName("menu__link");
const menuSub = document.getElementsByClassName("menu menu_sub")

let arrForlink = Array.from(menuLink);

arrForlink.forEach(elem => elem.onclick = () => {
  if (elem.closest("li").querySelector("ul.menu_sub")) {
    elem.closest("li").querySelector("ul.menu_sub").classList.toggle("menu_active");
    return false;
  }
}) 



