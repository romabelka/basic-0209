import React from "react";
import { List, Rate } from "antd";
import SimpleForm from "../simple-form";

function Reviews({ reviews }) {
  const renderItem = ({ user, rating, id, text }) => (
    <List.Item key={id}>
      <List.Item.Meta title={user} description={text} />
      <Rate value={rating} />
    </List.Item>
  );

  return (
    <div>
      <h1>Reviews</h1>
      <SimpleForm />
      <List dataSource={reviews} renderItem={renderItem} />
    </div>
  );
}

Reviews.propTypes = {};

export default Reviews;
