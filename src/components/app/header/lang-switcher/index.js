import React from "react";

import styles from "./lang-switcher.module.css";

export const LangSwitcher = ({ lang, onChange }) => (
  <fieldset className={styles.langSwitcher}>
    <label className={styles.langSwitcherBtn}>
      <input
        type="radio"
        value="en"
        checked={lang === "en"}
        onChange={onChange}
      />
      <span>EN</span>
    </label>
    <label className={styles.langSwitcherBtn}>
      <input
        type="radio"
        value="ru"
        checked={lang === "ru"}
        onChange={onChange}
      />
      <span>RU</span>
    </label>
  </fieldset>
);
