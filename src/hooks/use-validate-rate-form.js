import { useState } from "react";

/*
 * TODO duplication => to decorator ?
 * */

function useValidateRateForm(initialValue = "") {
  const [state, setState] = useState(initialValue);

  const setInputReviewText = state => {
    setState(state);
  };

  return {
    setInputReviewText,
    reviewText: state
  };
}

function useValidateMinLength() {
  const [state, setState] = useState(false);

  const validate = state => {
    setState(state);
  };

  return {
    validate,
    isValid: state.length >= 5
  };
}

function useRateValue() {
  const [state, setState] = useState();

  const setRateValue = state => {
    setState(state);
  };
  return {
    setRateValue,
    rateValue: state
  };
}

export { useValidateRateForm, useValidateMinLength, useRateValue };
