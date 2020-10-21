import { ageVerification, popupModal, getResultfromStorage } from "./ageVerification.js";
import toggleBurgerNav from "./burger.js";
import { createObserver } from "./footerObserver.js";
import shopInit from "./shop/shopInit.js";
import { checkoutBtn } from "./shop/removeItemOverlay.js";

const init = () => {
  getResultfromStorage("showModal");
  createObserver();

  document.addEventListener("click", toggleBurgerNav);
  popupModal.addEventListener("click", ageVerification);
  
  if (checkoutBtn) {
    shopInit();
  }
};

document.addEventListener("DOMContentLoaded", init);



