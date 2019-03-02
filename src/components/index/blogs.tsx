import * as React from "react";
import { AppState } from "@stores/index";
import { AppActions } from "@containers/index";
import * as style from "@styles/index/blogs.module.css";

type Props = AppActions &
  AppState & {
    display: boolean;
  };

export const Blogs = (props: Props) => {
  const blogsElement = props.blogs.blogs.data.blogs.map(blog => {
    return (
      <div key={blog.id}>
        <div>{blog.created_at}</div>
        <div>
          <a href={blog.url} target="_blank" rel="noopener">
            {blog.title}
          </a>
        </div>
      </div>
    );
  });
  return (
    <section className={props.display ? style.blogsSection : style.disable}>
      <div>{blogsElement}</div>
      <button
        className={
          props.blogs.blogs.data.nextPageToken
            ? style.moreReadButton
            : style.moreReadButtonHidden
        }
        onClick={() =>
          props.actions.blogs.fetchBlogs(props.blogs.blogs.data.nextPageToken)
        }
      >
        さらに読む
      </button>
    </section>
  );
};
