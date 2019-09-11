import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Review from "./index";
import { restaurants } from "../../../fixtures";

const review = restaurants[0].reviews[0];

Enzyme.configure({ adapter: new Adapter() });

describe("Review", () => {
  it("should display Anonymous", () => {
    const component = mount(<Review {...review} />);

    expect(
      component
        .find('[data-id="review-user"]')
        .at(0)
        .text()
    ).toBe("Anonymous");
  });

  it("should set rate value", () => {
    const component = mount(<Review {...review} />);

    expect(
      component
        .find("Rate")
        .at(0)
        .prop("value")
    ).toBe(5);
  });

  it("should rate be disabled", () => {
    const component = mount(<Review {...review} />);

    expect(
      component
        .find("Rate")
        .at(0)
        .prop("disabled")
    ).toBe(true);
  });
});
