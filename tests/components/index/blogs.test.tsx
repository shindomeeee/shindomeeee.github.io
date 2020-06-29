import * as React from "react";
const { shallow } = require("enzyme");

describe("Blogs Component", () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test("blogs length 0", () => {
    const { Blogs } = require("@components/index/blogs");

    const props = {
      blogs: {
        blogs: {
          data: {
            // @ts-ignore
            blogs: []
          }
        }
      }
    };
    const blogsComponent = shallow(<Blogs {...props} />);
    expect(blogsComponent.find("a").length).toBe(
      props.blogs.blogs.data.blogs.length
    );
  });

  test("blogs length 2", () => {
    const { Blogs } = require("@components/index/blogs");

    const props = {
      blogs: {
        blogs: {
          data: {
            blogs: [
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
    const blogsComponent = shallow(<Blogs {...props} />);
    expect(blogsComponent.find("a").length).toBe(
      props.blogs.blogs.data.blogs.length
    );
  });

  test("click more read", () => {
    const { Blogs } = require("@components/index/blogs");

    const props = {
      blogs: {
        blogs: {
          data: {
            blogs: [
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
        blogs: {
          fetchBlogs: () => {}
        }
      }
    };
    const blogsComponent = shallow(<Blogs {...props} />);
    expect(blogsComponent.find("a").length).toBe(
      props.blogs.blogs.data.blogs.length
    );
    blogsComponent.find("button").simulate("click");
  });

  test("display: true", () => {
    const { Blogs } = require("@components/index/blogs");

    const props = {
      blogs: {
        blogs: {
          data: {
            // @ts-ignore
            blogs: [],
            nextPageToken: "http://example.com"
          }
        }
      },
      display: true
    };
    const blogsComponent = shallow(<Blogs {...props} />);
    expect(blogsComponent.find("a").length).toBe(
      props.blogs.blogs.data.blogs.length
    );
  });
});
