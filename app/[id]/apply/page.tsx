"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import { fetchSingleJob } from "@/utils/request";

import LoadingSpinner from "@/components/UI/LoadingSpinner";
import ApplyHeading from "@/components/apply/ApplyHeading";
import ApplyForm from "@/components/apply/ApplyForm";

const ApplyPage = () => {
  const { id }: { id: string } = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<JobDetailType | null>(null);

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
        <ApplyHeading
          bgColor={data.logoBackground}
          image={data.logo}
          company={data.company}
          position={data.position}
        />
        <ApplyForm />
      </>
    );
  }

  return <main>{content}</main>;
};

export default ApplyPage;
