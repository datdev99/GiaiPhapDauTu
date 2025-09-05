import { useQuery } from "@tanstack/react-query";
import apiPublic from "../utils/apiPublic";

const getArticles = async (categoryId) => {
    const response = await apiPublic.get('/posts/by-category', {
        params: {
            categoryId: categoryId
        }
    });
    return response.data;
}

export const useArticles = (categoryId) => {
    return useQuery({
        queryKey: ['Articles', categoryId],
        queryFn: () => getArticles(categoryId),
        staleTime: 5 * 60 * 1000, // 5 minutes
        cacheTime: 30 * 60 * 1000, // 30 minutes
        refetchOnWindowFocus: false,
    })
}