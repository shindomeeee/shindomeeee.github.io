export const fireStoreUri = "https://firestore.googleapis.com";
export const fireStoreApiVersion = "v1beta1";
export const fireStoreProjectId = "shindomeeee-d5a0d";
export const requestParams = {
  fields: "fields=documents%2Ffields%2CnextPageToken&orderBy=id&pageSize=5"
};
export const fireStoreUris = {
  blogs: `${fireStoreUri}/${fireStoreApiVersion}/projects/${fireStoreProjectId}/databases/(default)/documents/blogs/?${
    requestParams.fields
  }`,
  events: `${fireStoreUri}/${fireStoreApiVersion}/projects/${fireStoreProjectId}/databases/(default)/documents/events/?${
    requestParams.fields
  }`
};
