import { popupModal } from "./ageVerification.js";

const burgerNav = document.querySelector(".nav__burger-js");
const sidebarNav = document.querySelector(".sidebar-nav__list-js");
const sidebarLinks = document.querySelectorAll(".sidebar-nav__link-js");
const dropdownLinks = document.querySelectorAll(".sidebar-nav__dropdown-link-js");
const socialLinks = document.querySelectorAll(".sidebar-nav__social-link-js");

const toggleBurgerNav = e => {
  // spread each li of element array like object sidebarNav into array
  const link = [...sidebarNav.children];

  if (e.target === sidebarNav) return;

  if (e.target === burgerNav) {
    sidebarNav.classList.toggle("open");
    burgerNav.firstElementChild.classList.toggle("active");
    //check if popup modal exists for that page
    if (popupModal) {
      popupModal.classList.toggle("hide");
    }

    document.body.classList.toggle("overflow");
    
    link.forEach( link => {
      link.firstElementChild.classList.toggle("open");
    });
    dropdownLinks.forEach( link => {
      link.classList.toggle("open");
    });
    socialLinks.forEach( link => {
      link.classList.toggle("open");
    })
    
  } else {
    if (!sidebarNav.classList.contains("open")) return;
    
    if (sidebarNav.classList.contains("open")) {
      sidebarNav.classList.remove("open");
      burgerNav.firstElementChild.classList.remove("active");

      if (popupModal) {
        popupModal.classList.add("hide");
      }
      
      document.body.classList.remove("overflow");
  
      link.forEach( link => {
        link.firstElementChild.classList.remove("open");
      });
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
