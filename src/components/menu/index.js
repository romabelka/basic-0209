import React from "react";
import Product from "../product";
import * as PropTypes from "prop-types";
import Basket from "../basket";
import { connect } from "react-redux";
import {
  productsLoadedSelector,
  productsLoadingSelector
} from "../../redux/selectors";
import Loader from "../loader";
import { fetchProducts } from "../../redux/ac";

import styles from "./menu.module.css";

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

  componentDidMount() {
    const { loading, loaded, fetchProducts, restaurant } = this.props;
    if (!loading && !loaded) {
      fetchProducts(restaurant.id);
    }
  }

  render() {
    if (this.state.error) return <h2>{this.state.error.message}</h2>;

    if (this.props.loading) return <Loader />;

    return (
      <div className={styles.menuWrapper}>
        <div>
          {this.props.restaurant.menu.map(id => (
            <Product id={id} key={id} />
          ))}
        </div>
        <div>
          <Basket />
        </div>
      </div>
    );
  }
}

Menu.propTypes = {
  restaurant: PropTypes.object.isRequired,
  //from connect
  loading: PropTypes.bool,
  loaded: PropTypes.bool
};

export default connect(
  (state, props) => ({
    loading: productsLoadingSelector(state, props),
    loaded: productsLoadedSelector(state, props)
  }),
  { fetchProducts }
)(Menu);
