import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { remove } from "../../redux/ac";

function Cart({ order, handleRemove }) {
  const cartList = Object.keys(order).map(productId => order[productId]);
  const total = cartList
    .reduce((sum, item) => sum + item.amount * item.product.price, 0)
    .toFixed(2);

  return (
    <>
      <div
        style={{
          margin: "20px"
        }}
      >
        <h4>Cart</h4>
        <div
          style={{
            width: "450px",
            height: "120px",
            overflowY: "auto"
          }}
        >
          {!cartList.length ? (
            "Is empty"
          ) : (
            <>
              <div>
                Total: <strong>{total}</strong>
              </div>
              <ul>
                {cartList.map(cartItem => {
                  const { product, amount } = cartItem;
                  const itemSum = (product.price * amount).toFixed(2);

                  return (
                    <li
                      style={{
                        margin: "5px 0"
                      }}
                      key={product.id}
                    >
                      {`${product.name} ${
                        product.price
                      } x ${amount} = ${itemSum}`}
                      <button
                        style={{ margin: "0 5px" }}
                        onClick={() => handleRemove(product.id)}
                      >
                        X
                      </button>
                    </li>
                  );
                })}
              </ul>
            </>
          )}
        </div>
      </div>
    </>
  );
}

const mapStateToProps = storeProps => ({
  order: storeProps.order
});

const mapDispatchToProps = {
  handleRemove: remove
};

Cart.propTypes = {
  order: PropTypes.shape({
    product: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number
    }),

    amount: PropTypes.number
  }),
  handleRemove: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
