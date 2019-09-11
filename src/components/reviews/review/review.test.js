import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Review from "./index";
import styles from "./review.module.css";

Enzyme.configure({ adapter: new Adapter() });

describe("Review", () => {
  it("should render a Card", () => {
    const component = mount(<Review text="text" rating={3} />);
    const cards = component.find("Card");
    expect(cards.length).toBe(1);
    const card = cards.at(0);
    expect(
      card
        .find(`.${styles.name}`)
        .at(0)
        .text()
    ).toBe("Anonymous");
    expect(
      card
        .find(`.${styles.comment}`)
        .at(0)
        .text()
    ).toBe("text");
    const antRate = card.find("Rate").at(0);
    expect(antRate.prop("disabled")).toBeTruthy();
    expect(antRate.prop("value")).toBe(3);
  });
});
