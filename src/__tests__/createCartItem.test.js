import createCartItem from "../../public/js/shop/createCartItem";

describe("Return HTML for new cart item", () => {
  test("return values", () => {
    const div = createCartItem("1", "2", "3", "4", "5");
    const imgEl = div.querySelector(".shop__item--img");
    const nameEl = div.querySelector(".shop__item-name");
    const typeEl = div.querySelector(".shop__item-type");
    const infoEl = div.querySelector(".shop__item-info");
    const priceEl = div.querySelector(".shop__item-price");

    expect(imgEl.src).toBe("http://localhost/1");
    expect(nameEl.textContent).toBe("2");
    expect(typeEl.textContent).toBe("3");
    expect(infoEl.textContent).toBe("4");
    expect(priceEl.textContent).toBe("5");
  });

  test("check for falsy cases", () => {
    const jsdomAlert = window.alert;
    window.alert = () => "alert";

    const item = createCartItem();
    const item2 = createCartItem("", "", "", "", "");
    expect(item).toBeUndefined();
    expect(item2).toBeUndefined();

    window.alert = jsdomAlert;
  });
});