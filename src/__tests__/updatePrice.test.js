import updatePrice from "../../public/js/shop/updatePrice.js";

test("Check if output is not an empty string", () => {
  expect(updatePrice()).contain();
});