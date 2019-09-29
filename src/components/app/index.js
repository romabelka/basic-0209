import { Layout, Typography } from "antd";
import React, { useEffect, useState } from "react";

import Header from "./header";
import Basket from "../basket";
import { Route, Switch } from "react-router-dom";
import RestaurantsPage from "../pages/restaurants";
import { Provider as UserProvider } from "../../contexts/user-context";
import { Provider as LangProvider } from "../../contexts/lang-context";
import { languages } from "../../contexts/lang-context";

import LangSelect from "../language-switcher";

function App() {
  const [name, setName] = useState("Roma");
  const [lang, setLang] = useState(languages.en);
  return (
    <UserProvider value={{ name, setName }}>
      <LangProvider value={{ lang, setLang }}>
        <Layout>
          <Header />
          <LangSelect setLang={setLang} />
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
      </LangProvider>
    </UserProvider>
  );
}

export default App;
