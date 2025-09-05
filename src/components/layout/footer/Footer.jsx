import { Facebook, Send, Youtube, Zap, MapPin, Phone, Mail } from 'lucide-react';
import Logo from '../../../assets/logo.png';
import { Link } from 'react-router-dom';
import path from '../../../constants/path';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="text-2xl font-bold text-white">
                    <Link to={path.client.homepage}><img src={Logo} alt="AZ GROUP" /></Link>
                </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="text-blue-400 mt-1 flex-shrink-0" size={18} />
                <div>
                  <p className="text-gray-300">
                    <span className="font-semibold">Địa chỉ:</span> Park 7, Vinhome Central Park, Bình Thạnh, Hồ Chí Minh
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="text-blue-400 flex-shrink-0" size={18} />
                <div>
                  <span className="font-semibold text-gray-300">Hotline:</span>
                  <a href="tel:097.119.0970" className="text-blue-300 hover:text-blue-200 transition-colors ml-2">
                    097.119.0970
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="text-blue-400 flex-shrink-0" size={18} />
                <div>
                  <span className="font-semibold text-gray-300">Email:</span>
                  <a href="mailto:azgroupbusiness.hr@gmail.com" className="text-blue-300 hover:text-blue-200 transition-colors ml-2">
                    azgroupbusiness.hr@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* About Us */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white border-b-2 border-blue-500 pb-2 inline-block">
              VỀ CHÚNG TÔI
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to={path.client.about} className="text-gray-300 hover:text-blue-300 transition-colors duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:bg-blue-300 transition-colors"></span>
                  Giới thiệu
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-300 transition-colors duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:bg-blue-300 transition-colors"></span>
                  Tư vấn
                </a>
              </li>
              <li>
                <Link to={path.client.contact} className="text-gray-300 hover:text-blue-300 transition-colors duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:bg-blue-300 transition-colors"></span>
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white border-b-2 border-blue-500 pb-2 inline-block">
              KẾT NỐI AZ-GROUP
            </h3>
            <div className="grid grid-cols-3 gap-4">
              <a href="#" className="bg-blue-600 hover:bg-blue-500 p-3 rounded-lg transition-all duration-300 transform hover:scale-110 hover:shadow-lg group">
                <Facebook size={24} className="text-white group-hover:animate-pulse" />
              </a>
              <a href="#" className="bg-sky-500 hover:bg-sky-400 p-3 rounded-lg transition-all duration-300 transform hover:scale-110 hover:shadow-lg group">
                <Send size={24} className="text-white group-hover:animate-pulse" />
              </a>
              <a href="#" className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 p-3 rounded-lg transition-all duration-300 transform hover:scale-110 hover:shadow-lg group">
                <div className="w-6 h-6 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-xs font-bold text-transparent bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text">TT</span>
                </div>
              </a>
              <a href="#" className="bg-red-600 hover:bg-red-500 p-3 rounded-lg transition-all duration-300 transform hover:scale-110 hover:shadow-lg group">
                <Youtube size={24} className="text-white group-hover:animate-pulse" />
              </a>
              <a href="#" className="bg-blue-500 hover:bg-blue-400 p-3 rounded-lg transition-all duration-300 transform hover:scale-110 hover:shadow-lg group">
                <Zap size={24} className="text-white group-hover:animate-pulse" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700 bg-slate-900">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 AZ Group. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-blue-300 transition-colors">
                Chính sách bảo mật
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-300 transition-colors">
                Điều khoản sử dụng
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-300 transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      {/* <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"></div> */}
    </footer>
  );
};

export default Footer;