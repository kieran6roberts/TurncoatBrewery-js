import { removeItemOverlay } from "./removeItemOverlay.js";
import updatePrice from "./updatePrice.js";
import cartCounter from "./cartCounter.js";

const removeCartItemHandler = e => {
  const targetBtn = e.currentTarget;
  const elId = targetBtn.parentElement.id;

  removeItemOverlay(targetBtn);
  targetBtn.parentElement.remove();
  const items = JSON.parse(localStorage.getItem("CartItems"));
  const newItems = items.filter( item => item.id !== elId);
  localStorage.setItem("CartItems", JSON.stringify(newItems));
  cartCounter();
  updatePrice();
};

export default removeCartItemHandler;