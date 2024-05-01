import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchJobs } from "../apis/fetch-jobs";

export const useInfiniteJobs = () =>
  useInfiniteQuery({
    queryKey: ["jobs"],
    queryFn: fetchJobs,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      return lastPage.hasNextPage ? lastPage.nextPage : undefined;
    },
  });
