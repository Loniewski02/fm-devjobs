import Wrapper from "../layout/Wrapper";

const ApplyHeading = ({
  company,
  position,
  bgColor,
  image,
}: {
  position: string;
  company: string;
  bgColor: string;
  image: string;
}) => {
  return (
    <section className="sectionX -mt-[15px] md:-mt-10">
      <Wrapper className="relative rounded-md bg-White p-8 pt-12 dark:bg-VeryDarkBlue md:flex md:max-w-[730px] md:rounded-tl-none md:p-0">
        <div
          className="absolute left-1/2 top-0 grid h-[50px] w-[50px] -translate-x-1/2 -translate-y-1/2 place-content-center rounded-[15px] md:static md:h-[140px] md:min-h-[140px] md:w-[140px] md:min-w-[140px] md:translate-x-0 md:translate-y-0 md:rounded-md md:rounded-r-none md:rounded-tl-none"
          style={{ backgroundColor: bgColor }}
        >
          <img
            src={`.${image}`}
            alt=""
            className="z-10 block h-auto w-auto md:scale-[200%]"
          />
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-2 md:items-start md:px-10">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <h2 className="text-xl font-bold text-VeryDarkBlue dark:text-White md:text-2xl">
              {position}
            </h2>
            <p className="text-DarkGray">{company}</p>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default ApplyHeading;
