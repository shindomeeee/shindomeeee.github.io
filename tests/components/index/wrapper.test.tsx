import * as React from "react";
const { shallow } = require("enzyme");

describe("Index Wrapper Component", () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test("initialize self state", () => {
    const { Wrapper } = require("@components/index/wrapper");
    const wrapperComponent = shallow(<Wrapper />, {
      disableLifecycleMethods: true
    });
    const state = wrapperComponent.state();

    expect(state).toEqual({
      tabs: "blogs",
      footer: {
        imageLoading: true
      }
    });
  });

  test("change self state(after image onload)", () => {
    const { Wrapper } = require("@components/index/wrapper");
    const wrapperComponent = shallow(<Wrapper />);
    const spy = jest.spyOn(wrapperComponent.instance().footerImage, "onload");
    wrapperComponent.instance().footerImage.onload();
    expect(spy).toHaveBeenCalled();
    const state = wrapperComponent.state();

    expect(state).toEqual({
      tabs: "blogs",
      footer: {
        imageLoading: false
      }
    });
  });

  test("change self state(after onclick events / blogs)", () => {
    const { Wrapper } = require("@components/index/wrapper");
    const wrapperComponent = shallow(<Wrapper />);
    wrapperComponent.find('div[children="Events"]').simulate("click");

    expect(wrapperComponent.state()).toEqual({
      tabs: "events",
      footer: {
        imageLoading: true
      }
    });

    wrapperComponent.find('div[children="Blogs"]').simulate("click");
    expect(wrapperComponent.state()).toEqual({
      tabs: "blogs",
      footer: {
        imageLoading: true
      }
    });
  });
});
