import React from "react";
import { connect } from "react-redux";
import { Typography, List } from "antd";
import { CartItem } from "../cart-item";
import { restaurants } from "../../fixtures";
import PropTypes from "prop-types";
import "./cart.css";

const MainBlock = selectedProducts => {
  const getCommonPrice = (items = []) => {
    if (!items.length) return 0;
    return items.map(i => i.price * i.count).reduce((acc, curr) => acc + curr);
  };

  const getCommonCount = (items = []) => {
    if (!items.length) return 0;
    return items.map(i => i.count).reduce((acc, curr) => acc + curr);
  };

  return (
    <>
      <section data-id="cart-list">
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
          Common count of dishes:
          <Typography.Text mark>
            {getCommonCount(selectedProducts)}
          </Typography.Text>
        </Typography.Paragraph>
        <Typography.Paragraph className="cart__total-item">
          Common price:
          <Typography.Text mark>
            {getCommonPrice(selectedProducts)} $
          </Typography.Text>
        </Typography.Paragraph>
      </section>
    </>
  );
};

const EmptyBlock = () => (
  <Typography.Text strong> Make your choise! </Typography.Text>
);

export const Cart = ({ selectedProducts }) => {
  return (
    <div className="cart">
      <Typography.Title level={2}>Cart</Typography.Title>
      {selectedProducts.length ? (
        <MainBlock selectedProducts={selectedProducts} />
      ) : (
        <EmptyBlock />
      )}
    </div>
  );
};

Cart.propTypes = {
  order: PropTypes.shape({
    [PropTypes.string]: PropTypes.number
  })
};

const getSelectedProducts = (order = {}, allProducts = []) => {
  let products = [];
  for (let key in order) {
    if (!order[key]) continue;
    const currProduct = allProducts.find(i => i.id === key);
    if (!currProduct) continue;
    products.push({
      id: currProduct.id,
      count: order[key],
      caption: currProduct.name,
      price: currProduct.price
    });
  }
  return products;
};

const mapStateToProps = (storeState, ownProps) => ({
  selectedProducts: getSelectedProducts(
    storeState.order,
    restaurants.map(i => i.menu).reduce((acc, curr) => [...acc, ...curr])
  )
});

export default connect(mapStateToProps)(Cart);
