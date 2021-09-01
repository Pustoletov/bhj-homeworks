const sliderArrowPrev = document.getElementsByClassName("slider__arrow slider__arrow_prev");
const sliderArrowNext = document.getElementsByClassName("slider__arrow slider__arrow_next");
const sliderItem = document.getElementsByClassName("slider__item");

let arrforSliderItem = Array.from(sliderItem);

let indxSlide = 0


sliderArrowNext[0].onclick = () => {
  indxSlide === arrforSliderItem.length - 1 ? indxSlide = 0 : indxSlide++ 
  ((i)=>{
    arrforSliderItem.forEach(elem  => elem.classList.remove("slider__item_active"))
    arrforSliderItem[i].classList.add("slider__item_active")
  })(indxSlide);
}

sliderArrowPrev[0].onclick = () => {
  indxSlide === 0 ? indxSlide = arrforSliderItem.length - 1 : indxSlide--
  ((i)=>{
    arrforSliderItem.forEach(elem  => elem.classList.remove("slider__item_active"))
    arrforSliderItem[i].classList.add("slider__item_active")
  })(indxSlide);
}