import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import App from "./App";
// import Baotri from "./compontens/baotri";
import ProvierAuth from "./compontens/admin/auth/Provider";
import createstore from "./store";
const store = createstore();
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ProvierAuth>
        <App />
      </ProvierAuth>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
