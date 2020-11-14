import { popupModal } from "../utility/verifyAge.js";
import { sidebarToggle, sidebarNav } from "./sidebarToggle";
import { toggleClasses } from "../utility/toggleClasses.js";

const burgerNav = document.querySelector(".nav__burger-js");

const toggleBurgerNav = e => {
  if (e.target === sidebarNav) return;

  if (sidebarNav.classList.contains("show")) {
    sidebarToggle();
    toggleClasses("show", document.body,
                          burgerNav.firstElementChild,
                          popupModal);

  } else if (e.target === burgerNav) {
      sidebarToggle();
      toggleClasses("show", document.body,
                            burgerNav.firstElementChild,
                            popupModal);
    }
};

export default toggleBurgerNav;
