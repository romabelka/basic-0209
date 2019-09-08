import React from "react";
import { Rate } from "antd";
import SimpleForm from "../simple-form";

function Reviews({ reviews }) {
  return (
    <div>
      <div>
        {reviews.map(review => (
          <div
            key={review.id}
            style={{ display: "flex", alignItems: "center" }}
          >
            <Rate value={review.rating} />
            <div style={{ marginLeft: "10px" }}>{review.text}</div>
          </div>
        ))}
      </div>
      <SimpleForm />
    </div>
  );
}

Reviews.propTypes = {};

export default Reviews;
