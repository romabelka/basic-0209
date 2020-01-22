import React from "react";
import { Button, Col, Form, Input, Row, Layout } from "antd";
import Basket from "../../basket";
import styles from "./checkout.module.css";

function CheckoutPage({ history }) {
  return (
    <Layout class={styles.checkoutContent}>
      <Row
        gutter={{ xs: 16, sm: 16, lg: 32, xl: 32 }}
        type="flex"
        justify="center"
        className="flex-grow-up"
      >
        <Col
          xs={{ span: 24, order: 2 }}
          md={{ span: 12, order: 1 }}
          xl={{ span: 6 }}
        >
          <Form>
            <Form.Item label="Name">
              <Input size="large" />
            </Form.Item>
            <Form.Item label="Phone number">
              <Input size="large" />
            </Form.Item>
            <Form.Item label="Address">
              <Input.TextArea size="large" />
            </Form.Item>
            <Button
              onClick={() => history.push("/thank-you")}
              block
              type="primary"
              size="large"
            >
              Order
            </Button>
          </Form>
        </Col>
        <Col
          xs={{ span: 24, order: 1 }}
          md={{ span: 12, order: 2 }}
          xl={{ span: 6 }}
        >
          <Basket hideButton className="text-center" />
        </Col>
      </Row>
    </Layout>
  );
}

CheckoutPage.propTypes = {};

export default CheckoutPage;
