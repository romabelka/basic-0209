import React from "react";
import SimpleForm from "../simple-form";
import Review from "../review";
import { Row, Col } from "antd";

function Reviews({ reviews }) {
  return (
    <div>
      <h1>Reviews</h1>
      <Row style={{margin: '0 0 30px 0'}}>
        {reviews.map(review => (
          <Col span={12} key={review.id} style={{paddingRight: '15px',paddingLeft: '15px'}}>
            <Review feedback={review} />
          </Col>
        ))}
      </Row>
      <SimpleForm />
    </div>
  );
}

Reviews.propTypes = {};

export default Reviews;