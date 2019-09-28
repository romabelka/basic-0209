import React from "react";
import Reviews from "../reviews";
import Menu from "../menu";
import PropTypes from "prop-types";
import Hero from "../app/hero";
import styles from "./restaurant.module.css";
import { Col, Row, Tabs } from "antd";
import { Route, Redirect, Switch } from "react-router-dom";
import { Consumer as LanguageConsumer } from "../../contexts/language-context";

function Restaurant({ restaurant }) {
  return (
    <>
      <Hero heading={restaurant.name} />
      <Switch>
        <Route
          path="/restaurants/:id/:tab"
          render={({
            match: {
              params: { tab, id }
            },
            history
          }) => (
            <LanguageConsumer>
              {({ language }) => {
                return (
                  <Tabs
                    activeKey={tab}
                    onTabClick={tab =>
                      history.push(`/restaurants/${id}/${tab}`)
                    }
                    tabPosition="top"
                    animated={false}
                    className={styles.contentTabs}
                  >
                    <Tabs.TabPane
                      tab={language.MENU}
                      key="menu"
                      className={styles.tabPane}
                    >
                      <Row type="flex" justify="center">
                        <Col span={24}>
                          <Menu restaurant={restaurant} />
                        </Col>
                      </Row>
                    </Tabs.TabPane>
                    <Tabs.TabPane
                      tab={language.REVIEWS}
                      key="reviews"
                      className={styles.tabPane}
                    >
                      <Row type="flex" justify="center">
                        <Col span={24}>
                          <Reviews restaurant={restaurant} />
                        </Col>
                      </Row>
                    </Tabs.TabPane>
                  </Tabs>
                );
              }}
            </LanguageConsumer>
          )}
        />
        <Redirect
          from="/restaurants/:id"
          to={`/restaurants/${restaurant.id}/menu`}
        />
      </Switch>
    </>
  );
}

Restaurant.propTypes = {
  restaurant: PropTypes.shape({
    name: PropTypes.string,
    menu: PropTypes.array,
    reviews: PropTypes.array
  })
};

export default Restaurant;
