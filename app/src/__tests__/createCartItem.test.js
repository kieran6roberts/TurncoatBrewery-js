import { screen } from "@testing-library/dom";
import '@testing-library/jest-dom';

import createCartItem from "../../public/js/shop/createCartItem.js";

jest.spyOn(window, "alert").mockImplementation(() => "error");

describe("return built cart item based on props", () => {
    test("missing props", () => {
        expect(createCartItem()).toBeNull();
        expect(window.alert).toHaveBeenCalled();

        expect(createCartItem(1, 2, 3, 4, 5)).toBeNull();
        expect(window.alert).toHaveBeenCalled();
    });

    test("return element", () => {
        const cartEl = createCartItem("id", "img", "title", "type", "info", "price");
        document.body.append(cartEl);
        expect(screen.getByText("title")).toBeInTheDocument();
        expect(screen.getByText("type")).toBeInTheDocument();
        expect(screen.getByText("info")).toBeInTheDocument();
        expect(screen.getByText("price")).toBeInTheDocument();
    });
});