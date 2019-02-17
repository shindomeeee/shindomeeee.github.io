import { reducerWithInitialState } from "typescript-fsa-reducers";
import { Blog, fetchBlogs } from "@thunks/blogs";

export interface StoreData<T> {
  data: T;
  loading?: boolean;
  error?: any;
}

export interface BlogsState {
  blogs: StoreData<{
    blogs: Array<Blog>;
    nextPageToken: string | null;
  }>;
}

export const initialState: BlogsState = {
  blogs: {
    data: {
      blogs: [],
      nextPageToken: null
    },
    loading: false,
    error: null
  }
};

export const blogsReducer = reducerWithInitialState(initialState)
  .case(fetchBlogs.async.started, state => {
    return {
      ...state,
      blogs: {
        ...state.blogs,
        loading: true,
        error: null
      }
    };
  })
  .case(fetchBlogs.async.failed, (state, payload) => {
    return {
      ...state,
      blogs: {
        ...state.blogs,
        loading: false,
        error: payload.error
      }
    };
  })
  .case(fetchBlogs.async.done, (state, payload) => {
    return {
      ...state,
      blogs: {
        ...state.blogs,
        data: payload.result,
        loading: false,
        error: null
      }
    };
  });
