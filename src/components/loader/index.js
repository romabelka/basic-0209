import React from "react";
import { Spin } from "antd";

function Loader(props) {
  return <Spin tip="Loading..." {...props} />;
}

Loader.propTypes = {};

export default Loader;
