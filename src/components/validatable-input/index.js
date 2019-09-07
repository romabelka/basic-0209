import React from "react";
import { Input, Icon, Typography } from "antd";

const inputSuffix = isValid => {
  switch (isValid) {
    case true:
      return (
        <Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" />
      );
    case false:
      return (
        <Icon type="close-circle" theme="twoTone" twoToneColor="#eb2f96" />
      );
    default:
      return <Icon type="question-circle" />;
  }
};

const warnMessage = message => {
  if (message) {
    return <Typography.Text type="danger">{message}</Typography.Text>;
  }
};

function BaseInput(props) {
  if (props.multiline) {
    return (
      <Input.TextArea
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChangeHandler}
        suffix={inputSuffix(props.validState.isValid)}
        autosize
      />
    );
  } else {
    return (
      <Input
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChangeHandler}
        suffix={inputSuffix(props.validState.isValid)}
      />
    );
  }
}

function ValidatableInput(props) {
  return (
    <div>
      <BaseInput {...props} />
      {warnMessage(props.validState.message)}
    </div>
  );
}

export default ValidatableInput;
