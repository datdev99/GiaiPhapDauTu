import { Heart } from 'lucide-react';
import React, { useState } from 'react'

const CommentArticle = () => {
    const [newComment, setNewComment] = useState('');
     const [comments, setComments] = useState([
            {
                id: 1,
                author: 'Nguyễn Văn A',
                avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
                content: 'Bài viết rất hay và bổ ích. Cảm ơn tác giả đã chia sẻ!',
                time: '2 giờ trước',
                likes: 5
            },
            {
                id: 2,
                author: 'Trần Thị B',
                avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face',
                content: 'Thông tin rất chi tiết và dễ hiểu. Tôi đã áp dụng thành công.',
                time: '1 ngày trước',
                likes: 3
            }
        ]);


    const handleSubmitComment = () => {
        if (newComment.trim()) {
            const comment = {
                id: comments.length + 1,
                author: 'Bạn',
                avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop&crop=face',
                content: newComment,
                time: 'Vừa xong',
                likes: 0
            };
            setComments([...comments, comment]);
            setNewComment('');
        }
    };


    return (
        <>
            {/* Comments Section */}
            <div className="bg-white rounded-2xl shadow-xl mt-8 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Bình luận ({comments.length})
                </h3>

                {/* Comment Form */}
                <div className="mb-8">
                    <div className="flex gap-4">
                        <img
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop&crop=face"
                            alt="Your avatar"
                            className="w-10 h-10 rounded-full"
                            loading="lazy"
                        />
                        <div className="flex-1">
                            <textarea
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                                placeholder="Viết bình luận của bạn..."
                                className="w-full p-4 border border-gray-200 rounded-xl resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                rows="3"
                            />
                            <div className="mt-3 flex justify-end">
                                <button
                                    onClick={handleSubmitComment}
                                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
                                    disabled={!newComment.trim()}
                                >
                                    Đăng bình luận
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Comments List */}
                <div className="space-y-6">
                    {comments.map((comment) => (
                        <div key={comment.id} className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                            <img
                                src={comment.avatar}
                                alt={comment.author}
                                className="w-10 h-10 rounded-full"
                                loading="lazy"
                            />
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                    <h4 className="font-semibold text-gray-900">{comment.author}</h4>
                                    <span className="text-sm text-gray-500">{comment.time}</span>
                                </div>
                                <p className="text-gray-700 mb-3">{comment.content}</p>
                                <div className="flex items-center gap-4 text-sm text-gray-500">
                                    <button className="flex items-center gap-1 hover:text-blue-600 transition-colors">
                                        <Heart className="w-4 h-4" />
                                        {comment.likes}
                                    </button>
                                    <button className="hover:text-blue-600 transition-colors">
                                        Trả lời
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default CommentArticle