const checkoutBtn = document.querySelector(".shop__cart-checkout");

// remove overlay from each item when checking out
const removeItemOverlay = btn => {
  const parentEl = btn.parentElement;
  const overlayEls = document.querySelectorAll(".added");
  
  if (btn === checkoutBtn) {
    overlayEls.forEach ( el => {
      if (el.classList.contains("added")) el.classList.remove("added");
    });
    return;
  }
  
  const titleContent = parentEl.querySelector(".shop__item-name").innerText;

  overlayEls.forEach( el => {
    const overlayParentEl = el.parentElement;
    const elTitleContent = overlayParentEl.querySelector(".shop__item-name").innerText;

    if (titleContent === elTitleContent) el.classList.remove("added");
  });
};

export {
  removeItemOverlay,
  checkoutBtn
};