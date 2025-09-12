import { Briefcase, Building, Edit, Eye, FileText, MapPin, MessageSquare, Plus, Trash2 } from 'lucide-react';
import React from 'react'

const ControlPanel = () => {
    // Mock data
  const dashboardStats = [
    { title: 'Bài viết', count: 245, icon: FileText, color: 'blue', change: '+12' },
    { title: 'Trang', count: 18, icon: FileText, color: 'green', change: '+2' },
    { title: 'Bình luận', count: 1205, icon: MessageSquare, color: 'orange', change: '+45' },
    { title: 'Việc làm', count: 89, icon: Briefcase, color: 'purple', change: '+8' }
  ];

  const recentPosts = [
    {
      id: 1,
      title: 'Xu hướng công nghệ AI trong năm 2025',
      status: 'published',
      date: '2025-09-09',
      author: 'Admin',
      comments: 12,
      views: 1250
    },
    {
      id: 2,
      title: 'Hướng dẫn phát triển ứng dụng React',
      status: 'draft',
      date: '2025-09-08',
      author: 'Editor',
      comments: 5,
      views: 890
    },
    {
      id: 3,
      title: 'Thị trường việc làm IT 2025',
      status: 'pending',
      date: '2025-09-07',
      author: 'Writer',
      comments: 8,
      views: 654
    }
  ];

  const recentJobs = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'TechCorp Vietnam',
      location: 'TP.HCM',
      salary: '25-35 triệu',
      applications: 24,
      status: 'active',
      posted: '2025-09-09'
    },
    {
      id: 2,
      title: 'Marketing Manager',
      company: 'StartUp XYZ',
      location: 'Hà Nội',
      salary: '20-30 triệu',
      applications: 18,
      status: 'active',
      posted: '2025-09-08'
    },
    {
      id: 3,
      title: 'UI/UX Designer',
      company: 'Design Studio',
      location: 'Remote',
      salary: '15-25 triệu',
      applications: 32,
      status: 'closed',
      posted: '2025-09-07'
    }
  ];

  const QuickStats = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {dashboardStats.map((stat, index) => {
        const Icon = stat.icon;
        const colorClasses = {
          blue: 'bg-blue-500 text-white',
          green: 'bg-green-500 text-white',
          orange: 'bg-orange-500 text-white',
          purple: 'bg-purple-500 text-white'
        };
        
        return (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center">
              <div className={`p-3 rounded-full ${colorClasses[stat.color]} mr-4`}>
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-800">{stat.count}</p>
                <p className="text-sm text-gray-600">{stat.title}</p>
                <span className="text-xs text-green-600 font-medium">{stat.change} tháng này</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );

  const RecentActivity = () => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800">Hoạt động gần đây</h3>
      </div>
      <div className="p-4">
        <div className="space-y-4">
          <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
            <div className="bg-blue-500 p-2 rounded-full">
              <FileText className="h-4 w-4 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-800">Bài viết mới được đăng</p>
              <p className="text-xs text-gray-600">"Xu hướng công nghệ AI" - 2 giờ trước</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
            <div className="bg-green-500 p-2 rounded-full">
              <Briefcase className="h-4 w-4 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-800">Việc làm mới được thêm</p>
              <p className="text-xs text-gray-600">"Senior Frontend Developer" - 4 giờ trước</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg">
            <div className="bg-orange-500 p-2 rounded-full">
              <MessageSquare className="h-4 w-4 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-800">Bình luận mới</p>
              <p className="text-xs text-gray-600">5 bình luận mới cần duyệt - 1 ngày trước</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const PostsTable = () => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800">Bài viết gần đây</h3>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors flex items-center">
          <Plus className="h-4 w-4 mr-2" />
          Thêm mới
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tiêu đề</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tác giả</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Trạng thái</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Ngày</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Bình luận</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Lượt xem</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Thao tác</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {recentPosts.map((post) => (
              <tr key={post.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-gray-900 hover:text-blue-600 cursor-pointer">
                    {post.title}
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{post.author}</td>
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
                <td className="px-6 py-4 text-sm text-gray-600">{post.date}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{post.comments}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{post.views}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-2">
                    <button className="text-blue-600 hover:text-blue-800">
                      <Eye className="h-4 w-4" />
                    </button>
                    <button className="text-green-600 hover:text-green-800">
                      <Edit className="h-4 w-4" />
                    </button>
                    <button className="text-red-600 hover:text-red-800">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const JobsTable = () => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800">Việc làm gần đây</h3>
        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors flex items-center">
          <Plus className="h-4 w-4 mr-2" />
          Thêm việc làm
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Vị trí</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Công ty</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Địa điểm</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Mức lương</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Ứng tuyển</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Trạng thái</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Thao tác</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {recentJobs.map((job) => (
              <tr key={job.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-gray-900 hover:text-blue-600 cursor-pointer">
                    {job.title}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Building className="h-4 w-4 mr-1" />
                    {job.company}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-1" />
                    {job.location}
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{job.salary}</td>
                <td className="px-6 py-4">
                  <span className="text-sm font-medium text-blue-600">{job.applications}</span>
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex px-2 py-1 text-xs font-medium rounded ${
                    job.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {job.status === 'active' ? 'Đang tuyển' : 'Đã đóng'}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-2">
                    <button className="text-blue-600 hover:text-blue-800">
                      <Eye className="h-4 w-4" />
                    </button>
                    <button className="text-green-600 hover:text-green-800">
                      <Edit className="h-4 w-4" />
                    </button>
                    <button className="text-red-600 hover:text-red-800">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderMainContent = () => {
    return (
          <div>
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-800 mb-2">Bảng điều khiển</h1>
              <p className="text-gray-600">Chào mừng quay trở lại! Đây là tổng quan về website của bạn.</p>
            </div>
            <QuickStats />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <PostsTable />
                <JobsTable />
              </div>
              <div>
                <RecentActivity />
                
                {/* At a Glance Widget */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                  <div className="p-4 border-b border-gray-200">
                     <h3 className="text-lg font-semibold text-gray-800">Tổng quan nhanh</h3>
                   </div>
                   <div className="p-4 space-y-3">
                     <div className="flex justify-between items-center">
                       <span className="text-sm text-gray-600">Bài viết đã đăng hôm nay</span>
                       <span className="font-semibold text-gray-800">8</span>
                     </div>
                     <div className="flex justify-between items-center">
                       <span className="text-sm text-gray-600">Bình luận chờ duyệt</span>
                       <span className="font-semibold text-orange-600">12</span>
                    </div>
                     <div className="flex justify-between items-center">
                       <span className="text-sm text-gray-600">Việc làm đang tuyển</span>
                       <span className="font-semibold text-green-600">89</span>
                     </div>
                     <div className="flex justify-between items-center">
                       <span className="text-sm text-gray-600">Ứng viên mới</span>
                     <span className="font-semibold text-blue-600">24</span>
                    </div>
                  </div>
                 </div>
               </div>
             </div>
           </div>
        );
  };


  return (
    <div>
        {renderMainContent()}
    </div>
  )
}

export default ControlPanel