import { Col, Row, Tabs } from "antd";
import React from "react";
import { withRouter } from "react-router";
import cx from "classnames";

import styles from "./content-tabs.module.css";

const { TabPane } = Tabs;

function ContentTabs({ items, tabPaneClassName, match, history }) {
  return (
    <Tabs
      activeKey={match.params.tab || "menu"}
      onTabClick={key =>
        history.push("/restaurants/" + match.params.id + "/" + key)
      }
      tabPosition="top"
      animated={false}
      className={styles.contentTabs}
    >
      {items.map((item, i) => (
        <TabPane
          tab={item.tabTitle}
          key={item.key}
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

export default withRouter(ContentTabs);
