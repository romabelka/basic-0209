import React from "react";
import { Row, Col, Typography } from "antd";
import { connect } from "react-redux";
import PropTypes from "prop-types";

function BasketItem({ quantity, product }) {
  return (
    <div>
      <Row type="flex" justify="end">
        <Col span={4}>
          <Typography.Text>{product.name}</Typography.Text>
        </Col>
        <Col span={4}>
          <Typography.Text>{quantity}</Typography.Text>
        </Col>
        <Col span={4}>
          <Typography.Text>{product.price}</Typography.Text>
        </Col>
        <Col span={4}>
          <Typography.Text>{quantity * product.price}</Typography.Text>
        </Col>
      </Row>
    </div>
  );
}

BasketItem.propTypes = {
  quantity: PropTypes.number.isRequired,
  restaurant: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number
  }).isRequired
};

const mapStateToProps = storeState => ({
  order: storeState.order
});

export default connect(mapStateToProps)(BasketItem);
