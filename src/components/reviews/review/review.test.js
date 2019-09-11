import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Review from "./index";
import { restaurants } from "../../../fixtures";

const mockReview = restaurants[0].reviews[0];

Enzyme.configure({ adapter: new Adapter() });

describe("Review", () => {
  // Вопрос: если ТЗ на русском, то почему бы не писать эти описания по-русски? Т. е. прямо копировать пункты из ТЗ.
  // Так можно будет максимально точно описать бизнес-требования. Или лучше по-английски?
  it("should render all Reviews's required props", () => {
    const component = mount(<Review {...mockReview} />);
    expect(!!component.props().text).toBe(true);
    expect(!!component.props().rating).toBe(true);
  });

  it("should render default value for empty user property", () => {
    const component = mount(
      <Review text={mockReview.text} rating={mockReview.rating} />
    );
    expect(
      component
        .find("[data-id='review-user']")
        .at(0)
        .text()
    ).toBe("Anonymous");
  });
});
