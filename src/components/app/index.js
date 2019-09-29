import { Layout, Typography } from "antd";
import React, { useEffect, useState } from "react";

import Header from "./header";
import Basket from "../basket";
import { Route, Switch } from "react-router-dom";
import RestaurantsPage from "../pages/restaurants";
import { Provider as UserProvider } from "../../contexts/user-context";
import * as I18n from "../../contexts/i18n-context";
import messages from "./messages";

function App() {
  const [name, setName] = useState("Roma");
  useEffect(() => {
    setInterval(() => setName(Math.random().toString()), 1000);
  }, [setName]);

  const createTranslator = locale => (id, parameters = {}) =>
    ((messages[id] && messages[id][locale]) || id).replace(
      /({(\w+)})/g,
      (match, g0, g1) => parameters[g1] || g0
    );

  // const locale = navigator.language ? navigator.language.substr(0, 2) : 'ru';
  const locale = "ru";

  return (
    <UserProvider value={{ name, setName }}>
      <Layout>
        <Header />
        <main role="main">
          <I18n.Provider value={{ trans: createTranslator(locale) }}>
            <Switch>
              <Route path="/checkout" exact component={Basket} />
              <Route path="/restaurants" component={RestaurantsPage} />
              <Route
                path="/error"
                render={() => (
                  <Typography.Title level={1}>
                    <I18n.Consumer>
                      {({ trans }) => trans("error_page")}
                    </I18n.Consumer>
                  </Typography.Title>
                )}
              />
              <Route
                path="/sign-in"
                render={() => (
                  <Typography.Title level={1}>
                    <I18n.Consumer>
                      {({ trans }) => trans("signin_page")}
                    </I18n.Consumer>
                  </Typography.Title>
                )}
              />
              <Route
                path="/"
                render={() => (
                  <Typography.Title level={1}>
                    <I18n.Consumer>
                      {({ trans }) => trans("notfound_page")}
                    </I18n.Consumer>
                  </Typography.Title>
                )}
              />
            </Switch>
          </I18n.Provider>
        </main>
      </Layout>
    </UserProvider>
  );
}

export default App;
