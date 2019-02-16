import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Action } from "typescript-fsa";
import { fetchBlogs } from "@thunks/blogs";
import { AppState } from "@stores/index";
import { Wrapper } from "@components/index/wrapper";

export interface AppActions {
  actions: {
    blogs: {
      fetchBlogs: () => Action<any>;
    };
  };
}

export const mapStateToProps = (state: AppState) => {
  return state;
};

export const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: {
    blogs: {
      fetchBlogs: () => fetchBlogs.action()
    }
  }
});

export const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Wrapper);
