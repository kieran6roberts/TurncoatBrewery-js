import { saveToStorage } from "../utility/storage.js";

const cartCounter = () => {
  const counter = document.querySelectorAll(".cart-counter-js");
  const cartItems = [...document.querySelectorAll(".shop__cart-item")];

  saveToStorage("CartCount", cartItems.length);
  counter.forEach(count => count.textContent = cartItems.length);
}

export default cartCounter;