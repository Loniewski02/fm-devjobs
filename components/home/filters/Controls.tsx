"use client";
import { useContext } from "react";

import { FiltersContext } from "@/app/_providers/FilterContext";

import Filter from "@/public/assets/mobile/icon-filter.svg";
import Search from "@/public/assets/desktop/icon-search.svg";
import Selected from "@/public/assets/desktop/icon-check.svg";
import ApplyFiltersButton from "./ApplyFiltersButton";

const Controls = () => {
  const { isFullTime, setIsFullTime, setIsMobileFiltersShown } =
    useContext(FiltersContext);

  const contractHandker = () => {
    setIsFullTime((prevState) => !prevState);
  };

  const mobileFiltersHandler = () => {
    setIsMobileFiltersShown((prevState) => !prevState);
  };

  return (
    <div className="flex items-center gap-3 pr-4 md:gap-7 md:pl-5">
      <button
        onClick={mobileFiltersHandler}
        aria-label="show filters"
        className="grid h-12 w-12 place-items-center rounded-sm md:hidden"
      >
        <Filter />
      </button>
      <button
        onClick={contractHandker}
        className="hidden h-12 w-max items-center gap-4 md:flex"
      >
        <span
          className={`${isFullTime ? "bg-Violet opacity-100" : "bg-VeryDarkBlue opacity-10 dark:bg-[#979797]"} grid h-6 w-6 place-content-center rounded-[3px] text-White transition`}
        >
          <Selected className={`${isFullTime ? "block" : "hidden"}`} />
        </span>
        <span className="text-VeryDarkBlue dark:text-White">Full Time</span>
      </button>
      <ApplyFiltersButton
        aria-label="search"
        className="grid place-items-center text-White md:block md:h-auto md:w-max"
      >
        <Search className="block md:hidden" />
        <span className="hidden md:block">Search</span>
      </ApplyFiltersButton>
    </div>
  );
};

export default Controls;
