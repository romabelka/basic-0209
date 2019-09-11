import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ReviewForm from "./index";
import styles from "./review-form.module.css";

Enzyme.configure({ adapter: new Adapter() });

describe("ReviewForm", () => {
  it("should validate text is not empty", () => {
    const form = mount(<ReviewForm />);

    const input = form.find('[input-id="review-form-text"]').at(0);

    input.simulate("change", { target: { value: "" } });

    expect(input.hasClass(styles.invalid));

    input.simulate("change", { target: { value: "Some text" } });

    expect(input.hasClass(styles.invalid)).toBe(false);
  });
});
