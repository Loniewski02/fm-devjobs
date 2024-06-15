"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchSingleJob } from "@/utils/request";
import LoadingSpinner from "@/components/UI/LoadingSpinner";

const ApplyPage = () => {
  const { id }: { id: string } = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

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
    content = <p>{id}</p>;
  }

  return <main>{content}</main>;
};

export default ApplyPage;
