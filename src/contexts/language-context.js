import { createContext } from "react";

const context = createContext({ lang: "en", setLang: () => {}, t: () => {} });

export default context;
