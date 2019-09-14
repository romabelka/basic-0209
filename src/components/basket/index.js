import React from "react";
import { Col, Row, Typography } from "antd";
import BasketItem from "./basket-item";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styles from "./basket.module.css";

function Basket({ menu, order, total }) {
  return (
    <div className={styles.basket}>
      <Row type="flex" justify="end">
        <Typography.Title level={3}>Basket</Typography.Title>
      </Row>
      {!!total ? (
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
          {Object.keys(order).map(id => (
            <div key={id}>
              {!!order[id] && (
                <BasketItem quantity={order[id]} product={menu[id]} />
              )}
            </div>
          ))}
          <Row type="flex" justify="end">
            <Typography.Title level={4} mark>
              Total price: {total}
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
  quantity: PropTypes.object.isRequired,
  menu: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number
  }).isRequired
};

function getTotal(order, menu) {
  return Object.keys(order).reduce(function(previous, key) {
    return previous + order[key] * menu[key]["price"];
  }, 0);
}

const mapStateToProps = (storeState, ownProps) => ({
  order: storeState.order,
  total: getTotal(storeState.order, ownProps.menu)
});

export default connect(mapStateToProps)(Basket);
