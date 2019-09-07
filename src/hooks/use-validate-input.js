import { useState } from "react";

function ValidState(isValid, message = "") {
  this.isValid = isValid;
  this.message = message;
}

export default function useValidateInput(validFunc) {
  const [inputValue, setInputValue] = useState();
  const validState = validFunc(inputValue);

  return { inputValue, validState, setInputValue };
}

export { ValidState };
