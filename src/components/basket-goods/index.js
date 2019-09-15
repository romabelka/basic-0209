import React from "react";
import { connect } from "react-redux";
import { restaurants } from "../../fixtures";

function BasketGoods({ order }) {
  const orders = Object.keys(order);
  let products = getProduct();

  function getProduct() {
    const products = [];
    restaurants.forEach(function(restaurant) {
      restaurant.menu.forEach(function(product) {
        if (orders.includes(product.id)) {
          products.push({ count: order[product.id], product });
        }
      });
    });

    return products;
  }

  return (
    <div>
      <h1>Корзина:</h1>
      <div>
        {products.map(({ count, product }) => (
          <div key={product.id}>
            <div>
              {product.name} ({count})
            </div>
            <div>{product.price}</div>
            <div>total: {count * product.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

BasketGoods.propTypes = {};

const mapStateToProps = storeState => ({
  order: storeState.order
});

export default connect(mapStateToProps)(BasketGoods);
