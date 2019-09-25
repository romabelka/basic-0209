import { Col, Row, Tabs } from "antd";
import React from "react";
import cx from "classnames";
import { withRouter, Redirect, Route } from "react-router-dom";

import styles from "./content-tabs.module.css";

const { TabPane } = Tabs;

function ContentTabs({ items, tabPaneClassName, match, history }) {
  return (
    <Route
      path={`${match.path}/:id`}
      children={routeProps => {
        console.log("--- a", routeProps, items);

        const activeKey = routeProps.match ? routeProps.match.params.id : null;

        if (
          items.length &&
          (!activeKey || !items.find(i => i.tabKey === activeKey))
        )
          return <Redirect to={`${match.url}/${items[0].tabKey}`} />;

        return (
          <Tabs
            activeKey={activeKey}
            onTabClick={id => history.push(`${match.url}/${id}`)}
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
      }}
    />
  );
}

export default withRouter(ContentTabs);
