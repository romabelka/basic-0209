import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AddReview from "./index";

Enzyme.configure({ adapter: new Adapter() });

describe("AddReview", () => {
  // 🙋 Не сработало 😔 Как отследить изменения в state, если мы используем stateless-компонент?
  it("should change Button caption after success submit", () => {
    const component = mount(<AddReview />);
    component
      .find('[data-id="add-review-textarea"]')
      .at(0)
      .simulate("change", { target: { value: "some text" } });
    component
      .find('[data-id="add-review-submit-btn"]')
      .at(0)
      .simulate("click");
    expect(
      component
        .find('[data-id="add-review-submit-btn"]')
        .at(0)
        .text()
    ).toBe("PUBLISHED");
  });
});
