import { Col, Row, Tabs } from "antd";
import React from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import cx from "classnames";

import styles from "./tabs.module.css";

const { TabPane } = Tabs;

function ContentTabs({ items, tabPaneClassName, match, history }) {
  return (
    <>
      <Route
        exact
        path={`${match.path}`}
        render={routeProps => {
          const url = routeProps.match.url;
          const redirectUrl = `${
            url[url.length - 1] === "/" ? url.slice(0, -1) : url
          }/menu`;

          return <Redirect to={redirectUrl} />;
        }}
      />
      <Route
        path={`${match.path}/:tabId`}
        render={routeProps => {
          return (
            <Tabs
              activeKey={routeProps.match.params.tabId}
              onTabClick={tabId => history.push(`${match.url}/${tabId}`)}
              tabPosition="top"
              animated={false}
              className={styles.contentTabs}
            >
              {items.map(item => (
                <TabPane
                  tab={item.tabTitle}
                  key={item.tabId}
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
    </>
  );
}

export default withRouter(ContentTabs);
