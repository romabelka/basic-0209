import React, { useState } from "react";
import localizationContext from "./localization-context";
import dictionary from "../dictionary";

const LocalizationProvider = ({ children }) => {
  const [lang, setLang] = useState("en");
  const toggleLang = () => {
    setLang(lang === "en" ? "ru" : "en");
  };
  const translate = text => {
    return dictionary[lang][text] || "";
  };

  return (
    <localizationContext.Provider value={{ lang, toggleLang, translate }}>
      {children}
    </localizationContext.Provider>
  );
};

export default LocalizationProvider;
