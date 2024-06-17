import useInput from "@/hooks/use-input";
import { useEffect } from "react";

const ApplyFormBox = ({
  input,
  initial,
  reset,
}: {
  input: Input;
  initial: boolean;
  reset: boolean;
}) => {
  const {
    enteredValue,
    inputValueHandler,
    inputBlurHandler,
    hasError,
    reset: inputReset,
  } = useInput(input.validity);

  useEffect(() => {
    !initial && inputBlurHandler();
  }, [initial]);

  useEffect(() => {
    reset && inputReset();
  }, [reset]);

  return (
    <div
      key={input.id}
      className={`${input.id === "cover-letter" && "col-span-2 row-start-4"} flex flex-col gap-2`}
    >
      <label htmlFor={input.id} className="text-sm font-bold text-DarkGray">
        {`${input.label} ${input.required ? "*" : ""}`}
      </label>
      {!input.isTextarea && (
        <input
          value={enteredValue}
          onChange={inputValueHandler}
          onBlur={inputBlurHandler}
          type={input.type}
          name={input.name}
          id={input.id}
          required={input.required}
          className={`${input.id === "resume" && "cursor-pointer text-sm"} ${hasError ? "border-red-500" : "border-gray-300 dark:border-gray-600"} block w-full rounded-lg border  px-4 py-2 text-VeryDarkBlue file:rounded-md file:border-none file:bg-Violet file:px-4 file:py-1 file:text-sm file:text-White  dark:bg-Midnight dark:text-LightGray`}
          placeholder={input.placeholder}
        />
      )}
      {input.isTextarea && (
        <>
          <textarea
            value={enteredValue}
            onChange={inputValueHandler}
            onBlur={inputBlurHandler}
            id={input.id}
            name={input.name}
            placeholder={input.placeholder}
            required={input.required}
            className={`${input.id === "cover-letter" && "min-h-[100px] md:min-h-[150px]"} ${hasError ? "border-red-500" : "border-gray-300 dark:border-gray-600"} block w-full rounded-lg border px-4 py-2 text-VeryDarkBlue dark:bg-Midnight dark:text-LightGray`}
          />
        </>
      )}
    </div>
  );
};

export default ApplyFormBox;
