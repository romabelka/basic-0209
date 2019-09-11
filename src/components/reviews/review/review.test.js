import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Review from "./index";
import { restaurants } from "../../../fixtures";

const review = restaurants[0].reviews[1];

Enzyme.configure({ adapter: new Adapter() });

describe("Review", () => {
  it("should render itself and Rate component", () => {
    const component = mount(<Review {...review} />);

    expect(component.find("Review").length).toBe(1);
    expect(component.find("Rate").length).toBeGreaterThan(0);
  });

  it("should contain user name or Anonymous", () => {
    const component = mount(<Review {...review} />);

    expect(
      component
        .find('[data-id="review-user"]')
        .at(0)
        .text()
    ).toBe(review.user || "Anonymous");
  });
});
