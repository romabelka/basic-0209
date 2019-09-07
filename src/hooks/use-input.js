import { useState } from "react";

// export default function useInput(initialValue = '', validationFn) {
//     const [state, setState] = useState(initialValue);
//
//     if(validationFn(state)){
//         setState(state);
//         return {value: state}
//     }
//     return '';
// }

export default function(initialValue) {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    setValue,
    reset: () => setValue(""),
    bind: {
      onChange: event => {
        setValue(event.target.value);
      }
    }
  };
}
