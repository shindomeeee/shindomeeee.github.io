import * as React from "react";
import { Helmet } from "react-helmet";
import { seoDefines } from "@defines/seo";
import ogpPng from "@images/ogp.png";

interface Props {
  lang?: string;
  description?: string;
  title?: string;
  author?: string;
  keywords?: Array<string>;
  meta?: Array<{
    name: string;
    content: any;
    property?: any;
  }>;
}

export const SEO = (props: Props) => {
  return (
    <Helmet
      htmlAttributes={{
        lang: props.lang
      }}
      title={props.title}
      titleTemplate={props.title}
      meta={[
        {
          name: "description",
          content: props.description
        },
        {
          property: "og:title",
          content: props.title
        },
        { property: "og:image", content: ogpPng },
        {
          property: "og:description",
          content: props.description
        },
        {
          property: "og:type",
          content: "website"
        },
        {
          name: "twitter:card",
          content: "summary"
        },
        {
          name: "twitter:creator",
          content: props.author
        },
        {
          name: "twitter:title",
          content: props.title
        },
        {
          name: "twitter:description",
          content: props.description
        },
        { property: "fb:app_id", content: process.env.FACEBOOK_APP_ID }
      ]
        .concat({
          name: "keywords",
          content: props.keywords.join(", ")
        })
        .concat(props.meta.length > 0 ? props.meta : [])}
    />
  );
};

SEO.defaultProps = seoDefines;
