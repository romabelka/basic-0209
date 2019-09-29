import React, { useState } from "react";
import { Select } from "antd";
// import { Provider as LangProvider } from "../../contexts/lang-context";
import { languages } from "../../contexts/lang-context";

const { Option } = Select;

function LangSelect({ setLang }) {
  // const [lang, setLang] = useState("en");
  function handleChange(value) {
    console.log(languages[value]);
    setLang(languages[value]);
  }

  return (
    <Select defaultValue="en" style={{ width: 120 }} onChange={handleChange}>
      <Option value="en">English</Option>
      <Option value="ru">Russian</Option>
    </Select>
  );
}

LangSelect.propTypes = {};

export default LangSelect;
