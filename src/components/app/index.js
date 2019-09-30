import { Layout, Typography } from "antd";
import React, { useEffect, useState } from "react";

import Header from "./header";
import Basket from "../basket";
import { Route, Switch } from "react-router-dom";
import RestaurantsPage from "../pages/restaurants";
import { Provider as LangProvider } from "../../contexts/lang/lang-context";
import { Provider as UserProvider } from "../../contexts/user-context";
import {
  LANG_EN,
  LANG_RU,
  dictionary,
  getPhrase
} from "../../contexts/lang/constants";

function App() {
  const [name, setName] = useState("Roma");
  const [lang, setLang] = useState(LANG_EN);

  return (
    <LangProvider value={{ lang, setLang, getPhrase: getPhrase(lang) }}>
      <UserProvider value={{ name, setName }}>
        <Layout>
          <Header />
          <main role="main">
            <Switch>
              <Route path="/checkout" exact component={Basket} />
              <Route path="/restaurants" component={RestaurantsPage} />
              <Route
                path="/error"
                render={() => (
                  <Typography.Title level={1}>Error Page</Typography.Title>
                )}
              />
              <Route
                path="/sign-in"
                render={() => (
                  <Typography.Title level={1}>SignIn Page</Typography.Title>
                )}
              />
              <Route
                path="/"
                render={() => (
                  <Typography.Title level={1}>Not Found Page</Typography.Title>
                )}
              />
            </Switch>
          </main>
        </Layout>
      </UserProvider>
    </LangProvider>
  );
}

export default App;
