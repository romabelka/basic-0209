import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Review from "./index";
import { restaurants } from "../../../fixtures";

const review = restaurants[0].reviews[0];

Enzyme.configure({ adapter: new Adapter() });

describe("Review", () => {
  it("should render a Card", () => {
    const component = mount(<Review />);
    expect(component.find("Card").length).toBe(1);
  });

  it("should render a text review", () => {
    const component = mount(<Review text={review.text} />);
    expect(
      component
        .find("Text")
        .at(0)
        .text()
    ).toBe(review.text);
  });

  it("should render a user review", () => {
    const component = mount(<Review user={review.user} />);
    expect(
      component
        .find("Title")
        .at(0)
        .text()
    ).toBe("Anonymous");
  });

  it("should render a Rate", () => {
    const component = mount(<Review rating={review.rating} />);
    expect(
      component
        .find("Rate")
        .at(0)
        .prop("value")
    ).toBe(5);
  });
});
