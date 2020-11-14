//create new item in the cart
const createCartItem = ( ...args ) => {
  if (args.length !== 6) {
    alert("There was a problem adding item to cart. Please try again");
    return null;
  }

  const [id, image, title, type, info, price] = args;

  const cartEl = document.createElement("div");
  cartEl.classList.add("shop__cart-item");
  cartEl.setAttribute("id", id);

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
  return cartEl;
};

export default createCartItem;