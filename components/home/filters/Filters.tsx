import Wrapper from "@/components/layout/Wrapper";
import Controls from "./Controls";
import Input from "./Input";
import MobileFilters from "./MobileFilters";

const Filters = () => {
  return (
    <>
      <section className="sectionX -mt-10">
        <Wrapper className="relative flex items-center rounded-md bg-White dark:bg-VeryDarkBlue">
          <Input id="name" placeholder="Filter by name..." className="lg:placeholder" />
          <Input
            id="location"
            placeholder="Filter by location..."
            className="max-w-[300px]"
          />
          <Controls />
          <MobileFilters />
        </Wrapper>
      </section>
    </>
  );
};

export default Filters;
