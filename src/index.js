import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import "./index.css";
import store from "./redux/store";
import App from "./components/app";
import history from "./history";
import { LanguageProvider } from "./contexts/i18n-context";

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
