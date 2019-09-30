import React, { useContext } from "react";

import Logo from "./logo";
import styles from "./header.module.css";
import { Link } from "react-router-dom";
import userContext from "../../../contexts/user-context";
import { Typography, Row, Col } from "antd";
import LangSelect from "./lang-select";

function Header() {
  const { name } = useContext(userContext);

  return (
    <header className={styles.header}>
      <Row type="flex">
        <Col span={4} align="left">
          <LangSelect />
        </Col>
        <Col span={20}>
          <Link to="/restaurants">
            <Logo />
          </Link>
        </Col>
        <Typography.Text>Hello: {name}</Typography.Text>
      </Row>
    </header>
  );
}

export default Header;
