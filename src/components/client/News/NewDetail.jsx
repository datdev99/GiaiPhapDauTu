import { useState } from 'react';
import { Calendar, User, Tag, Heart, MessageCircle, Share2, Eye, Clock, ArrowLeft } from 'lucide-react';
import EconomicCalendar from '../EconomicCalendar/EconomicCalendar';
import { useArticleDetails, useArticles } from '../../../queries/article.query';
import { Link, useParams } from 'react-router-dom';
import ArticleDetailSkeleton from '../../Skeleton/ArticleDetailSkeleton';
import SidebarArticleSkeleton from '../../Skeleton/SidebarArticleSkeleton';
import { DateFormat, getFullImageUrl } from '../../../utils/helper';
import { useReadingTime } from '../../../utils/customHook';
import path from '../../../constants/path';
import CommentArticle from '../Comment/CommentArticle';

const NewDetail = () => {
    const { newsId: articleId } = useParams();

    const { data: articleDetail, isLoading, error } = useArticleDetails(articleId);
    
    // Fix: Add proper dependencies and enabled condition
    const { data: articleList, isLoading: isLoadingRelated } = useArticles(
        articleDetail?.data?.categoryId,
        {
            enabled: !!articleDetail?.data?.categoryId,
            staleTime: 0 // Always refetch when component mounts
        }
    );

    const [liked, setLiked] = useState(false);
    const readingTime = useReadingTime(articleDetail?.data?.content, {
        wordsPerMinute: 200,
        imageTime: 10,
        language: 'vi'
    });
    
    const handleLike = () => {
        setLiked(!liked);
    };

    const showLoading = isLoading;

    if (showLoading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
                <div className="max-w-7xl mx-auto px-4 py-8">
                    <div className="flex flex-col lg:flex-row gap-8">
                        <ArticleDetailSkeleton />
                        <SidebarArticleSkeleton />
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
                <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full mx-4">
                    <div className="text-center">
                        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Có lỗi xảy ra</h3>
                        <p className="text-gray-600 mb-4">Không thể tải nội dung bài viết. Vui lòng thử lại sau.</p>
                        <button 
                            onClick={() => window.location.reload()}
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Tải lại trang
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    // Fix: Add safety check
    if (!articleDetail?.data) {
        return null;
    }

    return (
        // Fix: Add key to force re-render when article changes
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Main Content */}
                    <article className="lg:w-2/3">
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                            {/* Featured Image */}
                            <div className="relative h-96 overflow-hidden">
                                <img
                                    src={getFullImageUrl(articleDetail.data.imageUrl) || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop"}
                                    alt={articleDetail.data.title}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                            </div>

                            {/* Article Header */}
                            <div className="p-8">
                                <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                                    {articleDetail.data.title}
                                </h1>

                                {/* Meta Info */}
                                <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8 pb-6 border-b">
                                    <div className="flex items-center">
                                        <Calendar className="w-4 h-4 mr-2" />
                                        <span>{DateFormat(articleDetail.data.updatedAt)}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Clock className="w-4 h-4 mr-2" />
                                        <span>{readingTime.formatted || '15 phút đọc'}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Eye className="w-4 h-4 mr-2" />
                                        <span>{articleDetail.data.views || '3,542'} lượt xem</span>
                                    </div>
                                </div>

                                {/* Article Content */}
                                <div className="prose prose-lg max-w-none">
                                    {articleDetail.data.content && (
                                        <div dangerouslySetInnerHTML={{ __html: articleDetail.data.content }} />
                                    )}
                                </div>

                                <CommentArticle />

                                {/* Actions */}
                                <div className="flex items-center justify-between pt-8 mt-8 border-t">
                                    <div className="flex items-center gap-4">
                                        <button
                                            onClick={handleLike}
                                            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${liked
                                                    ? 'bg-red-100 text-red-600'
                                                    : 'bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-500'
                                                }`}
                                        >
                                            <Heart className={`w-5 h-5 ${liked ? 'fill-current' : ''}`} />
                                            <span>{liked ? '124' : '123'}</span>
                                        </button>
                                        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-all">
                                            <MessageCircle className="w-5 h-5" />
                                        </button>
                                    </div>
                                    <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all">
                                        <Share2 className="w-5 h-5" />
                                        <span>Chia sẻ</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* Sidebar */}
                    <aside className="lg:w-1/3">
                        <div className="sticky top-8 space-y-8">
                            <div className="max-h-[540px] overflow-y-auto no-scrollbar">
                                <EconomicCalendar />
                            </div>
                            
                            {/* Related Posts */}
                            <div className="bg-white rounded-2xl shadow-xl p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">Bài viết liên quan</h3>
                                
                                {isLoadingRelated ? (
                                    // Loading state for related articles
                                    <div className="space-y-4">
                                        {[...Array(3)].map((_, index) => (
                                            <div key={index} className="flex gap-4 animate-pulse">
                                                <div className="w-20 h-16 bg-gray-200 rounded-lg"></div>
                                                <div className="flex-1 space-y-2">
                                                    <div className="h-4 bg-gray-200 rounded"></div>
                                                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="space-y-4">
                                        {articleList?.data
                                            ?.filter(post => post.id !== Number(articleId)) // Exclude current article
                                            ?.slice(0, 5) // Limit to 5 related articles
                                            ?.map((post) => (
                                                <div key={post.id} className="group cursor-pointer">
                                                    <div className="flex gap-4">
                                                        <div className="w-20 h-16 rounded-lg overflow-hidden flex-shrink-0">
                                                            <img
                                                                src={getFullImageUrl(post.imageUrl)}
                                                                alt={post.title}
                                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                                                loading="lazy"
                                                            />
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <Link to={path.client.newsDetail(post.id)}>
                                                                <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 text-sm mb-2">
                                                                    {post.title}
                                                                </h4>
                                                            </Link>
                                                            <div className="flex text-xs text-gray-500">
                                                                <Calendar className="w-4 h-4 mr-2" />
                                                                {DateFormat(post.createdAt)}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                        {(!articleList?.data || articleList.data.length <= 1) && (
                                            <p className="text-gray-500 text-center py-4">
                                                Không có bài viết liên quan
                                            </p>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default NewDetail;