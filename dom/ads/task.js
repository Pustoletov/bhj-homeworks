const rotatorCase = document.querySelectorAll(".rotator__case");

arrForRotatorCase = Array.from(rotatorCase);

let indxCase = -1


const go = () => {
    indxCase === rotatorCase.length - 1 ? indxCase = 0 : indxCase++ 
    ((i)=>{
      arrForRotatorCase.forEach(elem => elem.classList.remove("rotator__case_active"))
      arrForRotatorCase[i].classList.add("rotator__case_active")
    })(indxCase);

  setTimeout(go, 1000);
}

go();

