import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ReviewForm from "./index";

Enzyme.configure({ adapter: new Adapter() });

jest.mock("./send-data");
const sendData = require("./send-data").default;

describe("ReviewForm", () => {
  it("should not submit invalid data by click on btn", () => {
    const component = mount(<ReviewForm />);
    const btn = component.find('[data-id="review-form-btn"]').at(0);

    btn.simulate("click");

    expect(sendData).not.toBeCalled();
  });

  it("should submit data by click on btn", () => {
    const component = mount(<ReviewForm />);

    const textInput = component.find('[data-id="review-form-text"]').at(0);
    //const rateComponent = component.find('[data-id="review-form-rate"]').at(0);
    const btn = component.find('[data-id="review-form-btn"]').at(0);

    const text = "test";

    textInput.simulate("change", { target: { value: text } });
    //rateComponent.simulate('change', { target: { value: text } });

    btn.simulate("click");

    expect(sendData).toBeCalledWith({ text, rate: 0 });
  });

  it.todo("should change props along change forms data");
});
