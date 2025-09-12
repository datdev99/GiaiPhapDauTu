import React, { useState, useRef, useEffect } from 'react';
import { Bold, Italic, Underline, List, Link, Image, Save, Eye, X, Plus, Settings, FileText, Tag, Calendar, User } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { useArticleDetails } from '../../../queries/article.query';
import { getFullImageUrl } from '../../../utils/helper';

const EditArticlesSkeleton = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            {/* Header Skeleton */}
            <div className="bg-white border-b border-gray-200 px-4 py-3">
                <div className="flex items-center justify-between max-w-full">
                    <div className="flex items-center space-x-4">
                        <div className="h-6 bg-gray-200 rounded animate-pulse w-48"></div>
                        <div className="h-4 bg-gray-200 rounded animate-pulse w-16"></div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="h-8 bg-gray-200 rounded animate-pulse w-20"></div>
                        <div className="h-8 bg-gray-200 rounded animate-pulse w-20"></div>
                        <div className="h-8 bg-gray-200 rounded animate-pulse w-20"></div>
                    </div>
                </div>
            </div>

            <div className="flex max-w-full">
                {/* Main Content Skeleton */}
                <div className="flex-1 py-6">
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                        {/* Title Skeleton */}
                        <div className="p-6 border-b border-gray-200">
                            <div className="h-12 bg-gray-200 rounded animate-pulse w-3/4"></div>
                        </div>

                        {/* Editor Skeleton */}
                        <div className="p-6">
                            {/* Toolbar Skeleton */}
                            <div className="border border-gray-300 rounded-t bg-gray-50 p-3 flex items-center space-x-1">
                                {Array.from({ length: 8 }).map((_, index) => (
                                    <div key={index} className="h-8 w-8 bg-gray-200 rounded animate-pulse"></div>
                                ))}
                                <div className="h-6 bg-gray-200 rounded animate-pulse w-24 ml-4"></div>
                            </div>

                            {/* Content Editor Skeleton */}
                            <div className="min-h-96 p-4 border-l border-r border-b border-gray-300 rounded-b space-y-3">
                                <div className="h-4 bg-gray-200 rounded animate-pulse w-full"></div>
                                <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6"></div>
                                <div className="h-4 bg-gray-200 rounded animate-pulse w-4/5"></div>
                                <div className="h-4 bg-gray-200 rounded animate-pulse w-full"></div>
                                <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
                                <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6"></div>
                                <div className="h-4 bg-gray-200 rounded animate-pulse w-2/3"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar Skeleton */}
                <div className="w-80 py-6 space-y-4 ml-4">
                    {/* Publish Box Skeleton */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                        <div className="px-4 py-3 border-b border-gray-200 bg-gray-50 rounded-t-lg">
                            <div className="h-4 bg-gray-200 rounded animate-pulse w-20"></div>
                        </div>
                        <div className="p-4 space-y-3">
                            <div className="flex items-center justify-between">
                                <div className="h-3 bg-gray-200 rounded animate-pulse w-16"></div>
                                <div className="h-3 bg-gray-200 rounded animate-pulse w-12"></div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="h-3 bg-gray-200 rounded animate-pulse w-14"></div>
                                <div className="h-3 bg-gray-200 rounded animate-pulse w-16"></div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="h-3 bg-gray-200 rounded animate-pulse w-20"></div>
                                <div className="h-3 bg-gray-200 rounded animate-pulse w-18"></div>
                            </div>
                        </div>
                    </div>

                    {/* Categories Skeleton */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                        <div className="px-4 py-3 border-b border-gray-200 bg-gray-50 rounded-t-lg">
                            <div className="h-4 bg-gray-200 rounded animate-pulse w-16"></div>
                        </div>
                        <div className="p-4 space-y-2">
                            <div className="h-10 bg-gray-200 rounded animate-pulse w-full"></div>
                            <div className="h-4 bg-gray-200 rounded animate-pulse w-32"></div>
                        </div>
                    </div>

                    {/* Featured Image Skeleton */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                        <div className="px-4 py-3 border-b border-gray-200 bg-gray-50 rounded-t-lg">
                            <div className="h-4 bg-gray-200 rounded animate-pulse w-20"></div>
                        </div>
                        <div className="p-4">
                            <div className="h-32 bg-gray-200 rounded-lg animate-pulse w-full"></div>
                        </div>
                    </div>

                    {/* Excerpt Skeleton */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                        <div className="px-4 py-3 border-b border-gray-200 bg-gray-50 rounded-t-lg">
                            <div className="h-4 bg-gray-200 rounded animate-pulse w-14"></div>
                        </div>
                        <div className="p-4 space-y-2">
                            <div className="h-24 bg-gray-200 rounded animate-pulse w-full"></div>
                            <div className="h-3 bg-gray-200 rounded animate-pulse w-3/4"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


const EditArticles = () => {
    const articleId = useParams().articleId;
    const { data: articleData, isLoading, error } = useArticleDetails(articleId); // Replace with actual data fetching logic using articleId

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        content: '',
        category: 'tin-tuc',
        image: null,
        imageUrl: '',
        status: 'draft'
    });
    const [imagePreview, setImagePreview] = useState(null);
    const [isPreviewMode, setIsPreviewMode] = useState(false);
    const contentRef = useRef(null);

    // Danh sách categories
    const categories = [
        { id: 'tin-tuc', name: 'Tin tức' },
        { id: 'kinh-te', name: 'Kinh tế' },
        { id: 'the-thao', name: 'Thể thao' },
        { id: 'giai-tri', name: 'Giải trí' },
        { id: 'cong-nghe', name: 'Công nghệ' },
        { id: 'suc-khoe', name: 'Sức khỏe' },
        { id: 'giao-duc', name: 'Giáo dục' },
        { id: 'du-lich', name: 'Du lịch' }
    ];

    // Xử lý upload hình ảnh
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData({ ...formData, image: file });
            const reader = new FileReader();
            reader.onload = (e) => {
                setImagePreview(e.target.result);
                setFormData(prev => ({ ...prev, imageUrl: e.target.result }));
            };
            reader.readAsDataURL(file);
        }
    };

    // Xóa hình ảnh
    const removeImage = () => {
        setFormData({ ...formData, image: null, imageUrl: '' });
        setImagePreview(null);
    };

    // Rich text editor functions
    const execCommand = (command, value = null) => {
        document.execCommand(command, false, value);
        contentRef.current?.focus();
    };

    const handleContentChange = () => {
        if (contentRef.current) {
            setFormData({ ...formData, content: contentRef.current.innerHTML });
        }
    };

    const insertLink = () => {
        const url = prompt('Nhập URL:');
        if (url) {
            execCommand('createLink', url);
        }
    };

    const insertImage = () => {
        const url = prompt('Nhập URL hình ảnh:');
        if (url) {
            execCommand('insertImage', url);
        }
    };

    // Xử lý submit
    const handleSubmit = (status) => {
        const submitData = { ...formData, status };
        console.log('Dữ liệu bài viết:', submitData);
        alert(`Bài viết đã được ${status === 'published' ? 'xuất bản' : 'lưu nháp'} thành công!`);
    };

    const getCategoryName = (categoryId) => {
        return categories.find(cat => cat.id === categoryId)?.name || 'Chưa chọn';
    };

    useEffect(() => {
        if (!isLoading && articleData?.data) {
            setImagePreview(articleData.data.imageUrl);
        }
    }, [isLoading, articleData]);

    if (isLoading) {
        
        return <EditArticlesSkeleton />;
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Đã xảy ra lỗi</h2>
                    <p className="text-gray-600">{error.message || 'Không thể tải dữ liệu bài viết.'}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100">
            {/* WordPress-style Header */}
            <div className="bg-white border-b border-gray-200 px-4 py-3">
                <div className="flex items-center justify-between max-w-full">
                    <div className="flex items-center space-x-4">
                        <h1 className="text-xl font-semibold text-gray-800">
                            {formData.title || 'Thêm bài viết mới'}
                        </h1>
                        <span className="text-sm text-gray-500">
                            {isPreviewMode ? 'Xem trước' : 'Chỉnh sửa'}
                        </span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <button
                            onClick={() => setIsPreviewMode(!isPreviewMode)}
                            className="px-3 py-1 text-sm border border-gray-300 text-gray-700 rounded hover:bg-gray-50"
                        >
                            <Eye className="inline w-4 h-4 mr-1" />
                            {isPreviewMode ? 'Chỉnh sửa' : 'Xem trước'}
                        </button>
                        <button
                            onClick={() => handleSubmit('draft')}
                            className="px-4 py-1 text-sm bg-gray-600 text-white rounded hover:bg-gray-700"
                        >
                            Lưu nháp
                        </button>
                        <button
                            onClick={() => handleSubmit('published')}
                            className="px-4 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
                        >
                            Xuất bản
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex max-w-full">
                {/* Main Content Area */}
                <div className="flex-1 py-6">
                    {!isPreviewMode ? (
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                            {/* Title Input - WordPress style */}
                            <div className="p-6 border-b border-gray-200">
                                <input
                                    type="text"
                                    value={articleData.data.title}
                                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                    className="w-full text-3xl font-normal text-gray-900 placeholder-gray-400 border-0 outline-none resize-none"
                                    placeholder="Chỉnh sửa tiêu đề"
                                    style={{ fontSize: '1.875rem', lineHeight: '2.25rem' }}
                                />
                            </div>

                            {/* Rich Text Editor */}
                            <div className="p-6">
                                {/* Toolbar */}
                                <div className="border border-gray-300 rounded-t bg-gray-50 p-3 flex items-center space-x-1">
                                    <button
                                        type="button"
                                        onClick={() => execCommand('bold')}
                                        className="p-2 hover:bg-gray-200 rounded transition-colors"
                                        title="Đậm"
                                    >
                                        <Bold className="w-4 h-4" />
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => execCommand('italic')}
                                        className="p-2 hover:bg-gray-200 rounded transition-colors"
                                        title="Nghiêng"
                                    >
                                        <Italic className="w-4 h-4" />
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => execCommand('underline')}
                                        className="p-2 hover:bg-gray-200 rounded transition-colors"
                                        title="Gạch chân"
                                    >
                                        <Underline className="w-4 h-4" />
                                    </button>
                                    <div className="w-px bg-gray-300 h-6 mx-2" />
                                    <button
                                        type="button"
                                        onClick={() => execCommand('insertUnorderedList')}
                                        className="p-2 hover:bg-gray-200 rounded transition-colors"
                                        title="Danh sách"
                                    >
                                        <List className="w-4 h-4" />
                                    </button>
                                    <button
                                        type="button"
                                        onClick={insertLink}
                                        className="p-2 hover:bg-gray-200 rounded transition-colors"
                                        title="Chèn liên kết"
                                    >
                                        <Link className="w-4 h-4" />
                                    </button>
                                    <button
                                        type="button"
                                        onClick={insertImage}
                                        className="p-2 hover:bg-gray-200 rounded transition-colors"
                                        title="Chèn hình ảnh"
                                    >
                                        <Image className="w-4 h-4" />
                                    </button>
                                    <div className="w-px bg-gray-300 h-6 mx-2" />
                                    <select
                                        onChange={(e) => execCommand('formatBlock', e.target.value)}
                                        className="text-sm border-0 bg-transparent focus:ring-0"
                                        defaultValue="p"
                                    >
                                        <option value="p">Đoạn văn</option>
                                        <option value="h1">Tiêu đề 1</option>
                                        <option value="h2">Tiêu đề 2</option>
                                        <option value="h3">Tiêu đề 3</option>
                                        <option value="h4">Tiêu đề 4</option>
                                    </select>
                                </div>

                                {/* Content Editor */}
                                <div
                                    ref={contentRef}
                                    contentEditable
                                    onInput={handleContentChange}
                                    className="min-h-96 p-4 border-l border-r border-b border-gray-300 rounded-b focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-base leading-relaxed"
                                    style={{ whiteSpace: 'pre-wrap' }}
                                    suppressContentEditableWarning={true}
                                >
                                    {!formData.content && (
                                        <span className="text-gray-400">Bắt đầu viết nội dung bài viết của bạn...</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ) : (
                        /* Preview Mode */
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
                            <article className="prose prose-lg max-w-none">
                                <header className="mb-8">
                                    <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
                                        {formData.title || 'Tiêu đề bài viết'}
                                    </h1>
                                    <div className="flex items-center text-sm text-gray-600 space-x-4 mb-4">
                                        <span className="flex items-center">
                                            <User className="w-4 h-4 mr-1" />
                                            Admin
                                        </span>
                                        <span className="flex items-center">
                                            <Calendar className="w-4 h-4 mr-1" />
                                            {new Date().toLocaleDateString('vi-VN')}
                                        </span>
                                        <span className="flex items-center">
                                            <Tag className="w-4 h-4 mr-1" />
                                            {getCategoryName(formData.category)}
                                        </span>
                                    </div>
                                    {formData.description && (
                                        <p className="text-xl text-gray-600 leading-relaxed font-light">
                                            {formData.description}
                                        </p>
                                    )}
                                </header>

                                {formData.imageUrl && (
                                    <div className="mb-8">
                                        <img
                                            src={formData.imageUrl}
                                            alt="Hình ảnh bài viết"
                                            className="w-full h-auto rounded-lg shadow-md"
                                        />
                                    </div>
                                )}

                                <div
                                    className="text-gray-800 leading-relaxed"
                                    dangerouslySetInnerHTML={{
                                        __html: formData.content || '<p style="color: #9ca3af; font-style: italic;">Nội dung bài viết sẽ hiển thị ở đây...</p>'
                                    }}
                                />
                            </article>
                        </div>
                    )}
                </div>

                {/* WordPress-style Sidebar */}
                <div className="w-80 py-6 space-y-4 ml-4">
                    {/* Publish Box */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                        <div className="px-4 py-3 border-b border-gray-200 bg-gray-50 rounded-t-lg">
                            <h3 className="text-sm font-medium text-gray-900 flex items-center">
                                <Settings className="w-4 h-4 mr-2" />
                                Xuất bản
                            </h3>
                        </div>
                        <div className="p-4 space-y-4">
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-600">Trạng thái:</span>
                                <span className="text-blue-600 font-medium">Nháp</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-600">Hiển thị:</span>
                                <span className="text-gray-900">Công khai</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-600">Xuất bản ngay:</span>
                                <span className="text-gray-900">{new Date().toLocaleDateString('vi-VN')}</span>
                            </div>
                        </div>
                    </div>

                    {/* Categories */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                        <div className="px-4 py-3 border-b border-gray-200 bg-gray-50 rounded-t-lg">
                            <h3 className="text-sm font-medium text-gray-900 flex items-center">
                                <Tag className="w-4 h-4 mr-2" />
                                Danh mục
                            </h3>
                        </div>
                        <div className="p-4">
                            <select
                                value={formData.category}
                                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                className="w-full p-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            >
                                {categories.map(category => (
                                    <option key={category.id} value={category.id}>
                                        {category.name}
                                    </option>
                                ))}
                            </select>
                            <button className="mt-2 text-sm text-blue-600 hover:text-blue-800 flex items-center">
                                <Plus className="w-3 h-3 mr-1" />
                                Thêm danh mục mới
                            </button>
                        </div>
                    </div>

                    {/* Featured Image */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                        <div className="px-4 py-3 border-b border-gray-200 bg-gray-50 rounded-t-lg">
                            <h3 className="text-sm font-medium text-gray-900 flex items-center">
                                <Image className="w-4 h-4 mr-2" />
                                Ảnh đại diện
                            </h3>
                        </div>
                        <div className="p-4">
                            {imagePreview ? (
                                <div className="relative">
                                    <img
                                        src={getFullImageUrl(imagePreview)}
                                        alt="Preview"
                                        className="w-full h-32 object-cover rounded-lg"
                                    />
                                    <button
                                        type="button"
                                        onClick={removeImage}
                                        className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-colors"
                                    >
                                        <X className="w-3 h-3" />
                                    </button>
                                </div>
                            ) : (
                                <div className="text-center">
                                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 hover:border-blue-400 transition-colors">
                                        <Image className="mx-auto h-8 w-8 text-gray-400 mb-2" />
                                        <label className="cursor-pointer">
                                            <span className="text-sm text-blue-600 hover:text-blue-800">
                                                Chọn ảnh đại diện
                                            </span>
                                            <input
                                                type="file"
                                                className="hidden"
                                                accept="image/*"
                                                onChange={handleImageUpload}
                                            />
                                        </label>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Excerpt */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                        <div className="px-4 py-3 border-b border-gray-200 bg-gray-50 rounded-t-lg">
                            <h3 className="text-sm font-medium text-gray-900 flex items-center">
                                <FileText className="w-4 h-4 mr-2" />
                                Tóm tắt
                            </h3>
                        </div>
                        <div className="p-4">
                            <textarea
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                rows={4}
                                className="w-full p-3 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                                placeholder="Viết tóm tắt ngắn gọn về bài viết..."
                            />
                            <p className="mt-2 text-xs text-gray-500">
                                Tóm tắt sẽ hiển thị trong danh sách bài viết và tìm kiếm.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditArticles;