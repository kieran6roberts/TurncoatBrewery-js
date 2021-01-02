import { screen } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";

jest
  .mock("../../public/js/shop/updatePrice.js" , () => jest.fn())
  .mock("../../public/js/shop/restoreCart.js" , () => jest.fn())
  .mock("../../public/js/shop/quantityChangeHandler.js" , () => jest.fn())
  .mock("../../public/js/shop/addItemToCartHandler.js" , () => jest.fn())
  .mock("../../public/js/shop/removeCartItemHandler.js" , () => jest.fn())
  .mock("../../public/js/shop/checkoutHandler.js" , () => jest.fn());
import updatePrice from "../../public/js/shop/updatePrice.js";
import restoreCart from "../../public/js/shop/restoreCart.js";
import quantityChangeHandler from "../../public/js/shop/quantityChangeHandler.js";
import addToCartHandler from "../../public/js/shop/addItemToCartHandler.js";
import removeCartItemHandler from "../../public/js/shop/removeCartItemHandler.js";
import checkoutHandler from "../../public/js/shop/checkoutHandler.js";
import shopInit from "../../public/js/shop/shopInit.js";

afterAll( () => {
  jest.clearAllMocks();
})

describe("shop is initialised", () => {
  test("calls init functions", () => {
    document.body.innerHTML = `
        <button class="shop__item-btn-js">
          add
        </button>
        <button class="btn--danger-js>
          delete
        </button>

        <input data-testid="input" class="shop__item-quantity"></input>

        <button class="shop__cart-checkout">
          checkout
        </button>
    `;
    shopInit();
    expect(updatePrice).toHaveBeenCalledTimes(1);
    expect(restoreCart).toHaveBeenCalledTimes(1);

    const checkoutBtn = screen.queryByText("checkout");
    const deleteBtn = screen.queryByText("delete");
    const addBtn = screen.queryByText("add");
    const input = screen.queryByTestId("input");

    userEvent.click(addBtn);
    expect(addToCartHandler).toHaveBeenCalledTimes(1);
   
    userEvent.click(checkoutBtn);
    expect(checkoutHandler).toHaveBeenCalledTimes(1);
  });
});