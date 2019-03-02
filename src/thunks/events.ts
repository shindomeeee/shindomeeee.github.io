import actionCreatorFactory from "typescript-fsa";
import { asyncFactory } from "typescript-fsa-redux-thunk";
import axios from "axios";
import { fireStoreUris } from "@defines/api";

export interface Event {
  id: number;
  title: string;
  url: string;
  created_at: string;
}

export interface EventsJson {
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
  nextPageToken?: string;
}

const actionCreator = actionCreatorFactory();
const createAsync = asyncFactory<{
  events: Array<Event>;
  nextPageToken: string | null;
}>(actionCreator);

export const fetchEvents = createAsync(
  "THUNKS_FETCH_EVENTS",
  async (nextPageToken?: string) => {
    if (process.env.NODE_ENV !== "production") {
      const date = new Date("2014-10-02T15:01:23.045Z");
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      return {
        events: [
          {
            id: 1,
            title: "event 1",
            url: "http://example.com",
            created_at: `${year}年${month}月${day}日`
          },
          {
            id: 2,
            title: "event 2",
            url: "http://example.com",
            created_at: `${year}年${month}月${day}日`
          }
        ],
        nextPageToken: null
      };
    }
    try {
      const api = nextPageToken
        ? `${fireStoreUris.events}&pageToken=${nextPageToken}`
        : fireStoreUris.events;
      const res = await axios.get(api);
      const json: EventsJson = res.data;

      return {
        events: json.documents.map(document => {
          const date = new Date(document.fields.created_at.timestampValue);
          const year = date.getFullYear();
          const month = date.getMonth() + 1;
          const day = date.getDate();
          return {
            id: +document.fields.id.integerValue,
            title: document.fields.title.stringValue,
            url: document.fields.url.stringValue,
            created_at: `${year}年${month}月${day}日`
          };
        }),
        nextPageToken: json.nextPageToken ? json.nextPageToken : null
      };
    } catch (error) {
      console.error(error);
      throw new Error("don't events fetch");
    }
  }
);
