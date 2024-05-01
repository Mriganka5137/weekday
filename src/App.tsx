import { useInView } from "react-intersection-observer";
import { apiClient } from "./services/api-client";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect } from "react";

const fetchJobs = async ({ pageParam }: { pageParam: number }) => {
  const limit = 10;
  const response = await apiClient.post("", {
    limit: 10,
    offset: pageParam,
  });
  const data = response.data;
  const nextPage = pageParam + limit;
  const hasNextPage = nextPage < 35291;
  return {
    data: data,
    currentPage: pageParam,
    nextPage: nextPage,
    hasNextPage: hasNextPage,
  };
};

function App() {
  const {
    data,
    error,
    status,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ["jobs"],
    queryFn: fetchJobs,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      return lastPage.hasNextPage ? lastPage.nextPage : undefined;
    },
  });

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  return status === "pending" ? (
    <div>Loading...</div>
  ) : status === "error" ? (
    <div>{error.message}</div>
  ) : (
    <div className="space-y-5 p-2">
      {data.pages.map((page) => (
        <div className="  flex flex-col gap-5 ">
          {page.data.jdList.map((job) => (
            <div
              key={job.jdUid}
              className="bg-gray-200 space-y-3 rounded-lg p-5"
            >
              <h1>{job.jobRole}</h1>
              <p>{job.jdUid}</p>
              <p>{job.jobDetailsFromCompany}</p>
            </div>
          ))}
        </div>
      ))}
      {!hasNextPage && !isFetchingNextPage && (
        <div>All jobs have been loaded.</div>
      )}
      <div ref={ref}>{isFetchingNextPage && "Loading..."}</div>
    </div>
  );
}
export default App;
