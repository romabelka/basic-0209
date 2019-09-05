import React from "react";
import Review from "../review";
import SimpleForm from "../simple-form";
import { List } from "antd";

function Reviews({ reviews }) {
  return (
    <div>
      <h1>Reviews</h1>
      <List
        dataSource={reviews}
        renderItem={review => (
          <List.Item>
            <Review review={review} />
          </List.Item>
        )}
        rowKey={review => review.id}
      />
      <h2>Post a review</h2>
      <SimpleForm />
    </div>
  );
}

Reviews.propTypes = {};

export default Reviews;
