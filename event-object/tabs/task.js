const tab = document.querySelectorAll(".tab");
const tabContent = document.querySelectorAll(".tab__content");

arrForTab = Array.from(tab);
arrForTabContent = Array.from(tabContent);


arrForTab.forEach(elem1 => {
  elem1.addEventListener("click", (e) => {
    if (elem1.classList.contains("tab_active")) {
      elem1.classList.remove("tab_active");
    }
    arrForTabContent.forEach(elem2 => {
      if (elem2.classList.contains("tab__content_active")) {
        elem2.classList.remove("tab__content_active")
      }
      if ( arrForTab.indexOf(elem1) === arrForTabContent.indexOf(elem2)) {
        elem1.classList.toggle("tab_active");
        elem2.classList.toggle("tab__content_active");
      }
    })
  })
})