import { useState } from "react";

export default function(initialValue) {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    setValue,
    bind: {
      onChange: event => {
        setValue(event.target.value);
      }
    }
  };
}
