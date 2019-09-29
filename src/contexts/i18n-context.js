import { createContext } from "react";

const context = createContext({ trans: () => {} });

export const { Provider, Consumer } = context;

export default context;
