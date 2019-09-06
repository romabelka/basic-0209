import React from "react";
import { List } from "antd";
import ReviewForm from "../review-form";
import Review from "../review";

function Reviews(props) {
  const { reviews } = props;

  return (
    <div>
      <h1>Reviews</h1>
      <ReviewForm />
      <List
        bordered
        dataSource={reviews}
        renderItem={item => (
          <List.Item key={item.id}>
            <Review review={item} />
          </List.Item>
        )}
      />
    </div>
  );
}

export default Reviews;
