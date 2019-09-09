import React from "react";
import Product from "../product";
import * as PropTypes from "prop-types";
import { Typography } from "antd";

class Menu extends React.Component {
  state = {
    error: null
  };

  componentDidCatch(error) {
    this.setState({ error });
  }

  render() {
    if (this.state.error)
      return (
        <Typography.Title level={2}>
          {this.state.error.message}
        </Typography.Title>
      );
    return (
      <div>
        {this.props.menu.map(product => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    );
  }
}

Menu.propTypes = {
  menu: PropTypes.array.isRequired
};

export default Menu;
