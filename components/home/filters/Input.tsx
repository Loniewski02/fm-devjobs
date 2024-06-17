"use client";
import { useContext } from "react";

import { FiltersContext } from "@/app/_providers/FilterContext";

import Search from "@/public/assets/desktop/icon-search.svg";
import Location from "@/public/assets/desktop/icon-location.svg";

type Props = {
  id: string;
  placeholder: string;
};

const Input: React.FC<Props> = ({ id, placeholder }) => {
  const { setName, setLocation } = useContext(FiltersContext);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;

    if (id === "name") setName(value);
    if (id === "location") setLocation(value);
  };

  return (
    <div
      className={`${id === "location" && "hidden md:block"} border:Gray relative w-full md:border-r`}
    >
      <label
        htmlFor={id}
        className="invisible absolute left-6 top-1/2 -z-10 -translate-y-1/2 text-Violet md:visible md:z-0"
      >
        {id.includes("name") && <Search className="hidden md:block" />}
        {id.includes("location") && <Location className="hidden md:block" />}
      </label>
      <input
        type="text"
        id={id}
        onChange={changeHandler}
        className="w-full bg-transparent px-6 py-7 text-base md:pl-16"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
