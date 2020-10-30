import { ageVerification, popupModal, getResultfromStorage } from "./ageVerification.js";
import toggleBurgerNav from "./burger.js";
import { createObserver } from "./footerObserver.js";

import "../styles/home.css";

const init = () => {
  getResultfromStorage("showModal");
  createObserver();

  document.addEventListener("click", toggleBurgerNav);
  popupModal.addEventListener("click", ageVerification);
};

document.addEventListener("DOMContentLoaded", init);