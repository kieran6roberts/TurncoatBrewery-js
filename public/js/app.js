import { ageVerification, popupModal, getResultfromStorage } from "./ageVerification.js";
import toggleBurgerNav from "./burger.js";
import { createObserver, footer, abstractedNav } from "./footerObserver.js";

const init = () => {
  getResultfromStorage("showModal");

  if (abstractedNav) createObserver();
  if (popupModal) popupModal.addEventListener("click", ageVerification);

  document.addEventListener("click", toggleBurgerNav);
};

init();


