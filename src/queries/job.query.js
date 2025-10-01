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

// get job detail
const getJobDetails = async (jobId) => {
    const response = await apiPublic.get(`/jobs/${jobId}`);
    return response.data;
}

export const useJobDetails = (jobId) => {
    return useQuery({
        queryKey: ['job', jobId],
        queryFn: () => getJobDetails(jobId),
        enabled: !!jobId, // Chỉ chạy query khi jobId tồn tại
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

// Update Job
const updateJob = async (jobId, jobData) => {
    const response = await apiAuth.put(`/jobs/${jobId}`, jobData);
    return response.data;
}

export const useUpdateJob = (jobId) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (jobData) => updateJob(jobId, jobData),
        onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries({ queryKey: ['jobs'] });
            queryClient.invalidateQueries({ queryKey: ['job', jobId] });
        }
    })
}

// Delete Job
const deleteJob = async (jobId) => {
    const response = await apiAuth.delete(`/jobs/${jobId}`);
    return response.data;
}

export const useDeleteJob = (jobId) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: () => deleteJob(jobId),
        onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries({ queryKey: ['jobs'] });
        }
    })
}
