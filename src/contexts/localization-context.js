import { createContext } from "react";

const localizationContext = createContext("en");

export const { Consumer, Provider } = localizationContext;
export default localizationContext;
