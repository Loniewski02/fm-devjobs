const Button = ({
  children,
  className,
  onClick,
  label,
  disabled,
  type,
}: {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  type?: "submit" | "button" | "reset";
  onClick?: () => void;
  label: string;
}) => {
  return (
    <button
      aria-disabled={disabled}
      disabled={disabled}
      type={!type ? "button" : type}
      aria-label={label}
      onClick={onClick}
      className={`${className && className} rounded-md bg-Violet p-4 font-bold text-White transition hover:bg-LightViolet active:scale-95`}
    >
      {children}
    </button>
  );
};

export default Button;
