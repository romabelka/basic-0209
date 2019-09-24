import React from "react";
import Review from "./index";
import { mount } from "enzyme";

describe("Review", () => {
  it("should display correct data for a full review", () => {
    const review = {
      user: "username",
      rating: 3,
      text: "some text"
    };

    const component = mount(<Review {...review} />);

    expect(component.find(".ant-rate-star-full").length).toBe(review.rating);
    expect(
      component
        .find('[data-id="review-user"]')
        .first()
        .text()
    ).toBe(review.user);
    expect(
      component
        .find('[data-id="review-text"]')
        .first()
        .text()
    ).toBe(review.text);
  });

  it("should display correct data for an anonymous review", () => {
    const review = {
      rating: 2,
      text: "random text"
    };

    const component = mount(<Review {...review} />);

    expect(component.find(".ant-rate-star-full").length).toBe(review.rating);
    expect(
      component
        .find('[data-id="review-user"]')
        .first()
        .text()
    ).toBe("Anonymous");
    expect(
      component
        .find('[data-id="review-text"]')
        .first()
        .text()
    ).toBe(review.text);
  });
});
