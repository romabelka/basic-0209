import React from "react";
import { mount } from "enzyme";
import { Cart } from "../cart";
import { restaurants } from "../../fixtures";

describe("Cart", () => {
  it("should display correct dish at list", () => {
    const mockOrder = {
      [restaurants[0].menu[0].id]: 3
    };
    const component = mount(<Cart order={mockOrder} />);

    expect(component.find('[data-id="cart-list"] li').length).toBe(1);
  });

  it("should not display incorrect dishes at list", () => {
    const mockOrder = {
      [restaurants[0].menu[0].id]: 0,
      [restaurants[0].menu[1].id]: -5,
      [restaurants[0].menu[1].id]: NaN,
      "": 0,
      "": Infinity,
      "some id": 5,
      "1": 5,
      "some id": 0,
      "some id": -1
    };
    const component = mount(<Cart order={mockOrder} />);

    expect(component.find('[data-id="cart-list"] li').length).toBe(0);
  });
});
