import CustomLink from "../UI/CustomLink";
import Wrapper from "../layout/Wrapper";

const DetailFooter = ({
  id,
  company,
  position,
}: {
  id: number;
  position: string;
  company: string;
}) => {
  return (
    <footer className="bg-White p-6 md:px-10">
      <Wrapper className="md:flex md:max-w-[730px] md:items-center md:justify-between">
        <div className="hidden md:block">
          <h2 className="mb-2 text-xl font-bold text-VeryDarkBlue">
            {position}
          </h2>
          <p className="text-DarkGray">{company}</p>
        </div>
        <CustomLink url={`/${id}/apply`}>Apply Now</CustomLink>
      </Wrapper>
    </footer>
  );
};

export default DetailFooter;
