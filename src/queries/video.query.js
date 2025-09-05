import { useQuery } from "@tanstack/react-query";
import apiPublic from "../utils/apiPublic"

const getVideos = async () => {
    const response = await apiPublic.get('/videos');
    return response.data;
}

export const useVideos = () => {
    return useQuery({
        queryKey: ['Videos'],
        queryFn: () => getVideos(),
        // staleTime: 5 * 60 * 1000, // 5 minutes
        // cacheTime: 30 * 60 * 1000, // 30 minutes
        // refetchOnWindowFocus: false,
    })
}