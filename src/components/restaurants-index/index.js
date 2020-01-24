import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import styles from "./restaurants-index.module.css";
import { Col, Row, Tabs, Typography } from "antd";
import RestaurantItem from "./restaurant-item";
import i18n from "../../contexts/i18n-context";

function RestaurantsIndex({ restaurants }) {
  const [activeTab, setActiveTab] = useState("all");
  const { t } = useContext(i18n);
  const cuisines = [
    "all",
    ...new Set(restaurants.flatMap(restaurant => restaurant.cuisines))
  ];

  return (
    <>
      <div className={styles.header}>
        <div className={styles.headerCaption}>
          <Typography.Title level={2} className={styles.title}>
            {t("order_food")}
          </Typography.Title>
          <Typography.Title level={3} className={styles.subtitle}>
            {t("from_restaurants")}
          </Typography.Title>
        </div>
      </div>
      <Tabs
        activeKey={activeTab}
        onTabClick={setActiveTab}
        tabPosition="top"
        animated={false}
        className={styles.contentTabs}
      >
        {cuisines.map(cuisine => (
          <Tabs.TabPane tab={cuisine} key={cuisine} className={styles.tabPane}>
            <Row type="flex" justify="center">
              <Col span={24}>
                {restaurants
                  .filter(
                    restaurant =>
                      cuisine === "all" || restaurant.cuisines.includes(cuisine)
                  )
                  .map(restaurant => (
                    <RestaurantItem
                      restaurant={restaurant}
                      key={restaurant.id}
                    />
                  ))}
              </Col>
            </Row>
          </Tabs.TabPane>
        ))}
      </Tabs>
    </>
  );
}

RestaurantsIndex.propTypes = {
  restaurant: PropTypes.shape({
    name: PropTypes.string,
    menu: PropTypes.array,
    reviews: PropTypes.array
  })
};

export default RestaurantsIndex;
