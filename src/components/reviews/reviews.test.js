import React from "react";
import { mount } from "enzyme";
import Reviews from "./index";
import { restaurants } from "../../fixtures";

describe("Review List", () => {
  it("should render a list of reviews", () => {
    const component = mount(<Reviews reviews={restaurants[0].reviews} />);

    expect(component.find('[data-id="review-list-item"]').length).toBe(
      restaurants[0].reviews.length
    );
  });
});
