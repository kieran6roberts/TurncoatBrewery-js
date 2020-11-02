import { ageVerification, popupModal } from "../storage/ageVerification.js";
import getResultfromStorage from "../storage/getResultFromStorage";
import toggleBurgerNav from "../nav/burger.js";
import { createObserver } from "../footerObserver.js";

import "../../styles/beers.css";
import "../../styles/global.css";
import "../../styles/media.css";

const init = () => {
  getResultfromStorage("AgeVerification");
  const counter = document.querySelector(".cart-counter-js");
  counter.textContent =  JSON.parse(localStorage.getItem("CartCount")) || 0;
  createObserver();

  document.addEventListener("click", toggleBurgerNav);
  popupModal.addEventListener("click", ageVerification);
};

document.addEventListener("DOMContentLoaded", init);