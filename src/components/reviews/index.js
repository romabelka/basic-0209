import React from "react";
import SimpleForm from "../review-form";
import Review from "../review";
import { Row } from "antd";

export default function Reviews({ reviews }) {
  return (
    <div>
      <h1>Reviews</h1>
      <SimpleForm />
      <div style={{ background: "#f6f8fa", padding: "30px" }}>
        <Row>
          {reviews.map(review => (
            <Review review={review} key={review.id} />
          ))}
        </Row>
      </div>
    </div>
  );
}
