import { verifyAgeHandler } from "../utility/verifyAge.js";
import toggleBurgerNav from "../nav/burger.js";
import { createObserver } from "../utility/footerObserver.js";
import { getFromStorage } from "../utility/storage.js";
import { toggleClasses } from "../utility/toggleClasses.js";

import "../../styles/beers.css";
import "../../styles/global.css";
import "../../styles/media.css";

const init = () => {
  const counter = document.querySelector(".cart-counter-js");
  const popupModal = document.querySelector(".popup-js");

  counter.textContent =  getFromStorage("CartCount") || 0;

  const verified = getFromStorage("AgeVerification");
  const time = new Date().getTime();

  if (verified == null || time > verified.expiry) {
    localStorage.removeItem("AgeVerification");
    toggleClasses("show", 
                    popupModal, 
                    popupModal.firstElementChild, 
                    document.body);
  }
  createObserver();

  document.addEventListener("click", toggleBurgerNav);
  popupModal.addEventListener("click", verifyAgeHandler);
};

document.addEventListener("DOMContentLoaded", init);