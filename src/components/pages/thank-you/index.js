import React from "react";
import { Typography, Row, Col, Layout } from "antd";
import styles from "./thank-you.module.css";

function ThankYouPage() {
  return (
    <Layout className="full-height-layout">
      <Row type="flex" justify="center" align="middle" className="flex-grow-up">
        <Col span={16}>
          <Typography.Title level="1" strong className={styles.title}>
            Thanks!
            <br />
            Your order is being prepared
          </Typography.Title>
        </Col>
      </Row>
    </Layout>
  );
}

ThankYouPage.propTypes = {};

export default ThankYouPage;
