import actionCreatorFactory from "typescript-fsa";
import { asyncFactory } from "typescript-fsa-redux-thunk";
import axios from "axios";
import { jsonUris, EventsJson } from "@defines/api";

export interface Event {
  id: number;
  title: string;
  url: string;
  created_at: string;
}

const actionCreator = actionCreatorFactory();
const createAsync = asyncFactory<{
  events: Array<Event>;
  nextPageToken: string | null;
}>(actionCreator);

export const fetchEvents = createAsync(
  "THUNKS_FETCH_EVENTS",
  async (nextPageToken?: string) => {
    try {
      const api = nextPageToken
        ? `${jsonUris.events}/${nextPageToken}.json`
        : `${jsonUris.events}/index.json`;
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
