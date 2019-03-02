import * as React from "react";
import { SEO } from "@components/common/seo";
import { Container } from "@containers/index";
import { store } from "@stores/index";
import { fetchBlogs } from "@thunks/blogs";
import { fetchEvents } from "@thunks/events";

store.dispatch<any>(fetchBlogs.action());
store.dispatch<any>(fetchEvents.action());

const IndexPage = () => {
  return (
    <>
      <SEO
        title="shin・DO・meeee"
        keywords={[`gatsby`, `application`, `react`]}
      />
      <Container />
    </>
  );
};

export default IndexPage;
