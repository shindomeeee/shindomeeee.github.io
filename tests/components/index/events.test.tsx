import * as React from "react";
const { shallow } = require("enzyme");

describe("Events Component", () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test("events length 0", () => {
    const { Events } = require("@components/index/events");

    const props = {
      events: {
        events: {
          data: {
            // @ts-ignore
            events: []
          }
        }
      }
    };
    const eventsComponent = shallow(<Events {...props} />);
    expect(eventsComponent.find("a").length).toBe(
      props.events.events.data.events.length
    );
  });

  test("events length 2", () => {
    const { Events } = require("@components/index/events");

    const props = {
      events: {
        events: {
          data: {
            events: [
              {
                id: 1,
                url: "http://example.com",
                title: "111111",
                created_at: "2014-11-11 00:00:00"
              },
              {
                id: 2,
                url: "http://example.com",
                title: "222222",
                created_at: "2014-11-11 00:00:00"
              }
            ]
          }
        }
      }
    };
    const eventsComponent = shallow(<Events {...props} />);
    expect(eventsComponent.find("a").length).toBe(
      props.events.events.data.events.length
    );
  });

  test("click more read", () => {
    const { Events } = require("@components/index/events");

    const props = {
      events: {
        events: {
          data: {
            events: [
              {
                id: 1,
                url: "http://example.com",
                title: "111111",
                created_at: "2014-11-11 00:00:00"
              },
              {
                id: 2,
                url: "http://example.com",
                title: "222222",
                created_at: "2014-11-11 00:00:00"
              }
            ]
          }
        }
      },
      actions: {
        events: {
          fetchEvents: () => {}
        }
      }
    };
    const eventsComponent = shallow(<Events {...props} />);
    expect(eventsComponent.find("a").length).toBe(
      props.events.events.data.events.length
    );
    eventsComponent.find("button").simulate("click");
  });

  test("display: true", () => {
    const { Events } = require("@components/index/events");

    const props = {
      events: {
        events: {
          data: {
            // @ts-ignore
            events: [],
            nextPageToken: "http://example.com"
          }
        }
      },
      display: true
    };
    const eventsComponent = shallow(<Events {...props} />);
    expect(eventsComponent.find("a").length).toBe(
      props.events.events.data.events.length
    );
  });
});
