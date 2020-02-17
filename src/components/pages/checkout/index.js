import React from "react";
import Basket from "../../basket";
import { Button } from "../../button";
import { Container } from "../../container";
import styles from "./checkout.module.css";

function CheckoutPage({ history }) {
  return (
    <div className={styles.checkoutContent}>
      <Container className={styles.container}>
        <div className={styles.checkoutInnerContent}>
          <div>
            <form className="form">
              <div className="form-group">
                <label>Name</label>
                <input type="text" />
              </div>
              <div className="form-group">
                <label>Phone number</label>
                <input type="tel" />
              </div>
              <div className="form-group">
                <label>Address</label>
                <textarea />
              </div>
              <Button
                onClick={() => history.push("/thank-you")}
                block
                type="primary"
              >
                Order
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
