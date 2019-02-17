import actionCreatorFactory from "typescript-fsa";
import { asyncFactory } from "typescript-fsa-redux-thunk";
import axios from "axios";
import { fireStoreUris } from "@defines/api";

export interface Blog {
  id: number;
  title: string;
  url: string;
  tags: string[];
  created_at: Date;
}

export interface BlogsJson {
  documents: [
    {
      fields: {
        id: {
          integerValue: string;
        };
        title: {
          stringValue: string;
        };
        url: {
          stringValue: string;
        };
        tags: {
          arrayValue: {
            values: [{ stringValue: string }];
          };
        };
        created_at: {
          timestampValue: string;
        };
      };
    }
  ];
  nextPageToken?: string;
}

const actionCreator = actionCreatorFactory();
const createAsync = asyncFactory<{
  blogs: Array<Blog>;
  nextPageToken: string | null;
}>(actionCreator);

export const fetchBlogs = createAsync(
  "THUNKS_FETCH_BLOGS",
  async (nextPageToken?: string) => {
    if (process.env.NODE_ENV !== "production") {
      const date = new Date("2014-10-02T15:01:23.045Z");
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      return {
        blogs: [
          {
            id: 1,
            title: "aaaaaaa",
            url: "http://example.com",
            tags: ["aaa", "aaa"],
            created_at: `${year}年${month}月${day}日`
          },
          {
            id: 2,
            title: "bbbbbbb",
            url: "http://example.com",
            tags: ["bbb", "bbb"],
            created_at: `${year}年${month}月${day}日`
          }
        ],
        nextPageToken: null
      };
    }
    try {
      const api = nextPageToken
        ? `${fireStoreUris.blogs}&pageToken=${nextPageToken}`
        : fireStoreUris.blogs;
      const res = await axios.get(api);
      const json: BlogsJson = res.data;

      return {
        blogs: json.documents.map(document => {
          const date = new Date(document.fields.created_at.timestampValue);
          const year = date.getFullYear();
          const month = date.getMonth() + 1;
          const day = date.getDate();
          return {
            id: +document.fields.id.integerValue,
            title: document.fields.title.stringValue,
            url: document.fields.url.stringValue,
            tags: document.fields.tags.arrayValue.values.map(
              value => value.stringValue
            ),
            created_at: `${year}年${month}月${day}日`
          };
        }),
        nextPageToken: json.nextPageToken ? json.nextPageToken : null
      };
    } catch (error) {
      console.error(error);
      throw new Error("don't blogs fetch");
    }
  }
);
