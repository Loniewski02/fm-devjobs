const Button = ({
  children,
  className,
  onClick,
  label,
  type,
}: {
  children: React.ReactNode;
  className?: string;
  type?: "submit" | "button" | "reset";
  onClick: () => void;
  label: string;
}) => {
  return (
    <button
      type={!type ? "button" : type}
      aria-label={label}
      onClick={onClick}
      className={`${className && className} rounded-md bg-Violet p-4 font-bold text-White`}
    >
      {children}
    </button>
  );
};

export default Button;
