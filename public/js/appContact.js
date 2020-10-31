import { ageVerification, popupModal, getResultfromStorage } from "./ageVerification.js";
import toggleBurgerNav from "./burger.js";
import { createObserver } from "./footerObserver.js";

import "../styles/contact.css";
import "../styles/global.css";
import "../styles/media.css";

const init = () => {
  getResultfromStorage("showModal");
  createObserver();

  document.addEventListener("click", toggleBurgerNav);
  popupModal.addEventListener("click", ageVerification);
};

document.addEventListener("DOMContentLoaded", init);