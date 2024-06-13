import Link from "next/link";

const JobItem: React.FC<{ data: JobItemType }> = ({ data }) => {
  const url = `/${data.id}/${data.company.toLowerCase()}-${data.position.toLowerCase().split(" ").join("-")}`;
  return (
    <Link
      href={url}
      className="relative block min-h-[230px] w-full max-w-[330px] rounded-md bg-White p-8 py-12 lg:max-w-[350px]"
    >
      <div
        style={{ backgroundColor: data.logoBackground }}
        className="absolute left-8 top-0 grid h-[50px] w-[50px] -translate-y-1/2 place-content-center rounded-[15px]"
      >
        <img src={data.logo} alt="" />
      </div>
      <div className="mb-10 flex flex-col gap-3">
        <p className="flex items-center gap-3 text-DarkGray">
          {data.postedAt}
          <span className="block h-1 w-1 rounded-full bg-DarkGray" />
          {data.contract}
        </p>
        <h3 className="text-xl font-bold text-VeryDarkBlue">{data.position}</h3>
        <p className="text-DarkGray">{data.company}</p>
      </div>
      <p className="text-sm font-bold text-Violet">{data.location}</p>
    </Link>
  );
};

export default JobItem;
