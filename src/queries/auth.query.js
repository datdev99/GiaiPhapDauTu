import { useMutation } from "@tanstack/react-query";
import apiPublic from "../utils/apiPublic";

const login = async (data) => {
    const response = await apiPublic.post('/auth/login', data);
    return response.data;
}

export const useLogin = () => {
    return useMutation({
        mutationKey: ['Login'],
        mutationFn: (data) => login(data),
    })
}