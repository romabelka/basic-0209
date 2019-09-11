import React from "react";
import AddReview from "./index";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { mount } from "enzyme";

Enzyme.configure({ adapter: new Adapter() });

describe("Review form component", () => {
  it("should ", () => {
    // TODO focus + blue = false
    let component = mount(<AddReview />);
    expect(
      component
        .find('[data-ut="review-text"]')
        .at(0)
        .simulate("click")
        .is('[class*="invalid"]')
    ).toBe(true);
  });
});
