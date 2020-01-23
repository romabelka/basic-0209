import React, { useContext } from "react";

import Logo from "./logo";
import styles from "./header.module.css";
import { Link } from "react-router-dom";
import { Button, Icon, Col, Row, Radio } from "antd";

import i18n from "../../../contexts/i18n-context";

function Header() {
  const { language, setLanguage } = useContext(i18n);

  return (
    <header className={styles.header}>
      <Row type="flex" justify="center">
        <Col xs={24} md={20} lg={18}>
          <Row type="flex" justify="space-between" align="middle">
            <Col>
              <Button
                type="link"
                ghost
                className={styles.goBackBtn}
                onClick={() => console.log("go back")}
              >
                <Icon type="arrow-left" />
                <span className={styles.goBackBtnText}>Link</span>
              </Button>
            </Col>
            <Col className={styles.logoWrap}>
              <Link to="/restaurants" className={styles.logo}>
                <Logo />
              </Link>
            </Col>
            <Col>
              <Radio.Group
                className={styles.langSwitcher}
                size="small"
                value={language}
                onChange={e => {
                  setLanguage(e.target.value);
                }}
              >
                <Radio.Button value="en" className={styles.langSwitcherBtn}>
                  EN
                </Radio.Button>
                <Radio.Button value="ru" className={styles.langSwitcherBtn}>
                  RU
                </Radio.Button>
              </Radio.Group>
            </Col>
          </Row>
        </Col>
      </Row>
    </header>
  );
}

export default Header;
