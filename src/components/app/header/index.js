import React, { useContext } from "react";

import Logo from "./logo";
import styles from "./header.module.css";
import { Link } from "react-router-dom";
import userContext from "../../../contexts/user-context";
import { Consumer as LangConsumer } from "../../../contexts/lang/lang-context";
import { LANG_RU, LANG_EN } from "../../../contexts/lang/constants";
import { Col, Radio, Row, Typography } from "antd";

function Header() {
  const { name } = useContext(userContext);

  return (
    <header className={styles.header}>
      <langContext>
        <Row>
          <Col span={8} />
          <Col span={8}>
            <Link to="/restaurants">
              <Logo />
            </Link>
            <Typography.Text>Hello: {name}</Typography.Text>
          </Col>
          <Col>
            <LangConsumer>
              {({ lang, setLang }) => (
                <Radio.Group
                  className={styles.langSelector}
                  value={lang}
                  onChange={e => setLang(e.target.value)}
                >
                  <Radio value={LANG_RU}>RU</Radio>
                  <Radio value={LANG_EN}>EN</Radio>
                </Radio.Group>
              )}
            </LangConsumer>
          </Col>
        </Row>
      </langContext>
    </header>
  );
}

export default Header;
