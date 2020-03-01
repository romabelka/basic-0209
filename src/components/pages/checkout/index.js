import React, { useContext } from "react";
import Basket from "../../basket";
import { Button } from "../../button";
import { Container } from "../../container";
import styles from "./checkout.module.css";
import i18n from "../../../contexts/i18n-context";

function CheckoutPage({ history }) {
  const { t } = useContext(i18n);

  return (
    <div className={styles.checkoutContent}>
      <Container className={styles.container}>
        <div className={styles.checkoutInnerContent}>
          <div>
            <form className="form">
              <div className="formGroup">
                <label>{t("order_name")}</label>
                <input type="text" />
              </div>
              <div className="formGroup">
                <label>{t("order_phone")}</label>
                <input type="tel" />
              </div>
              <div className="formGroup">
                <label>{t("order_address")}</label>
                <textarea />
              </div>
              <Button
                onClick={() => history.push("/thank-you")}
                block
                type="primary"
              >
                {t("order_final")}
              </Button>
            </form>
          </div>
          <div>
            <Basket hideButton />
          </div>
        </div>
      </Container>
    </div>
  );
}

CheckoutPage.propTypes = {};

export default CheckoutPage;
