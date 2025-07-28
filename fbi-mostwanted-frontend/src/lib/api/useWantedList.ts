import { useQuery } from '@tanstack/vue-query'
import axios from 'axios'

const fetchMostWanted = async () => {
  const res = await axios.get('https://api.fbi.gov/@wanted')
  return res.data.items
}

export const useWantedList = () =>
  useQuery({
    queryKey: ['most-wanted'],
    queryFn: fetchMostWanted,
    staleTime: 1000 * 60 * 5, // 5 minutes
  })
