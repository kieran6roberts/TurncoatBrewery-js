import toggleBurgerNav from "../nav/burger.js";
import { createObserver } from "../utility/footerObserver.js";
import { getFromStorage } from "../utility/storage.js";
import shopInit from "../shop/shopInit.js";

import "../../styles/shop.css";
import "../../styles/global.css";
import "../../styles/media.css";

const init = () => {
  const counter = document.querySelectorAll(".cart-counter-js");
  counter.forEach(count => count.textContent = getFromStorage("CartCount") || 0);
  shopInit();
  createObserver();
  document.addEventListener("click", toggleBurgerNav);
};

document.addEventListener("DOMContentLoaded", init);