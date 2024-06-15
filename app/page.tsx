import Filters from "@/components/home/filters/Filters";
import JobsContainer from "@/components/home/jobs/JobsContainer";

export default function Page() {
  return (
    <main>
      <Filters />
      <JobsContainer />
    </main>
  );
}
