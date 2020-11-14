import removeItemOverlay from "./removeItemOverlay.js";
import updatePrice from "./updatePrice.js";
import cartCounter from "./cartCounter.js";
import { getFromStorage, saveToStorage } from "../utility/storage.js";

const removeCartItemHandler = ({ currentTarget }) => {
  removeItemOverlay(currentTarget);
  currentTarget.parentElement.remove();

  const items = getFromStorage("CartItems");
  const newItems = items.filter( item => item.id !== currentTarget.parentElement.id);

  saveToStorage("CartItems", newItems);
  updatePrice();
  cartCounter();
};

export default removeCartItemHandler;