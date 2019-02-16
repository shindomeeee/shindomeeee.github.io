import actionCreatorFactory from "typescript-fsa";
import { asyncFactory } from "typescript-fsa-redux-thunk";
import axios from "axios";
import { fireStoreUris } from "@defines/api";

export interface Blog {
  id: number;
  title: string;
  url: string;
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
        created_at: {
          timestampValue: string;
        };
      };
    }
  ];
}

const actionCreator = actionCreatorFactory();
const createAsync = asyncFactory<Array<Blog>>(actionCreator);

export const fetchBlogs = createAsync("THUNKS_FETCH_BLOGS", async () => {
  if (process.env.NODE_ENV !== "production") {
    return [
      {
        id: 1,
        title: "aaaaaaa",
        url: "http://example.com",
        created_at: new Date("2014-10-02T15:01:23.045Z")
      },
      {
        id: 2,
        title: "bbbbbbb",
        url: "http://example.com",
        created_at: new Date("2014-11-02T15:01:23.045Z")
      }
    ];
  }
  try {
    const res = await axios.get(fireStoreUris.blogs);
    const json: BlogsJson = res.data;
    return json.documents.map(document => ({
      id: +document.fields.id.integerValue,
      title: document.fields.title.stringValue,
      url: document.fields.url.stringValue,
      created_at: new Date(document.fields.created_at.timestampValue)
    }));
  } catch (error) {
    console.error(error);
    throw new Error("don't blogs fetch");
  }
});
