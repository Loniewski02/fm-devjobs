"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

import { fetchAllJobs } from "@/utils/request";

import JobItem from "./JobItem";
import LoadingSpinner from "@/components/UI/LoadingSpinner";
import Wrapper from "@/components/layout/Wrapper";

const JobsContainer = () => {
  const [isFullArray, setIsFullArray] = useState<boolean>(false);
  const [data, setData] = useState<JobDetailType[] | []>([]);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAllJobs();
        setData(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (data.length === 0) fetchData();
  }, []);

  let content;

  if (loading) {
    content = <LoadingSpinner loading={loading} />;
  } else if (data.length === 0) {
    content = <p>No jobs found.</p>;
  } else if (!loading && data.length > 0) {
    const filteredData = data.filter((item) => {
      const name = searchParams.get("name") || null;
      const location = searchParams.get("location") || null;
      const contract = searchParams.get("contract") || null;

      let matches = true;

      if (contract) {
        matches =
          matches &&
          item.contract.toLowerCase() === contract.split("-").join(" ");
      }

      if (name) {
        matches =
          (matches &&
            item.company.toLowerCase().includes(name.toLowerCase())) ||
          item.position.toLowerCase().includes(name.toLowerCase());
      }

      if (location) {
        matches =
          matches &&
          item.location.toLowerCase().includes(location.toLowerCase());
      }

      return matches;
    });

    const jobArray = isFullArray ? filteredData : filteredData.slice(0, 12);

    content = (
      <>
        <div className="flex flex-wrap justify-center gap-x-3 gap-y-12 md:gap-y-14 lg:gap-x-[30px] lg:gap-y-16 xl:justify-start">
          {jobArray.map((item) => (
            <JobItem key={item._id} data={item} />
          ))}
        </div>
        {!isFullArray && filteredData.length > 12 && (
          <button
            onClick={() => setIsFullArray(true)}
            className="mt-8 w-max self-center rounded-md bg-Violet px-8 py-4 font-bold text-White md:mt-14"
          >
            Load More
          </button>
        )}
      </>
    );
  }

  return (
    <section className="sectionX pb-16 pt-14 md:pt-[70px] lg:py-[105px]">
      <Wrapper className="relative flex flex-col">
        <h2 className="sr-only">Find your dream job</h2>
        {content}
      </Wrapper>
    </section>
  );
};

export default JobsContainer;
