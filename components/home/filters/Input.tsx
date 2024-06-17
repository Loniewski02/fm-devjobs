"use client";
import { useContext } from "react";
import { useSearchParams } from "next/navigation";

import { FiltersContext } from "@/app/_providers/FilterContext";

import Search from "@/public/assets/desktop/icon-search.svg";
import Location from "@/public/assets/desktop/icon-location.svg";

const Input = ({
  id,
  placeholder,
  className,
}: {
  id: string;
  placeholder: string;
  className?: string;
}) => {
  const { setName, setLocation } = useContext(FiltersContext);
  const searchParams = useSearchParams();

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;

    if (id === "name") setName(value);
    if (id === "location") setLocation(value);
  };

  let defaultVal;

  const params = new URLSearchParams(searchParams);
  if (params.get("location") && id === "location") {
    defaultVal = params.get("location") || "";
  }

  if (params.get("name") && id === "name") {
    defaultVal = params.get("name") || "";
  }

  return (
    <div
      className={`${id === "location" && "hidden md:block"} ${className && className} border:Gray relative w-full md:border-r`}
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
        defaultValue={defaultVal}
        onChange={changeHandler}
        className="w-full bg-transparent px-6 py-7 text-base md:pl-16"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
