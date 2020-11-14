import removeCartItemHandler from "./removeCartItemHandler.js";
import quantityChangeHandler from "./quantityChangeHandler.js"

const appendItemToCart = ( appendItem, appendTo, queryBtn, queryQuantity ) => {
  appendTo.append(appendItem);
  appendItem.querySelector(queryBtn).addEventListener("click", removeCartItemHandler);
  appendItem.querySelector(queryQuantity).addEventListener("change", quantityChangeHandler);
};

export default appendItemToCart;