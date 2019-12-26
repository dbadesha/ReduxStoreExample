//React imports
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

//Local Imports
import reducer from "./store/reducer";
import App from "./component/App";

//Style imports
import "./styles.css";

const rootElement = document.getElementById("root");
const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
