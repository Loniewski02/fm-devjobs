import { HashLoader } from "react-spinners";

const Loading = ({ loading }: { loading: boolean }) => {
  return (
    <HashLoader
      color="#5964E0"
      loading={loading}
      cssOverride={{
        display: "block",
        margin: "50px auto",
      }}
      size={150}
      aria-label="Loading Spinner"
    />
  );
};

export default Loading;
