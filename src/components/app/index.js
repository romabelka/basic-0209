import { Layout } from "antd";
import React from "react";

import Header from "./header";
import Content from "../content";

function App() {
  return (
    <Layout>
      <Header />
      <main role="main">
        <Content />
      </main>
    </Layout>
  );
}

export default App;
