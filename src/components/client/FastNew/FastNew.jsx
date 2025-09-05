import { useState } from 'react';
import { Clock, TrendingUp, Globe } from 'lucide-react';
import { useFastNews } from '../../../queries/fastNews.query';

const NewsItemSkeleton = () => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 animate-pulse">
    <div className="flex items-start justify-between">
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-3">
          <div className="h-6 w-20 bg-gray-200 rounded-full"></div>
          <div className="h-4 w-16 bg-gray-200 rounded"></div>
        </div>
        
        <div className="space-y-2 mb-4">
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>
    </div>
  </div>
);

const FilterSkeleton = () => (
  <div className="sticky top-0 z-10">
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
      <div className="flex flex-wrap gap-3">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-10 w-24 bg-gray-200 rounded-lg animate-pulse"></div>
        ))}
      </div>
    </div>
  </div>
);

const FastNew = () => {
  const {data: fastNews = [], isLoading} = useFastNews(); 

  const [filter, setFilter] = useState('all');

  // Hàm format thời gian
  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMins / 60);
    
    if (diffMins < 1) return 'Vừa xong';
    if (diffMins < 60) return `${diffMins} phút trước`;
    if (diffHours < 24) return `${diffHours} giờ trước`;
    return date.toLocaleDateString('vi-VN');
  };

  // Hàm xác định loại tin
  const getNewsType = (content) => {
    const lowerContent = content.toLowerCase();
    if (lowerContent.includes('tăng') || lowerContent.includes('giảm') || lowerContent.includes('chỉ số') || lowerContent.includes('giá')) {
      return 'market';
    }
    if (lowerContent.includes('ukraine') || lowerContent.includes('nga') || lowerContent.includes('kremlin')) {
      return 'politics';
    }
    if (lowerContent.includes('gaza') || lowerContent.includes('israel')) {
      return 'international';
    }
    return 'general';
  };

  // Hàm lấy icon theo loại tin
  const getNewsIcon = (type) => {
    switch (type) {
      case 'market':
        return <TrendingUp className="w-4 h-4" />;
      case 'politics':
        return <Globe className="w-4 h-4" />;
      default:
        return <Globe className="w-4 h-4" />;
    }
  };

  // Hàm lấy màu theo loại tin
  const getTypeColor = (type) => {
    switch (type) {
      case 'market':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'politics':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'international':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  // Filtered news
  const filteredNews = fastNews.filter(news => {
    if (filter === 'important') return news.important === "1";
    if (filter === 'market') return getNewsType(news.content) === 'market';
    if (filter === 'politics') return getNewsType(news.content) === 'politics';
    return true;
  });

  if (isLoading) {
    return (
      <>
        <FilterSkeleton />
        <div className="pb-8 mt-4">
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <NewsItemSkeleton key={i} />
            ))}
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {/* Filters */}
      <div className="sticky top-0 z-10">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
          <div className="flex flex-wrap gap-3">
            {[
              { key: 'all', label: 'Tất cả', count: fastNews.length },
              { key: 'important', label: 'Quan trọng', count: fastNews.filter(n => n.important === "1").length },
              { key: 'market', label: 'Thị trường', count: fastNews.filter(n => getNewsType(n.content) === 'market').length },
              { key: 'politics', label: 'Chính trị', count: fastNews.filter(n => getNewsType(n.content) === 'politics').length }
            ].map(({ key, label, count }) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={`px-4 py-2 cursor-pointer rounded-lg text-sm font-medium transition-all duration-200 ${
                  filter === key
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {label} ({count})
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* News Feed */}
      <div className="pb-8 mt-4">
        <div className="space-y-4">
          {filteredNews.map((news) => {
            const newsType = getNewsType(news.content);
            const typeColor = getTypeColor(newsType);
            
            return (
              <div
                key={news.messageid}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-200 hover:border-gray-300"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border ${typeColor}`}>
                        {getNewsIcon(newsType)}
                        <span className="capitalize">
                          {newsType === 'market' && 'Thị trường'}
                          {newsType === 'politics' && 'Chính trị'}
                          {newsType === 'international' && 'Quốc tế'}
                          {newsType === 'general' && 'Tổng hợp'}
                        </span>
                      </div>
                      
                      {news.important === "1" && (
                        <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
                          QUAN TRỌNG
                        </span>
                      )}
                      
                      <div className="flex items-center text-xs text-gray-500">
                        <Clock className="w-3 h-3 mr-1" />
                        {formatTime(news.createtime)}
                      </div>
                    </div>
                    
                    <p className="text-gray-900 leading-relaxed mb-4 text-base">
                      {news.content}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {filteredNews.length === 0 && (
          <div className="text-center py-12">
            <Globe className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Không có tin tức</h3>
            <p className="text-gray-600">Không tìm thấy tin tức nào phù hợp với bộ lọc hiện tại.</p>
          </div>
        )}
      </div>
    </>
  );
};

export default FastNew;