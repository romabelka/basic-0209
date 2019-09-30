import React, { createContext, useState } from "react";
import dictionaries from "./i18n-dictionaries";

const context = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("ru");
  const t = key => dictionaries[language][key] || key;

  return (
    <context.Provider value={{ language, setLanguage, t }}>
      {children}
    </context.Provider>
  );
}

export default context;
