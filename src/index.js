import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { setStore } from "./lib/store/store";
import { App } from "./containers/App/App";

import "./index.scss";
import * as favicon from "./assets/images/favicon.ico";

const store = setStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("main"));