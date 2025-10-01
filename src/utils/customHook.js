import { useEffect, useState } from "react";

export const useReadingTime = (content, options = {}) => {
    const [readingTime, setReadingTime] = useState({ minutes: 0, formatted: '0 phút đọc' });
    
    useEffect(() => {
        if (content) {
            const result = calculateAdvancedReadingTime(content, options);
            setReadingTime(result);
        }
    }, [content]);
    
    return readingTime;
};

export const calculateReadingTimeFromElement = (element, options = {}) => {
    if (!element) return { minutes: 0, formatted: '0 phút đọc' };
    
    const text = element.innerHTML || element.textContent;
    return calculateAdvancedReadingTime(text, options);
};

export const calculateAdvancedReadingTime = (text, options = {}) => {
    const {
        wordsPerMinute = 200,        // Tốc độ đọc văn bản
        imageTime = 12,              // Giây để xem 1 hình ảnh (12s theo Medium)
        codeWordsPerMinute = 100,    // Tốc độ đọc code chậm hơn
        language = 'vi'              // Ngôn ngữ (vi/en)
    } = options;

    // Loại bỏ HTML nhưng giữ lại thông tin về images và code
    let cleanText = text;
    
    // Đếm hình ảnh
    const imageMatches = text.match(/<img[^>]*>/g) || [];
    const imageCount = imageMatches.length;
    
    // Đếm code blocks
    const codeBlockMatches = text.match(/<pre[^>]*>[\s\S]*?<\/pre>/g) || [];
    const inlineCodeMatches = text.match(/<code[^>]*>[\s\S]*?<\/code>/g) || [];
    
    // Tính số từ trong code
    let codeWordCount = 0;
    [...codeBlockMatches, ...inlineCodeMatches].forEach(codeBlock => {
        const codeText = codeBlock.replace(/<[^>]*>/g, '');
        codeWordCount += codeText.split(/\s+/).filter(word => word.length > 0).length;
    });
    
    // Loại bỏ tất cả HTML tags
    cleanText = cleanText.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
    
    // Đếm từ văn bản thuần
    const totalWords = cleanText.split(' ').filter(word => word.length > 0).length;
    const textWords = totalWords - codeWordCount;
    
    // Tính thời gian cho từng thành phần
    const textReadingTime = textWords / wordsPerMinute; // phút
    const codeReadingTime = codeWordCount / codeWordsPerMinute; // phút
    const imageReadingTime = (imageCount * imageTime) / 60; // phút
    
    // Tổng thời gian
    const totalMinutes = textReadingTime + codeReadingTime + imageReadingTime;
    const roundedMinutes = Math.max(1, Math.ceil(totalMinutes)); // Tối thiểu 1 phút
    
    return {
        totalWords,
        textWords,
        codeWordCount,
        imageCount,
        minutes: roundedMinutes,
        breakdown: {
            text: Math.ceil(textReadingTime),
            code: Math.ceil(codeReadingTime), 
            images: Math.ceil(imageReadingTime)
        },
        formatted: formatReadingTime(roundedMinutes, language)
    };
};

export const formatReadingTime = (minutes, language = 'vi') => {
    if (language === 'vi') {
        if (minutes < 1) return 'Dưới 1 phút đọc';
        if (minutes === 1) return '1 phút đọc';
        return `${minutes} phút đọc`;
    } else {
        if (minutes < 1) return 'Less than 1 min read';
        if (minutes === 1) return '1 min read';
        return `${minutes} min read`;
    }
};
