import { Col, Row, Tabs } from "antd";
import React from "react";

import styles from "./content-tabs.module.css";

const { TabPane } = Tabs;

function ContentTabs({ items }) {
  return (
    <Tabs
      defaultActiveKey="0"
      tabPosition="top"
      animated={false}
      className={styles.contentTabs}
    >
      {items.map((item, i) => (
        <TabPane tab={item.tabTitle} key={i} className={styles.tabPane}>
          <Row type="flex" justify="center">
            <Col span={24}>{item.tabContent}</Col>
          </Row>
        </TabPane>
      ))}
    </Tabs>
  );
}

export default ContentTabs;
