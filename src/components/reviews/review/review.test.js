import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Review from "./index";
import { restaurants } from "../../../fixtures";

const reviews = restaurants[0].reviews;

Enzyme.configure({ adapter: new Adapter() });

describe("Review", () => {
  it("should render user name", () => {
    reviews.forEach(review => {
      const component = mount(<Review {...review} />);

      expect(
        component
          .find('[data-id="review-name"]')
          .at(0)
          .text()
      ).toBe(review.user || "Anonymous");
    });
  });

  it("should render review text", () => {
    reviews.forEach(review => {
      const component = mount(<Review {...review} />);

      expect(
        component
          .find('[data-id="review-text"]')
          .at(0)
          .text()
      ).toBe(review.text);
    });
  });

  it("should render review rate", () => {
    reviews.forEach(review => {
      const component = mount(<Review {...review} />);

      expect(
        component
          .find('[data-id="review-rate"]')
          .at(0)
          .prop("value")
      ).toBe(review.rating);
    });
  });
});
