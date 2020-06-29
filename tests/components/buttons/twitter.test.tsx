import * as React from "react";
const { shallow } = require("enzyme");

describe("Twitter Button Component", () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test("initialize self state", () => {
    const { Twitter } = require("@components/common/buttons/twitter");
    const twitterComponent = shallow(<Twitter />, {
      disableLifecycleMethods: true
    });
    const state = twitterComponent.state();

    expect(state.loading).toEqual(true);
  });

  test("change self state(after render)", () => {
    const { Twitter } = require("@components/common/buttons/twitter");
    const twitterComponent = shallow(<Twitter />);
    const state = twitterComponent.state();

    expect(state.loading).toEqual(false);
  });
});
