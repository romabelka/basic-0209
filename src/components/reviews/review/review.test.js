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

  it("should contain non-empty user name", () => {
    const sampleReview = { user: "John Doe", ...review };
    const component = mount(<Review {...sampleReview} />);

    expect(
      component
        .find('[data-id="review-user"]')
        .at(0)
        .text()
    ).toBe(sampleReview.user);
  });

  it("should contain Anonymous if user name is empty", () => {
    const { user, ...sampleReview } = review;
    const component = mount(<Review {...sampleReview} />);

    expect(
      component
        .find('[data-id="review-user"]')
        .at(0)
        .text()
    ).toBe("Anonymous");
  });
});
