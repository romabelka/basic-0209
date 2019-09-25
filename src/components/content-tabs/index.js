import { Col, Row, Tabs } from "antd";
import React from "react";
import cx from "classnames";

import styles from "./content-tabs.module.css";

const { TabPane } = Tabs;

function ContentTabs({
  items,
  activeTabKey,
  tabPaneClassName,
  match,
  history,
  masterUrl
}) {
  const props = {
    tabPosition: "top",
    animated: false,
    className: styles.contentTabs,
    onTabClick: key => history.push(`${masterUrl}/${key}`)
  };

  if (activeTabKey) props.activeKey = activeTabKey;

  return (
    <Tabs {...props}>
      {items.map((item, i) => (
        <TabPane
          tab={item.tabTitle}
          key={item.id}
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
