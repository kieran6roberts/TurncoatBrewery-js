import { toggleClasses } from "../../public/js/utility/toggleClasses.js";
import { screen } from "@testing-library/dom";
import '@testing-library/jest-dom';

describe("reusable class toggle function", () => {
    test("toggling classes on dom elements", () => {
        document.body.innerHTML = `
            <div data-testid="wrapper" class="wrapper">
                <div data-testid="div"></div>
                <span data-testid="empty"></span>
            </div>
        `;
        const wrapperEl = screen.queryByTestId("wrapper");
        const innerDivEl = screen.queryByTestId("div");
        const spanEl = screen.queryByTestId("empty");

        expect(wrapperEl).toBeInTheDocument();
        expect(innerDivEl).toBeEmptyDOMElement();
        expect(spanEl).toBeEmptyDOMElement();
        
        const mockClass = "mock";

        toggleClasses({}, innerDivEl, spanEl);
        expect(innerDivEl).not.toHaveClass("mock");
        expect(spanEl).not.toHaveClass("mock");

        toggleClasses(mockClass);
        expect(innerDivEl).not.toHaveClass("mock");
        expect(spanEl).not.toHaveClass("mock");

        toggleClasses(mockClass, 5, 7, 8);
        expect(innerDivEl).not.toHaveClass("mock");
        expect(spanEl).not.toHaveClass("mock");

        toggleClasses(mockClass, innerDivEl, spanEl);
        expect(innerDivEl).toHaveClass("mock");
        expect(spanEl).toHaveClass("mock");
    });
});