import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ReviewForm from "./index";

import { act } from "react-dom/test-utils";

Enzyme.configure({ adapter: new Adapter() });

describe("ReviewForm", () => {
  it("should not submit invalid data by click on btn", () => {
    const handleSubmitData = jest.fn();

    const component = mount(<ReviewForm submitData={handleSubmitData} />);
    const btn = component.find('[data-id="review-form-btn"]').at(0);

    btn.simulate("click");

    expect(component.props().isValidText).toBeFalsy();
    expect(handleSubmitData).not.toBeCalled();
  });

  it("should submit data by click on btn", () => {
    const handleSubmitData = jest.fn();
    const component = mount(<ReviewForm submitData={handleSubmitData} />);

    const textInput = component.find('[data-id="review-form-text"]').at(0);
    const rateComponent = component.find('[data-id="review-form-rate"]').at(0);
    const btn = component.find('[data-id="review-form-btn"]').at(0);

    const text = "test";

    textInput.simulate("change", { target: { value: text } });

    act(() => {
      rateComponent.props().onChange(5);
    });

    btn.simulate("click");

    expect(handleSubmitData).toBeCalledWith({ text, rate: 5 });
  });
});
