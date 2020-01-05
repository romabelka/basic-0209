import React from "react";

import Logo from "./logo";
import styles from "./header.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/restaurants">
        <Logo />
      </Link>
    </header>
  );
}

export default Header;
