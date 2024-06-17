"use client";
import { useContext } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

import { FiltersContext } from "@/app/_providers/FilterContext";
import Button from "@/components/UI/Button";

const ApplyFiltersButton = ({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) => {
  const { isFullTime, name, location, setIsMobileFiltersShown } =
    useContext(FiltersContext);
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const filterHandler = () => {
    setIsMobileFiltersShown(false);

    const params = new URLSearchParams(searchParams);
    if (name || name != "") {
      params.set("name", name);
    } else {
      params.delete("name");
    }

    if (location || location != "") {
      params.set("location", location);
    } else {
      params.delete("location");
    }

    if (isFullTime) {
      params.set("contract", "full-time");
    } else {
      params.delete("contract");
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Button label="search" onClick={filterHandler} className={className}>
      {children}
    </Button>
  );
};

export default ApplyFiltersButton;
