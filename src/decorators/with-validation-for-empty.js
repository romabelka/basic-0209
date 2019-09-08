import React from "react";
import useValidationForEmpty from "../hooks/use-validation-textarea";

/** Декорирует контрол: передает метод для валидации на пустое значение */
export default OriginalComponent => {
  return function DecoratedComponent(props) {
    return <OriginalComponent validateForEmpty={useValidationForEmpty} />;
  };
};
