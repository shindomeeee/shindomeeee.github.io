import * as React from "react";
import { seoDefines } from "@defines/seo";

import { Header } from "@components/header";
import "@components/layout.css";

interface Props {
  children: React.ReactNode;
}

export const Layout = (props: Props) => (
  <>
    <Header siteTitle={seoDefines.title} />
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0px 1.0875rem 1.45rem`,
        paddingTop: 0
      }}
    >
      <main>{props.children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  </>
);
