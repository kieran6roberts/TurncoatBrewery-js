import appendItemToCart from "./appendItemToCart.js";
import createCartItem from "./createCartItem.js";
import updatePrice from "./updatePrice.js";
import cartCounter from "./cartCounter.js";
import cartStorage from "./cartStorage.js";

// trigger the add to cart event
const addToCartHandler = ({ currentTarget }) => {
  const clickedItem = currentTarget.parentElement;
  const image = clickedItem.querySelector(".shop__item--img").src;
  const title = clickedItem.querySelector(".shop__item-name").textContent;
  const type = clickedItem.querySelector(".shop__item-type").textContent;
  const info = clickedItem.querySelector(".shop__item-info").textContent;
  const price = clickedItem.querySelector(".shop__item-price").textContent;
  const id = `${title} ${info}`;

  const cartItem = createCartItem( id, image, title, type, info, price);

  if (!cartItem) {
    return new Error("cart item is null");
  } 
    else {
      const cartContainer = document.querySelector(".shop__cart");
      const overlay = clickedItem.querySelector(".shop__item-overlay");
      overlay.classList.add("show");
      appendItemToCart( cartItem, cartContainer, ".shop__item-btn" , ".shop__item-quantity" );
      updatePrice();
      cartCounter();
      cartStorage({ id, image, title, type, info, price });
    }
};

export default addToCartHandler;