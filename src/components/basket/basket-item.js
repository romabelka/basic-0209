import React from "react";
import { Row, Col, Typography } from "antd";
import PropTypes from "prop-types";

function BasketItem({ product }) {
  return (
    <div>
      <Row type="flex" justify="end">
        <Col span={4}>
          <Typography.Text>{product.name}</Typography.Text>
        </Col>
        <Col span={4}>
          <Typography.Text>{product.quantity}</Typography.Text>
        </Col>
        <Col span={4}>
          <Typography.Text>{product.price}</Typography.Text>
        </Col>
        <Col span={4}>
          <Typography.Text>{product.quantity * product.price}</Typography.Text>
        </Col>
      </Row>
    </div>
  );
}

BasketItem.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number
  }).isRequired
};

export default BasketItem;
