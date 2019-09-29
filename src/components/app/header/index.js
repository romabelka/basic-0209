import React, { useContext } from "react";

import Logo from "./logo";
import styles from "./header.module.css";
import { Link } from "react-router-dom";
import userContext from "../../../contexts/user-context";
import langContext from "../../../contexts/language-context";
import { Typography, Select } from "antd";

function Header() {
  const { name } = useContext(userContext);
  const { lang, setLang } = useContext(langContext);

  return (
    <header className={styles.header}>
      <Link to="/restaurants">
        <Logo />
      </Link>
      <Typography.Text>Hello: {name}</Typography.Text>
      <Select value={lang} onChange={setLang}>
        <Select.Option value="en">English</Select.Option>
        <Select.Option value="ru">Русский</Select.Option>
      </Select>
    </header>
  );
}

export default Header;
