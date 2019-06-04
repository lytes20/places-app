import React from "react";
import { AppRegistry } from "react-native";
import { Provider } from "react-redux";

import store from "./src/store/index";
import App from "./App";

const TheApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
AppRegistry.registerComponent("Places", () => TheApp);
