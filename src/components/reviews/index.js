import React from "react";
import SimpleForm from "../simple-form";
import { Comment, Rate, Avatar } from "antd";

function Reviews(props) {
  const { reviews } = props;
  const actions = [];
  return (
    <div>
      <h1>Reviews</h1>

      {reviews.map(review => (
        <Comment
          key={review.id}
          actions={actions}
          author={<a href="/">{review.user}</a>}
          avatar={
            <Avatar
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              alt={review.user}
            />
          }
          content={
            <div>
              <p>{review.text}</p>
              <Rate disabled defaultValue={review.rating} />
            </div>
          }
        />
      ))}

      <SimpleForm />
    </div>
  );
}

Reviews.propTypes = {};

export default Reviews;
