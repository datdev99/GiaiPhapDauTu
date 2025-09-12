import { 
  Home,
  FileText, 
  Briefcase,
  Users,
  Settings,
  BarChart3,
  Image,
  MessageSquare,
  X,
  Menu,
} from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import path from '../../constants/path';

const AdminSidebar = () => {
    const [activeMenu, setActiveMenu] = useState('dashboard');
      const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    //   const [showUserMenu, setShowUserMenu] = useState(false);

    const menuItems = [
    { id: 'dashboard', icon: Home, label: 'Bảng điều khiển', badge: null, path: path.admin.control_panel },
    { 
      id: 'posts', 
      icon: FileText, 
      label: 'Bài viết', 
      badge: '245',
      submenu: ['Tất cả bài viết', 'Thêm mới', 'Danh mục', 'Thẻ tag'],
      path: path.admin.articles.all
    },
    { 
      id: 'jobs', 
      icon: Briefcase, 
      label: 'Tuyển dụng', 
      badge: '89',
      submenu: ['Tất cả việc làm', 'Thêm mới', 'Danh mục', 'Ứng viên'],
      path: path.admin.career.all
    },
    { id: 'media', icon: Image, label: 'Thư viện', badge: null },
    { id: 'comments', icon: MessageSquare, label: 'Bình luận', badge: '12' },
    { id: 'users', icon: Users, label: 'Người dùng', badge: null },
    { id: 'analytics', icon: BarChart3, label: 'Thống kê', badge: null },
    { id: 'settings', icon: Settings, label: 'Cài đặt', badge: null }
  ];
  return (
    <div>
        <div className={`bg-white min-h-full shadow-lg fixed transition-all duration-300 ${sidebarCollapsed ? 'w-16' : 'w-64'}`}>
          <div className="p-4">
            <div className="flex items-center justify-between">
              {!sidebarCollapsed && (
                <h2 className="text-xl font-bold text-gray-800">Admin Panel</h2>
              )}
              <button
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                className="p-2 rounded hover:bg-gray-100"
              >
                {sidebarCollapsed ? <Menu className="h-5 w-5" /> : <X className="h-5 w-5" />}
              </button>
            </div>
          </div>

          <nav className="mt-4">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeMenu === item.id;
              
              return (
                <div key={item.id}>
                  <button
                    onClick={() => setActiveMenu(item.id)}
                    className={`w-full flex items-center px-4 py-3 text-left hover:bg-blue-50 transition-colors ${
                      isActive ? 'bg-blue-50 text-blue-700 border-r-4 border-blue-700' : 'text-gray-700'
                    }`}
                  >
                    <Icon className="h-5 w-5 mr-3" />
                    {!sidebarCollapsed && (
                      <>
                        <Link to={item.path}>{item.label}</Link>
                        {item.badge && (
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            isActive ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-600'
                          }`}>
                            {item.badge}
                          </span>
                        )}
                      </>
                    )}
                  </button>
                </div>
              );
            })}
          </nav>
        </div>
    </div>
  )
}

export default AdminSidebar