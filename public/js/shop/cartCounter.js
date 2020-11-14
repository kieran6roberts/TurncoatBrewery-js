import { saveToStorage } from "../utility/storage.js";

const cartCounter = () => {
  const counter = document.querySelector(".cart-counter-js");
  const cartItems = [...document.querySelectorAll(".shop__cart-item")];

  saveToStorage("CartCount", cartItems.length);
  counter.textContent = cartItems.length;

}

export default cartCounter;