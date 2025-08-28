import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Menu, X, Search, Calendar, User, ArrowRight } from 'lucide-react';
import Header from '../../components/client/header/Header';

const TechHomepage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Slider data - Forex Market
    const slides = [
    {
        id: 1,
        title: "Vàng - Kênh đầu tư an toàn",
        description: "Phân tích xu hướng giá vàng và chiến lược đầu tư trong bối cảnh kinh tế hiện tại",
        image: "https://images.unsplash.com/photo-1610375461246-83df859d849d?w=800&h=400&fit=crop",
        category: "Vàng (GOLD)"
    },
    {
        id: 2,
        title: "Thị trường Dầu thô WTI & Brent",
        description: "Cập nhật giá dầu và các yếu tố ảnh hưởng đến thị trường năng lượng",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop",
        category: "Dầu thô (OIL)"
    },
    {
        id: 3,
        title: "EUR/USD - Cặp tiền chủ đạo",
        description: "Phân tích cặp tiền Euro/USD và những động thái của ECB",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop",
        category: "Euro (EUR/USD)"
    }
    ];

    // News data - Forex Market
    const news = [
    {
        id: 1,
        title: "Giá vàng tăng vọt lên mức 2.350 USD/oz",
        excerpt: "Vàng thế giới đạt đỉnh mới do lo ngại lạm phát và căng thẳng địa chính trị gia tăng.",
        image: "https://images.unsplash.com/photo-1605792657660-596af9009e82?w=300&h=200&fit=crop",
        category: "Vàng",
        date: "2024-03-15",
        author: "Nguyễn Minh Forex"
    },
    {
        id: 2,
        title: "Dầu Brent vượt ngưỡng 95 USD/thùng",
        excerpt: "Giá dầu tăng mạnh sau quyết định cắt giảm sản lượng của OPEC+ và căng thẳng Trung Đông.",
        image: "https://images.unsplash.com/photo-1615221159761-65ddf8c6f252?w=300&h=200&fit=crop",
        category: "Dầu thô",
        date: "2024-03-14",
        author: "Trần Hải Trader"
    },
    {
        id: 3,
        title: "ECB duy trì lãi suất, EUR/USD tăng điểm",
        excerpt: "Ngân hàng Trung ương châu Âu giữ nguyên chính sách tiền tệ, EUR mạnh lên so với USD.",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=300&h=200&fit=crop",
        category: "EUR/USD",
        date: "2024-03-13",
        author: "Lê Thu FX Analyst"
    },
    {
        id: 4,
        title: "Vàng trong nước cao hơn thế giới 8 triệu đồng/lượng",
        excerpt: "Chênh lệch giá vàng SJC với thế giới tăng cao do nguồn cung hạn chế và nhu cầu mạnh.",
        image: "https://images.unsplash.com/photo-1564419320461-6870880221ad?w=300&h=200&fit=crop",
        category: "Vàng",
        date: "2024-03-12",
        author: "Phạm Đức Gold Expert"
    },
    {
        id: 5,
        title: "Dự trữ dầu thô Mỹ giảm bất ngờ",
        excerpt: "EIA báo cáo tồn kho dầu thô Mỹ giảm 2.5 triệu thùng, thúc đẩy giá dầu tăng.",
        image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=300&h=200&fit=crop",
        category: "Dầu thô",
        date: "2024-03-11",
        author: "Hoàng Nam Oil Trader"
    },
    {
        id: 6,
        title: "Fed báo hiệu có thể hạ lãi suất, USD suy yếu",
        excerpt: "Tín hiệu nới lỏng chính sách tiền tệ từ Fed làm USD giảm giá so với các đồng tiền chủ chốt.",
        image: "https://images.unsplash.com/photo-1559589689-577aabd1db4f?w=300&h=200&fit=crop",
        category: "USD",
        date: "2024-03-10",
        author: "Vũ Linh Currency Expert"
    }
    ];

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Banner */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="block">Khám phá Tương lai</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400 mt-2">
              Công nghệ
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Cập nhật những tin tức mới nhất về AI, Blockchain, và các công nghệ tiên tiến
          </p>
          <button className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-gray-100 hover:scale-105 transition-all shadow-lg text-sm sm:text-base">
            Khám phá ngay
          </button>
        </div>
      </section>

      {/* Slider */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 lg:mb-12 text-gray-800">Tin nổi bật</h2>
          <div className="relative max-w-6xl mx-auto">
            <div className="overflow-hidden rounded-lg sm:rounded-xl shadow-xl sm:shadow-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((slide) => (
                  <div key={slide.id} className="w-full flex-shrink-0 relative">
                    <img 
                      src={slide.image} 
                      alt={slide.title}
                      className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8">
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-semibold mb-2 sm:mb-3 inline-block">
                          {slide.category}
                        </span>
                        <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-2 sm:mb-3 leading-tight">{slide.title}</h3>
                        <p className="text-gray-200 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl">{slide.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slider Controls */}
            <button 
              onClick={prevSlide}
              className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 sm:p-3 rounded-full transition-all backdrop-blur-sm"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 sm:p-3 rounded-full transition-all backdrop-blur-sm"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Slider Dots */}
            <div className="flex justify-center mt-4 sm:mt-6 space-x-2 sm:space-x-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'bg-blue-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">Tin tức mới nhất</h2>
            <p className="text-gray-600 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto">Cập nhật những thông tin công nghệ hot nhất</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {news.map((article) => (
              <div key={article.id} className="bg-white rounded-lg sm:rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-40 sm:h-48 lg:h-52 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                      {article.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors leading-tight">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-3 sm:mb-4 line-clamp-3 text-sm sm:text-base leading-relaxed">{article.excerpt}</p>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4 space-y-2 sm:space-y-0">
                    <div className="flex items-center space-x-2">
                      <User className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>{article.author}</span>
                    </div>
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

      
    </div>
  );
};

export default TechHomepage;