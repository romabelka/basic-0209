import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Review from "./index";
import { restaurants } from "../../../fixtures";

const review = restaurants[0].reviews[0];
const user = review.user;
const text = review.text;
const rating = review.rating;

Enzyme.configure({ adapter: new Adapter() });

describe("Review", () => {
  it("should render review", () => {
    const component = mount(<Review user={user} text={text} rating={rating} />);

    expect(component.find("Card").length).toBe(1);
  });

  it("should render review without user", () => {
    const component = mount(<Review text={text} rating={rating} />);

    expect(component.props().user).toBe("Anonymous");
  });
});
