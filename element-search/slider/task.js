const sliderArrowPrev = document.getElementsByClassName("slider__arrow slider__arrow_prev");
const sliderArrowNext = document.getElementsByClassName("slider__arrow slider__arrow_next");
const sliderItem = document.getElementsByClassName("slider__item");

let arrforSliderItem = Array.from(sliderItem);

let indxSlide = 0

const activeslide = (i) => {
  arrforSliderItem.forEach(elem  => elem.classList.remove("slider__item_active"))
  arrforSliderItem[i].classList.add("slider__item_active")
}

const ArrowNext = () => {
  if  (indxSlide === arrforSliderItem.length - 1) {
    indxSlide = 0;
    activeslide(indxSlide)
  } else {
    indxSlide++
    activeslide(indxSlide)
  }
}

const ArrowPrev = () => {
  if  (indxSlide === 0) {
    indxSlide === arrforSliderItem.length - 1;
    activeslide(indxSlide)
  } else {
    indxSlide--
    activeslide(indxSlide)
  }
}

sliderArrowNext[0].onclick = () => {
  ArrowNext();
}

sliderArrowPrev[0].onclick = () => {
  ArrowNext();
}






// const sliderItemLength = arrforSliderItem.length;

// let nSlide = 0

// sliderArrowNext[0].onclick = () => {
//   arrforSliderItem.forEach((elem, i) => {
//     if (elem.classList.contains("slider__item_active")) {
//       elem.classList.toggle("slider__item_active")
//     } else {
//       elem.classList.toggle("slider__item_active")
//     }
//   });
// }


// elem.classList.add("slider__item_active")

