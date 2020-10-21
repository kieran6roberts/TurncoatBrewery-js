import updatePrice from "./updatePrice.js";

// update total when quantity of product is changed
const quantityChangeHandler = e => {
  const input = e.target;

  if (isNaN(input.value) || input.value <= 0) input.value = 1; 

  updatePrice();
};

export default quantityChangeHandler;