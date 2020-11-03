
const cartCounter = () => {
  const counter = document.querySelector(".cart-counter-js");
  const cartItem = document.querySelectorAll(".shop__cart-item");
  const cartArr = [...cartItem];

  if (!cartArr) return counter.textContent = 0;
  counter.textContent = cartArr.length

  localStorage.setItem("CartCount", JSON.stringify(cartArr.length));
}

export default cartCounter;