import { Link } from "react-router-dom"
import path from "../../../constants/path"
import { Menu, X, Search } from 'lucide-react';
import { useState } from "react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-lg sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-sm sm:text-base">TN</span>
                        </div>
                        <span className="text-lg sm:text-xl font-bold text-gray-800">TechNews</span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
                        <Link to={path.client.homepage} className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Trang chủ</Link>
                        <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Tin tức</a>
                        <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Công nghệ</a>
                        <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Startup</a>
                        <Link to={path.client.about}>Về chúng tôi</Link>
                        <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Liên hệ</a>
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
                            <a href="#" className="text-gray-600 hover:text-blue-600 hover:bg-gray-50 py-3 px-2 rounded transition-colors font-medium">Trang chủ</a>
                            <a href="#" className="text-gray-600 hover:text-blue-600 hover:bg-gray-50 py-3 px-2 rounded transition-colors font-medium">Tin tức</a>
                            <a href="#" className="text-gray-600 hover:text-blue-600 hover:bg-gray-50 py-3 px-2 rounded transition-colors font-medium">Công nghệ</a>
                            <a href="#" className="text-gray-600 hover:text-blue-600 hover:bg-gray-50 py-3 px-2 rounded transition-colors font-medium">Startup</a>
                            <a href="#" className="text-gray-600 hover:text-blue-600 hover:bg-gray-50 py-3 px-2 rounded transition-colors font-medium">Liên hệ</a>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header