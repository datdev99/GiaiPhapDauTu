import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { getFullImageUrl } from '../../utils/helper';
import { useArticles } from '../../queries/article.query';
import { Category } from '../../utils/enum';
import { Link } from 'react-router-dom';
import path from '../../constants/path';

const MarketknowledgeLoadingSkeleton = () => {
    return (
        <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-t from-[#141737] via-[#1f1f4a] to-[#2a2a5a]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title skeleton */}
                <div className="h-8 sm:h-10 lg:h-12 bg-gray-600/30 rounded-lg mx-auto mb-6 sm:mb-8 lg:mb-12 animate-pulse max-w-md"></div>
                
                <div className="relative max-w-6xl mx-auto">
                    <div className="overflow-hidden rounded-lg sm:rounded-xl shadow-xl sm:shadow-2xl">
                        {/* Main slider skeleton */}
                        <div className="w-full relative">
                            {/* Image skeleton */}
                            <div className="w-full h-64 sm:h-80 lg:h-96 bg-gray-700/40 animate-pulse"></div>
                            
                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8">
                                    {/* Category badge skeleton */}
                                    <div className="bg-gray-600/40 w-20 sm:w-24 h-5 sm:h-6 rounded-full animate-pulse mb-2 sm:mb-3"></div>
                                    
                                    {/* Title skeleton */}
                                    <div className="space-y-2 mb-2 sm:mb-3">
                                        <div className="h-6 sm:h-7 lg:h-8 xl:h-9 bg-gray-600/40 rounded animate-pulse"></div>
                                        <div className="h-6 sm:h-7 lg:h-8 xl:h-9 bg-gray-600/40 rounded animate-pulse w-3/4"></div>
                                    </div>
                                    
                                    {/* Description skeleton */}
                                    <div className="space-y-2 max-w-3xl">
                                        <div className="h-4 sm:h-5 lg:h-6 bg-gray-600/40 rounded animate-pulse"></div>
                                        <div className="h-4 sm:h-5 lg:h-6 bg-gray-600/40 rounded animate-pulse"></div>
                                        <div className="h-4 sm:h-5 lg:h-6 bg-gray-600/40 rounded animate-pulse w-2/3"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Slider Controls skeleton */}
                    <div className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-gray-600/40 w-10 h-10 sm:w-12 sm:h-12 rounded-full animate-pulse"></div>
                    <div className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-gray-600/40 w-10 h-10 sm:w-12 sm:h-12 rounded-full animate-pulse"></div>

                    {/* Slider Dots skeleton */}
                    <div className="flex justify-center mt-4 sm:mt-6 space-x-2 sm:space-x-3">
                        {[...Array(4)].map((_, index) => (
                            <div
                                key={index}
                                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full animate-pulse ${
                                    index === 0 ? 'bg-blue-600/60' : 'bg-gray-600/40'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const Marketknowledge = () => {
    const { data: articles, isLoading, isError } = useArticles(Category.Market);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        if (!articles || articles.length === 0) return;
        
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % articles.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [articles?.length]);

    const nextSlide = () => {
        if (articles.data && articles.data.length > 0) {
            setCurrentSlide((prev) => (prev + 1) % articles.data.length);
        }
    };

    const prevSlide = () => {
        if (articles.data && articles.data.length > 0) {
            setCurrentSlide((prev) => (prev - 1 + articles.data.length) % articles.data.length);
        }
    };

    // Show loading skeleton while data is loading
    if (isLoading) {
        return <MarketknowledgeLoadingSkeleton />;
    }

    // Handle error state
    if (isError) {
        return (
            <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-t from-[#141737] via-[#1f1f4a] to-[#2a2a5a]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-lg mx-auto">
                        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Có lỗi xảy ra</h2>
                        <p className="text-gray-300 mb-6">Không thể tải kiến thức thị trường. Vui lòng thử lại sau.</p>
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

    // Handle empty data
    if (!articles || articles.length === 0) {
        return (
            <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-t from-[#141737] via-[#1f1f4a] to-[#2a2a5a]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-lg mx-auto">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">Kiến thức thị trường</h2>
                        <p className="text-gray-300">Chưa có nội dung nào.</p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <>
            <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-t from-[#141737] via-[#1f1f4a] to-[#2a2a5a]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 lg:mb-12 text-white">Kiến thức thị trường</h2>
                    <div className="relative mx-auto">
                        <div className="overflow-hidden rounded-lg sm:rounded-xl shadow-xl sm:shadow-2xl">
                            <div
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                            >
                                {articles.data.map((slide) => (
                                    <div key={slide.id} className="w-full flex-shrink-0 relative">
                                        <img
                                            src={getFullImageUrl(slide.imageUrl)}
                                            alt={slide.title}
                                            className="w-full h-64 sm:h-80 lg:h-96 object-cover transform transition-transform duration-500 hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                                            <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 shadow-lg">
                                                <Link to={path.client.newsDetail(slide.id)}>
                                                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">{slide.title}</h3>
                                                </Link>
                                                <p className="text-gray-200 text-sm sm:text-base lg:text-lg">{slide.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Slider Controls */}
                        <button
                            onClick={prevSlide}
                            className="absolute cursor-pointer left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 sm:p-3 rounded-full transition-all backdrop-blur-sm"
                        >
                            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute cursor-pointer right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 sm:p-3 rounded-full transition-all backdrop-blur-sm"
                        >
                            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                        </button>

                        {/* Slider Dots */}
                        <div className="flex justify-center mt-4 sm:mt-6 space-x-2 sm:space-x-3">
                            {articles.data.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`cursor-pointer w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-blue-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Marketknowledge