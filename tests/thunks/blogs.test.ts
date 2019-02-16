import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("THUNKS_FETCH_BLOGS when return set state", () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test("check return not value", async () => {
    jest.mock("axios");
    const axios = require("axios");
    axios.get.mockResolvedValue({
      data: {
        documents: []
      }
    });

    const store = mockStore({});
    const { fetchBlogs } = require("@thunks/blogs");

    await store.dispatch(fetchBlogs.action());
    const actions = store.getActions();
    expect(actions).toEqual([
      { type: "THUNKS_FETCH_BLOGS_STARTED", payload: undefined },
      {
        type: "THUNKS_FETCH_BLOGS_DONE",
        payload: {
          params: undefined,
          result: []
        }
      }
    ]);
  });

  test("check return 1 value", async () => {
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
                stringValue: "blog name1"
              },
              url: {
                stringValue: "https://example.com"
              },
              created_at: {
                timestampValue: "2014-10-02T15:01:23.045123Z"
              }
            }
          }
        ]
      }
    });

    const store = mockStore({});
    const { fetchBlogs } = require("@thunks/blogs");

    await store.dispatch(fetchBlogs.action());
    const actions = store.getActions();
    expect(actions).toEqual([
      { type: "THUNKS_FETCH_BLOGS_STARTED", payload: undefined },
      {
        type: "THUNKS_FETCH_BLOGS_DONE",
        payload: {
          params: undefined,
          result: [
            {
              id: 1,
              title: "blog name1",
              url: "https://example.com",
              created_at: new Date("2014-10-02T15:01:23.045Z")
            }
          ]
        }
      }
    ]);
  });

  test("fetch error", async () => {
    jest.mock("axios");
    const axios = require("axios");
    axios.get.mockRejectedValue(new Error("fetch error"));

    const store = mockStore({});
    const { fetchBlogs } = require("@thunks/blogs");

    try {
      await store.dispatch(fetchBlogs.action());
    } catch (error) {
      const actions = store.getActions();
      expect(actions).toEqual([
        { type: "THUNKS_FETCH_BLOGS_STARTED", payload: undefined },
        {
          type: "THUNKS_FETCH_BLOGS_FAILED",
          error: true,
          payload: {
            error: new Error("don't blogs fetch"),
            params: undefined
          }
        }
      ]);
    }
  });
});
