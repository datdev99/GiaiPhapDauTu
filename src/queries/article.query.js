import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import apiPublic from "../utils/apiPublic";
import apiAuth from "../utils/apiAuth";

const getAllArticles = async () => {
    const response = await apiPublic.get('/posts');
    return response.data;
}

export const useAllArticles = () => {
    return useQuery({
        queryKey: ['AllArticles'],
        queryFn: () => getAllArticles(),
        staleTime: 5 * 60 * 1000, // 5 minutes
        cacheTime: 30 * 60 * 1000, // 30 minutes
        refetchOnWindowFocus: false,
    })
}


// Fetch articles by category ID
const getArticles = async (categoryId) => {
    const response = await apiPublic.get('/posts/categoryId', {
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

// Fetch article details by ID
const getArticleDetails = async (articleId) => {
    const response = await apiPublic.get(`/posts/${articleId}`);
    return response.data;
}

export const useArticleDetails = (articleId) => {
    return useQuery({
        queryKey: ['ArticleDetails', articleId],
        queryFn: () => getArticleDetails(articleId),
        staleTime: 5 * 60 * 1000, // 5 minutes
        cacheTime: 30 * 60 * 1000, // 30 minutes
        refetchOnWindowFocus: false,
        enabled: !!articleId, // Only run the query if articleId is provided
    })
}

// Delete article by ID
const DeleteArticle = async (articleId) => {
    await apiAuth.delete(`/posts/${articleId}`);
}

export const useDeleteArticle = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (articleId) => DeleteArticle(articleId),
        onSuccess: () => {
            queryClient.invalidateQueries(["AllArticles"]);
        },
    });
}

// Create article
const CreateArticle = async (data) => {
    const response = await apiAuth.post('/posts', data, {
         headers: {
            "Content-Type": "multipart/form-data",
        }
    });
    return response.data;
}

export const useCreateArticle = () => {
    const queryClient = useQueryClient();
    
    return useMutation({
        mutationFn: (data) => CreateArticle(data),
        onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries(["AllArticles"]);
        }
    });
}

