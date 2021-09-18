const productQuantityControlDec = document.querySelectorAll(".product__quantity-control_dec");
const productQuantityControlInc = document.querySelectorAll(".product__quantity-control_inc");
const productAdd = document.querySelectorAll(".product__add");
const cartProducts = document.querySelector(".cart__products")
// const productQuantityValue = document.querySelectorAll(".product__quantity-value");
let counter = 1;

Array.from(productQuantityControlDec).forEach(elem => {
  elem.addEventListener("click", () => {
    if (elem.nextElementSibling.innerText > 1) {
      elem.nextElementSibling.innerText-= 1
    }
    // Array.from(productQuantityValue).forEach(elem => elem.innerText-= 1);
  });
})
 

Array.from(productQuantityControlInc).forEach(elem => {
  elem.addEventListener("click", () => {
    elem.previousElementSibling.innerText=counter + 1
    counter += 1
    // Array.from(productQuantityValue).forEach(elem => elem.innerText+=1);
  });
})
 
Array.from(productAdd).forEach(elem => elem.addEventListener("click", () => {
  let id = (elem.closest(".product")).dataset.id;
  let img = (elem.closest(".product")).querySelector(".product__image").src;
  let counterForcartProducts = (elem.closest(".product")).querySelector(".product__quantity-value").innerText;
  cartProducts.innerHTML+= `
  <div class="cart__product" data-id="${id}">
    <img class="cart__product-image" src="${(img)}">
    <div class="cart__product-count">${counterForcartProducts}</div>
  </div>
  `;
  counter = 1;
  (elem.closest(".product")).querySelector(".product__quantity-value").innerText = 1;
}))