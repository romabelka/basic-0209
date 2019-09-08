import { useState } from "react";

export default (validator, initialValues) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (name, value) => {
    setValues({ ...values, [name]: value });
  };

  const executeValidator = callback => {
    const errors = validator(values);
    setErrors(errors);
    callback(0 === Object.keys(errors).length);
  };

  return { values, handleChange, executeValidator, errors };
};
