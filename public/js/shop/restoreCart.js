import appendItemToCart from "../shop/appendItemToCart.js";
import createCartItem from "../shop/createCartItem.js";
import { getFromStorage, saveToStorage } from "../utility/storage.js";

const restoreCart = () => {
  const shopItems = document.querySelectorAll(".shop__item");
  const cartContainer = document.querySelector(".shop__cart");
  const counter = document.querySelector(".cart-counter-js");

  const storedItems = getFromStorage("CartItems");
  counter.textContent =  getFromStorage("CartCount") || 0;

  if (!storedItems) return saveToStorage("CartItems", []);

  else {
    const storedIds = storedItems.map( item => item.id);

    storedItems.forEach( item => {
      const { id, image, title, type, info, price } = item;
      const cartEl = createCartItem( id, image, title, type, info, price );
      appendItemToCart(cartEl, cartContainer, ".shop__item-btn" , ".shop__item-quantity");
    });

    [...shopItems].forEach( item => {
      // add overlay to item if it is already in the cart
      if (storedIds.includes(item.id)) item.firstElementChild.classList.add("show");
    });
  }
};

export default restoreCart;