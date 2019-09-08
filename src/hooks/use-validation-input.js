import { useState } from "react";

export default function useValidationInput(regexp = null) {
  const [value, setValue] = useState();

  function setInputValue(value) {
    if (value.match(regexp) || value === "") {
      setValue(value);
    }
  }

  return [value, setInputValue];
}
