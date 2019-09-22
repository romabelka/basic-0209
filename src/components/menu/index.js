import React from "react";
import Product from "../product";
import * as PropTypes from "prop-types";
import { Col, Row, Typography, Empty } from "antd";
import Basket from "../basket";
import { fetchProducts } from "../../redux/ac";
import { connect } from "react-redux";
import Loader from "../loader";

class Menu extends React.Component {
  state = {
    error: null
  };

  componentDidMount() {
    const { productsLoading, productsLoaded, id } = this.props.restaurant;
    if (!productsLoaded && !productsLoading) this.props.fetchProducts(id);
  }

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

    const { productsLoading, productsLoaded, menu } = this.props.restaurant;

    if (productsLoading) return <Loader type="medium" />;
    if (!productsLoaded) return <Empty />;
    return (
      <Row type="flex" justify="center" gutter={{ xs: 8, sm: 16, md: 24 }}>
        <Col xs={24} md={15} lg={12}>
          {menu.map(id => (
            <Product id={id} key={id} />
          ))}
        </Col>
        <Col xs={0} md={7} lg={6}>
          <Basket />
        </Col>
      </Row>
    );
  }
}

Menu.propTypes = {
  restaurant: PropTypes.shape({
    menu: PropTypes.array.isRequired,
    productsLoaded: PropTypes.bool.isRequired,
    productsLoading: PropTypes.bool.isRequired
  }).isRequired
};

export default connect(
  () => ({}),
  {
    fetchProducts
  }
)(Menu);
