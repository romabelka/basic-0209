import React from "react";
import useAmount from "../hooks/use-amount";
import * as PropTypes from "prop-types";

const decoratedPropTypes = {
  amount: PropTypes.number,
  increment: PropTypes.func,
  decrement: PropTypes.func
};

export default OriginalComponent => {
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
  }

  DecoratedComponent.propTypes = decoratedPropTypes;

  return DecoratedComponent;
};

export { decoratedPropTypes };
