import { Layout, Typography } from "antd";
import React, { useEffect, useState } from "react";

import Header from "./header";
import Basket from "../basket";
import { Route, Switch } from "react-router-dom";
import RestaurantsPage from "../pages/restaurants";
import { Provider as UserProvider } from "../../contexts/user-context";
import LanguageContext from "../../contexts/language-context";
import translate from "../../locale";

function App() {
  const [name, setName] = useState("Roma");
  useEffect(() => {
    setInterval(() => setName(Math.random().toString()), 1000);
  }, [setName]);

  const [lang, setLang] = useState("en");
  const t = translate(lang);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
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
                  <Typography.Title level={1}>
                    {lang.notFoundPage}
                  </Typography.Title>
                )}
              />
            </Switch>
          </main>
        </Layout>
      </UserProvider>
    </LanguageContext.Provider>
  );
}

export default App;
