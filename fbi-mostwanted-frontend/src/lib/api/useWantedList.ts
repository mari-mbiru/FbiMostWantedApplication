import { useQuery } from '@tanstack/vue-query'
import axios from 'axios'
import { WantedFilter } from '@/models/WantedFilter'

const BASE_URL = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:3000'

const fetchMostWanted = async (filters: WantedFilter) => {
  const queryString = filters.toQueryParams();

  const res = await axios.get(`${BASE_URL}/api/wanted?${queryString}`)
  return res.data
}

export const useWantedList = (filters: WantedFilter) =>
  useQuery({
    queryKey: ['most-wanted', filters],
    queryFn: () => fetchMostWanted(filters),
    staleTime: 1000 * 60 * 5,
  })
