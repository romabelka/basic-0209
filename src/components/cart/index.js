import React from "react";
import * as PropTypes from "prop-types";
import { connect } from "react-redux";
import { List, Typography } from "antd";
import { restaurants } from "../../fixtures";

class Cart extends React.Component {
  constructor(props) {
    super(props);

    const contents = new Map();
    restaurants.forEach(restaurant => {
      restaurant.menu.forEach(product => {
        contents.set(product.id, {
          product
        });
      });
    });
    this.contents = contents;
  }

  render() {
    let { order } = this.props;
    const contents = [];
    let totalQty = 0;
    let totalAmt = 0;
    for (const [id, qty] of Object.entries(order)) {
      const item = this.contents.get(id);
      contents.push({ ...item, qty });
      totalQty += qty;
      totalAmt += qty * item.product.price;
    }
    return (
      <List
        header={<Typography.Title>Cart ({totalQty})</Typography.Title>}
        footer={<Typography.Text strong>Total: {totalAmt} $</Typography.Text>}
        dataSource={contents}
        renderItem={item => (
          <List.Item>
            {item.product.name} x {item.qty}
          </List.Item>
        )}
        rowKey={item => item.product.id}
      />
    );
  }
}

Cart.propTypes = {
  // from redux
  order: PropTypes.object
};

const mapStateToProps = (state, props) => ({ order: state.order });

export default connect(mapStateToProps)(Cart);
