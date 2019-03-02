import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("THUNKS_FETCH_EVENTS when return set state", () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test("check return not value", async () => {
    process.env.NODE_ENV = "production";
    jest.mock("axios");
    const axios = require("axios");
    axios.get.mockResolvedValue({
      data: {
        documents: [],
        nextPageToken: null
      }
    });

    const store = mockStore({});
    const { fetchEvents } = require("@thunks/events");

    await store.dispatch(fetchEvents.action());
    const actions = store.getActions();
    expect(actions).toEqual([
      { type: fetchEvents.async.started.type, payload: undefined },
      {
        type: fetchEvents.async.done.type,
        payload: {
          params: undefined,
          result: { events: [], nextPageToken: null }
        }
      }
    ]);
  });

  test("check return 1 value", async () => {
    process.env.NODE_ENV = "production";
    jest.mock("axios");
    const axios = require("axios");
    axios.get.mockResolvedValue({
      data: {
        documents: [
          {
            fields: {
              id: {
                integerValue: "1"
              },
              title: {
                stringValue: "event name1"
              },
              url: {
                stringValue: "https://example.com"
              },
              created_at: {
                timestampValue: "2014-10-02T15:01:23.045123Z"
              }
            }
          }
        ],
        nextPageToken: null
      }
    });

    const store = mockStore({});
    const { fetchEvents } = require("@thunks/events");

    await store.dispatch(fetchEvents.action());
    const actions = store.getActions();
    expect(actions).toEqual([
      { type: fetchEvents.async.started.type, payload: undefined },
      {
        type: fetchEvents.async.done.type,
        payload: {
          params: undefined,
          result: {
            events: [
              {
                id: 1,
                title: "event name1",
                url: "https://example.com",
                created_at: "2014年10月3日"
              }
            ],
            nextPageToken: null
          }
        }
      }
    ]);
  });

  test("check nextPageToken payload (params)", async () => {
    process.env.NODE_ENV = "production";
    jest.mock("axios");
    const axios = require("axios");
    axios.get.mockResolvedValue({
      data: {
        documents: [
          {
            fields: {
              id: {
                integerValue: "1"
              },
              title: {
                stringValue: "event name1"
              },
              url: {
                stringValue: "https://example.com"
              },
              created_at: {
                timestampValue: "2014-10-02T15:01:23.045123Z"
              }
            }
          }
        ],
        nextPageToken: null
      }
    });

    const store = mockStore({});
    const { fetchEvents } = require("@thunks/events");

    await store.dispatch(fetchEvents.action("http://api.example.com"));
    const actions = store.getActions();
    expect(actions).toEqual([
      {
        type: fetchEvents.async.started.type,
        payload: "http://api.example.com"
      },
      {
        type: fetchEvents.async.done.type,
        payload: {
          params: "http://api.example.com",
          result: {
            events: [
              {
                id: 1,
                title: "event name1",
                url: "https://example.com",
                created_at: "2014年10月3日"
              }
            ],
            nextPageToken: null
          }
        }
      }
    ]);
  });

  test("check nextPageToken in response json", async () => {
    process.env.NODE_ENV = "production";
    jest.mock("axios");
    const axios = require("axios");
    axios.get.mockResolvedValue({
      data: {
        documents: [
          {
            fields: {
              id: {
                integerValue: "1"
              },
              title: {
                stringValue: "event name1"
              },
              url: {
                stringValue: "https://example.com"
              },
              created_at: {
                timestampValue: "2014-10-02T15:01:23.045123Z"
              }
            }
          }
        ],
        nextPageToken: "http://api.test.com"
      }
    });

    const store = mockStore({});
    const { fetchEvents } = require("@thunks/events");

    await store.dispatch(fetchEvents.action());
    const actions = store.getActions();
    expect(actions).toEqual([
      {
        type: fetchEvents.async.started.type,
        payload: undefined
      },
      {
        type: fetchEvents.async.done.type,
        payload: {
          params: undefined,
          result: {
            events: [
              {
                id: 1,
                title: "event name1",
                url: "https://example.com",
                created_at: "2014年10月3日"
              }
            ],
            nextPageToken: "http://api.test.com"
          }
        }
      }
    ]);
  });

  test("fetch error", async () => {
    process.env.NODE_ENV = "production";
    jest.mock("axios");
    const axios = require("axios");
    axios.get.mockRejectedValue(new Error("fetch error"));

    const store = mockStore({});
    const { fetchEvents } = require("@thunks/events");

    try {
      await store.dispatch(fetchEvents.action());
    } catch (error) {
      const actions = store.getActions();
      expect(actions).toEqual([
        { type: fetchEvents.async.started.type, payload: undefined },
        {
          type: fetchEvents.async.failed.type,
          error: true,
          payload: {
            error: new Error("don't events fetch"),
            params: undefined
          }
        }
      ]);
    }
  });

  test("run localhost", async () => {
    process.env.NODE_ENV = "development";

    const store = mockStore({});
    const { fetchEvents } = require("@thunks/events");

    await store.dispatch(fetchEvents.action());
    const actions = store.getActions();
    expect(actions).toEqual([
      { type: fetchEvents.async.started.type, payload: undefined },
      {
        type: fetchEvents.async.done.type,
        payload: {
          params: undefined,
          result: {
            events: [
              {
                id: 1,
                title: "event 1",
                url: "http://example.com",
                created_at: "2014年10月3日"
              },
              {
                id: 2,
                title: "event 2",
                url: "http://example.com",
                created_at: "2014年10月3日"
              }
            ],
            nextPageToken: null
          }
        }
      }
    ]);
  });
});
