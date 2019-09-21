import React, { useEffect } from "react";
import Reviews from "../reviews";
import Menu from "../menu";
import PropTypes from "prop-types";
import ContentTabs from "../content-tabs";
import Hero from "../app/hero";
import styles from "./restaurant.module.css";
import { connect } from "react-redux";
import { fetchProducts, fetchReviews } from "../../redux/ac";
import {
  productsLoadingSelector,
  productsSelector,
  reviewsLoadingSelector,
  reviewsSelector
} from "../../redux/selectors";
import Loader from "../loader";

function Restaurant({
  restaurant,
  products,
  productsLoading,
  reviews,
  reviewsLoading,
  fetchProducts,
  fetchReviews
}) {
  useEffect(() => {
    fetchProducts(restaurant.id);
  }, [restaurant, fetchProducts]);

  useEffect(() => {
    fetchReviews(restaurant.id);
  }, [restaurant, fetchReviews]);

  const contentItems = [
    {
      tabTitle: "Menu",
      tabContent: productsLoading ? (
        <Loader />
      ) : (
        <Menu restaurant={restaurant} menu={products} />
      )
    },
    {
      tabTitle: "Reviews",
      tabContent: reviewsLoading ? (
        <Loader />
      ) : (
        <Reviews restaurant={restaurant} reviews={reviews} />
      )
    }
  ];

  return (
    <>
      <Hero heading={restaurant.name} />
      <ContentTabs items={contentItems} tabPaneClassName={styles.tabPane} />
    </>
  );
}

Restaurant.propTypes = {
  restaurant: PropTypes.shape({
    name: PropTypes.string,
    menu: PropTypes.array,
    reviews: PropTypes.array
  })
};

export default connect(
  (state, ownProps) => ({
    products: productsSelector(state, ownProps.restaurant.id),
    productsLoading: productsLoadingSelector(state, ownProps.restaurant.id),
    reviews: reviewsSelector(state, ownProps.restaurant.id),
    reviewsLoading: reviewsLoadingSelector(state, ownProps.restaurant.id)
  }),
  { fetchProducts, fetchReviews }
)(Restaurant);
