import React from "react";
import Restaurants from "../restaurants";
import Cart from "../cart";
import { Layout } from "antd";

const { Header, Content } = Layout;

export default function App() {
  return (
    <Layout>
      <Header style={{ background: "white" }}>
        <Cart />
      </Header>
      <Content>
        <Restaurants />
      </Content>
    </Layout>
  );
}
