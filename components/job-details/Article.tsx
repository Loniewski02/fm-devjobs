const Article = ({
  data,
  title,
  decimal,
}: {
  data: { content: string; items: string[] };
  title: string;
  decimal?: boolean;
}) => {
  return (
    <article className="flex flex-col gap-6 py-8 last:pb-0 md:py-5">
      <h3 className="text-xl font-bold text-VeryDarkBlue md:mb-2 dark:text-White">
        {title}
      </h3>
      <p className="leading-[26px] text-DarkGray">{data.content}</p>
      <ul className={`space-y-2`}>
        {data.items.map((item, index) => (
          <li key={index} className="flex gap-6 leading-[26px] text-DarkGray">
            <span
              className={`${decimal ? "hidden" : "block"} mt-[10px] h-1 w-1 min-w-1 rounded-full bg-Violet`}
            />
            <span
              className={`${decimal ? "block" : "hidden"} font-bold leading-[26px] text-Violet`}
            >
              {index + 1}
            </span>
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Article;
