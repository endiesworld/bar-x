import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import ErrorBoundary from "./component/error/errorBoundary" ;

import { Provider } from "react-redux";
import store from "./redux/store";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    < ErrorBoundary>
      <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
    </ErrorBoundary>
    
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
