"use client";
import { useState, useEffect } from "react";

import { fetchSingleJob } from "@/utils/request";
import { useParams } from "next/navigation";
import LoadingSpinner from "../components/UI/LoadingSpinner";

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
    content = <p>No data found.</p>;
  } else if (!loading && data) {
    content = (
      <>
        <h1>{data.company}</h1>
      </>
    );
  }

  return <main>{content}</main>;
};

export default Page;
