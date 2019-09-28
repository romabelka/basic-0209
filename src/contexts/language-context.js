import { createContext } from "react";

const context = createContext("english");

export const { Consumer, Provider } = context;
export default context;
