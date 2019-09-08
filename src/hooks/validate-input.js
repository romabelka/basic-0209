import { useState } from "react";

export default function ValidateInput(validationFunction) {
  const [inputValue, setInputValue] = useState();

  const isValid = inputValue => {
    if (validationFunction(inputValue)) {
      setInputValue(inputValue);
    }
  };

  return [inputValue, isValid];
}
