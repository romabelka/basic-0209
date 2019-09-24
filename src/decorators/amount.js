import React from "react";
import useAmount from "../hooks/use-amount";

export default OriginalComponent =>
  function DecoratedComponent(props) {
    const { amount, increment, decrement } = useAmount();

    return (
      <OriginalComponent
        {...props}
        amount={amount}
        increment={increment}
        decrement={decrement}
      />
    );
  };
