import React, { useEffect, useState } from "react";
import { Typography, Row, Col } from "antd";
import PropTypes from "prop-types";
import { connect } from "react-redux";

function Basket({ order, fetchProduct }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const ids = products.map(value => value.id);
    const newProducts = [];
    Object.keys(order).forEach(id => {
      if (ids.indexOf(id) == -1) {
        const p = fetchProduct(id);
        p && newProducts.push(p);
      }
    });
    setProducts(products.concat(newProducts));
  }, [order]);

  const total = products.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.price * order[currentValue.id],
    0
  );

  return (
    <div style={{ width: 800 }}>
      <Typography.Title>Basket</Typography.Title>
      <Row type="flex" justify="space-between">
        <Col span={8}>
          <Typography.Text strong>Dish</Typography.Text>
        </Col>
        <Col span={4}>
          <Typography.Text strong>Price</Typography.Text>
        </Col>
        <Col span={4}>
          <Typography.Text strong>Amount</Typography.Text>
        </Col>
        <Col span={4}>
          <Typography.Text strong>Cost</Typography.Text>
        </Col>
      </Row>
      {products
        .filter(product => order[product.id] > 0)
        .map(product => (
          <Row type="flex" justify="space-between" key={product.id}>
            <Col span={8}>
              {product.name} ({product.restaurant})
            </Col>
            <Col span={4}>{product.price} $</Col>
            <Col span={4}>{order[product.id]}</Col>
            <Col span={4}>{product.price * order[product.id]} $</Col>
          </Row>
        ))}
      <Typography.Title level={4}>Total: {total} $</Typography.Title>
    </div>
  );
}

Basket.propTypes = {
  order: PropTypes.object.isRequired,
  fetchProduct: PropTypes.func.isRequired
};

const mapStateToProps = storeState => ({
  order: storeState.order || {}
});

export default connect(mapStateToProps)(Basket);
