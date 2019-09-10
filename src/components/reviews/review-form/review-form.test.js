import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AddReview from "./index";

Enzyme.configure({ adapter: new Adapter() });

describe("Review form", () => {
  it("should render review form", () => {
    const component = mount(<AddReview />);

    expect(component.find("Card").length).toBe(1);
  });

  it("Review input validation", () => {
    const component = mount(<AddReview />);

    expect(component.find('[data-id="review-error"]').length).toBe(1);

    component
      .find('[data-id="review-input"]')
      .at(0)
      .simulate("change", { target: { value: "My new value" } });

    expect(component.find('[data-id="review-error"]').length).toBe(0);
  });
});
