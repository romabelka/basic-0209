import React from "react";
import { Radio } from "antd";
import LanguageContext from "../../../../contexts/language-context";

function LangSelect() {
  return (
    <LanguageContext.Consumer>
      {({ lang, setLang }) => (
        <Radio.Group value={lang} onChange={e => setLang(e.target.value)}>
          <Radio.Button value="en">En</Radio.Button>
          <Radio.Button value="ru">Ru</Radio.Button>
        </Radio.Group>
      )}
    </LanguageContext.Consumer>
  );
}

export default LangSelect;
