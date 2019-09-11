import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Form from "./index";

Enzyme.configure({ adapter: new Adapter() });

describe("Form", () => {
  it("should render with changed value", () => {
    const component = mount(<Form />);

    component
      .find('[data-id="form-input"]')
      .at(0)
      .simulate("change", { target: { value: "some value" } });

    expect(
      component
        .find('[data-id="form-input"]')
        .at(0)
        .prop("value")
    ).toBe("some value");
  });

  it("should render validation", () => {
    const component = mount(<Form />);

    component
      .find('[data-id="form-input"]')
      .at(0)
      .simulate("change", { target: { value: "some value" } });

    expect(
      component
        .find('[data-id="form-input"]')
        .at(0)
        .prop("className").invalid
    ).toBeFalsy();
  });

  it("should render with submit", () => {
    const form = mount(<Form />)
      .find('[data-id="form"]')
      .at(0);
    const spy = jest.spyOn(console, "log");

    form.simulate("submit");

    expect(spy).toHaveBeenCalled();

    spy.mockRestore();
  });
});
