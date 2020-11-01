const sidebarNav = document.querySelector(".sidebar-nav__list-js");
const dropdownLinks = document.querySelectorAll(".sidebar-nav__dropdown-link-js");
const socialLinks = document.querySelectorAll(".sidebar-nav__social-link-js");
const beerLink = sidebarNav.querySelector(".beer-link-js");
const contactLink = sidebarNav.querySelector(".contact-link-js");

const sidebarToggle = () => {
  sidebarNav.classList.toggle("open");
  contactLink.classList.toggle("open");
  beerLink.classList.toggle("open");

  dropdownLinks.forEach( link => {
    link.classList.toggle("open");
  });
  socialLinks.forEach( link => {
    link.classList.toggle("open");
  })
};

export default sidebarToggle;