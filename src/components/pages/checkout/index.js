import React from "react";
import { Button, Col, Form, Input, Row } from "antd";
import Basket from "../../basket";

function CheckoutPage({ history }) {
  return (
    <Row>
      <Col span={6}>
        <Form>
          <Form.Item label="Name">
            <Input />
          </Form.Item>
          <Form.Item label="Phone number">
            <Input />
          </Form.Item>
          <Form.Item label="Address">
            <Input.TextArea />
          </Form.Item>
          <Button onClick={() => history.push("/thank-you")}>Order</Button>
        </Form>
      </Col>
      <Col span={6}>
        <Basket hideButton />
      </Col>
    </Row>
  );
}

CheckoutPage.propTypes = {};

export default CheckoutPage;
