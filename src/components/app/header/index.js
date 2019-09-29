import React, { useContext } from "react";

import Logo from "./logo";
import styles from "./header.module.css";
import { Link } from "react-router-dom";
import userContext from "../../../contexts/user-context";
import { Consumer as LocalizationConsumer } from "../../../contexts/localization-context";
import { Typography, Button } from "antd";

function Header() {
  const { name } = useContext(userContext);

  return (
    <header className={styles.header}>
      <Link to="/restaurants">
        <Logo />
      </Link>
      <Typography.Text>Hello: {name}</Typography.Text>
      <LocalizationConsumer>
        {({ lang, toggleLang }) => (
          <Button onClick={() => toggleLang()}>
            {lang === "en" ? "ru" : "en"}
          </Button>
        )}
      </LocalizationConsumer>
    </header>
  );
}

export default Header;
