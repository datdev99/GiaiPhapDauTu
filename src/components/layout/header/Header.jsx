import { Link, useLocation } from "react-router-dom"
import path from "../../../constants/path"
import { Menu, X, Search, ChevronDown } from 'lucide-react';
import { useState } from "react";
import logo from '../../../assets/logo.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isTrainingDropdownOpen, setIsTrainingDropdownOpen] = useState(false);
    const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
    const location = useLocation();

    // Function to check if current path matches the navigation item
    const isActivePage = (pathToCheck) => {
        return location.pathname === pathToCheck;
    };

    // Check if any training subpage is active
    const isTrainingActive = () => {
        const trainingPaths = [
            path.client.training?.video,
            path.client.training?.ebook,
            path.client.training?.knowledge
        ].filter(Boolean);
        return trainingPaths.some(p => isActivePage(p));
    };

    const isProductActive = () => {
        const trainingPaths = [
            path.client.product?.congcu,
            path.client.product?.copytrade,
            path.client.product?.thietkedanhmuc,
            path.client.product?.tuvan
        ].filter(Boolean);
        return trainingPaths.some(p => isActivePage(p));
    };

    // Component for navigation link with active indicator
    const NavLink = ({ to, href, children, className = "" }) => {
        const isActive = to ? isActivePage(to) : false;
        const baseClassName = `relative text-gray-600 hover:text-blue-600 transition-colors font-medium ${
            isActive ? 'text-blue-600' : ''
        } ${className}`;

        const ActiveIndicator = () => (
            isActive && <span className="absolute top-6 left-0 right-0 h-1 bg-gradient-to-t from-[#141737] via-[#1f1f4a] to-[#2a2a5a]"></span>
        );

        if (to) {
            return (
                <Link to={to} className={baseClassName}>
                    {children}
                    <ActiveIndicator />
                </Link>
            );
        }

        return (
            <a href={href} className={baseClassName}>
                {children}
                <ActiveIndicator />
            </a>
        );
    };

    // Dropdown Menu Component
    const DropdownMenu = ({ trigger, children, isOpen, setIsOpen }) => {
        return (
            <div 
                className="relative"
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
            >
                {trigger}
                {isOpen && (
                    <div className="absolute top-full left-0 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                        <div className="py-2">
                            {children}
                        </div>
                    </div>
                )}
            </div>
        );
    };

    return (
        <header className="bg-white shadow-lg sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <Link to={path.client.homepage}>
                            <img src={logo} width={180} alt="AZ GROUP" />
                        </Link>
                    </div>

                    <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
                        <NavLink to={path.client.homepage}>Trang chủ</NavLink>
                        
                        
                        {/* Training Dropdown */}
                        <DropdownMenu
                            isOpen={isProductDropdownOpen}
                            setIsOpen={setIsProductDropdownOpen}
                            trigger={
                                <div className={`relative flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors font-medium cursor-pointer ${
                                    isProductActive() ? 'text-blue-600' : ''
                                }`}>
                                    <span>Sản Phẩm</span>
                                    <ChevronDown className="w-4 h-4" />
                                    {isProductActive() && (
                                        <span className="absolute top-6 left-0 right-0 h-1 bg-gradient-to-t from-[#141737] via-[#1f1f4a] to-[#2a2a5a]"></span>
                                    )}
                                </div>
                            }
                        >
                            <Link 
                                to={path.client.product?.copytrade || "#"}
                                className="block px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors border-b-gray-100"
                            >
                                Copytrade
                            </Link>
                            <Link 
                                to={path.client.product?.congcu || "#"}
                                className="block px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors border-b-gray-100"
                            >
                                Công cụ hỗ trợ giao dịch Indicator
                            </Link>
                            <Link 
                                to={path.client.product?.tuvan || "#"}
                                className="block px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors border-b-gray-100"
                            >
                                Tư vấn giao dịch cá nhân
                            </Link>
                            {/* <Link 
                                to={path.client.product?.thietkedanhmuc || "#"}
                                className="block px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                            >
                                Thiết kế danh mục đầu tư
                            </Link> */}
                        </DropdownMenu>

                        {/* Training Dropdown */}
                        <DropdownMenu
                            isOpen={isTrainingDropdownOpen}
                            setIsOpen={setIsTrainingDropdownOpen}
                            trigger={
                                <div className={`relative flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors font-medium cursor-pointer ${
                                    isTrainingActive() ? 'text-blue-600' : ''
                                }`}>
                                    <span>Đào tạo</span>
                                    <ChevronDown className="w-4 h-4" />
                                    {isTrainingActive() && (
                                        <span className="absolute top-6 left-0 right-0 h-1 bg-gradient-to-t from-[#141737] via-[#1f1f4a] to-[#2a2a5a]"></span>
                                    )}
                                </div>
                            }
                        >
                            <Link 
                                to={path.client.training?.video || "#"}
                                className="block px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                            >
                                Video
                            </Link>
                            <Link 
                                to={path.client.training?.ebook || "#"}
                                className="block px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                            >
                                Ebook
                            </Link>
                            <Link 
                                to={path.client.training?.knowledge || "#"}
                                className="block px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                            >
                                Kiến thức
                            </Link>
                        </DropdownMenu>
                        <NavLink to={path.client.news}>Tin tức</NavLink>
                        <NavLink to={path.client.careers}>Tuyển dụng</NavLink>
                        <NavLink to={path.client.about}>Về chúng tôi</NavLink>
                        <NavLink to={path.client.contact}>Liên hệ</NavLink>
                    </nav>

                    {/* Search and Mobile Menu */}
                    <div className="flex items-center space-x-3 sm:space-x-4">
                        <Search className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 cursor-pointer hover:text-blue-600 transition-colors" />
                        <button
                            className="lg:hidden p-1"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="lg:hidden py-4 border-t bg-white">
                        <nav className="flex flex-col space-y-1">
                            <Link 
                                to={path.client.homepage}
                                className={`text-gray-600 hover:text-blue-600 hover:bg-gray-50 py-3 px-2 rounded transition-colors font-medium ${
                                    isActivePage(path.client.homepage) ? 'text-blue-600 bg-blue-50' : ''
                                }`}
                            >
                                Trang chủ
                            </Link>
                            
                            
                            {/* Mobile Training Menu */}
                            <div>
                                <button 
                                    onClick={() => setIsTrainingDropdownOpen(!isTrainingDropdownOpen)}
                                    className={`w-full text-left flex items-center justify-between text-gray-600 hover:text-blue-600 hover:bg-gray-50 py-3 px-2 rounded transition-colors font-medium ${
                                        isTrainingActive() ? 'text-blue-600 bg-blue-50' : ''
                                    }`}
                                >
                                    <span>Đào tạo</span>
                                    <ChevronDown className={`w-4 h-4 transition-transform ${isTrainingDropdownOpen ? 'rotate-180' : ''}`} />
                                </button>
                                {isTrainingDropdownOpen && (
                                    <div className="ml-4 mt-1 space-y-1">
                                        <Link 
                                            to={path.client.training?.video || "#"}
                                            className="block text-gray-500 hover:text-blue-600 hover:bg-gray-50 py-2 px-2 rounded transition-colors"
                                        >
                                            Video
                                        </Link>
                                        <Link 
                                            to={path.client.training?.ebook || "#"}
                                            className="block text-gray-500 hover:text-blue-600 hover:bg-gray-50 py-2 px-2 rounded transition-colors"
                                        >
                                            Ebook
                                        </Link>
                                        <Link 
                                            to={path.client.training?.knowledge || "#"}
                                            className="block text-gray-500 hover:text-blue-600 hover:bg-gray-50 py-2 px-2 rounded transition-colors"
                                        >
                                            Kiến thức
                                        </Link>
                                    </div>
                                )}
                            </div>

                            <Link to={path.client.news} className="text-gray-600 hover:text-blue-600 hover:bg-gray-50 py-3 px-2 rounded transition-colors font-medium">Tin tức</Link>
                            <Link 
                                to={path.client.careers}
                                className={`text-gray-600 hover:text-blue-600 hover:bg-gray-50 py-3 px-2 rounded transition-colors font-medium ${
                                    isActivePage(path.client.careers) ? 'text-blue-600 bg-blue-50' : ''
                                }`}
                            >
                                Tuyển dụng
                            </Link>
                            <Link 
                                to={path.client.about}
                                className={`text-gray-600 hover:text-blue-600 hover:bg-gray-50 py-3 px-2 rounded transition-colors font-medium ${
                                    isActivePage(path.client.about) ? 'text-blue-600 bg-blue-50' : ''
                                }`}
                            >
                                Về chúng tôi
                            </Link>
                            
                            <Link 
                                to={path.client.contact}
                                className={`text-gray-600 hover:text-blue-600 hover:bg-gray-50 py-3 px-2 rounded transition-colors font-medium ${
                                    isActivePage(path.client.contact) ? 'text-blue-600 bg-blue-50' : ''
                                }`}
                            >
                                Liên hệ
                            </Link>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header