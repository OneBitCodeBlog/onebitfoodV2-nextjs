import useSWR from 'swr';

export default function getRestaurant(id) {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error } = useSWR( id ? `${process.env.apiUrl}/api/restaurants/${id}` : null,
    fetcher, { revalidateOnFocus: false }
  )

  return { restaurant: data, isLoading: !error && !data, isError: error }
}