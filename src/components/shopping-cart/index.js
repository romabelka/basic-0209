import React from "react";
import styles from "./shopping-cart.module.css";
import { connect } from "react-redux";
import { restaurants } from "../../fixtures";
import { Table } from "antd";

const tblColumns = [
  {
    title: "Product",
    dataIndex: "name",
    key: "name"
  },

  {
    title: "Price",
    dataIndex: "price",
    key: "price"
  },
  {
    title: "Count",
    dataIndex: "count",
    key: "count"
  },
  {
    title: "Summ",
    dataIndex: "summ",
    key: "summ"
  }
];

const getTableSource = order => {
  let summTotal = 0,
    countTotal = 0;

  const data = Object.keys(order).reduce((result, id) => {
    for (let restaurant of restaurants) {
      const product = restaurant.menu.find(prod => prod.id === id);

      if (product && order[id]) {
        const price = product.price || 0;
        const count = order[id] || 0;

        summTotal += price * count;
        countTotal += count;

        result.push({
          key: id,
          name: product.name,
          price: price,
          count: count,
          summ: price * count
        });
      }
    }
    return result;
  }, []);

  data.push({
    key: "total",
    name: "Total",
    price: null,
    count: countTotal,
    summ: summTotal
  });

  return data;
};

function ShoppingCart({ order }) {
  return (
    <div className={styles.cartContainer}>
      <div className={styles.cartTitle}>Shopping Cart</div>
      <Table
        dataSource={getTableSource(order)}
        columns={tblColumns}
        pagination={false}
      />
    </div>
  );
}

const mapStateToProps = state => ({
  order: state.order
});

export default connect(mapStateToProps)(ShoppingCart);
