import Link from "next/link";

const CustomLink = ({
  children,
  url,
  className,
}: {
  children: React.ReactNode;
  url: string;
  className?: string;
}) => {
  return (
    <Link
      href={url}
      className={`${className && className} block w-full rounded-md bg-Violet px-5  py-4 text-center font-bold text-White md:mt-0 md:w-max md:min-w-[140px]`}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
