import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./restaurants-index.module.css";
import { connect } from "react-redux";
import RestaurantItem from "./restaurant-item";
import { Container } from "../container";
import i18n from "../../contexts/i18n-context";
import Loader from "../loader";
import { fetchRestaurants } from "../../redux/ac";
import {
  restaurantsListSelector,
  restaurantsLoading
} from "../../redux/selectors";

function RestaurantsIndex({ restaurants, fetchRestaurants, loading }) {
  const [activeTab, setActiveTab] = useState("all");
  const { t } = useContext(i18n);
  useEffect(() => {
    fetchRestaurants();
  }, [fetchRestaurants]);

  if (loading) return <Loader />;

  const cuisines = [
    "all",
    ...new Set(restaurants.flatMap(restaurant => restaurant.cuisines))
  ];

  const createTabs = () =>
    cuisines.map(cuisine => (
      <button
        key={`${cuisine}-tab`}
        role="tab"
        aria-selected={cuisine === activeTab}
        id={`${cuisine}-panel`}
        aria-controls={`${cuisine}-contentPanel`}
        onClick={() => setActiveTab(cuisine, "tabs")}
        className={cuisine === activeTab ? "tab tabSelected" : "tab"}
      >
        {t(cuisine)}
      </button>
    ));

  const createTabPanels = () =>
    cuisines.map(cuisine => (
      <div
        key={`${cuisine}-panel`}
        id={`${cuisine}-content-panel`}
        role="tabpanel"
        aria-labelledby={`${cuisine}-tab`}
        className={`tabPanel ${cuisine === activeTab ? "show" : "hide"}`}
      >
        {restaurants
          .filter(
            restaurant =>
              cuisine === "all" || restaurant.cuisines.includes(cuisine)
          )
          .map(restaurant => (
            <RestaurantItem restaurant={restaurant} key={restaurant.id} />
          ))}
      </div>
    ));

  return (
    <>
      <div className={styles.header}>
        <div className={styles.headerCaption}>
          <h2 className={styles.title}>{t("order_food")}</h2>
          <h3 className={styles.subtitle}>{t("from_restaurants")}</h3>
        </div>
      </div>
      <div className="contentTabs">
        <div className="tabsHeader">
          <Container>
            <div
              role="tablist"
              aria-orientation="horizontal"
              className="tabsNav"
            >
              <span>cuisines:</span> {createTabs()}
            </div>
          </Container>
        </div>
        <div className="tabsContent">{createTabPanels()}</div>
      </div>
    </>
  );
}

RestaurantsIndex.propTypes = {
  restaurant: PropTypes.shape({
    name: PropTypes.string,
    menu: PropTypes.array,
    reviews: PropTypes.array
  })
};

export default connect(
  state => ({
    restaurants: restaurantsListSelector(state),
    loading: restaurantsLoading(state)
  }),
  { fetchRestaurants }
)(RestaurantsIndex);
