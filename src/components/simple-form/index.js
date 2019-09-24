import React, { useState } from "react";

function SimpleForm(props) {
  const [review, setReview] = useState("");
  return (
    <div>
      add your review:{" "}
      <input value={review} onChange={ev => setReview(ev.target.value)} />
    </div>
  );
}

export default SimpleForm;
