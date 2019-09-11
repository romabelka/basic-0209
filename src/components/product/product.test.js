import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Product from "./index";
import { restaurants } from "../../fixtures";

const product = restaurants[0].menu[0];

Enzyme.configure({ adapter: new Adapter() });

describe("Product", () => {
  it("should render a Card", () => {
    const component = mount(<Product product={product} />);

    expect(component.find("Card").length).toBe(1);
  });

  it("should render initial amount === 0", () => {
    const component = mount(<Product product={product} />);

    expect(
      component
        .find('[data-id="product-amount"]')
        .at(0)
        .text()
    ).toBe("0");
  });

  it("should increment amount", () => {
    const component = mount(<Product product={product} />);

    expect(
      component
        .find('[data-id="product-amount"]')
        .at(0)
        .text()
    ).toBe("0");

    component
      .find('[data-id="product-increment-btn"]')
      .at(0)
      .simulate("click");

    expect(
      component
        .find('[data-id="product-amount"]')
        .at(0)
        .text()
    ).toBe("1");
  });

  it("should fetch a product", () => {
    const fn = jest.fn();

    mount(<Product product={product} fetchProduct={fn} />);

    expect(fn).toBeCalledWith(product.id);
  });
});
