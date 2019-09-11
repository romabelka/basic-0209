import React, { useState } from "react";
import PropTypes from "prop-types";

function SimpleForm(props) {
  const [review, setReview] = useState("");
  return (
    <div>
      add your review:{" "}
      <input value={review} onChange={ev => setReview(ev.target.value)} />
    </div>
  );
}

SimpleForm.propTypes = {
  review: PropTypes.shape({
    id: PropTypes.string.isRequired,
    user: PropTypes.string,
    text: PropTypes.string,
    rating: PropTypes.string
  })
};

export default SimpleForm;
