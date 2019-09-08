import { useState } from "react";

export default function useInput(initialValue, validationFunction) {
  const [state, setState] = useState(initialValue);
  console.log(state);

  const setValidState = value => validationFunction(value) && setState(value);

  return [state, setValidState];
}
