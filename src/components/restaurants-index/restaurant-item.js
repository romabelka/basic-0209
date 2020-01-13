import React from "react";
import { Card, Col, Row } from "antd";
import { Link } from "react-router-dom";
import RateComponent from "../rate";
import styles from "./restaurant-item.module.css";

function RestaurantItem({ restaurant }) {
  return (
    <Row type="flex" justify="center" gutter={{ xs: 8, sm: 16, md: 24 }}>
      <Col xs={24} md={16} lg={12}>
        <Link to={`/restaurants/${restaurant.id}`}>
          <Card className={styles.productCard} hoverable>
            <Row type="flex" align="top">
              <Col span={24} align="left">
                <div className={styles.imgWrap}>
                  <img src={restaurant.logo} alt={restaurant.name} />
                </div>
                <div className={styles.contentWrap}>
                  <h4 className={styles.title}>{restaurant.name}</h4>
                  <p className={styles.description}>
                    {restaurant.cuisines.join(", ")}
                  </p>
                  <RateComponent amount="27" value={3} />
                </div>
              </Col>
            </Row>
          </Card>
        </Link>
      </Col>
    </Row>
  );
}

RestaurantItem.propTypes = {};

export default RestaurantItem;
