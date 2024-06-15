import Link from "next/link";
import Wrapper from "../layout/Wrapper";
import Article from "./Article";
import CustomLink from "../UI/CustomLink";

const DetailContent = ({ data }: { data: JobDetailType }) => {
  return (
    <section className="sectionX pb-16 pt-6 md:py-12">
      <Wrapper className="rounded-md bg-White px-6 py-10 md:max-w-[730px] md:px-12">
        <article className="items-center justify-between md:flex">
          <div className="flex flex-col gap-2">
            <p className="flex items-center gap-3 text-DarkGray">
              {data.postedAt}
              <span className="block h-1 w-1 rounded-full bg-DarkGray" />
              {data.contract}
            </p>
            <h2 className="text-xl font-bold text-VeryDarkBlue md:text-[28px]">
              {data.position}
            </h2>
            <p className="font-bold text-Violet">{data.location}</p>
          </div>
          <CustomLink url={`/${data._id}/apply`} className="mt-14 md:mt-0 ">
            Apply Now
          </CustomLink>
        </article>
        <article className="py-8 leading-[26px] text-DarkGray md:pb-5 md:pt-11">
          {data.description}
        </article>
        <Article data={data.requirements} title="Requirements" />
        <Article data={data.role} title="What You Will Do" decimal />
      </Wrapper>
    </section>
  );
};

export default DetailContent;
