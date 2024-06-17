"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

import { fetchAllJobs } from "@/utils/request";

import JobItem from "./JobItem";
import LoadingSpinner from "@/components/UI/LoadingSpinner";
import Wrapper from "@/components/layout/Wrapper";
import Button from "@/components/UI/Button";

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
    content = (
      <h2 className="mt-12 text-center text-3xl font-bold text-VeryDarkBlue dark:text-White">
        No data found.
      </h2>
    );
  } else if (!loading && data.length > 0) {
    const filteredData = data.filter((item) => {
      const name = searchParams.get("name")?.toLowerCase() || null;
      const location = searchParams.get("location")?.toLowerCase() || null;
      const contract =
        searchParams.get("contract")?.toLowerCase().split("-").join(" ") ||
        null;

      let matches = true;

      if (contract) {
        matches = matches && item.contract.toLowerCase() === contract;
      }

      if (name) {
        matches =
          (matches && item.company.toLowerCase().includes(name)) ||
          item.position.toLowerCase().includes(name) ||
          item.requirements.content.toLowerCase().includes(name) ||
          item.role.content.toLowerCase().includes(name);
      }

      if (location) {
        matches = matches && item.location.toLowerCase().includes(location);
      }

      return matches;
    });

    const jobArray = isFullArray ? filteredData : filteredData.slice(0, 12);

    content = (
      <>
        {jobArray.length === 0 && (
          <p className="text-2xl text-VeryDarkBlue dark:text-White">
            No jobs found.
          </p>
        )}
        <div className="flex flex-wrap justify-center gap-x-3 gap-y-12 md:gap-y-14 lg:gap-x-[30px] lg:gap-y-16 xl:justify-start">
          {jobArray.map((item) => (
            <JobItem key={item._id} data={item} />
          ))}
        </div>
        {!isFullArray && filteredData.length > 12 && (
          <Button
            label="load more jobs"
            onClick={() => setIsFullArray(true)}
            className="mt-8 self-center md:mt-14"
          >
            Load More
          </Button>
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
