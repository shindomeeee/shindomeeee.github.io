import axios from "axios";
import { fireStoreUris, EventsJson, BlogsJson } from "@defines/api";
import * as fs from "fs";

const createFolder = (path: string) => {
  fs.rmdirSync(path, { recursive: true });
  fs.mkdirSync(path, { recursive: true });
};

const createEventsJSON = async () => {
  const dirPath = "./static/json/events";
  createFolder(dirPath);

  const firstResponse = await axios.get(fireStoreUris.events);
  const firstJSON: EventsJson = firstResponse.data;

  fs.writeFileSync(`${dirPath}/index.json`, JSON.stringify(firstJSON));

  let nextPageToken = firstJSON.nextPageToken;
  let nextPageFlag = Boolean(nextPageToken);
  while (nextPageFlag) {
    const api = `${fireStoreUris.events}&pageToken=${nextPageToken}`;
    const res = await axios.get(api);
    const json: EventsJson = res.data;

    fs.writeFileSync(`${dirPath}/${nextPageToken}.json`, JSON.stringify(json));

    if (json.nextPageToken) {
      nextPageToken = json.nextPageToken;
    } else {
      nextPageFlag = Boolean(json.nextPageToken);
    }
  }
};

const createBlogsJSON = async () => {
  const dirPath = "./static/json/blogs";
  createFolder(dirPath);

  const firstResponse = await axios.get(fireStoreUris.blogs);
  const firstJSON: BlogsJson = firstResponse.data;

  fs.writeFileSync(`${dirPath}/index.json`, JSON.stringify(firstJSON));

  let nextPageToken = firstJSON.nextPageToken;
  let nextPageFlag = Boolean(nextPageToken);
  while (nextPageFlag) {
    const api = `${fireStoreUris.blogs}&pageToken=${nextPageToken}`;
    const res = await axios.get(api);
    const json: BlogsJson = res.data;

    fs.writeFileSync(`${dirPath}/${nextPageToken}.json`, JSON.stringify(json));

    if (json.nextPageToken) {
      nextPageToken = json.nextPageToken;
    } else {
      nextPageFlag = Boolean(json.nextPageToken);
    }
  }
};

(async () => {
  await Promise.all([createEventsJSON(), createBlogsJSON()]);
})();
