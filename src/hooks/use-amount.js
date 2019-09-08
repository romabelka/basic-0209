import { useState } from "react";

/** Счетчик суммы */
export default function useAmount(initialAmount = 0) {
  const [state, setState] = useState(initialAmount);

  const increment = () => setState(state + 1);
  const decrement = () => state >= 1 && setState(state - 1);

  return { amount: state, increment, decrement };
}
