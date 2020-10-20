const deleteBtns = document.querySelectorAll(".btn--danger-js");
const addToCartBtns = document.querySelectorAll(".shop__item-btn-js");
const quantityEls = document.querySelectorAll(".shop__item-quantity");

//create new item in the cart
const createCartItem = ( image, title, type, info, price ) => {
  const cartContainer = document.querySelector(".shop__cart");

  const cartEl = document.createElement("div");
  cartEl.setAttribute("id", "cart");
  cartEl.classList.add("shop__cart-item");

  const cartElHTML = `
      <img src=${image} alt="beer" class="shop__item--img">
      <span class="shop__item-name">${title}</span>
      <span class="shop__item-type">${type}</span>
      <span class="shop__item-info">${info}</span>
      <input type="number" value="1" class="shop__item-quantity"></input>
      <span class="shop__item-price price--border">${price}</span>
      <button type="button" class="shop__item-btn btn--danger btn--danger-js">Remove</button>
  `;
  
  cartEl.innerHTML = cartElHTML;
  cartContainer.append(cartEl);
  cartEl.querySelector(".shop__item-btn").addEventListener("click", removeCartItem);
  cartEl.querySelector(".shop__item-quantity").addEventListener("change", quantityChangeHandler);
};

// trigger the add to cart event
const addToCartHandler = e => {
  const clickedBtn = e.currentTarget;
  const clickedItem = clickedBtn.parentElement;
  const overlay = clickedItem.querySelector(".shop__item-overlay");
  overlay.classList.add("added");

  const image = clickedItem.querySelector(".shop__item--img").src;
  const title = clickedItem.querySelector(".shop__item-name").textContent;
  const type = clickedItem.querySelector(".shop__item-type").textContent;
  const info = clickedItem.querySelector(".shop__item-info").textContent;
  const price = clickedItem.querySelector(".shop__item-price").textContent;

  createCartItem( image, title, type, info, price);
  updatePrice();
};

// update total when quantity of product is changed
const quantityChangeHandler = e => {
  const input = e.target;

  if (isNaN(input.value) || input.value <= 0) input.value = 1; 

  updatePrice();
};

// handle the price calculations
const updatePrice = () => {
  const cartItem = document.querySelectorAll(".shop__cart-item");
  const totalEl = document.querySelector(".shop__cart-total");
  let total = 0;
  
  cartItem.forEach( item => {
    const itemPriceEl = item.querySelector(".shop__item-price");
    const quantityEl = item.querySelector(".shop__item-quantity");

    const totalItemPrice = parseFloat(itemPriceEl.innerText.replace("$", "")) * quantityEl.value;
    total = total + totalItemPrice;
    total = Math.round(total * "1e2") / "1e2";
  });
  
  totalEl.textContent = `Total: $${total}`;
};

const removeCartItem = e => {
  const clickedBtn = e.target;
  const parentEl = clickedBtn.parentElement;
  const titleContent = parentEl.querySelector(".shop__item-name").innerText;
  
  const overlayEls = document.querySelectorAll(".added");

  overlayEls.forEach( el => {
    const overlayParentEl = el.parentElement;
    const elTitleContent = overlayParentEl.querySelector(".shop__item-name").innerText;

    if (titleContent === elTitleContent) el.classList.remove("added");
  });

  clickedBtn.parentElement.remove();
  updatePrice();
};

updatePrice();

quantityEls.forEach( el => {
  el.addEventListener("change", quantityChangeHandler);
});

addToCartBtns.forEach( btn => {
  btn.addEventListener("click", addToCartHandler);
});

deleteBtns.forEach( btn => {
  btn.addEventListener("click", removeCartItem)
});
