import React from "react";
import Review from "./index";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { mount } from "enzyme";
import { restaurants } from "../../../fixtures";

const { reviews } = restaurants[0];

Enzyme.configure({ adapter: new Adapter() });

describe("Review component", () => {
  const tests = [
    {
      arg: reviews[0],
      expected: "Anonymous"
    },

    {
      arg: reviews[1],
      expected: "Sam"
    }
  ];

  tests.forEach(test => {
    const { arg, expected } = test;

    it(`should return @{ ${expected} } for review user is @{ ${JSON.stringify(
      arg
    )} }`, () => {
      let component = mount(<Review {...arg} />);
      expect(
        component
          .find('[data-ut="user-name"]')
          .at(0)
          .text()
      ).toBe(expected);
    });
  });
});
