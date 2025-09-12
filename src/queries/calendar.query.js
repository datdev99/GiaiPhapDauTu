import { useQuery } from "@tanstack/react-query";
import apiPublic from "../utils/apiPublic";

// Hàm format ngày theo yyyy/dd/mm
const getCurrentDateFormatted = () => {
    const date = new Date();
    const year = date.getFullYear();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // getMonth() trả về 0-11
    
    return `${year}/${month}/${day}`;
};

const getCalendar = async () => {
    const currentDate = getCurrentDateFormatted();
    const response = await apiPublic.get(`/Calendar?date=${currentDate}`);
    return response.data;
}

export const useCalendar = () => {
    return useQuery({
        queryKey: ['calendar', getCurrentDateFormatted()], // Thêm date vào queryKey để refetch khi ngày thay đổi
        queryFn: () => getCalendar(),
        staleTime: 5 * 60 * 1000, // 5 minutes
        cacheTime: 30 * 60 * 1000, // 30 minutes
        refetchOnWindowFocus: false,
    })
}