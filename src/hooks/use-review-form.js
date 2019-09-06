import { useState } from "react";

function useReviewForm(initial = { rating: 5 }) {
  const [rating, setRating] = useState(initial.rating);
  const [userName, setUserName] = useState("");
  const [review, setReview] = useState("");

  const [isValid, setIsValid] = useState(true);

  const validate = () => {
    let valid = true;

    if (!userName || !String(userName).trim()) {
      valid = false;
    }

    if (!review || !String(review).trim()) {
      valid = false;
    }

    setIsValid(valid);
    return valid;
  };

  return {
    rating,
    userName,
    review,
    setUserName,
    setRating,
    setReview,
    validate,
    isValid
  };
}

export default useReviewForm;
