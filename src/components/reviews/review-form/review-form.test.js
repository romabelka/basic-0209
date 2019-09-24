import React from "react";
import { mount } from "enzyme";
import ReviewForm from "./index";

describe("Review Form", () => {
  it("should submit a form", () => {
    const text = "some text";
    const rate = 2;
    const fn = jest.fn();

    const component = mount(<ReviewForm onSubmit={fn} />);

    component
      .find('[data-id="review-form-text"]')
      .first()
      .simulate("change", { target: { value: text } });

    component
      .find(".ant-rate-star")
      .at(rate - 1)
      .find("div")
      .first()
      .simulate("click");

    component
      .find('[data-id="review-form"]')
      .first()
      .simulate("submit");

    expect(fn).toBeCalledWith(text, rate);
  });
});
