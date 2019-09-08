import React from "react";
import ReviewForm from "../review-form";
import Review from "../review";
import { List, Typography } from "antd";

function Reviews({ reviews }) {
  return (
    <div>
      <Typography.Title level={2}>Reviews</Typography.Title>
      <ReviewForm />
      <List
        className="comments-list"
        itemLayout="horizontal"
        dataSource={reviews}
        renderItem={review => <Review review={review} key={review.id} />}
      />
    </div>
  );
}

Reviews.propTypes = {};

export default Reviews;
