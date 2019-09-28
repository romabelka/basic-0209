import { Button, Layout, Select, Typography } from "antd";
import React, { useEffect, useState } from "react";

import Header from "./header";
import Basket from "../basket";
import { Route, Switch } from "react-router-dom";
import RestaurantsPage from "../pages/restaurants";
import { Provider as UserProvider } from "../../contexts/user-context";
import { Provider as LanguageProvider } from "../../contexts/language-context";
import { localization } from "../../localization/localization";
import { Consumer as LanguageConsumer } from "../../contexts/language-context";

function App() {
  const [name, setName] = useState("Roma");
  const [language, setLanguage] = useState(localization.english);
  useEffect(() => {
    setInterval(() => setName(Math.random().toString()), 1000);
  }, [setName]);

  const { Option } = Select;

  return (
    <UserProvider value={{ name, setName }}>
      <LanguageProvider value={{ language }}>
        <Layout>
          <Select
            defaultValue="english"
            onChange={value => setLanguage(localization[value])}
          >
            <Option value="english">English</Option>
            <Option value="russian">Русский</Option>
          </Select>
          <Header />
          <main role="main">
            <LanguageConsumer>
              {({ language }) => {
                return (
                  <Switch>
                    <Route path="/checkout" exact component={Basket} />
                    <Route path="/restaurants" component={RestaurantsPage} />
                    <Route
                      path="/error"
                      render={() => (
                        <Typography.Title level={1}>
                          {language.ERROR_PAGE}
                        </Typography.Title>
                      )}
                    />
                    <Route
                      path="/sign-in"
                      render={() => (
                        <Typography.Title level={1}>
                          {language.SIGN_IN_PAGE}
                        </Typography.Title>
                      )}
                    />
                    <Route
                      path="/"
                      render={() => (
                        <Typography.Title level={1}>
                          {language.NOT_FOUND_PAGE}
                        </Typography.Title>
                      )}
                    />
                  </Switch>
                );
              }}
            </LanguageConsumer>
          </main>
        </Layout>
      </LanguageProvider>
    </UserProvider>
  );
}

export default App;
