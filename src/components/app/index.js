import { Layout, Typography } from "antd";
import React, { useContext, useState } from "react";

import Header from "./header";
import CheckoutPage from "../pages/checkout";
import { Redirect, Route, Switch } from "react-router-dom";
import { Provider as UserProvider } from "../../contexts/user-context";
import i18n from "../../contexts/i18n-context";
import ThankYouPage from "../pages/thank-you";
import ErrorPage from "../pages/error";
import RestaurantsIndex from "../restaurants-index";
import Content from "../content";

function App() {
  const [name, setName] = useState("Roma");
  const { t } = useContext(i18n);

  return (
    <UserProvider value={{ name, setName }}>
      <Layout>
        <Header />
        <main role="main">
          <Switch>
            <Route path="/checkout" exact component={CheckoutPage} />
            <Route path={`/restaurants/:id`} component={Content} />
            <Route path="/error" component={ErrorPage} />
            <Route
              path="/sign-in"
              render={() => (
                <Typography.Title level={1}>
                  {t("sign_in_page")}
                </Typography.Title>
              )}
            />
            <Route path="/thank-you" component={ThankYouPage} />
            <Route path="/" render={() => <RestaurantsIndex />} />
          </Switch>
        </main>
      </Layout>
    </UserProvider>
  );
}

export default App;
