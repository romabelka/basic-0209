import React, { useState } from "react";
import { connect } from "react-redux";

import { Badge, Popover, Row, Col, Button } from "antd";

function Cart({ positions, total }) {
  const [visible, setVisibleState] = useState(false);

  const setVisible = visible =>
    setVisibleState(visible && positions.length !== 0);

  const products = positions.map(product => (
    <Row key={product.id}>
      <Col>{product.name}</Col>
      <Col>
        ${product.price} x {product.amount} = ${product.subtotal}
      </Col>
    </Row>
  ));

  const totalRow = positions.length ? (
    <Row>
      <Col>Total</Col>
      <Col>${total}</Col>
    </Row>
  ) : (
    ""
  );
  const checkoutButton = positions.length ? <Button>Checkout</Button> : "";

  const content = (
    <React.Fragment>
      {products}
      {totalRow}
      {checkoutButton}
    </React.Fragment>
  );

  return (
    <Popover
      content={content}
      trigger="click"
      visible={visible}
      onVisibleChange={setVisible}
    >
      <Badge count={Object.keys(positions).length}>
        <Button type="primary" icon="shopping-cart" />
      </Badge>
    </Popover>
  );
}

const mapStateToProps = state => {
  const ids = Object.keys(state.order);
  const dishes = state.data.dishes.filter(dish => ids.includes(dish.id));
  const order = state.order;

  const positions = dishes.map(dish => ({
    ...dish,
    amount: order[dish.id],
    subtotal: order[dish.id] * dish.price
  }));

  const total = positions.reduce((acc, position) => acc + position.subtotal, 0);

  return {
    positions,
    total
  };
};

export default connect(mapStateToProps)(Cart);
