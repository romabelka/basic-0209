import validateHook, { ValidState } from "../hooks/use-validate-input";

export default function() {
  const validFunc = value => {
    if (value === undefined) {
      return new ValidState();
    } else if (!value) {
      return new ValidState(false, "Feedback is empty!");
    } else if (value.match(/shit|terrible/gi)) {
      return new ValidState(false, "You shouldn't use some entered words!");
    }

    return new ValidState(true);
  };

  return validateHook(validFunc);
}
