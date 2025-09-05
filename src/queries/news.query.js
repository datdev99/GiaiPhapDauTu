import { useQuery } from "@tanstack/react-query";
import apiPublic from "../utils/apiPublic";

const getNews = async () => {
    const response = await apiPublic.get('/posts/by-category?categoryId=1002');
    return response.data;
}

export const useNews = () => {
    return useQuery({
        queryKey: ['News', ],
        queryFn: () => getNews(),
        staleTime: 5 * 60 * 1000, // 5 minutes
        cacheTime: 30 * 60 * 1000, // 30 minutes
        refetchOnWindowFocus: false,
    })
}

// Kiến thức thị trường categoryId=2    
const getMarketknowledge = async () => {
    const response = await apiPublic.get('/posts/by-category?categoryId=2');
    return response.data;
}

export const useMarketknowledge = () => {
    return useQuery({
        queryKey: ['Marketknowledge', ],
        queryFn: () => getMarketknowledge(),
        staleTime: 5 * 60 * 1000, // 5 minutes
        cacheTime: 30 * 60 * 1000, // 30 minutes
        refetchOnWindowFocus: false,
    })
}

const getGiaoDich = async () => {
    const response = await apiPublic.get('/posts/by-category?categoryId=2002');
    return response.data;
}

export const useGiaoDich = () => {
    return useQuery({
        queryKey: ['GiaoDich', ],
        queryFn: () => getGiaoDich(),
        staleTime: 5 * 60 * 1000, // 5 minutes
        cacheTime: 30 * 60 * 1000, // 30 minutes
        refetchOnWindowFocus: false,
    })
}