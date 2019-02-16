import React from "react";
import { Provider } from "react-redux";
import { store } from "./src/stores/index";

export const provider = ({ element }) => {
  return <Provider store={store}>{element}</Provider>;
};
