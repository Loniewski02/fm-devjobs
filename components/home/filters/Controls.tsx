"use client";
import { useState } from "react";

import Filter from "@/public/assets/mobile/icon-filter.svg";
import Search from "@/public/assets/desktop/icon-search.svg";
import Selected from "@/public/assets/desktop/icon-check.svg";

const Controls = () => {
  const [isFullTime, setIsFullTime] = useState<boolean>(false);

  const fullTimeFilterHandler = () => {
    setIsFullTime((prevState) => !prevState);
  };

  return (
    <div className="flex items-center gap-3 pr-4 md:gap-7 md:pl-5">
      <button
        aria-label="filter"
        className="grid h-12 w-12 place-items-center rounded-sm md:hidden"
      >
        <Filter />
      </button>
      <button
        onClick={fullTimeFilterHandler}
        className="hidden h-12 w-max items-center gap-4 md:flex"
      >
        <span
          className={`${isFullTime ? "bg-Violet opacity-100" : "bg-VeryDarkBlue opacity-10"} grid h-6 w-6 place-content-center rounded-[3px] transition`}
        >
          <Selected className={`${isFullTime ? "block" : "hidden"}`} />
        </span>
        <span>Full Time</span>
      </button>
      <button
        aria-label="search"
        className="grid h-12 w-12 place-items-center rounded-md bg-Violet font-bold text-White md:w-max"
      >
        <Search className="md:hidden" />
        <span className="hidden px-[14px] md:block">Search</span>
      </button>
    </div>
  );
};

export default Controls;
