import Filters from "@/components/home/filters/Filters";
import JobsContainer from "@/components/home/jobs/JobsContainer";
import DataProvider from "./_providers/FilterContext";

export default function Page() {
  return (
    <main>
      <DataProvider>
        <Filters />
        <JobsContainer />
      </DataProvider>
    </main>
  );
}
