import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import apiPublic from "../utils/apiPublic";
import apiAuth from "../utils/apiAuth";

const getJobs = async () => {
    const response = await apiPublic.get('/jobs');
    return response.data;
}

export const useJobs = () => {
    return useQuery({
        queryKey: ['jobs'],
        queryFn: () => getJobs(),
        staleTime: 5 * 60 * 1000, // 5 minutes
        cacheTime: 30 * 60 * 1000, // 30 minutes
        refetchOnWindowFocus: false,
    })
}

// Add Job
const addJob = async (jobData) => {
    const response = await apiAuth.post('/jobs', jobData);
    return response.data;
}

export const useAddJob = () => {
    const queryClient = useQueryClient();

    return useMutation  ({
        mutationFn: (jobData) => addJob(jobData),
        onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries({ queryKey: ['jobs'] });
        }   
    })
}
