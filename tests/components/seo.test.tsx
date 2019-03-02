import * as React from "react";
const { shallow } = require("enzyme");

describe("SEO Component", () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test("default values (not props)", () => {
    const { seoDefines } = require("@defines/seo");

    const { SEO } = require("@components/common/seo");
    const seoComponent = shallow(<SEO />);
    const seoElement = seoComponent.getElement();

    expect(seoElement.props.htmlAttributes.lang).toEqual(seoDefines.lang);
    expect(seoElement.props.title).toEqual(seoDefines.title);
    expect(seoElement.props.meta).toEqual([
      { name: "description", content: seoDefines.description },
      { property: "og:title", content: seoDefines.title },
      { property: "og:image", content: undefined },
      { property: "og:description", content: seoDefines.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:creator", content: seoDefines.author },
      { name: "twitter:title", content: seoDefines.title },
      { name: "twitter:description", content: seoDefines.description },
      { property: "fb:app_id", content: undefined },
      { name: "keywords", content: seoDefines.keywords.join(", ") }
    ]);
    expect(seoElement.props.titleTemplate).toEqual(seoDefines.title);
  });

  test("change lang props", () => {
    const lang = "en";

    const { SEO } = require("@components/common/seo");
    const seoComponent = shallow(<SEO lang={lang} />);
    const seoElement = seoComponent.getElement();

    expect(seoElement.props.htmlAttributes.lang).toEqual(lang);
  });

  test("change description props", () => {
    const description = "テスト説明";
    const { seoDefines } = require("@defines/seo");

    const { SEO } = require("@components/common/seo");
    const seoComponent = shallow(<SEO description={description} />);
    const seoElement = seoComponent.getElement();

    expect(seoElement.props.meta).toEqual([
      { name: "description", content: description },
      { property: "og:title", content: seoDefines.title },
      { property: "og:image", content: undefined },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:creator", content: seoDefines.author },
      { name: "twitter:title", content: seoDefines.title },
      { name: "twitter:description", content: description },
      { property: "fb:app_id", content: undefined },
      { name: "keywords", content: seoDefines.keywords.join(", ") }
    ]);
  });

  test("change title props", () => {
    const title = "テスト説明";
    const { seoDefines } = require("@defines/seo");

    const { SEO } = require("@components/common/seo");
    const seoComponent = shallow(<SEO title={title} />);
    const seoElement = seoComponent.getElement();

    expect(seoElement.props.meta).toEqual([
      { name: "description", content: seoDefines.description },
      { property: "og:title", content: title },
      { property: "og:image", content: undefined },
      { property: "og:description", content: seoDefines.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:creator", content: seoDefines.author },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: seoDefines.description },
      { property: "fb:app_id", content: undefined },
      { name: "keywords", content: seoDefines.keywords.join(", ") }
    ]);
  });

  test("change author props", () => {
    const author = "テストユーザ";
    const { seoDefines } = require("@defines/seo");

    const { SEO } = require("@components/common/seo");
    const seoComponent = shallow(<SEO author={author} />);
    const seoElement = seoComponent.getElement();

    expect(seoElement.props.meta).toEqual([
      { name: "description", content: seoDefines.description },
      { property: "og:title", content: seoDefines.title },
      { property: "og:image", content: undefined },
      { property: "og:description", content: seoDefines.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:creator", content: author },
      { name: "twitter:title", content: seoDefines.title },
      { name: "twitter:description", content: seoDefines.description },
      { property: "fb:app_id", content: undefined },
      { name: "keywords", content: seoDefines.keywords.join(", ") }
    ]);
  });

  test("change keywords props", () => {
    const keywords = ["テストワード1", "テストワード2"];
    const { seoDefines } = require("@defines/seo");

    const { SEO } = require("@components/common/seo");
    const seoComponent = shallow(<SEO keywords={keywords} />);
    const seoElement = seoComponent.getElement();

    expect(seoElement.props.meta).toEqual([
      { name: "description", content: seoDefines.description },
      { property: "og:title", content: seoDefines.title },
      { property: "og:image", content: undefined },
      { property: "og:description", content: seoDefines.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:creator", content: seoDefines.author },
      { name: "twitter:title", content: seoDefines.title },
      { name: "twitter:description", content: seoDefines.description },
      { property: "fb:app_id", content: undefined },
      { name: "keywords", content: keywords.join(", ") }
    ]);
  });

  test("change meta props", () => {
    const meta = [{ name: "generator", content: "Frontweaver 8.2" }];
    const { seoDefines } = require("@defines/seo");

    const { SEO } = require("@components/common/seo");
    const seoComponent = shallow(<SEO meta={meta} />);
    const seoElement = seoComponent.getElement();

    expect(seoElement.props.meta).toEqual([
      { name: "description", content: seoDefines.description },
      { property: "og:title", content: seoDefines.title },
      { property: "og:image", content: undefined },
      { property: "og:description", content: seoDefines.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:creator", content: seoDefines.author },
      { name: "twitter:title", content: seoDefines.title },
      { name: "twitter:description", content: seoDefines.description },
      { property: "fb:app_id", content: undefined },
      { name: "keywords", content: seoDefines.keywords.join(", ") },
      { name: meta[0].name, content: meta[0].content }
    ]);
  });
});

describe("SEO Component (change defines)", () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test("change default values (not props)", () => {
    const mockSeoDefines = {
      description: "テスト説明",
      lang: "テスト言語",
      meta: [{ name: "robots", content: "noindex,nofollow" }],
      keywords: ["test keyword1", "test keyword2"],
      title: "test title",
      author: "@test_user"
    };
    jest.doMock("@defines/seo", () => ({
      seoDefines: mockSeoDefines
    }));
    process.env.FACEBOOK_APP_ID = "123456789";

    const { SEO } = require("@components/common/seo");
    const seoComponent = shallow(<SEO />);
    const seoElement = seoComponent.getElement();

    expect(seoElement.props.htmlAttributes.lang).toEqual(mockSeoDefines.lang);
    expect(seoElement.props.title).toEqual(mockSeoDefines.title);
    expect(seoElement.props.meta).toEqual([
      { name: "description", content: mockSeoDefines.description },
      { property: "og:title", content: mockSeoDefines.title },
      { property: "og:image", content: undefined },
      { property: "og:description", content: mockSeoDefines.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:creator", content: mockSeoDefines.author },
      { name: "twitter:title", content: mockSeoDefines.title },
      { name: "twitter:description", content: mockSeoDefines.description },
      { property: "fb:app_id", content: process.env.FACEBOOK_APP_ID },
      { name: "keywords", content: mockSeoDefines.keywords.join(", ") },
      {
        name: mockSeoDefines.meta[0].name,
        content: mockSeoDefines.meta[0].content
      }
    ]);
    expect(seoElement.props.titleTemplate).toEqual(mockSeoDefines.title);
  });
});
