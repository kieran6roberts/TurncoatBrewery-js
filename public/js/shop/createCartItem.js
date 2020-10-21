import quantityChangeHandler from "./quantityChangeHandler.js";
import removeCartItem from "./removeCartItemHandler.js";

//create new item in the cart
const createCartItem = ( image, title, type, info, price ) => {
  const cartContainer = document.querySelector(".shop__cart");

  const cartEl = document.createElement("div");
  cartEl.setAttribute("id", "cart");
  cartEl.classList.add("shop__cart-item");

  const cartElHTML = `
      <img src=${image} alt="beer" class="shop__item--img">
      <span class="shop__item-name">${title}</span>
      <span class="shop__item-type">${type}</span>
      <span class="shop__item-info">${info}</span>
      <input type="number" value="1" class="shop__item-quantity"></input>
      <span class="shop__item-price price--border">${price}</span>
      <button type="button" class="shop__item-btn btn--danger btn--danger-js">Remove</button>
  `;
  
  cartEl.innerHTML = cartElHTML;
  cartContainer.append(cartEl);
  cartEl.querySelector(".shop__item-btn").addEventListener("click", removeCartItem);
  cartEl.querySelector(".shop__item-quantity").addEventListener("change", quantityChangeHandler);
};

export default createCartItem;