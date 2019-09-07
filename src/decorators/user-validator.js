import validateHook, { ValidState } from "../hooks/use-validate-input";

export default function() {
  const validFunc = value => {
    if (value === undefined) {
      return new ValidState();
    } else if (!value) {
      return new ValidState(false, "Name is empty!");
    } else if (value.match(/[^a-z\s]+/gi)) {
      return new ValidState(false, "Depricated symbol found!");
    }

    return new ValidState(true);
  };

  return validateHook(validFunc);
}
