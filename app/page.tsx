import Filters from "./components/filters/Filters";
import JobsContainer from "./components/jobs/JobsContainer";

export default function Page() {
  return (
    <main>
      <Filters />
      <JobsContainer />
    </main>
  );
}
