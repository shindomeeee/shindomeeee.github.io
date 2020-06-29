import * as React from "react";
const { shallow } = require("enzyme");

describe("Fecebook Button Component", () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test("initialize self state", () => {
    const { Facebook } = require("@components/common/buttons/facebook");
    const facebookComponent = shallow(<Facebook />, {
      disableLifecycleMethods: true
    });
    const state = facebookComponent.state();

    expect(state.loading).toEqual(true);
    expect(state.href).toEqual("");
  });

  test("change self state(after render)", () => {
    const { Facebook } = require("@components/common/buttons/facebook");
    const facebookComponent = shallow(<Facebook />);
    const state = facebookComponent.state();

    expect(state.loading).toEqual(false);
    // enzymeによってlocalhostと表示されているだけ
    expect(state.href).toEqual("http://localhost/");
  });
});
