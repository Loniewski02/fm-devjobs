"use client";
import { useState, useEffect } from "react";
import { fetchSingleJob } from "@/utils/request";
import { useParams } from "next/navigation";

import LoadingSpinner from "@/components/UI/LoadingSpinner";
import DetailHeading from "@/components/job-details/DetailHeading";
import DetailContent from "@/components/job-details/DetailContent";
import DetailFooter from "@/components/job-details/DetailFooter";

const Page = () => {
  const { id }: { id: string } = useParams();
  const [data, setData] = useState<JobDetailType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchSingleJob(id);
        setData(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (!data) fetchData();
  }, [data, id]);

  let content;

  if (loading) {
    content = <LoadingSpinner loading={loading} />;
  } else if (!data) {
    content = (
      <h2 className="mt-12 text-center text-3xl font-bold text-VeryDarkBlue dark:text-White">
        No data found.
      </h2>
    );
  } else if (!loading && data) {
    content = (
      <>
        <DetailHeading
          company={data.company}
          url={data.website}
          bgColor={data.logoBackground}
          image={data.logo}
        />
        <DetailContent data={data} />
        <DetailFooter
          position={data.position}
          company={data.company}
          id={data._id}
        />
      </>
    );
  }

  return <main>{content}</main>;
};

export default Page;
