import React, { useState } from "react";
import { Rate } from "antd";

function SimpleForm() {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    console.log(name, review, " <--- name and review");
    setName("");
    setReview("");
  };

  return (
    <form onSubmit={onSubmit}>
      Add your name:
      <input
        type="text"
        value={name}
        onChange={ev => setName(ev.target.value)}
      />
      Add your review:
      <input
        type="text"
        value={review}
        onChange={ev => setReview(ev.target.value)}
      />
      <Rate />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default SimpleForm;
