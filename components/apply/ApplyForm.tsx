"use client";
import { useFormState } from "react-dom";

import { FormSubmit } from "@/utils/request";
import { INPUTS } from "@/utils/constant";

import Wrapper from "../layout/Wrapper";
import Submit from "./Submit";
import ApplyFormBox from "./ApplyFormBox";
import { useEffect, useState } from "react";

const initialState = {
  status: "",
  data: {
    name: "",
    "last-name": "",
    email: "",
    phone: "",
    resume: null,
    "cover-letter": "",
  },
};

const ApplyForm = ({
  id,
  position,
  company,
  onSuccess,
}: {
  id: number;
  position: string;
  company: string;
  onSuccess: () => void;
}) => {
  const [initial, setInitial] = useState(true);
  const [reset, setReset] = useState(true);
  const [state, action] = useFormState<ApplyData, FormData>(
    (state, payload) => FormSubmit(state, payload, id, company, position),
    initialState,
  );

  useEffect(() => {
    if (state.status === "success") {
      setReset(true);
      setInitial(true);
      onSuccess();
    }
  }, [state.status]);

  return (
    <section className="sectionX pb-16 pt-6 md:py-12">
      <Wrapper className="rounded-md bg-White px-6 py-10 dark:bg-VeryDarkBlue md:max-w-[730px] md:px-12">
        <form
          action={(formData) => {
            action(formData);
            setInitial(false);
            setReset(false);
          }}
          className="flex flex-col gap-4 md:grid md:grid-cols-2"
        >
          {INPUTS.map((input) => (
            <ApplyFormBox
              key={input.id}
              input={input}
              initial={initial}
              reset={reset}
            />
          ))}
          <Submit />
        </form>
      </Wrapper>
    </section>
  );
};

export default ApplyForm;
