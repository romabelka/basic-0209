import { useState } from "react";

export default function useReviewInput(initialState, validator) {
  const [state, setState] = useState(initialState);

  function setValidState(state) {
    if (validator(state)) {
      setState(state);
    }
  }

  return [state, setValidState];
}
