import { useInView } from "react-intersection-observer";

import { useEffect, useState } from "react";
import { useInfiniteJobs } from "./hooks/useInfiniteJobs";
import { Job } from "./types";
import JobCard from "./components/JobCard";

function App() {
  const [jobs, setJobs] = useState<Job[]>();
  const { ref, inView } = useInView();
  const {
    fetchNextPage,
    data,
    isFetchingNextPage,
    error,
    hasNextPage,
    status,
  } = useInfiniteJobs();
  console.log(data);

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  useEffect(() => {
    const list = data?.pages.map((page) => page.data.jdList).flat();
    setJobs(list);
  }, [data]);

  return status === "pending" ? (
    <div>Loading...</div>
  ) : status === "error" ? (
    <div>{error.message}</div>
  ) : (
    <>
      <div className=" p-6 gap-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-screen-2xl mx-auto ">
        {jobs?.map((job: Job) => (
          <JobCard job={job} />
        ))}
        {!hasNextPage && !isFetchingNextPage && (
          <div>All jobs have been loaded.</div>
        )}
      </div>
      <div ref={ref} className="text-center">
        {isFetchingNextPage && "Loading..."}
      </div>
    </>
  );
}
export default App;
