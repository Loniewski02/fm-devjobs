"use client";
import { useContext } from "react";

import { FiltersContext } from "@/app/_providers/FilterContext";

import Location from "@/public/assets/desktop/icon-location.svg";
import Selected from "@/public/assets/desktop/icon-check.svg";
import ApplyFiltersButton from "./ApplyFiltersButton";

const MobileFilters = () => {
  const {
    isFullTime,
    setIsFullTime,
    isMobileFiltersShown,
    setIsMobileFiltersShown,
  } = useContext(FiltersContext);

  const contractHandler = () => {
    setIsFullTime((prevState) => !prevState);
  };

  return (
    <section
      className={`${isMobileFiltersShown ? "block" : "hidden"} sectionX fixed bottom-0 left-0 right-0 top-0 z-50 flex items-center justify-center md:hidden`}
    >
      <div
        onClick={() => {
          setIsMobileFiltersShown(false);
        }}
        className="absolute z-20 h-full w-full bg-[rgba(18,23,23,.7)] backdrop-blur-md"
      />
      <div className="top-1/2 z-30 w-full overflow-hidden rounded-md bg-White dark:bg-VeryDarkBlue">
        <div className="relative border-b border-Gray">
          <label
            htmlFor="location"
            className="absolute left-6 top-1/2 -translate-y-1/2"
            aria-label="location"
          >
            <Location />
          </label>
          <input
            id="location"
            type="text"
            placeholder="Filter by location..."
            className="w-full bg-transparent py-6 pl-14 pr-6"
          />
        </div>
        <div className="p-6">
          <button
            onClick={contractHandler}
            className="mb-6 flex h-12 w-max items-center gap-4"
          >
            <span
              className={`${isFullTime ? "bg-Violet opacity-100" : "bg-VeryDarkBlue opacity-10 dark:bg-[#979797]"} grid h-6 w-6 place-content-center rounded-[3px] transition`}
            >
              <Selected className={`${isFullTime ? "block" : "hidden"}`} />
            </span>
            <span className="font-bold text-VeryDarkBlue dark:text-White">
              Full Time Only
            </span>
          </button>
          <ApplyFiltersButton className="w-full">Search</ApplyFiltersButton>
        </div>
      </div>
    </section>
  );
};

export default MobileFilters;
