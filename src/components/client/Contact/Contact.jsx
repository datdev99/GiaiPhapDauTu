import { useState } from 'react';
import Header from '../../layout/header/Header';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Vui lòng điền đầy đủ các thông tin bắt buộc!');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Vui lòng nhập địa chỉ email hợp lệ!');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setShowSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }, 2000);
  };

  const contactItems = [
    {
      icon: '📍',
      title: 'Địa chỉ',
      content: 'Vinhomes Central Park - Park 7\nQuận Bình Thạnh, TP.HCM'
    },
    {
      icon: '📞',
      title: 'Điện thoại',
      content: '+84 (28) 1234 5678'
    },
    {
      icon: '✉️',
      title: 'Email',
      content: 'contact@company.com'
    },
    {
      icon: '🕒',
      title: 'Giờ làm việc',
      content: 'Thứ 2 - Thứ 6: 8:00 - 17:00\nThứ 7: 8:00 - 12:00'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-t from-[#141737] via-[#1f1f4a] to-[#2a2a5a]">
        <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                Liên Hệ Với Chúng Tôi
            </h1>
            <p className="text-xl text-white opacity-90">
                Hãy để lại thông tin, chúng tôi sẽ liên hệ lại với bạn trong thời gian sớm nhất
            </p>
            </div>

            {/* Contact Content */}
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Contact Info */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
                <h2 className="text-2xl font-bold text-gray-700 mb-6">Thông Tin Liên Hệ</h2>
                
                <div className="space-y-4">
                {contactItems.map((item, index) => (
                    <div 
                    key={index}
                    className="flex items-start p-4 bg-gray-50 rounded-xl hover:transform hover:translate-x-2 transition-all duration-300"
                    >
                    <span className="text-2xl mr-4 mt-1">{item.icon}</span>
                    <div>
                        <h3 className="font-semibold text-gray-700 mb-1">{item.title}:</h3>
                        <p className="text-gray-600 whitespace-pre-line">{item.content}</p>
                    </div>
                    </div>
                ))}
                </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
                <h2 className="text-2xl font-bold text-gray-700 mb-6">Gửi Tin Nhắn</h2>
                
                {showSuccess && (
                <div className="bg-green-500 text-white p-4 rounded-lg mb-6 animate-pulse">
                    Cảm ơn bạn! Tin nhắn của bạn đã được gửi thành công. Chúng tôi sẽ liên hệ lại trong thời gian sớm nhất.
                </div>
                )}

                <div className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Họ và Tên <span className="text-red-500">*</span>
                    </label>
                    <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-300 hover:shadow-md"
                    placeholder="Nhập họ và tên của bạn"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                    </label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-300 hover:shadow-md"
                    placeholder="example@email.com"
                    />
                </div>

                <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Số điện thoại
                    </label>
                    <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-300 hover:shadow-md"
                    placeholder="0123 456 789"
                    />
                </div>

                <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    Chủ đề <span className="text-red-500">*</span>
                    </label>
                    <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-300 hover:shadow-md"
                    placeholder="Chủ đề liên hệ"
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nội dung tin nhắn <span className="text-red-500">*</span>
                    </label>
                    <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-300 hover:shadow-md resize-none"
                    placeholder="Vui lòng mô tả chi tiết yêu cầu của bạn..."
                    />
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#2a2a5a] to-[#1f1f4a] text-white font-semibold py-3 px-6 rounded-full hover:from-[#343467] hover:to-[#252552] focus:outline-none focus:ring-4 focus:ring-blue-100 transform hover:scale-105 hover:shadow-xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                >
                    {isSubmitting ? (
                    <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Đang gửi...
                    </span>
                    ) : (
                    'Gửi Tin Nhắn'
                    )}
                </button>
                </div>
            </div>
            </div>

            {/* Map Section */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
            <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">Vị Trí Của Chúng Tôi</h2>
            <div className="rounded-2xl overflow-hidden shadow-xl">
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1959.6266412182792!2d106.72157700000001!3d10.791903!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f15c1bc15f1%3A0x5a4fef78ffd64b31!2sVinhomes%20Central%20Park%20-%20Park%207!5e0!3m2!1svi!2sus!4v1756443335090!5m2!1svi!2sus"
                width="100%" 
                height="450" 
                style={{border: 0}}
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-96 lg:h-[450px]"
                />
            </div>
            </div>
        </div>
    </div>
  );
}