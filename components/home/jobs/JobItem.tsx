import Link from "next/link";

type Props = {
  data: {
    _id: number;
    company: string;
    contract: string;
    location: string;
    logo: string;
    logoBackground: string;
    position: string;
    postedAt: string;
  };
};

const JobItem: React.FC<Props> = ({ data }) => {
  return (
    <Link
      href={`${data._id.toString()}`}
      className="relative block min-h-[230px] w-full max-w-[330px] rounded-md bg-White px-8 py-12 transition hover:bg-[#7db0ee50]  active:scale-95 dark:bg-VeryDarkBlue dark:hover:bg-[#7db0ee50] md:py-8 lg:max-w-[350px]"
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
        <h3 className="text-xl font-bold text-VeryDarkBlue dark:text-White">
          {data.position}
        </h3>
        <p className="text-DarkGray">{data.company}</p>
      </div>
      <p className="text-sm font-bold text-Violet">{data.location}</p>
    </Link>
  );
};

export default JobItem;
