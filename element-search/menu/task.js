const menuLink = document.getElementsByClassName("menu__link");
const menuSub = document.getElementsByClassName("menu menu_sub")

let arrForlink = Array.from(menuLink);

arrForlink.forEach(elem => elem.onclick = () => {
  if (elem.closest("li").querySelector("ul.menu_sub")) {
    elem.closest("li").querySelector("ul.menu_sub").classList.add("menu_active");
    return false;
  }
  // if (elem.closest("li").querySelector("ul.menu_sub").classList.contains("menu_active")) {
  //   elem.closest("li").querySelector("ul.menu_sub").classList.remove("menu_active");
  // }
}) 



