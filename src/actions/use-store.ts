import useSWR from 'swr';

import fetcher from '@/lib/fetcher';

const useStore = async (userId: string) => {
  const url = userId ? `/api/stores?userId=${userId}` : null;
  const { data, error, isLoading, mutate } = useSWR(url, fetcher);

  return {
    data,
    error,
    isLoading,
    mutate
  }
};

export default useStore;
