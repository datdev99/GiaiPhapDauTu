import { useQuery } from "@tanstack/react-query";
import apiPublic from "../utils/apiPublic";

const getJobs = async () => {
    const response = await apiPublic.get('/Jobs');
    return response.data;
}

export const useJobs = () => {
    return useQuery({
        queryKey: ['Jobs'],
        queryFn: getJobs,
        staleTime: 5 * 60 * 1000, // 5 minutes
        cacheTime: 30 * 60 * 1000, // 30 minutes
        refetchOnWindowFocus: false,
    })
}