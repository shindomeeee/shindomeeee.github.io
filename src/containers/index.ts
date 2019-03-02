import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Action } from "typescript-fsa";
import { fetchBlogs } from "@thunks/blogs";
import { fetchEvents } from "@thunks/events";
import { AppState } from "@stores/index";
import { Wrapper } from "@components/index/wrapper";

export interface AppActions {
  actions: {
    blogs: {
      fetchBlogs: (nextPageToken: string) => Action<any>;
    };
    events: {
      fetchEvents: (nextPageToken: string) => Action<any>;
    };
  };
}

export const mapStateToProps = (state: AppState) => {
  return state;
};

export const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: {
    blogs: {
      fetchBlogs: (nextPageToken: string) =>
        dispatch<any>(fetchBlogs.action(nextPageToken))
    },
    events: {
      fetchEvents: (nextPageToken: string) =>
        dispatch<any>(fetchEvents.action(nextPageToken))
    }
  }
});

export const Container = connect(
  mapStateToProps,
  mapDispatchToProps
  // @ts-ignore
)(Wrapper);
