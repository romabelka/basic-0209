import React from "react";
import { Card } from "antd";
import { connect } from "react-redux";
// import mapStateToProps from "react-redux/lib/connect/mapStateToProps";

function Cart({ productId, menu }) {
  // console.log(productId[0],'productId')

  for (var prop in productId) {
    console.log(productId[prop], menu, "productId");
  }

  return (
    <div style={{ background: "#ECECEC", padding: "30px" }}>
      <Card title="Your cart" bordered={false} style={{ width: 300 }}>
        {/*<p>{productId}</p>*/}
        {/*{productId.map((prod)=>(<p>{prod}</p>))}*/}
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </div>
  );
}

const mapStateToProps = storeState => ({
  productId: storeState.order || 0
});

export default connect(mapStateToProps)(Cart);
