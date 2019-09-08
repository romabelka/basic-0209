import React, { useState } from "react";
import { Input } from "antd";
import useValidationInput from "../../hooks/use-validation-input";

function SimpleForm(props) {
  const [inputNumberValue, setInputNumberValue] = useValidationInput(
    /^[1-5]{1}$/
  );
  const [inputTextValue, setInputTextValue] = useValidationInput(/^[a-zA-Z]+$/);

  function handleSubmit() {
    alert("Rate: " + inputNumberValue + "; Comment: " + inputTextValue);
  }

  return (
    <div>
      <div>Add your review:</div>
      <form onSubmit={handleSubmit}>
        <div>
          Rate:
          <Input
            value={inputNumberValue}
            onChange={ev => setInputNumberValue(ev.target.value)}
          />
        </div>
        <div>
          Comment:
          <Input
            value={inputTextValue}
            onChange={ev => setInputTextValue(ev.target.value)}
          />
        </div>
        <button type="submit">Add review</button>
      </form>
    </div>
  );
}

export default SimpleForm;
