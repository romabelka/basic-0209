import { Container } from "../../container";
import React, { useContext } from "react";
import i18n from "../../../contexts/i18n-context";
import styles from "./not-found.module.css";

function NotFoundPage() {
  const { t } = useContext(i18n);

  return (
    <div className="fullHeightLayout">
      <Container>
        <h1 className={styles.title}>
          {t("not_found_page")}
          <span className={styles.errorCode}>404</span>
        </h1>
      </Container>
    </div>
  );
}

export default NotFoundPage;
