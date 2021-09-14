const interests = document.querySelectorAll('.interest');

interests.forEach(el => {
  const elems = el.querySelectorAll('.interest__check');

  const checkbox = (elem) => {
    if (elem.currentTarget.checked) {
        elems.forEach(elem => elem.checked = true);       
    } else if (!elem.currentTarget.checked) {
        elems.forEach(elem => elem.checked = false);       
    }
  }
    
  elems[0].addEventListener('change', checkbox);

});
