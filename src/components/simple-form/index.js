import React, { useState } from "react";
import ValidatableInput from "../validatable-input";
import useValidateInputUser from "../../decorators/user-validator";
import useValidateInputText from "../../decorators/feedback-validator";
import { Card, Rate, Button } from "antd";
import "./index.css";

function SimpleForm(props) {
  const userHook = useValidateInputUser();
  const textHook = useValidateInputText();

  const [rate, setRate] = useState();

  const isFormValid = () => {
    return userHook.validState.isValid && textHook.validState.isValid;
  };

  const submitHandler = () => {
    if (!isFormValid()) return false;

    props.cbAddReview({
      id: new Date() + Math.random(), // <- Must be the generated uuid value here
      user: userHook.inputValue,
      text: textHook.inputValue,
      rating: rate
    });

    userHook.setInputValue(undefined);
    textHook.setInputValue(undefined);
    setRate(0);
  };

  return (
    <div>
      <Card type="inner" title="Leave your feedback">
        <div className="input-area">
          <ValidatableInput
            placeholder="Enter your name"
            validState={userHook.validState}
            onChangeHandler={event =>
              userHook.setInputValue(event.target.value)
            }
            value={userHook.inputValue}
          />
        </div>
        <div className="input-area">
          <ValidatableInput
            placeholder="Enter your feedback"
            validState={textHook.validState}
            onChangeHandler={event =>
              textHook.setInputValue(event.target.value)
            }
            value={textHook.inputValue}
            multiline={true}
          />
        </div>
        <div className="input-area">
          <Rate value={rate} onChange={newRate => setRate(newRate)} />
        </div>
        <div className="input-area">
          <Button
            type="primary"
            disabled={!isFormValid()}
            block
            onClick={submitHandler}
          >
            Leave feedback
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default SimpleForm;
