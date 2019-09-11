import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AddReview from "./index";
import styles from "./review-form.module.css";
import { Form, Input } from "antd";

Enzyme.configure({ adapter: new Adapter() });

describe("ReviewForm", () => {
  it("should text be valid", () => {
    const component = mount(<AddReview />);

    component
      .find(Input.TextArea)
      .at(0)
      .simulate("change", { target: { value: "123" } });

    expect(
      component
        .find(Input.TextArea)
        .at(0)
        .hasClass(styles.invalid)
    ).toBe(false);
  });

  it("should submit form", () => {
    const fn = jest.fn();
    const component = mount(<AddReview submitFunction={fn} />);

    component
      .find(Input.TextArea)
      .at(0)
      .simulate("change", { target: { value: "123" } });

    component
      .find(Form)
      .at(0)
      .simulate("submit");

    expect(fn).toBeCalledWith({ text: "123", rate: undefined });
  });
});
