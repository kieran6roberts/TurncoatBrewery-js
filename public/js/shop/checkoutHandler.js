import updatePrice from "./updatePrice.js";
import removeItemOverlay from "./removeItemOverlay.js";
import cartCounter from "./cartCounter.js";

// clear cart on ckeckout btn
const checkoutHandler = ({ currentTarget }) => {
  removeItemOverlay(currentTarget);

  const shopCartEl = document.querySelector(".shop__cart");
  const shopCartElChildren = [...shopCartEl.children];

  if (!Array.isArray(shopCartElChildren) || !shopCartElChildren.length) {
    return alert("Cart is empty! Please add items to cart before checking out");
  }
   else {
     shopCartElChildren.forEach( child => child.remove());
     localStorage.removeItem("CartItems");
     cartCounter();
     updatePrice();
     alert("Thank you for your purchase");
   }

};

export default checkoutHandler;