import { Container } from "../../container";
import React, { useContext } from "react";
import i18n from "../../../contexts/i18n-context";

function ErrorPage() {
  const { t } = useContext(i18n);

  return (
    <div className="fullHeightLayout">
      <Container>
        <h1>{t("error_page")}</h1>
      </Container>
    </div>
  );
}

export default ErrorPage;
