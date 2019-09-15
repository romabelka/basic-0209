import React from "react";
import { Col, Row, Typography } from "antd";
import BasketItem from "./basket-item";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styles from "./basket.module.css";

function Basket({ menu, order }) {
  return (
    <div className={styles.basket}>
      <Row type="flex" justify="end">
        <Typography.Title level={3}>Basket</Typography.Title>
      </Row>
      {!!order.total ? (
        <div className={styles.basketRow}>
          <Row type="flex" justify="end">
            <Col span={4}>
              <Typography.Text strong>Name</Typography.Text>
            </Col>
            <Col span={4}>
              <Typography.Text strong>Quantity</Typography.Text>
            </Col>
            <Col span={4}>
              <Typography.Text strong>Price</Typography.Text>
            </Col>
            <Col span={4}>
              <Typography.Text strong>Product total</Typography.Text>
            </Col>
          </Row>
          {Object.keys(order.orderedPositions).map(id => (
            <div key={id}>
              {!!order.orderedPositions[id]["quantity"] && (
                <BasketItem product={order.orderedPositions[id]} />
              )}
            </div>
          ))}
          <Row type="flex" justify="end">
            <Typography.Title level={4} mark>
              Total price: {order.total}
            </Typography.Title>
          </Row>
        </div>
      ) : (
        <Row type="flex" justify="end">
          <Typography.Title level={4} mark>
            Your basket is empty
          </Typography.Title>
        </Row>
      )}
    </div>
  );
}

Basket.propTypes = {
  quantity: PropTypes.object,
  menu: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number
  }).isRequired
};

function filterMenuByOrder(order, menu) {
  const allowed = Object.keys(order);

  const orderedPositions = Object.keys(menu)
    .filter(key => allowed.includes(key))
    .reduce((obj, key) => {
      obj[key] = menu[key];
      obj[key]["quantity"] = order[key];
      return obj;
    }, {});

  const total = Object.keys(orderedPositions).reduce(function(previous, key) {
    return (
      previous +
      orderedPositions[key]["quantity"] * orderedPositions[key]["price"]
    );
  }, 0);

  return {
    orderedPositions: orderedPositions,
    total: total
  };
}

const mapStateToProps = (storeState, ownProps) => ({
  order: filterMenuByOrder(storeState.order, ownProps.menu)
});

export default connect(mapStateToProps)(Basket);
