import React, { Fragment, useState } from "react";
import { Row, Col, Typography, Button, Input, Rate } from "antd";

function SimpleForm(props) {
  const [review, setReview] = useState("");
  const [rate, setRate] = useState();

  return (
    <Fragment>
      <Row>
        <Col span={24} style={{paddingRight: '15px',paddingLeft: '15px'}}>
          <Typography.Text strong style={{display: 'block',marginBottom: '10px'}}>Add your review:</Typography.Text>
        </Col>
      </Row>
      <Row>
        <Col span={16} style={{paddingRight: '15px',paddingLeft: '15px'}}>
          <Input.TextArea placeholder="Your text" rows={4} value={review} onChange={ev => setReview(ev.target.value)} />
        </Col>
      </Row>
      <Row>
        <Col span={24} style={{padding: '5px 15px'}}>
          <Rate onChange={value => setRate(value)} defaultValue={0} />
        </Col>
      </Row>
      <Row>
        <Col span={24} style={{padding: '5px 15px'}}>
          <Button size="large" type="primary" onClick={() => (console.log(`Your text is ${review} and your rate ${rate}`))}>Send</Button>
        </Col>
      </Row>
    </Fragment>
  );
}

export default SimpleForm;
