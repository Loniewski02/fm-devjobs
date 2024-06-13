// const url = `/${data.id}/${data.company.toLowerCase()}-${data.position.toLowerCase().split(" ").join("-")}`;
"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import useSWR from "swr";

const fetcher = async (url: string) => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Something went wrong!");
  }

  return await res.json();
};

const Page = () => {
  const pathname = usePathname();
  const router = useRouter();

  const itemID = pathname.split("/")[1];
  const { data, error, isLoading } = useSWR<JobDetailType>(
    `https://devjo-7f415-default-rtdb.firebaseio.com/detailData/${itemID}.json`,
    fetcher,
  );

  useEffect(() => {
    if (data) {
      const url = `/${itemID}/${data.company.toLowerCase().split(" ").join("-")}-${data.position.toLowerCase().split(" ").join("-")}`;
      router.replace(url);
    }
  }, [data]);

  return (
    <h1>
      {itemID} {data?.company} {data?.position}
    </h1>
  );
};

export default Page;
