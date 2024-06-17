"use client";
import { useContext } from "react";

import Wrapper from "@/components/layout/Wrapper";
import Controls from "./Controls";
import Input from "./Input";
import MobileFilters from "./MobileFilters";
import { FiltersContext } from "@/app/_providers/FilterContext";

const Filters = () => {
  const { isMobileFiltersShown } = useContext(FiltersContext);
  return (
    <>
      <section className="sectionX -mt-10">
        <Wrapper className="relative flex items-center rounded-md bg-White dark:bg-VeryDarkBlue">
          <Input id="name" placeholder="Filter by name..." />
          <Input id="location" placeholder="Filter by location..." />
          <Controls />
          <MobileFilters />
        </Wrapper>
      </section>
    </>
  );
};

export default Filters;
