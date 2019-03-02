import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { blogsReducer, BlogsState } from "@states/blogs";
import { eventsReducer, EventsState } from "@states/events";

export interface AppState {
  blogs: BlogsState;
  events: EventsState;
}

const composeEnhancers = composeWithDevTools({});

const createCompose =
  process.env.NODE_ENV === "development"
    ? compose(
        applyMiddleware(thunk),
        composeEnhancers()
      )
    : compose(applyMiddleware(thunk));

export const rootReducer = () =>
  combineReducers<AppState>({
    blogs: blogsReducer,
    events: eventsReducer
  });
export const store = createStore(
  rootReducer(),
  compose(
    applyMiddleware(thunk),
    createCompose
  )
);
export default store;
