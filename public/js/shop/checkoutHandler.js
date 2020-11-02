import updatePrice from "./updatePrice.js";
import { removeItemOverlay } from "./removeItemOverlay.js";
import cartCounter from "./cartCounter.js";

// clear cart on ckeckout btn
const checkoutHandler = e => {
  const targetBtn = e.currentTarget;
  removeItemOverlay(targetBtn);

  const shopCartEl = document.querySelector(".shop__cart");
  const shopCartElChildren = [...shopCartEl.children];

  if (!Array.isArray(shopCartElChildren) || !shopCartElChildren.length) {
    alert("Cart is empty! Please add items to cart before checking out");
    return;
  }

  shopCartElChildren.forEach( child => child.remove());
  updatePrice();
  cartCounter();
  alert("Thank you for your purchase");
};

export default checkoutHandler;