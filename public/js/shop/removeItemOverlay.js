import { toggleClasses } from "../utility/toggleClasses.js";

const checkoutBtn = document.querySelector(".shop__cart-checkout");

// remove overlay from each item when checking out
const removeItemOverlay = btn => {
  const parentEl = btn.parentElement;
  const overlayEls = document.querySelectorAll(".overlay");
  
  if (btn === checkoutBtn) {
    overlayEls.forEach ( el => toggleClasses("overlay", el));
  } 
    else {
    const titleContent = parentEl.querySelector(".shop__item-name").innerText;

    overlayEls.forEach( el => {
      const overlayParentEl = el.parentElement;
      const elTitleContent = overlayParentEl.querySelector(".shop__item-name").innerText;
      if (titleContent === elTitleContent) toggleClasses("overlay", el);
    });
  }
};

export default removeItemOverlay;