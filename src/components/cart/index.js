import React from "react";
import { Card } from "antd";
import { connect } from "react-redux";

function Cart({ productId = {}, menu }) {
  let totalPrice = 0;
  let arr = menu.map(item => {
    let count = productId[item.id];

    if (count && count !== "undefined") {
      let price = item.price * count;
      totalPrice = totalPrice + price;
      return {
        name: item.name,
        count: count,
        price: price,
        id: item.id
      };
    } else {
      return null;
    }
  });

  return (
    <div style={{ background: "#ECECEC", padding: "30px" }}>
      <Card title="Your cart:" bordered={false} style={{ width: 300 }}>
        {arr.map(item => {
          if (item) {
            return (
              <p key={item.id}>
                <strong>{item.name}: </strong>
                {item.count} pcs / {item.price} $
              </p>
            );
          } else {
            return null;
          }
        })}
        <h4>
          <strong>Total price:</strong> {totalPrice} $
        </h4>
      </Card>
    </div>
  );
}

const mapStateToProps = storeState => ({
  productId: storeState.order
});

export default connect(mapStateToProps)(Cart);
