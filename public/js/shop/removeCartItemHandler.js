import { removeItemOverlay } from "./removeItemOverlay.js";
import updatePrice from "./updatePrice.js";

const removeCartItemHandler = e => {
  const targetBtn = e.currentTarget;

  removeItemOverlay(targetBtn);
  targetBtn.parentElement.remove();
  updatePrice();
};

export default removeCartItemHandler;