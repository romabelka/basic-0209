import React from "react";
import Restaurant from "../restaurant";
import Cart from "../cart";
import { restaurants } from "../../fixtures";
import { Tabs, Typography } from "antd";
import "./layout.css";

export const Layout = () => {
  return (
    <div className="layout">
      <header className="layout__head">
        <Typography.Title level={1}>
          Best restaurants in your city
        </Typography.Title>
      </header>

      <div className="layout__main-content">
        <main className="layout__restaurants">
          <Tabs defaultActiveKey="1" tabPosition="left">
            {restaurants.map(restaurant => (
              <Tabs.TabPane tab={restaurant.name} key={restaurant.id}>
                <Restaurant restaurant={restaurant} />
              </Tabs.TabPane>
            ))}
          </Tabs>
        </main>

        <aside className="layout__cart">
          <Cart />
        </aside>
      </div>

      <footer className="layout__footer">2019</footer>
    </div>
  );
};
