import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ReviewForm from "./index";
import styles from "./review-form.module.css";
import { Form, Input, Rate } from "antd";

Enzyme.configure({ adapter: new Adapter() });

describe("Review", () => {
  it("should render a Form", () => {
    const component = mount(<ReviewForm />);
    expect(component.find(Form).length).toBe(1);
  });

  it("should handle form validation", () => {
    const component = mount(<ReviewForm />);
    let text = component
      .find(Form)
      .at(0)
      .find(Input.TextArea)
      .at(0);
    expect(text.prop("value")).toBe("");
    expect(text.prop("className")[styles.invalid]).toBeTruthy();
    text.simulate("change", { target: { value: "changed" } });
    // NOTE: re-render has happened
    expect(text.prop("value")).toBe("");
    text = component
      .find(Form)
      .at(0)
      .find(Input.TextArea)
      .at(0);
    expect(text.prop("value")).toBe("changed");
    expect(text.prop("className")[styles.invalid]).toBeFalsy();
  });

  it("should handle form submission", () => {
    const component = mount(<ReviewForm />);
    const form = component.find(Form).at(0);
    const rate = form.find(Rate).at(0);
    const text = form.find(Input.TextArea).at(0);
    const spy = jest.spyOn(console, "log").mockImplementation(() => {});
    form.simulate("submit");
    expect(spy).toBeCalledTimes(1);
    expect(spy).toBeCalledWith(
      "submitted: ",
      rate.prop("value"),
      text.prop("value")
    );
    spy.mockRestore();
  });
});
