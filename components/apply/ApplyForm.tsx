import Button from "../UI/Button";
import Wrapper from "../layout/Wrapper";

const INPUTS = [
  {
    id: "name",
    label: "Name",
    name: "name",
    placeholder: "Your Name...",
    type: "text",
  },
  {
    id: "last-name",
    label: "Last Name",
    name: "last-name",
    placeholder: "Your Last Name...",
    type: "text",
  },
  {
    id: "email",
    label: "Email",
    name: "email",
    placeholder: "Your Email address...",
    type: "email",
  },
  {
    id: "phone",
    label: "Phone",
    name: "phone",
    placeholder: "Your phone number...",
    type: "tel",
  },
  {
    id: "resume",
    label: "Resume",
    name: "resume",
    placeholder: "",
    type: "file",
  },
];

const ApplyForm = () => {
  return (
    <section className="sectionX pb-16 pt-6 md:py-12">
      <Wrapper className="rounded-md bg-White px-6 py-10 dark:bg-VeryDarkBlue md:max-w-[730px] md:px-12">
        <form action="" className="flex flex-col gap-4 md:grid md:grid-cols-2">
          {INPUTS.map((input) => (
            <div key={input.id} className="flex flex-col gap-2">
              <label
                htmlFor={input.id}
                className="text-sm font-bold text-DarkGray"
              >
                {input.label}
              </label>
              <input
                type={input.type}
                name={input.name}
                id={input.id}
                className={`${input.id === "resume" && "cursor-pointer text-sm"} block w-full rounded-lg border border-gray-300 px-4 py-2 text-VeryDarkBlue dark:border-gray-600 dark:bg-Midnight dark:text-LightGray`}
                placeholder={input.placeholder}
              />
            </div>
          ))}
          <div className="col-span-2 row-start-5 flex flex-col gap-2">
            <label
              htmlFor="cover-letter"
              className="text-sm font-bold text-DarkGray"
            >
              Cover Letter
            </label>
            <textarea
              id="cover-letter"
              placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              className="min-h-[100px] bg-LightGray px-4 py-2 dark:bg-Midnight"
              name="cover-letter"
            />
          </div>
          <Button
            onClick={() => {}}
            type="submit"
            label="submit"
            className="col-start-2 row-start-6 mt-4 w-[150px] place-self-end self-end"
          >
            Submit
          </Button>
        </form>
      </Wrapper>
    </section>
  );
};

export default ApplyForm;
