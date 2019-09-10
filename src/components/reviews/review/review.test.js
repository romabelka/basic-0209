import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Review from "./index";
import { restaurants } from "../../../fixtures";

const review = restaurants[0].reviews[0];

Enzyme.configure({ adapter: new Adapter() });

describe("Review", () => {
  it("should render a Card", () => {
    const component = mount(<Review review={review} />);
    expect(component.find("Card").length).toBe(1);
  });
});
