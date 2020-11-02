import { ageVerification, popupModal } from "../storage/ageVerification.js";
import getResultfromStorage from "../storage/getResultFromStorage";
import toggleBurgerNav from "../nav/burger.js";
import { createObserver } from "../footerObserver.js";
import shopInit from "../shop/shopInit.js";

import "../../styles/shop.css";
import "../../styles/global.css";
import "../../styles/media.css";

const init = () => {
  getResultfromStorage("AgeVerification");
  createObserver();
  shopInit();

  document.addEventListener("click", toggleBurgerNav);
  popupModal.addEventListener("click", ageVerification);
  
};

document.addEventListener("DOMContentLoaded", init);