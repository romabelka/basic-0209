import { useState } from "react";

function useReviewInput() {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [rateValue, setRateValue] = useState(0);

  function validate() {
    return !(
      typeof name !== "string" ||
      name.trim().length < 3 ||
      (typeof review !== "string" || review.trim().length < 3) ||
      (typeof rateValue !== "number" || rateValue < 1 || rateValue > 5)
    );
  }

  return {
    name,
    setName,
    review,
    setReview,
    rateValue,
    setRateValue,
    validate
  };
}

export default useReviewInput;
