import React from "react";
import { Rate } from "antd";
import "./index.css";

export default ({ review }) => (
  <div className="review">
    <div className="review__user">{review.user}</div>
    <Rate value={review.rating} disabled className="review__rating" />
    <div className="review__text">{review.text}</div>
  </div>
);
