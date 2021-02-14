import React, { useContext, useState } from "react";

import Header from "./header";
import CheckoutPage from "../pages/checkout";
import { Route, Switch } from "react-router-dom";
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
      <>
        <Header />
        <main role="main">
          <Switch>
            <Route path="/checkout" exact component={CheckoutPage} />
            <Route path={`/restaurants/:id`} component={Content} />
            <Route path="/error" component={ErrorPage} />
            <Route
              path="/sign-in"
              render={() => <h1>{t("sign_in_page")}</h1>}
            />
            <Route path="/thank-you" component={ThankYouPage} />
            <Route path="/" render={() => <RestaurantsIndex />} />
          </Switch>
        </main>
      </>
    </UserProvider>
  );
}

export default App;
