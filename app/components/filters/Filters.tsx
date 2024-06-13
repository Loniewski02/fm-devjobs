import Wrapper from "../layout/Wrapper";
import Search from "@/public/assets/desktop/icon-search.svg";
import Location from "@/public/assets/desktop/icon-location.svg";
import Controls from "./Controls";

const INPUTS = [
  {
    id: "filter-by-title",
    placeholder: "Filter by title...",
    icon: <Search className="hidden md:block" />,
  },
  {
    id: "filter-by-location",
    placeholder: "Filter by location...",
    icon: <Location className="hidden md:block" />,
  },
];

const Filters = () => {
  return (
    <section className="sectionX -mt-10">
      <Wrapper className="relative flex items-center overflow-hidden rounded-md bg-White">
        {INPUTS.map((item, index) => (
          <div
            key={item.id}
            className={`${index === 1 && "hidden md:block"} border:Gray relative w-full md:border-r`}
          >
            <label
              htmlFor={item.id}
              className="invisible absolute left-6 top-1/2 -z-10 -translate-y-1/2 text-Violet md:visible md:z-0"
            >
              {item.icon}
            </label>
            <input
              type="text"
              id={item.id}
              className="w-full px-6 py-7 text-base md:pl-16"
              placeholder={item.placeholder}
            />
          </div>
        ))}
        <Controls />
      </Wrapper>
    </section>
  );
};

export default Filters;
