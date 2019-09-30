import React, { useContext } from "react";

import Logo from "./logo";
import styles from "./header.module.css";
import { Link } from "react-router-dom";
import userContext from "../../../contexts/user-context";
import langContext from "../../../contexts/lang-context";
import { Typography, Select } from "antd";
const { Option } = Select;

function Header() {
  const { name } = useContext(userContext);
  const { lang, setLang } = useContext(langContext);

  return (
    <header className={styles.header}>
      <Link to="/restaurants">
        <Logo />
      </Link>
      <Select
        value={lang}
        onChange={val => {
          setLang(val);
        }}
      >
        <Option value="ru">Ru</Option>
        <Option value="en">En</Option>
      </Select>
      <Typography.Text>Hello: {name}</Typography.Text>
    </header>
  );
}

export default Header;
