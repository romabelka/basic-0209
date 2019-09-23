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
  productsLoading,
  reviewsLoading,
  productsSelector,
  reviewsSelector
} from "../../redux/selectors";
import Loader from "../loader";

function Restaurant({
  restaurant,
  menu,
  reviews,
  fetchProducts,
  fetchReviews,
  loadingReviews,
  loadingProducts
}) {
  useEffect(() => {
    fetchProducts(restaurant.id);
  }, [fetchProducts]);

  useEffect(() => {
    fetchReviews(restaurant.id);
  }, [fetchReviews]);

  const contentItems = [
    {
      tabTitle: "Menu",
      tabContent: loadingProducts ? <Loader /> : <Menu menu={menu} />
    },
    {
      tabTitle: "Reviews",
      tabContent: loadingReviews ? (
        <Loader />
      ) : (
        <Reviews reviews={reviews} restaurant={restaurant} />
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
    loadingReviews: reviewsLoading(state),
    loadingProducts: productsLoading(state),
    menu: productsSelector(state, { restaurantId: ownProps.restaurant.id }),
    reviews: reviewsSelector(state, { restaurantId: ownProps.restaurant.id })
  }),
  { fetchProducts, fetchReviews }
)(Restaurant);
