import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Reviews from "./index";
import { restaurants } from "../../fixtures";

const reviews = restaurants[0].reviews;

Enzyme.configure({ adapter: new Adapter() });

describe("Reviews", () => {
  it("should render two reviews", () => {
    const component = mount(<Reviews reviews={reviews} />);

    expect(component.find("Review").length).toBe(2);
  });

  it("should review has id as key", () => {
    const component = mount(<Reviews reviews={reviews} />);

    expect(
      component
        .find("Review")
        .at(0)
        .key()
    ).toBe("5909796d-5030-4e36-adec-68b8f9ec2d96");
  });
});
