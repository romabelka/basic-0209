import { Col, Row, Tabs } from "antd";
import React from "react";
import cx from "classnames";

import styles from "./content-tabs.module.css";

const { TabPane } = Tabs;

function ContentTabs({ items, tabPaneClassName, match, history }) {
  return (
    <Tabs
      activeKey={match.params.tabKey}
      onTabClick={tabId =>
        history.push(`/restaurants/${match.params.id}/${tabId}`)
      }
      tabPosition="top"
      animated={false}
      className={styles.contentTabs}
    >
      {items.map(item => (
        <TabPane
          tab={item.tabTitle}
          key={item.tabKey}
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
