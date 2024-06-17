import { HashLoader } from "react-spinners";

const LoadingSpinner = ({
  loading,
  color,
  size,
  noMargin,
}: {
  loading: boolean;
  color?: string;
  size?: number;
  noMargin?: boolean;
}) => {
  return (
    <HashLoader
      color={!color ? "#5964E0" : color}
      loading={loading}
      cssOverride={
        noMargin
          ? {
              display: "block",
              margin: "0 auto",
            }
          : {
              display: "block",
              margin: "50px auto",
            }
      }
      size={!size ? 100 : size}
      aria-label="Loading Spinner"
    />
  );
};

export default LoadingSpinner;
