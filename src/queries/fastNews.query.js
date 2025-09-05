import { useQuery } from "@tanstack/react-query";
import apiPublic from "../utils/apiPublic";

const getFastNews = async () => {
    const response = await apiPublic.get('/News/flash?limit=20&start=0&uid=-1');
    return response.data;
}

export const useFastNews = () => {
    return useQuery({
        queryKey: ['fastNews'],
        queryFn: getFastNews,
        staleTime: 5 * 60 * 1000, // 5 minutes
        cacheTime: 30 * 60 * 1000, // 30 minutes
        refetchOnWindowFocus: false,
    })
}