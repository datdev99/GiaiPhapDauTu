import { useMutation } from "@tanstack/react-query";
import apiPublic from "../utils/apiPublic";

const ApplyJob = async (jobData) => {
    const response = await apiPublic.post('/ApplyJob', jobData);
    return response.data;
}

export const useApplyJob = () => {
    return useMutation  ({
        mutationFn: (jobData) => ApplyJob(jobData),
    })
}
