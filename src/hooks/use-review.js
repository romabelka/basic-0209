import { useState } from "react";

export default () => {
  const [review, setReview] = useState("");
  const [rate, setRate] = useState(0);
  const [isShowError, setIsShowError] = useState(false);

  const showError = () => setIsShowError(true);
  const changeReview = event => setReview(event.target.value);
  const changeRate = value => setRate(value);

  let errors = [];
  if (review.length <= 2) {
    errors.push("review error");
  }
  if (rate === 0) {
    errors.push("rate error");
  }

  const comment = { rate, review, errors };

  return { comment, isShowError, showError, changeReview, changeRate };
};
