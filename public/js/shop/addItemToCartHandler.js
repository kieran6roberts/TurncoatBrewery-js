import appendItemToCart from "./appendItemToCart.js";
import createCartItem from "./createCartItem.js";
import updatePrice from "./updatePrice.js";


// trigger the add to cart event
const addToCartHandler = e => {
  const clickedBtn = e.currentTarget;
  const clickedItem = clickedBtn.parentElement;
  const image = clickedItem.querySelector(".shop__item--img").src;
  const title = clickedItem.querySelector(".shop__item-name").textContent;
  const type = clickedItem.querySelector(".shop__item-type").textContent;
  const info = clickedItem.querySelector(".shop__item-info").textContent;
  const price = clickedItem.querySelector(".shop__item-price").textContent;

  const cartItem = createCartItem( image, title, type, info, price);

  //check if cartItem is undefined and if so don't add item to cart
  if (!cartItem) return;
  if (cartItem) {
    const cartContainer = document.querySelector(".shop__cart");
    const overlay = clickedItem.querySelector(".shop__item-overlay");
    overlay.classList.add("added");
    appendItemToCart( cartItem, cartContainer, ".shop__item-btn" , ".shop__item-quantity" );
    updatePrice();
  }
};

export default addToCartHandler;