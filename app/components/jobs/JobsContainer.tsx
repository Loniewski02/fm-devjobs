"use client";
import { useState } from "react";
import useSWR from "swr";

import Wrapper from "../layout/Wrapper";
import JobItem from "./JobItem";

const fetcher = async (url: string) => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Something went wrong!");
  }

  return await res.json();
};

const JobsContainer = () => {
  const [isFullArray, setIsFullArray] = useState<boolean>(false);
  const { data, error, isLoading } = useSWR<JobItemType[]>(
    "https://devjo-7f415-default-rtdb.firebaseio.com/generalData.json",
    fetcher,
  );

  let content;

  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (error) {
    content = <p>{error.message}</p>;
  } else if (!data || data.length === 0) {
    content = <p>No jobs found.</p>;
  } else {
    const jobArray = isFullArray ? data : data.slice(0, 12);

    content = (
      <div className="flex flex-wrap justify-center gap-x-3 gap-y-12 md:gap-y-14 lg:gap-x-[30px] lg:gap-y-16">
        {jobArray.map((item) => (
          <JobItem key={item.id} data={item} />
        ))}
      </div>
    );
  }

  return (
    <section className="sectionX pb-16 pt-14 md:pt-[70px] lg:py-[105px]">
      <Wrapper className="relative flex flex-col">
        <h2 className="invisible absolute h-0 w-0">Find your dream job</h2>
        {content}
        {!isFullArray && data && (
          <button
            onClick={() => setIsFullArray(true)}
            className="mt-8 w-max self-center rounded-md bg-Violet px-8 py-4 font-bold text-White md:mt-14"
          >
            Load More
          </button>
        )}
      </Wrapper>
    </section>
  );
};

export default JobsContainer;
