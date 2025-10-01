export const isPubTimeBeforeNow = (pub_time) => {
  if (!pub_time || typeof pub_time !== 'string') {
    return false;
  }

  // Parse pub_time "01:15" thành giờ và phút
  const [pubHour, pubMinute] = pub_time.split(':').map(num => parseInt(num, 10));
  
  if (isNaN(pubHour) || isNaN(pubMinute)) {
    return false;
  }

  // Lấy thời gian hiện tại
  const now = new Date();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();

  // So sánh thời gian
  if (pubHour < currentHour) {
    return true; // pub_time nhỏ hơn giờ hiện tại
  } else if (pubHour === currentHour && pubMinute < currentMinute) {
    return true; // Cùng giờ nhưng pub_time có phút nhỏ hơn
  }
  
  return false; // pub_time >= thời gian hiện tại
};

export const getFullImageUrl = (thumbnailUrl) => {
  const BASE_URL = import.meta.env.VITE_COPI_URL 
  
  return `${BASE_URL}${thumbnailUrl}`;
};

export const DateFormat = (dateStr) => {
  const date = new Date(dateStr);
  const formattedDate = date.toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  });

  return formattedDate;
}

