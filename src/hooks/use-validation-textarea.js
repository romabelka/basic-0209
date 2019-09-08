import { useState } from "react";

/** Валидатор на пустое значение */
export default function useValidationForEmpty(
  defaultMessage = "Заполните, пожалуйста, это поле"
) {
  const [message, setMessage] = useState();
  const validate = value => {
    setMessage(value ? "" : defaultMessage);
  };

  return { message, validate };
}
