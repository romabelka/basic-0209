import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Review from "./index";

Enzyme.configure({ adapter: new Adapter() });

describe("Review", () => {
  it("should render review with correct data", () => {
    const reviewAnon = {
      user: "Vasya",
      text: "test text",
      rating: 5
    };

    const { user, text, rating } = reviewAnon;
    const component = mount(<Review user={user} text={text} rating={rating} />);

    expect(component.props().user).toBe(user);
    expect(component.props().text).toBe(text);
    expect(component.props().rating).toBe(rating);

    expect(
      component
        .find('[data-id="review-user"]')
        .at(0)
        .text()
    ).toBe(user);

    expect(
      component
        .find('[data-id="review-text"]')
        .at(0)
        .text()
    ).toBe(text);

    expect(
      component
        .find('[data-id="review-rate"]')
        .at(0)
        .prop("value")
    ).toBe(rating);
  });

  it("should render anon review with correct data", () => {
    const reviewAnon = {
      text: "test text",
      rating: 5
    };

    const { user, text, rating } = reviewAnon;
    const component = mount(<Review user={user} text={text} rating={rating} />);

    const anonUser = "Anonymous";

    expect(component.props().user).toBe(anonUser);
    expect(component.props().text).toBe(text);
    expect(component.props().rating).toBe(rating);

    expect(
      component
        .find('[data-id="review-user"]')
        .at(0)
        .text()
    ).toBe(anonUser);

    expect(
      component
        .find('[data-id="review-text"]')
        .at(0)
        .text()
    ).toBe(text);

    expect(
      component
        .find('[data-id="review-rate"]')
        .at(0)
        .prop("value")
    ).toBe(rating);
  });

  it("correct work with incorrect data", () => {
    const reviewAnon = {
      text: "test text",
      rating: 5
    };

    const { user, text, rating } = reviewAnon;
    const component = mount(<Review user={user} text={text} rating={rating} />);

    const anonUser = "Anonymous";

    expect(component.props().user).toBe(anonUser);
    expect(component.props().text).toBe(text);
    expect(component.props().rating).toBe(rating);

    expect(
      component
        .find('[data-id="review-user"]')
        .at(0)
        .text()
    ).toBe(anonUser);

    expect(
      component
        .find('[data-id="review-text"]')
        .at(0)
        .text()
    ).toBe(text);

    expect(
      component
        .find('[data-id="review-rate"]')
        .at(0)
        .prop("value")
    ).toBe(rating);
  });
});
