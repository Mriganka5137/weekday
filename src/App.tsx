import { useInView } from "react-intersection-observer";

import { useEffect, useState } from "react";
import { useInfiniteJobs } from "./hooks/useInfiniteJobs";
import { Job } from "./types";
import JobCard from "./components/JobCard";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

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
      <div className=" p-5 grid grid-cols-1 md:grid-cols-2 md:gap-x-8 xl:grid-cols-3 xl:gap-x-20 max-w-screen-2xl mx-auto  gap-y-16 justify-items-center max-sm:p-3 max-sm:gap-y-8 pb-10">
        {jobs?.map((job: Job) => (
          <JobCard job={job} key={job.jdUid} />
        ))}
        {!hasNextPage && !isFetchingNextPage && (
          <div>All jobs have been loaded.</div>
        )}
      </div>

      <div ref={ref} className="flex justify-center mb-20">
        {isFetchingNextPage && (
          <AiOutlineLoading3Quarters
            className={`${isFetchingNextPage} && animate-spin text-blue-800 size-8`}
          />
        )}
      </div>
    </>
  );
}
export default App;
