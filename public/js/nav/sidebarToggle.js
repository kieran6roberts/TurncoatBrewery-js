import { toggleClasses } from "../utility/toggleClasses.js";

export const sidebarNav = document.querySelector(".sidebar-nav__list-js");
const dropdownLinks = sidebarNav.querySelectorAll(".sidebar-nav__dropdown-link-js");
const socialLinks = sidebarNav.querySelectorAll(".sidebar-nav__social-link-js");
const beerLink = sidebarNav.querySelector(".beer-link-js");
const contactLink = sidebarNav.querySelector(".contact-link-js");

export const sidebarToggle = () => {
  toggleClasses("show", sidebarNav, 
                        contactLink, 
                        beerLink);
  
  dropdownLinks.forEach( link => {
    link.classList.toggle("show");
  });

  socialLinks.forEach( link => {
    link.classList.toggle("show");
  })
};