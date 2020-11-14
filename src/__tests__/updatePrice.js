import { screen } from "@testing-library/dom";
import '@testing-library/jest-dom';

import updatePrice from "../../public/js/shop/updatePrice.js";

jest.mock("../../public/js/shop/sumTotal.js");
import sumTotal from "../../public/js/shop/sumTotal.js";

beforeAll( () => {
    sumTotal.mockImplementation( () => 19.99);
});

afterAll( () => {
    jest.clearAllMocks();
});

describe("updates total price of cart", () => {
    test("empty cart exits function", () => {
        document.body.innerHTML = `
        <div data-testid="total" class="shop__cart-total"></div>
      `;
      const totalEl = screen.getByTestId("total");
      updatePrice();
      
      expect(totalEl.textContent).toMatch("");
    });

    test("total: 1 cart item", () => {
        document.body.innerHTML = `
        <div data-testid="cart-item" class="shop__cart-item">
            <span class="shop__item-price"></span>
            <span class="shop__item-quantity"></span>
        </div>

        <div data-testid="total" class="shop__cart-total"></div>
      `;

      const totalEl = screen.getByTestId("total");
      updatePrice();

      expect(totalEl.textContent).toMatch("Total: $19.99");
    });
    test("total: 2 cart items", () => {
        document.body.innerHTML = `
        <div data-testid="cart-item" class="shop__cart-item">
            <span class="shop__item-price"></span>
            <span class="shop__item-quantity"></span>
        </div>
        <div data-testid="cart-item" class="shop__cart-item">
            <span class="shop__item-price"></span>
            <span class="shop__item-quantity"></span>
        </div>

        <div data-testid="total" class="shop__cart-total"></div>
      `;

      const totalEl = screen.getByTestId("total");
      updatePrice();

      expect(totalEl.textContent).toMatch("Total: $39.98");
    });
    test("total: 3 cart items", () => {
        document.body.innerHTML = `
        <div data-testid="cart-item" class="shop__cart-item">
            <span class="shop__item-price"></span>
            <span class="shop__item-quantity"></span>
        </div>
        <div data-testid="cart-item" class="shop__cart-item">
            <span class="shop__item-price"></span>
            <span class="shop__item-quantity"></span>
        </div>
        <div data-testid="cart-item" class="shop__cart-item">
            <span class="shop__item-price"></span>
            <span class="shop__item-quantity"></span>
        </div>

        <div data-testid="total" class="shop__cart-total"></div>
      `;

      const totalEl = screen.getByTestId("total");
      updatePrice();

      expect(totalEl.textContent).toMatch("Total: $59.97");
    });
});