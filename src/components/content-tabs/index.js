import { Col, Row, Tabs } from "antd";
import React from "react";
import cx from "classnames";

import styles from "./content-tabs.module.css";

const { TabPane } = Tabs;

function ContentTabs({ items, tabPaneClassName }) {
  return (
    <Tabs
      defaultActiveKey="0"
      tabPosition="top"
      animated={false}
      className={styles.contentTabs}
    >
      {items.map((item, i) => (
        <TabPane
          tab={item.tabTitle}
          key={i}
          className={cx(styles.tabPane, tabPaneClassName)}
        >
          <Row type="flex" justify="center">
            <Col span={24}>{item.tabContent}</Col>
          </Row>
        </TabPane>
      ))}
    </Tabs>
  );
}

export default ContentTabs;
