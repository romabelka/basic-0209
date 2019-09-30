import React, { useContext } from "react";

import Logo from "./logo";
import styles from "./header.module.css";
import { Link } from "react-router-dom";
import { Button } from "antd";

import i18n from "../../../contexts/i18n-context";

function Header() {
  const { language, setLanguage, t } = useContext(i18n);

  return (
    <header className={styles.header}>
      <Link to="/restaurants">
        <Logo />
      </Link>
      <Button onClick={() => setLanguage(language === "ru" ? "en" : "ru")}>
        {t("change_language")}
      </Button>
    </header>
  );
}

export default Header;
