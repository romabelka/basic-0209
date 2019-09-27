import { createContext } from "react";

const language = createContext();

export const { Consumer, Provider } = language;
export default language;
