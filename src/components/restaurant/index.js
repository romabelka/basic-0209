import React from "react";
import Reviews from "../reviews";
import Menu from "../menu";
import PropTypes from "prop-types";
import Hero from "../app/hero";
import { Col, Row, Tabs } from "antd";

function Restaurant({ restaurant, match, history }) {
  const { TabPane } = Tabs;

  return (
    <>
      <Hero heading={restaurant.name} />
      <Tabs
        activeKey={match.params.tab || "menu"}
        tabPosition="top"
        animated={false}
        onTabClick={tab => history.push(`/restaurants/${restaurant.id}/${tab}`)}
      >
        <TabPane tab="Menu" key="menu">
          <Row type="flex" justify="center">
            <Col span={24}>
              {" "}
              <Menu restaurant={restaurant} />
            </Col>
          </Row>
        </TabPane>

        <TabPane tab="Reviews" key="reviews">
          <Row type="flex" justify="center">
            <Col span={24}>
              <Reviews restaurant={restaurant} />
            </Col>
          </Row>
        </TabPane>
      </Tabs>
    </>
    // )
    // }}
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
