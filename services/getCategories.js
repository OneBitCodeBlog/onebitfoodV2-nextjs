import useSWR from 'swr';

export default function getCategories() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error } = useSWR(
    `${process.env.apiUrl}/api/categories`,
    fetcher, { revalidateOnFocus: false }
  )

  return { categories: data, isLoading: !error && !data, isError: error }
}