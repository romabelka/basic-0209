import { Col, Row, Layout, Typography } from "antd";
import React, { useContext } from "react";
import i18n from "../../../contexts/i18n-context";
import styles from "./not-found.module.css";

function NotFoundPage() {
  const { t } = useContext(i18n);

  return (
    <Layout className="full-height-layout">
      <Row type="flex" justify="center" align="middle" className="flex-grow-up">
        <Col span={16}>
          <Typography.Title level={1} className={styles.title}>
            {t("not_found_page")}
            <span className={styles.errorCode}>404</span>
          </Typography.Title>
        </Col>
      </Row>
    </Layout>
  );
}

export default NotFoundPage;
