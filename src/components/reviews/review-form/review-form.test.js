import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AddReview from "./index";

Enzyme.configure({ adapter: new Adapter() });

describe("AddReview", () => {
  const component = mount(<AddReview />);

  it("should render a Card", () => {
    expect(component.find("Card").length).toBe(1);
  });

  it("should get value after change TextArea", () => {
    component
      .find("TextArea")
      .at(0)
      .simulate("change", { target: { value: "Good test" } });

    expect(
      component
        .find("TextArea")
        .at(0)
        .prop("value")
    ).toBe("Good test");
  });
});
