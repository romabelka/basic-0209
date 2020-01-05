import { Layout, Typography } from "antd";
import React, { useContext, useEffect, useState } from "react";

import Header from "./header";
import Basket from "../basket";
import { Redirect, Route, Switch } from "react-router-dom";
import RestaurantsPage from "../pages/restaurants";
import { Provider as UserProvider } from "../../contexts/user-context";
import i18n from "../../contexts/i18n-context";

function App() {
  const [name, setName] = useState("Roma");
  const { t } = useContext(i18n);
  useEffect(() => {
    setInterval(() => setName(Math.random().toString()), 1000);
  }, [setName]);

  return (
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
                <Typography.Title level={1}>{t("error_page")}</Typography.Title>
              )}
            />
            <Route
              path="/sign-in"
              render={() => (
                <Typography.Title level={1}>
                  {t("sign_in_page")}
                </Typography.Title>
              )}
            />
            <Redirect
              from="/"
              exact
              to="/restaurants/a757a0e9-03c1-4a2a-b384-8ac21dbe2fb2/menu"
            />
            <Route
              path="/"
              render={() => (
                <Typography.Title level={1}>
                  {t("not_found_page")}
                </Typography.Title>
              )}
            />
          </Switch>
        </main>
      </Layout>
    </UserProvider>
  );
}

export default App;
