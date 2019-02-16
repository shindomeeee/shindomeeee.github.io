import * as React from "react";
import { SEO } from "@components/common/seo";
import { Container } from "@containers/index";
import { store } from "@stores/index";
import { fetchBlogs } from "@thunks/blogs";

store.dispatch<any>(fetchBlogs.action());

const IndexPage = () => {
  return (
    <>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Container />
    </>
  );
};

export default IndexPage;
