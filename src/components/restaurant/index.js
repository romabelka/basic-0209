import React, { useContext } from "react";
import cx from "classnames";
import Reviews from "../reviews";
import Menu from "../menu";
import PropTypes from "prop-types";
import Hero from "../app/hero";
import styles from "./restaurant.module.css";
import { Container } from "../container";
import { useTabs } from "../../hooks/use-tabs";
import { Route, Redirect, Switch, Link } from "react-router-dom";
import i18n from "../../contexts/i18n-context";
import RateComponent from "../../components/rate";

function Restaurant({ restaurant }) {
  const { t } = useContext(i18n);
  const [activeTab, setActiveTab] = useTabs("tabs", "menu");

  const createTabs = () => (
    <>
      <button
        key="menu-tab"
        role="tab"
        aria-selected={activeTab === "menu"}
        id="menu"
        aria-controls="menu-content-panel"
        onClick={() => setActiveTab("menu", "tabs")}
        className={activeTab === "menu" ? "tab tab-selected" : "tab"}
      >
        {t("menu")}
      </button>
      <button
        key="reviews-tab"
        role="tab"
        aria-selected={activeTab === "reviews"}
        id="reviews"
        aria-controls="reviews-content-panel"
        onClick={() => setActiveTab("reviews", "tabs")}
        className={activeTab === "reviews" ? "tab tab-selected" : "tab"}
      >
        {t("reviews")}
      </button>
    </>
  );

  const createTabPanels = () => (
    <>
      <div
        key="menu-panel"
        id="menu-panel"
        role="tabpanel"
        aria-labelledby="menu-tab"
        className={cx("tab-panel", {
          show: activeTab === "menu",
          hide: activeTab !== "menu"
        })}
      >
        <Menu restaurant={restaurant} />
      </div>
      <div
        key="reviews-panel"
        id="reviews-panel"
        role="tabpanel"
        aria-labelledby="reviews-tab"
        className={cx("tab-panel", {
          show: activeTab === "reviews",
          hide: activeTab !== "reviews"
        })}
      >
        <Reviews restaurant={restaurant} />
      </div>
    </>
  );

  return (
    <>
      <Hero
        heading={restaurant.name}
        img={restaurant.headerImage}
        description={restaurant.cuisines.join(", ")}
      >
        <RateComponent
          disabled
          amount={restaurant.reviews.length}
          value={restaurant.averageRating}
        />
      </Hero>
      <Switch>
        <Route
          path="/restaurants/:id/:tab"
          render={({
            match: {
              params: { tab, id }
            },
            history
          }) => (
            <>
              <div className="content-tabs">
                <div className="tabs-header">
                  <Container>
                    <div
                      role="tablist"
                      aria-orientation="horizontal"
                      className="tabs-nav"
                      onClick={e =>
                        history.push(`/restaurants/${id}/${e.target.id}`)
                      }
                    >
                      {createTabs()}
                    </div>
                  </Container>
                </div>
                <div className="tabs-content">
                  <Container className={styles.container}>
                    {createTabPanels()}
                  </Container>
                </div>
              </div>
              <div className={styles.fixedMobileBasketPanel}>
                <span>Basket € 8.95</span>
                <Link to="/checkout" className={styles.checkoutBtn}>
                  {t("checkout")}
                </Link>
              </div>
            </>
          )}
        />
        <Redirect
          from="/restaurants/:id"
          to={`/restaurants/${restaurant.id}/menu`}
        />
      </Switch>
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

export default Restaurant;
