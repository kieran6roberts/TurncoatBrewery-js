import { ageVerification, popupModal, getResultfromStorage } from "./ageVerification.js";
import toggleBurgerNav from "./burger.js";
import { createObserver } from "./footerObserver.js";

import "../styles/beers.css";
import "../styles/global.css";
import "../styles/media.css";

if(typeof(module.hot) !== "undefined") module.hot.accept() 


const init = () => {
  getResultfromStorage("showModal");
  createObserver();

  document.addEventListener("click", toggleBurgerNav);
  popupModal.addEventListener("click", ageVerification);
};

document.addEventListener("DOMContentLoaded", init);