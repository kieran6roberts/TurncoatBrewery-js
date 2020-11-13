import { screen } from "@testing-library/dom";
import '@testing-library/jest-dom';

import cartCounter from "../../public/js/shop/cartCounter.js";

describe("sum the nubmber of different items in the cart", () => {
    test("no items in cart sets counter to 0", () => {
        document.body.innerHTML = `
        <div data-testid="counter" class="cart-counter-js">0</div>
      `;
      const counter = screen.getByTestId("counter");
      cartCounter();
      expect(counter.textContent).toBe("0");
    });

    test("counter content is equal to number of cart items", () => {
        document.body.innerHTML = `
        <div data-testid="counter" class="cart-counter-js">0</div>
        <div data-testid="cartItem" class="shop__cart-item"></div>
        <div data-testid="cartItem" class="shop__cart-item"></div>
        <div data-testid="cartItem" class="shop__cart-item"></div>
      `;
      const counter = screen.getByTestId("counter");
      cartCounter();
      expect(counter.textContent).toBe("3");
    });
});