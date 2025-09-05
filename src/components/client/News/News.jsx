import { Calendar, User, ArrowRight } from 'lucide-react';
import { useNews } from '../../../queries/news.query';
import { getFullImageUrl } from '../../../utils/helper';

const NewsLoadingSkeleton = () => {
  return (
    <>
      {/* News Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            {/* Title skeleton */}
            <div className="h-8 sm:h-10 lg:h-12 bg-gray-200 rounded-lg mx-auto mb-3 sm:mb-4 animate-pulse max-w-md"></div>
            {/* Subtitle skeleton */}
            <div className="h-5 sm:h-6 lg:h-7 bg-gray-200 rounded-lg mx-auto animate-pulse max-w-2xl"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {/* Generate 6 skeleton cards */}
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-white rounded-lg sm:rounded-xl shadow-lg overflow-hidden">
                <div className="relative overflow-hidden">
                  {/* Image skeleton */}
                  <div className="w-full h-40 sm:h-48 lg:h-52 bg-gray-200 animate-pulse"></div>
                  {/* Category badge skeleton */}
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                    <div className="bg-gray-200 w-16 sm:w-20 h-5 sm:h-6 rounded-full animate-pulse"></div>
                  </div>
                </div>
                
                <div className="p-4 sm:p-6">
                  {/* Title skeleton */}
                  <div className="space-y-2 mb-2 sm:mb-3">
                    <div className="h-5 sm:h-6 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-5 sm:h-6 bg-gray-200 rounded animate-pulse w-3/4"></div>
                  </div>
                  
                  {/* Excerpt skeleton */}
                  <div className="space-y-2 mb-3 sm:mb-4">
                    <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded animate-pulse w-2/3"></div>
                  </div>
                  
                  {/* Date skeleton */}
                  <div className="flex items-center space-x-2 mb-3 sm:mb-4">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-3 sm:h-4 bg-gray-200 rounded animate-pulse w-20"></div>
                  </div>

                  {/* Button skeleton */}
                  <div className="flex items-center space-x-2">
                    <div className="h-4 sm:h-5 bg-gray-200 rounded animate-pulse w-16"></div>
                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load more button skeleton */}
          <div className="text-center mt-8 sm:mt-12 lg:mt-16">
            <div className="bg-gray-200 w-40 sm:w-48 h-12 sm:h-14 rounded-full animate-pulse mx-auto"></div>
          </div>
        </div>
      </section>
    </>
  );
};

const News = () => {
  const { data: newsData, isLoading, isError } = useNews();

  // Show loading skeleton while data is loading
  if (isLoading) {
    return <NewsLoadingSkeleton />;
  }

  // Handle error state
  if (isError) {
    return (
      <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Có lỗi xảy ra</h2>
            <p className="text-gray-600 mb-6">Không thể tải tin tức. Vui lòng thử lại sau.</p>
            <button 
              onClick={() => window.location.reload()}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all"
            >
              Thử lại
            </button>
          </div>
        </div>
      </section>
    );
  }

  // Render actual content when data is loaded
  return (
    <>
      {/* News Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">Tin tức mới nhất</h2>
            <p className="text-gray-600 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto">Cập nhật những thông tin công nghệ hot nhất</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {newsData.data?.map((article) => (
              <div key={article.id} className="bg-white rounded-lg sm:rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img 
                    src={getFullImageUrl(article.imageUrl)} 
                    alt={article.title}
                    className="w-full cursor-pointer h-40 sm:h-48 lg:h-52 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors leading-tight">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-3 sm:mb-4 line-clamp-3 text-sm sm:text-base leading-relaxed">{article.excerpt}</p>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4 space-y-2 sm:space-y-0">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>{new Date(article.date).toLocaleDateString('vi-VN')}</span>
                    </div>
                  </div>

                  <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors group text-sm sm:text-base">
                    <span>Đọc thêm</span>
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12 lg:mt-16">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 hover:scale-105 transition-all shadow-lg text-sm sm:text-base">
              Xem tất cả tin tức
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default News