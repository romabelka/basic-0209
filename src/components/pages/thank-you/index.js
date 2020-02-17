import React from "react";
import { Container } from "../../container";
import styles from "./thank-you.module.css";

function ThankYouPage() {
  return (
    <div className="full-height-layout">
      <Container>
        <h1 className={styles.title}>
          Thanks!
          <br />
          Your order is being prepared
        </h1>
      </Container>
    </div>
  );
}

ThankYouPage.propTypes = {};

export default ThankYouPage;
