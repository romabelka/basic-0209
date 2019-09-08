import React from "react";
import { Alert, Button, Input, Rate } from "antd";
import useValidation from "../../hooks/use-validation";

function SimpleForm(props) {
  const validator = values => {
    const errors = {};
    Object.entries(values).forEach(([name, value]) => {
      if (!value) {
        errors[name] = `${name} must be set`;
      }
    });
    return errors;
  };
  const { values, handleChange, executeValidator, errors } = useValidation(
    validator,
    { rate: null, review: "" }
  );

  const handleSubmit = ev => {
    ev.preventDefault();
    executeValidator(ok => {
      if (ok) {
        console.log("form", values);
      }
    });
  };

  const { TextArea } = Input;

  return (
    <form onSubmit={handleSubmit}>
      <Rate
        value={values.rate}
        onChange={ev => handleChange("rate", ev.valueOf())}
      />
      {errors.rate && <Alert type="error" message={errors.rate} />}
      <TextArea
        value={values.review}
        placeholder="add your review"
        rows={4}
        onChange={ev => handleChange("review", ev.target.value)}
      />
      {errors.review && <Alert type="error" message={errors.review} />}
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </form>
  );
}

export default SimpleForm;
