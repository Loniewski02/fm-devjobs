"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import { fetchSingleJob } from "@/utils/request";

import LoadingSpinner from "@/components/UI/LoadingSpinner";
import ApplyHeading from "@/components/apply/ApplyHeading";
import ApplyForm from "@/components/apply/ApplyForm";
import Check from "@/public/assets/desktop/icon-check.svg";

const ApplyPage = () => {
  const { id }: { id: string } = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<JobDetailType | null>(null);
  const [isMessageShown, setIsMessageShown] = useState(false);
  const [initial, setInitial] = useState(true);

  useEffect(() => {
    const identifier = setTimeout(() => {
      setIsMessageShown(false);
    }, 10000);

    return () => clearTimeout(identifier);
  }, [isMessageShown]);

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

  const messageHandler = () => {
    setIsMessageShown(true);
    setInitial(false);
  };

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
        <ApplyForm
          onSuccess={messageHandler}
          id={data._id}
          position={data.position}
          company={data.company}
        />

        <div
          className={`${isMessageShown ? "animate-show" : "animate-hide"} ${initial ? "hidden" : "block"} fixed bottom-8 right-[-150%] z-50 flex max-w-[330px] items-center rounded-md bg-[#89f0e2] px-6 py-4 text-VeryDarkBlue`}
        >
          <Check className="w-14" />
          <p className="italic">
            The application for the{" "}
            <span className="font-bold">{data.position}</span> position in{" "}
            <span className="font-bold">{data.company}</span> has been sent.
          </p>
        </div>
      </>
    );
  }

  return <main className="relative min-h-[100dvh]">{content}</main>;
};

export default ApplyPage;
