import { useState } from "react";

export default function useValidated(initialState, validator) {
  const [state, setState] = useState(initialState);

  const setValidated = state => {
    validator(state) && setState(state);
  };

  return [state, setValidated];
}
