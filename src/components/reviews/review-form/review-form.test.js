import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ReviewForm from "./index";

jest.mock("./send-data");
const sendData = require("./send-data").default;
sendData.mockImplementation(() => true);

Enzyme.configure({ adapter: new Adapter() });

describe("ReviewForm", () => {
  it("should not submit invalid data by click on btn", () => {
    const component = mount(<ReviewForm />);
    const btn = component.find('[data-id="review-form-btn"]').at(0);

    btn.simulate("click");

    expect(sendData).toHaveBeenCalledTimes(0);
  });

  it("should submit data by click on btn", () => {
    console.log("~~~~~~~~~~~ review-form.test", sendData());

    const component = mount(<ReviewForm />);

    const textInput = component.find('[data-id="review-form-text"]').at(0);
    const rateComponent = component.find('[data-id="review-form-rate"]').at(0);
    const btn = component.find('[data-id="review-form-btn"]').at(0);

    textInput.simulate("change", { target: { value: "test" } });
    //rateComponent.simulate('change', { which: 5 });
    btn.simulate("click");

    expect(sendData).toHaveBeenCalledTimes(1);
  });

  //it('should change props along change forms data');
});
