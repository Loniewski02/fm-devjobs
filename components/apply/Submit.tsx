"use client";
import { useFormStatus } from "react-dom";

import Button from "../UI/Button";
import LoadingSpinner from "../UI/LoadingSpinner";

const Submit = () => {
  const { pending } = useFormStatus();
  return (
    <Button
      disabled={pending}
      type="submit"
      label="submit"
      className="col-start-2 row-start-6 mt-4 h-14 w-[150px] place-self-end self-end"
    >
      {pending && (
        <LoadingSpinner loading={pending} color="#fff" noMargin size={25} />
      )}
      <span className={pending ? "hidden" : "block"}>Submit</span>
    </Button>
  );
};

export default Submit;
