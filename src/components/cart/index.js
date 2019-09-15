import React from "react";
import { connect } from "react-redux";
import { Typography, List } from "antd";
import { CartItem } from "../cart-item";
import { restaurants } from "../../fixtures";
import "./cart.css";

const Cart = ({ order }) => {
  const selectedProducts = getSelectedProducts(
    order,
    restaurants.map(i => i.menu).reduce((acc, curr) => [...acc, ...curr])
  );

  const MainBlock = (
    <>
      <section>
        <Typography.Title level={3}> Dishes </Typography.Title>
        <List
          dataSource={selectedProducts}
          renderItem={item => (
            <List.Item>
              <CartItem {...item} />
            </List.Item>
          )}
        />
      </section>
      <section>
        <Typography.Title level={3}> Total </Typography.Title>
        <Typography.Paragraph className="cart__total-item">
          Common count of dishes:{" "}
          <Typography.Text mark>
            {getCommonCount(selectedProducts)}
          </Typography.Text>
        </Typography.Paragraph>
        <Typography.Paragraph className="cart__total-item">
          Common price:{" "}
          <Typography.Text mark>
            {getCommonPrice(selectedProducts)} $
          </Typography.Text>
        </Typography.Paragraph>
      </section>
    </>
  );

  const EmptyBlock = (
    <Typography.Text strong> Make your choise! </Typography.Text>
  );

  return (
    <div className="cart">
      <Typography.Title level={2}>Cart</Typography.Title>
      {selectedProducts.length ? MainBlock : EmptyBlock}
    </div>
  );
};

const getSelectedProducts = (order, allProducts) => {
  let products = [];
  for (let key in order) {
    if (!order[key]) continue;
    const currProduct = allProducts.find(i => i.id === key);
    products.push({
      id: currProduct.id,
      count: order[key],
      caption: currProduct.name,
      price: currProduct.price
    });
  }
  return products;
};

const getCommonPrice = (items = []) => {
  if (!items.length) return 0;
  return items.map(i => i.price * i.count).reduce((acc, curr) => acc + curr);
};

const getCommonCount = (items = []) => {
  if (!items.length) return 0;
  return items.map(i => i.count).reduce((acc, curr) => acc + curr);
};

const mapStateToProps = (storeState, ownProps) => ({
  order: storeState.order || {}
});

export default connect(mapStateToProps)(Cart);
