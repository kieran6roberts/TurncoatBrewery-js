
const cartCounter = () => {
  const counter = document.querySelector(".cart-counter-js");
  const quantityEl = document.querySelectorAll(".shop__item-quantity");

  let totalQuantity = 0;
  
  if (quantityEl.length === 0) return counter.textContent = totalQuantity;

  quantityEl.forEach( el => {
    totalQuantity = totalQuantity + parseFloat(el.value);
    counter.textContent = totalQuantity;
  });

  localStorage.setItem("CartCount", JSON.stringify(totalQuantity));
}

export default cartCounter;