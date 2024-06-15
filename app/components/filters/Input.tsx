"use client";
import Search from "@/public/assets/desktop/icon-search.svg";
import Location from "@/public/assets/desktop/icon-location.svg";

type Props = {
  id: string;
  placeholder: string;
};

const Input: React.FC<Props> = ({ id, placeholder }) => {
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
   
  };

  return (
    <div className={`border:Gray relative w-full md:border-r`}>
      <label
        htmlFor={id}
        className="invisible absolute left-6 top-1/2 -z-10 -translate-y-1/2 text-Violet md:visible md:z-0"
      >
        {id.includes("name") && <Search className="hidden md:block" />}
        {id.includes("location") && <Location className="hidden md:block" />}
      </label>
      <input
        type="text"
        id={id}
        onChange={changeHandler}
        className="w-full px-6 py-7 text-base md:pl-16"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
