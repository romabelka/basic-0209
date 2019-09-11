import React from "react";
import Product from "../product";
import { Typography } from "antd";
import PropTypes, { menuType } from "../../prop-types";

class Menu extends React.Component {
  state = {
    error: null
  };

  //componentWillMount() {} deprecated -> constructor() || componentDidMount()

  //componentWillReceiveProps() {} deprecated -> componentDidUpdate() || static getDerivedStateFromProps()

  //componentWillUpdate() {} deprecated -> componentDidUpdate() || getSnapshotBeforeUpdate()

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
  menu: menuType
};

export default Menu;
