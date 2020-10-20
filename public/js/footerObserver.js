const footer = document.querySelector(".footer");
const abstractedNav = document.querySelector(".mobile-nav__list");

const intersectionHandler = ( entry, observer) => {
  const navChildEls = [...abstractedNav.children];

  if (entry[0].isIntersecting) {
    abstractedNav.classList.add("hide");
    navChildEls.forEach( item => {
      item.classList.add("hide");
    });
  }

  if (!entry[0].isIntersecting && abstractedNav.classList.contains("hide")) {
    abstractedNav.classList.remove("hide");
    navChildEls.forEach( item => {
      item.classList.remove("hide");
    });
  }
};

const createObserver = () => {
  const observer = new IntersectionObserver( intersectionHandler, {});
  observer.observe(footer);
}

export {
  footer,
  abstractedNav,
  createObserver,
}