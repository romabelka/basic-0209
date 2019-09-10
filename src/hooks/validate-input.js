import { useState } from "react";

export default function useValidateInput(validationFunction) {
  const [inputValue, setInputValue] = useState();

  const setValidValue = inputValue => {
    if (validationFunction(inputValue)) {
      setInputValue(inputValue);
    }
  };

  return [inputValue, setValidValue];
}
