import sumTotal from "./sumTotal.js";

// handle the price calculations
const updatePrice = () => {
  const cartItem = document.querySelectorAll(".shop__cart-item");
  const totalEl = document.querySelector(".shop__cart-total");
  let total = 0;
  
  cartItem.forEach( item => {
    const itemPriceEl = item.querySelector(".shop__item-price");
    const quantityEl = item.querySelector(".shop__item-quantity");

    const totalItemPrice = sumTotal( itemPriceEl, quantityEl);
    
    total = total + totalItemPrice;
    total = Math.round(total * "1e2") / "1e2";
  });
  
  totalEl.textContent = `Total: $${total}`;
};

export default updatePrice;
