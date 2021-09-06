let reveal = document.querySelectorAll(".reveal");
ArrForReveal = Array.from(reveal);

window.addEventListener('scroll', function() {
  ArrForReveal.forEach(elem => {
    if(elem.getBoundingClientRect().top < window.innerHeight  && elem.getBoundingClientRect().bottom >= 0 ) {
      elem.classList.add("reveal_active");
    } else {
      elem.classList.remove("reveal_active");
    }
  });
});

  
