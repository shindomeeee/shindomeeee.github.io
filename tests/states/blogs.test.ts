import { blogsReducer, initialState } from "@states/blogs";
import { fetchBlogs } from "@thunks/blogs";

describe("blogs reducer", () => {
  test("fetchBlogs.async.started.type", () => {
    expect(
      blogsReducer(initialState, {
        type: fetchBlogs.async.started.type
      })
    ).toEqual({
      blogs: {
        data: { blogs: [], nextPageToken: null },
        error: null,
        loading: true
      }
    });
  });

  test("fetchBlogs.async.failed", () => {
    const payload = {
      error: "fetch error"
    };
    expect(
      blogsReducer(initialState, {
        type: fetchBlogs.async.failed.type,
        // @ts-ignore
        payload
      })
    ).toEqual({
      blogs: {
        data: { blogs: [], nextPageToken: null },
        error: payload.error,
        loading: false
      }
    });
  });

  test("fetchBlogs.async.done", () => {
    const payload = {
      result: [
        {
          id: 1,
          title: "blog name",
          url: "http://sample.com",
          created_at: new Date("2014-10-02T15:01:23.045Z")
        }
      ]
    };
    expect(
      blogsReducer(initialState, {
        type: fetchBlogs.async.done.type,
        // @ts-ignore
        payload
      })
    ).toEqual({ blogs: { data: payload.result, error: null, loading: false } });
  });
});
