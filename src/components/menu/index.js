import React from "react";
import { connect } from "react-redux";
import Product from "../product";
import * as PropTypes from "prop-types";
import { Col, Row, Typography } from "antd";
import Basket from "../basket";
import Loader from "../loader";
import { productsLoading, productsError } from "../../redux/selectors";

class Menu extends React.Component {
  //componentWillMount() {} deprecated -> constructor() || componentDidMount()

  //componentWillReceiveProps() {} deprecated -> componentDidUpdate() || static getDerivedStateFromProps()

  //componentWillUpdate() {} deprecated -> componentDidUpdate() || getSnapshotBeforeUpdate()

  componentDidCatch(error) {
    this.setState({ error });
  }

  render() {
    if (this.props.error)
      return (
        <Typography.Title level={2}>
          {this.props.error.message}
        </Typography.Title>
      );

    if (this.props.loading) return <Loader />;

    return (
      <Row type="flex" justify="center" gutter={{ xs: 8, sm: 16, md: 24 }}>
        <Col xs={24} md={15} lg={12}>
          {this.props.menu.map(id => (
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
  menu: PropTypes.array.isRequired
};

export default connect(state => ({
  loading: productsLoading(state),
  error: productsError(state)
}))(Menu);
