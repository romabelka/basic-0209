import { Layout, Typography } from "antd";
import React, { useEffect, useState } from "react";

import Header from "./header";
import Basket from "../basket";
import { Route, Switch } from "react-router-dom";
import RestaurantsPage from "../pages/restaurants";
import { Provider as UserProvider } from "../../contexts/user-context";
import { Provider as LangProvider } from "../../contexts/language-context";
import texts from "../../text-constants";

function App() {
  const [name, setName] = useState("Roma");
  const [lang, setLang] = useState("en");
  useEffect(() => {
    setInterval(() => setName(Math.random().toString()), 1000);
  }, [setName]);

  return (
    <UserProvider value={{ name, setName }}>
      <LangProvider value={{ lang, setLang }}>
        <Layout>
          <Header />
          <main role="main">
            <Switch>
              <Route path="/checkout" exact component={Basket} />
              <Route path="/restaurants" component={RestaurantsPage} />
              <Route
                path="/error"
                render={() => (
                  <Typography.Title level={1}>
                    {texts[lang].ERROR_PAGE}
                  </Typography.Title>
                )}
              />
              <Route
                path="/sign-in"
                render={() => (
                  <Typography.Title level={1}>
                    {texts[lang].SIGN_IN_PAGE}
                  </Typography.Title>
                )}
              />
              <Route
                path="/"
                render={() => (
                  <Typography.Title level={1}>
                    {texts[lang].NOT_FOUND_PAGE}
                  </Typography.Title>
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
