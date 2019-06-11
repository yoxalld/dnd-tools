import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import Router from "./components/Router";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import { loadState, getSiteIdFromUrl, saveState } from "./utils/localStorage";
const sId = getSiteIdFromUrl();
const localStorageState = loadState(sId);
// Create our data store
const store = createStore(
  rootReducer,
  localStorageState,
  applyMiddleware(thunk)
);

// We update our creature state in Local Storage so it persists on page reload
store.subscribe(
  () =>
    saveState(sId, {
      creatures: store.getState().creatures
    }),
  // Just for testing
  console.log("state", store.getState())
);

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
