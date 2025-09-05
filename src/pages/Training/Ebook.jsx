import { useState } from 'react';
import { X, Mail, User, Phone, Download } from 'lucide-react';
import FinanciEbook from '../../assets/Fibonacci-Trading.jpg';
import BullishEngulfingEbook from '../../assets/bullish-engulfing.png';

const Ebook = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    // Kiểm tra thông tin bắt buộc
    if (!formData.name.trim() || !formData.email.trim()) {
      alert('Vui lòng nhập đầy đủ họ tên và email!');
      return;
    }
    
    // Xử lý gửi form ở đây
    console.log('Thông tin đăng ký:', formData);
    alert(`Cảm ơn ${formData.name}! Chúng tôi sẽ gửi ebook "Fibonacci Trading" tới email ${formData.email} trong vòng 24h.`);
    
    // Reset form
    setFormData({ name: '', email: '', phone: '' });
    setIsPopupOpen(false);
  };

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setFormData({ name: '', email: '', phone: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Left Content */}
          <div className="lg:max-w-lg">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              EBOOK GIAO DỊCH THEO TREND & FIBONACCI
            </h1>
            
            <div className="space-y-4 text-gray-700 mb-8">
              <p className="text-lg">
                Đây là ebook được tích lũy từ nhiều năm kinh nghiệm của đội ngũ chuyên gia AZ Group.
              </p>
              
              <p>
                Phương pháp này chủ yếu giao dịch lướt sóng, scalping trên tất cả sản phẩm ngoại tệ và vàng. Phương pháp chủ yếu thông dụng trên 
                VÀNG và GBPUSD, tỷ lệ xác suất thành công trên 80%, giao dịch phương pháp với tỷ lệ lãi khoản đẹp.
              </p>
              
              <p>
                Ebook có hướng dẫn cụ thể dành cho nhà đầu tư mới và nhà đầu tư có kinh nghiệm
              </p>
              
              <p>
                Đội ngũ chuyên gia AZ Group rất vui khi được chia sẻ kinh nghiệm và các phương pháp đến mọi nhà đầu tư.
              </p>
            </div>
            
            <button
              onClick={openPopup}
              className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-8 py-3 rounded-md transition-colors duration-300"
            >
              Đăng ký nhận ebook
            </button>
          </div>
          
          {/* Right Image */}
          <div className="flex justify-center lg:justify-end w-full">
            <div className="relative w-full">
              <img
                src={FinanciEbook}
                alt="Fibonacci Trading Books"
                className="w-full max-h-[800px] object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-16 mt-16">
          {/* Left Content */}
          <div className="lg:max-w-lg">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              PHƯƠNG PHÁP GIAO DỊCH THEO NẾN ENGULFING VÀ ĐƯỜNG TRUNG BÌNH EMA 20
            </h1>
            
            <div className="space-y-4 text-gray-700 mb-8">
              <p className="text-lg">
                Đây là ebook được tích lũy từ nhiều năm kinh nghiệm của đội ngũ chuyên gia AZ Group.
              </p>
              
              <p>
                Phương pháp này chủ yếu giao dịch lướt sóng, scalping chỉ GBPUSD vào phiên âu, áp dụng các tín hiệu hiệu rất đơn giản như EMA 20 và nến tín hiệu ENGULFING. Tỷ lệ xác suất thành công trên 80%, giao dịch phương pháp với tỷ lệ tài khoản đẹp.
              </p>
              
              <p>
                Ebook có hướng dẫn cụ thể dành cho nhà đầu tư mới và nhà đầu tư có kinh nghiệm
              </p>
              
              <p>
                Đội ngũ chuyên gia AZ Group rất vui khi được chia sẽ kinh nghiệm và các phương pháp đến mọi nhà đầu tư.
              </p>
            </div>
            
            <button
              onClick={openPopup}
              className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-8 py-3 rounded-md transition-colors duration-300"
            >
              Đăng ký nhận ebook
            </button>
          </div>
          
          {/* Right Image */}
          <div className="flex justify-center lg:justify-end w-full">
            <div className="relative w-full">
              <img
                src={BullishEngulfingEbook}
                alt="Fibonacci Trading Books"
                className="w-full max-h-[800px] object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Popup */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="relative p-6">
              {/* Close Button */}
              <button
                onClick={closePopup}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Book Info */}
              <div className="text-center mb-6">
                <img
                  src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=200&h=250&fit=crop"
                  alt="Fibonacci Trading"
                  className="w-32 h-40 object-cover rounded-lg mx-auto mb-4 shadow-lg"
                />
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Giao Dịch Theo Trend & Fibonacci
                </h2>
                <p className="text-gray-600 mb-2">bởi AZ Group</p>
                <p className="text-sm text-gray-500">
                  Trading • Forex • Vàng
                </p>
              </div>

              {/* Form */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                  Nhập thông tin để nhận ebook miễn phí
                </h3>
                
                <div>
                  <div className="block text-sm font-medium text-gray-700 mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Họ và tên *
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                    placeholder="Nhập họ và tên của bạn"
                  />
                </div>

                <div>
                  <div className="block text-sm font-medium text-gray-700 mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email *
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <div className="block text-sm font-medium text-gray-700 mb-2">
                    <Phone className="w-4 h-4 inline mr-2" />
                    Số điện thoại
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                    placeholder="0123456789 (tùy chọn)"
                  />
                </div>

                <div className="text-xs text-gray-500 bg-gray-50 p-3 rounded-lg">
                  💡 Chúng tôi sẽ gửi link download ebook tới email của bạn trong vòng 24h. 
                  Thông tin của bạn được bảo mật tuyệt đối.
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={closePopup}
                    className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all font-medium"
                  >
                    Hủy
                  </button>
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="flex-1 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Nhận ebook
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Ebook;