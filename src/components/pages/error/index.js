import { Col, Row, Layout, Typography } from "antd";
import React, { useContext } from "react";
import i18n from "../../../contexts/i18n-context";

function ErrorPage() {
  const { t } = useContext(i18n);

  return (
    <Layout className="full-height-layout">
      <Row type="flex" justify="center" align="middle" className="flex-grow-up">
        <Col span={16}>
          <Typography.Title level={1}>{t("error_page")}</Typography.Title>
        </Col>
      </Row>
    </Layout>
  );
}

export default ErrorPage;
