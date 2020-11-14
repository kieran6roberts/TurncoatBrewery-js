import updatePrice from "./updatePrice.js";

// update total when quantity of product is changed
const quantityChangeHandler = ({ target: { value } }) => {
  if (isNaN(value) || value <= 0) value = 1; 
  updatePrice();
};

export default quantityChangeHandler;