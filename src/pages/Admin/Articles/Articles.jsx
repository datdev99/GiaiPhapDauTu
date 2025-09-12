import { Edit, Eye, Plus, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import path from "../../../constants/path";
import { useAllArticles, useDeleteArticle } from "../../../queries/article.query";
import { DateFormat } from "../../../utils/helper";
import ArticleSkeleton from "../../../components/Skeleton/ArticleSkeleton";
import { Popconfirm } from "antd";

// Error Component
const ErrorMessage = ({ error }) => {
  return (
    <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
      <div className="text-red-600 font-medium mb-2">Có lỗi xảy ra khi tải dữ liệu</div>
      <div className="text-red-500 text-sm">{error?.message || "Vui lòng thử lại sau"}</div>
    </div>
  );
};

const Articles = () => {
  const {data: recentPosts, isLoading, isError, error} = useAllArticles();
  const {mutate: deleteArticle} = useDeleteArticle();

  return (
    <div>
      <div>
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Bài viết</h1>
            <p className="text-gray-600">Quản lý tất cả bài viết trên website</p>
          </div>
          <Link to={path.admin.articles.add}>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors flex items-center">
              <Plus className="h-4 w-4 mr-2" />
              Thêm bài viết mới
            </button>
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-800">Bài viết gần đây</h3>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors flex items-center">
              <Plus className="h-4 w-4 mr-2" />
              Thêm mới
            </button>
          </div>
          
          <div className="overflow-x-auto">
            {isError ? (
              <div className="p-6">
                <ErrorMessage error={error} />
              </div>
            ) : (
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tiêu đề</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Thể loại</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Trạng thái</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Ngày</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Bình luận</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Lượt xem</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Thao tác</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {isLoading ? (
                    // Hiển thị skeleton loading
                    Array.from({ length: 5 }).map((_, index) => (
                      <ArticleSkeleton key={index} />
                    ))
                  ) : recentPosts.data?.length > 0 ? (
                    // Hiển thị dữ liệu thực
                    recentPosts.data.map((post) => (
                      <tr key={post.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div className="text-sm font-medium text-gray-900 hover:text-blue-600 cursor-pointer truncate w-full max-w-[250px]">
                            {post.title}
                          </div>

                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">{post.category?.name}</td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex px-2 py-1 text-xs font-medium rounded ${
                            post.status === 'published' ? 'bg-green-100 text-green-800' :
                            post.status === 'draft' ? 'bg-gray-100 text-gray-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {post.status === 'published' ? 'Đã đăng' :
                             post.status === 'draft' ? 'Bản nháp' : 'Chờ duyệt'}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">{DateFormat(post.createdAt)}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{post.comments}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{post.views}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-2">
                            <button className="text-blue-600 hover:text-blue-800 transition-colors cursor-pointer">
                              <Eye className="h-4 w-4" />
                            </button>
                            <Link to={path.admin.articles.edit(post.id)}>
                              <button className="text-green-600 hover:text-green-800 transition-colors cursor-pointer">
                                <Edit className="h-4 w-4" />
                              </button>
                            </Link>
                            <Popconfirm
                              title="Xóa bài viết"
                              description="Bạn có chắc chắn muốn xóa bài viết này không?"
                              okText="Xóa"
                              cancelText="Hủy"
                              onConfirm={() => deleteArticle(post.id)}
                            >
                              <button className="text-red-600 hover:text-red-800 transition-colors cursor-pointer">
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </Popconfirm>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    // Hiển thị khi không có dữ liệu
                    <tr>
                      <td colSpan="7" className="px-6 py-8 text-center text-gray-500">
                        <div className="flex flex-col items-center">
                          <div className="text-gray-400 mb-2">📄</div>
                          <div>Không có bài viết nào</div>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;