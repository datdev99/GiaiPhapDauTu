import React, { useState } from 'react';
import { 
  Bell,
  User,
  LogOut,
} from 'lucide-react';
import AdminSidebar from '../../admin/AdminSidebar';
import { Link } from 'react-router-dom';
import path from '../../../constants/path';
import useAuth from '../../../useAuth';
// import useAuth from '../../../useAuth';

const AdminLayout = ({children}) => {
  useAuth();
  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Admin Bar */}
      <div className="bg-gray-800 text-white px-4 py-2 text-sm sticky top-0 z-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="font-medium">AZ GROUP</span>
            <span className="text-gray-300">|</span>
            <Link to={path.client.homepage} className="text-gray-300 hover:text-white">Xem trang web</Link>
          </div>
          <div className="flex items-center space-x-4">
            <Bell className="h-4 w-4 cursor-pointer" />
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center space-x-2 text-gray-300 hover:text-white cursor-pointer"
              >
                <User className="h-4 w-4" />
                <span>Xin chào, Admin</span>
              </button>
              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Hồ sơ</a>
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Cài đặt</a>
                  <hr className="my-2" />
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 flex items-center">
                    <LogOut className="h-4 w-4 mr-2" />
                    Đăng xuất
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <AdminSidebar />

        {/* Main Content */}
        <div className="flex-1 p-6 ml-[250px]">
          {/* {renderMainContent()} */}
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;