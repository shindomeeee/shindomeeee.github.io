export const fireStoreUri = "https://firestore.googleapis.com";
export const fireStoreApiVersion = "v1";
export const fireStoreProjectId = "shindomeeee-d5a0d";
export const requestParams = {
  fields: "fields=documents%2Ffields%2CnextPageToken&orderBy=id&pageSize=5"
};
export const fireStoreUris = {
  blogs: `${fireStoreUri}/${fireStoreApiVersion}/projects/${fireStoreProjectId}/databases/(default)/documents/blogs/?${requestParams.fields}`,
  events: `${fireStoreUri}/${fireStoreApiVersion}/projects/${fireStoreProjectId}/databases/(default)/documents/events/?${requestParams.fields}`
};

export const jsonUris = {
  blogs: "/json/blogs",
  events: "/json/events"
};

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
