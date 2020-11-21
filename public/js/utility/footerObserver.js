const footer = document.querySelector(".footer");
const abstractedNav = document.querySelector(".mobile-nav__list");

const intersectionHandler = ( entry, observer) => {
  const navChildEls = [...abstractedNav.children];

  if (entry[0].isIntersecting) {
    abstractedNav.classList.add("show");
    navChildEls.forEach( item => {
      item.classList.add("show");
    });
  }

  if (!entry[0].isIntersecting && abstractedNav.classList.contains("show")) {
    abstractedNav.classList.remove("show");
    navChildEls.forEach( item => {
      item.classList.remove("show");
    });
  }
};

const createObserver = () => {
  const observer = new IntersectionObserver( intersectionHandler, {});
  observer.observe(footer);
}

export {
  footer,
  createObserver,
}