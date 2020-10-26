import { ageVerification, popupModal, getResultfromStorage } from "./ageVerification.js";
import toggleBurgerNav from "./burger.js";
import { createObserver } from "./footerObserver.js";
import shopInit from "./shop/shopInit.js";

const init = () => {
  getResultfromStorage("showModal");
  createObserver();
  shopInit();

  document.addEventListener("click", toggleBurgerNav);
  popupModal.addEventListener("click", ageVerification);
  
};

document.addEventListener("DOMContentLoaded", init);