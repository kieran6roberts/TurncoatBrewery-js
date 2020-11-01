import { popupModal } from "../ageVerification.js";
import sidebarToggle from "./sidebarToggle";

const sidebarNav = document.querySelector(".sidebar-nav__list-js");
const burgerNav = document.querySelector(".nav__burger-js");

const toggleBurgerNav = e => {
  if (e.target === sidebarNav) return;

  if (e.target === burgerNav) {
    document.body.classList.toggle("overflow");
    burgerNav.firstElementChild.classList.toggle("active");
    popupModal.classList.toggle("show");
    sidebarToggle();
    
  } else {
    if (!sidebarNav.classList.contains("open")) return;
    
    if (sidebarNav.classList.contains("open")) {
      document.body.classList.remove("overflow");
      burgerNav.firstElementChild.classList.remove("active");
      popupModal.classList.remove("show");
      sidebarToggle();
    }
  }
};

export default toggleBurgerNav;
