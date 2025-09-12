import { useState, useEffect } from 'react';
import { Clock, Star } from 'lucide-react';
import { useCalendar } from '../../../queries/calendar.query';
import { isPubTimeBeforeNow } from '../../../utils/helper';

// Component Loading Skeleton
const CalendarEventSkeleton = () => (
  <div className="bg-gray-700 rounded-lg p-4 animate-pulse">
    {/* Time Badge Skeleton */}
    <div className="bg-gray-600 h-5 w-16 rounded mb-3"></div>
    
    {/* Stars Rating Skeleton */}
    <div className="flex items-center space-x-1 mb-3">
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="w-3 h-3 bg-gray-600 rounded-sm"></div>
      ))}
    </div>

    {/* Event Info Skeleton */}
    <div className="flex items-start space-x-3">
      <div className="w-6 h-6 bg-gray-600 rounded flex-shrink-0 mt-0.5"></div>
      <div className="flex-1 space-y-2">
        <div className="h-4 bg-gray-600 rounded w-full"></div>
        <div className="h-4 bg-gray-600 rounded w-3/4"></div>
      </div>
    </div>
  </div>
);

const HeaderSkeleton = () => (
  <div className="flex items-center justify-between mb-6">
    <div className="h-8 w-16 bg-gray-700 rounded animate-pulse"></div>
    <div className="flex items-center space-x-2">
      <div className="w-4 h-4 bg-gray-700 rounded animate-pulse"></div>
      <div className="h-4 w-12 bg-gray-700 rounded animate-pulse"></div>
      <div className="h-4 w-16 bg-gray-700 rounded animate-pulse"></div>
    </div>
  </div>
);


const EconomicCalendar = () => {
  const {data: calendarData = [], isLoading} = useCalendar();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('vi-VN', { 
      hour12: false,
      hour: '2-digit',
      minute: '2-digit', 
      second: '2-digit'
    });
  };

  const renderStars = (count) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-3 h-3 ${i < count ? 'text-yellow-400 fill-current' : 'text-gray-500'}`}
      />
    ));
  };

  if (isLoading) {
    return (
      <>
        <CalendarEventSkeleton />
        <div className="pb-8 mt-4">
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <HeaderSkeleton key={i} />
            ))}
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="bg-gray-800 text-white p-4 w-full rounded-3xl">
      {/* Header */}
      {isLoading ? (
        <HeaderSkeleton />
      ) : (
        <div className="flex items-center justify-between mb-6 sticky top-0 bg-gray-800 py-4">
          <h1 className="text-white text-2xl font-medium">Lịch</h1>
          <div className="flex items-center space-x-2 text-gray-300">
            <Clock className="w-4 h-4" />
            <span className="text-sm">Tiếp theo</span>
            <span className="text-red-400 font-mono text-sm">
              {formatTime(currentTime)}
            </span>
          </div>
        </div>
      )}

      {/* Events List */}
      <div className="space-y-4">
        {isLoading ? (
          // Loading skeleton
          <>
            {[1, 2, 3, 4, 5].map((i) => (
              <CalendarEventSkeleton key={i} />
            ))}
          </>
        ) : (
          // Actual content
          calendarData.list.map((event, index) => (
            event?.content?.length > 0 ?
            <>
                {
                  event.content.map((contentItem, contentIndex) => (
                    contentItem.translate && !isPubTimeBeforeNow(contentItem.pub_time) && <>
                      <div key={contentIndex} className="bg-gray-700 rounded-lg p-4 transition-all duration-300 hover:bg-gray-600">
                        <div className='flex gap-3'>
                          {/* Time Badge */}
                          <div className="bg-red-600 text-white text-xs font-medium px-2 py-1 rounded mb-3 inline-block">
                            {contentItem.pub_time}
                          </div>
                          
                          {/* Stars Rating */}
                          <div className="flex items-center space-x-1 mb-3">
                            {renderStars(contentItem.star)}
                          </div>
                          {/* Currency */}
                          <div className='ml-auto text-sm font-medium text-gray-200'>
                            {contentItem.currency}
                          </div>
                        </div>

                        {/* contentItem Info */}
                        <div className="flex items-start space-x-3">
                          {/* <span className="text-xl flex-shrink-0 mt-0.5">
                            {contentItem.country}
                          </span> */}
                          <img src={contentItem.country_flag} width={30} alt="" />
                          <div className="flex-1">
                            <p className="text-white text-sm leading-relaxed">
                              {contentItem.translate}
                            </p>
                          </div>
                        </div>
                      </div>
                    </>
                  ))
                }
            </>
            :
            event.events_translate && !isPubTimeBeforeNow(event.pub_time) && <>
              <div key={index} className="bg-gray-700 rounded-lg p-4 transition-all duration-300 hover:bg-gray-600">
                <div className='flex gap-3'>
                  {/* Time Badge */}
                  <div className="bg-red-600 text-white text-xs font-medium px-2 py-1 rounded mb-3 inline-block">
                    {event.pub_time}
                  </div>
                  
                  {/* Stars Rating */}
                  <div className="flex items-center space-x-1 mb-3">
                    {renderStars(event.star)}
                  </div>
                  {/* Currency */}
                  <div className='ml-auto text-sm font-medium text-gray-200'>
                    {event.currency}
                  </div>
                </div>

                {/* Event Info */}
                <div className="flex items-start space-x-3">
                  {/* <span className="text-xl flex-shrink-0 mt-0.5">
                    {event.country}
                  </span> */}
                  <img src={event.country_flag} width={30} alt="" />
                  <div className="flex-1">
                    <p className="text-white text-sm leading-relaxed">
                      {event.events_translate}
                    </p>
                  </div>
                </div>
              </div>
            </>
          ))
        )}
      </div>

      {/* Empty state */}
      {!isLoading && calendarData.length === 0 && (
        <div className="text-center py-8">
          <Clock className="w-12 h-12 text-gray-500 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-300 mb-2">Không có sự kiện</h3>
          <p className="text-gray-500">Chưa có sự kiện nào được lên lịch.</p>
        </div>
      )}

      {/* Bottom spacing */}
      <div className="h-8"></div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default EconomicCalendar;