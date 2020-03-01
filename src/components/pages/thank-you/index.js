import React, { useContext } from "react";
import { Container } from "../../container";
import styles from "./thank-you.module.css";
import i18n from "../../../contexts/i18n-context";

function ThankYouPage() {
  const { t } = useContext(i18n);
  return (
    <div className="fullHeightLayout">
      <Container>
        <h1 className={styles.title}>
          {t("thank_you")}
          <br />
          {t("thank_you_placed")}
        </h1>
      </Container>
    </div>
  );
}

ThankYouPage.propTypes = {};

export default ThankYouPage;
