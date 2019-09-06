import React from "react";
import useReview from "../hooks/use-review";

export default OriginalComponent =>
  function DecoratedComponent(props) {
    const reviewHooks = useReview();

    return <OriginalComponent {...props} {...reviewHooks} />;
  };
