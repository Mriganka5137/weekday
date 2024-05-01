import { apiClient } from "../services/api-client";

export const fetchJobs = async ({ pageParam }: { pageParam: number }) => {
  const limit = 10;
  const response = await apiClient.post("", {
    limit: 10,
    offset: pageParam,
  });
  const data = response.data;
  console.log(data);
  const nextPage = pageParam + limit;
  const hasNextPage = nextPage < 35291;
  return {
    data: data,
    currentPage: pageParam,
    nextPage: nextPage,
    hasNextPage: hasNextPage,
  };
};
