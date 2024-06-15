import Wrapper from "@/components/layout/Wrapper";
import Controls from "./Controls";
import Input from "./Input";

const Filters = () => {
  return (
    <section className="sectionX -mt-10">
      <Wrapper className="relative flex items-center rounded-md bg-White dark:bg-VeryDarkBlue">
        <Input id="filter-by-name" placeholder="Filter by name..." />
        <Input id="filter-by-location" placeholder="Filter by location..." />
        <Controls />
      </Wrapper>
    </section>
  );
};

export default Filters;
