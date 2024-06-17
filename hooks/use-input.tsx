import { useState } from "react";

const useInput = (inpValidity: (value: string) => boolean) => {
  const [enteredValue, setEnteredValue] = useState<string>("");
  const [isTouched, setIsTouched] = useState<boolean>(false);

  const isValid = inpValidity(enteredValue);
  const hasError = isTouched && !isValid;

  const inputValueHandler = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const value = event.target.value;
    setEnteredValue(value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    enteredValue,
    isValid,
    hasError,
    inputBlurHandler,
    inputValueHandler,
    reset,
  };
};

export default useInput;
