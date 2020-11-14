import { screen } from "@testing-library/dom";
import '@testing-library/jest-dom';

import sumTotal from "../../public/js/shop/sumTotal.js";

describe("Calculate total cart price by removing dollar sign", () => {
  test("sum of the output", () => {
    document.body.innerHTML = `
    <div data-testid="price"></div>
    <div data-testid="quantity" ></div>
  `;
  const priceEl = screen.getByTestId("price");
  const quantityEl = screen.getByTestId("quantity");
  priceEl.innerText = "$19.99";
  quantityEl.value = 1;
  
  expect(sumTotal(priceEl, quantityEl)).toBe(19.99);
  
  priceEl.innerText = "19.99"
  quantityEl.value = 2;

  expect(sumTotal(priceEl, quantityEl)).toBe(39.98);
  });
});