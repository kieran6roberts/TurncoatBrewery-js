import sumTotal from "../../public/js/shop/sumTotal.js";

describe("Calculate total cart price by removing dollar sign", () => {
  test("sum of the output", () => {
    document.body.innerHTML = `
    <div class="price" ></div>
    <div class="quantity" >0</div>
  `;
  const priceEl = document.querySelector(".price");
  priceEl.innerText = "$19.99";
  const quantityEl = document.querySelector(".quantity");
  quantityEl.value = 0;

  expect(sumTotal( priceEl, quantityEl )).toBe(0);
  expect(sumTotal( priceEl, quantityEl )).not.toBeNaN();
  });
});