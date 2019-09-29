import React, { useContext } from "react";
import Reviews from "../reviews";
import Menu from "../menu";
import PropTypes from "prop-types";
import Hero from "../app/hero";
import styles from "./restaurant.module.css";
import { Col, Row, Tabs } from "antd";
import { Route, Redirect, Switch } from "react-router-dom";
import langContext from "../../contexts/language-context";
import texts from "../../text-constants";

function Restaurant({ restaurant }) {
  const { lang } = useContext(langContext);

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
            <Tabs
              activeKey={tab}
              onTabClick={tab => history.push(`/restaurants/${id}/${tab}`)}
              tabPosition="top"
              animated={false}
              className={styles.contentTabs}
            >
              <Tabs.TabPane
                tab={texts[lang].MENU}
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
                tab={texts[lang].REVIEWS}
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
