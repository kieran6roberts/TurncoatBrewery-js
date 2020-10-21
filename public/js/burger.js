import { popupModal } from "./ageVerification.js";

const burgerNav = document.querySelector(".nav__burger-js");
const sidebarNav = document.querySelector(".sidebar-nav__list-js");
const sidebarLinks = document.querySelectorAll(".sidebar-nav__link-js");
const dropdownLinks = document.querySelectorAll(".sidebar-nav__dropdown-link-js");
const socialLinks = document.querySelectorAll(".sidebar-nav__social-link-js");
const beerLink = sidebarNav.querySelector(".beer-link-js");
const contactLink = sidebarNav.querySelector(".contact-link-js");

const toggleBurgerNav = e => {
  // spread each li of element array like object sidebarNav into array

  if (e.target === sidebarNav) return;

  if (e.target === burgerNav) {
    sidebarNav.classList.toggle("open");
    burgerNav.firstElementChild.classList.toggle("active");
    document.body.classList.toggle("overflow");
    contactLink.classList.toggle("open");
    beerLink.classList.toggle("open");
    
    //check if popup modal exists for that page
    if (popupModal) popupModal.classList.toggle("show");
    
    dropdownLinks.forEach( link => {
      link.classList.toggle("open");
    });
    socialLinks.forEach( link => {
      link.classList.toggle("open");
    })
    
  } else {
    if (!sidebarNav.classList.contains("open")) return;
    
    if (sidebarNav.classList.contains("open")) {
      contactLink.classList.remove("open");
      beerLink.classList.remove("open");
      sidebarNav.classList.remove("open");
      burgerNav.firstElementChild.classList.remove("active");
      document.body.classList.remove("overflow");
      
      if (popupModal) popupModal.classList.remove("show");
      
      dropdownLinks.forEach( link => {
        link.classList.remove("open");
      });
      socialLinks.forEach( link => {
        link.classList.remove("open");
      })
    }
  }
};

export default toggleBurgerNav;
