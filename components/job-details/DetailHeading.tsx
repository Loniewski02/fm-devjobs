import Wrapper from "../layout/Wrapper";

const DetailHeading = ({
  company,
  url,
  image,
  bgColor,
}: {
  company: string;
  image: string;
  url: string;
  bgColor: string;
}) => {
  return (
    <section className="sectionX -mt-[15px] md:-mt-10">
      <Wrapper className="relative rounded-md bg-White p-8 pt-12 md:flex md:max-w-[730px] md:rounded-tl-none md:p-0 dark:bg-VeryDarkBlue">
        <div
          className="absolute left-1/2 top-0 grid h-[50px] w-[50px] -translate-x-1/2 -translate-y-1/2 place-content-center rounded-[15px] md:static md:h-[140px] md:min-h-[140px] md:w-[140px] md:min-w-[140px] md:translate-x-0 md:translate-y-0 md:rounded-md md:rounded-r-none md:rounded-tl-none"
          style={{ backgroundColor: bgColor }}
        >
          <img src={image} alt="" className="h-auto w-auto md:scale-[200%]" />
        </div>
        <div className="flex w-full flex-col items-center gap-6 md:flex-row md:justify-between md:px-10">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <h2 className="text-xl font-bold text-VeryDarkBlue md:text-2xl dark:text-White">
              {company}
            </h2>
            <p className="text-DarkGray">
              {company.toLowerCase().split(" ").join("-")}.com
            </p>
          </div>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-max rounded-md bg-[#5964e016] px-5 py-4 font-bold text-Violet"
          >
            Company Site
          </a>
        </div>
      </Wrapper>
    </section>
  );
};

export default DetailHeading;
