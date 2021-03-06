import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import {PersistGate} from "redux-persist/integration/react"

import ErrorBoundary from "./component/error/errorBoundary" ;


import {store, persistor}  from "./redux/store";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    < ErrorBoundary>
      <Provider store={store}>
        <Router>
          <PersistGate persistor={persistor}>
            <App />
           
          </PersistGate>
        </Router>
      </Provider>
    
    </ErrorBoundary>
    
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
