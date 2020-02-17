import React from "react";
import { Link } from "react-router-dom";
import { Container } from "../container";
import { Card } from "../card";
import RateComponent from "../rate";
import styles from "./restaurant-item.module.css";

function RestaurantItem({ restaurant }) {
  return (
    <Container className={styles.container}>
      <Link to={`/restaurants/${restaurant.id}`}>
        <Card className={styles.productCard} hoverable>
          <div>
            <div className={styles.imgWrap}>
              <img src={restaurant.logo} alt={restaurant.name} />
            </div>
            <div className={styles.contentWrap}>
              <h4 className={styles.title}>{restaurant.name}</h4>
              <p className={styles.description}>
                {restaurant.cuisines.join(", ")}
              </p>
              <RateComponent
                amount={restaurant.reviews.length}
                value={restaurant.averageRating}
                disabled
              />
            </div>
          </div>
        </Card>
      </Link>
    </Container>
  );
}

RestaurantItem.propTypes = {};

export default RestaurantItem;
