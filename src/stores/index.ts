import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { History, createBrowserHistory } from "history";
import thunk from "redux-thunk";
import { blogsReducer, BlogsState } from "@states/blogs";

export interface AppState {
  blogs: BlogsState;
}

const createCompose =
  process.env.NODE_ENV === "production"
    ? compose(applyMiddleware(thunk))
    : compose(
        applyMiddleware(thunk),
        (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
          (window as any).__REDUX_DEVTOOLS_EXTENSION__()
      );

export const rootReducer = (history: History) =>
  combineReducers<AppState>({
    blogs: blogsReducer
  });
export const history = createBrowserHistory();
export const store = createStore(
  rootReducer(history),
  compose(
    applyMiddleware(thunk),
    createCompose
  )
);
export default store;
