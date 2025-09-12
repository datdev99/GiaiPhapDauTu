import { Eye, Target, Heart, Users, TrendingUp, Shield, Award, Globe } from 'lucide-react';
// import Header from '../../../components/layout/header/Header';

const AboutCompany = () => {
  const coreValues = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Tính Minh Bạch",
      description: "Chúng tôi cam kết cung cấp thông tin chính xác, minh bạch và kịp thời cho mọi khách hàng."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Hướng Khách Hàng",
      description: "Đặt lợi ích khách hàng lên hàng đầu, luôn lắng nghe và đáp ứng nhu cầu một cách tốt nhất."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Đổi Mới Sáng Tạo",
      description: "Không ngừng cải tiến và áp dụng công nghệ tiên tiến để nâng cao trải nghiệm giao dịch."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Chuyên Nghiệp",
      description: "Duy trì tiêu chuẩn chuyên nghiệp cao nhất trong mọi hoạt động và dịch vụ."
    }
  ];

  const stats = [
    { number: "10+", label: "Năm Kinh Nghiệm", icon: <Globe className="w-6 h-6" /> },
    { number: "50K+", label: "Khách Hàng Tin Tưởng", icon: <Users className="w-6 h-6" /> },
    { number: "24/5", label: "Hỗ Trợ Khách Hàng", icon: <Shield className="w-6 h-6" /> },
    { number: "98%", label: "Tỷ Lệ Hài Lòng", icon: <Award className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-t from-[#141737] via-[#1f1f4a] to-[#2a2a5a] text-white py-12 sm:py-16 lg:py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-20 md:py-24 lg:py-32 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent leading-tight">
              Về Chúng Tôi
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              Đối tác tin cậy trong hành trình đầu tư và giao dịch forex của bạn
            </p>
          </div>
        </div>
        {/* Decorative waves */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-8 sm:h-12 fill-slate-50">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
          </svg>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-3 sm:mb-4">
                  <div className="p-2 sm:p-3 bg-blue-100 rounded-full text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <div className="w-5 h-5 sm:w-6 sm:h-6">
                      {stat.icon}
                    </div>
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-sm sm:text-base text-gray-600 px-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Vision & Mission Section */}
      <div className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            {/* Vision */}
            <div className="group">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center mb-4 sm:mb-6">
                  <div className="p-2 sm:p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mb-3 sm:mb-0 sm:mr-4 self-start">
                    <Eye className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Tầm Nhìn</h2>
                </div>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
                  Trở thành biểu tượng niềm tin hàng đầu Việt Nam về các giải pháp đầu tư – phát triển tài chính cho cá nhân và doanh nghiệp.
                </p>
                <div className="p-3 sm:p-4 bg-blue-50 rounded-lg sm:rounded-xl">
                  <p className="text-blue-800 font-medium italic text-sm sm:text-base">
                    "Kết nối Việt Nam với thị trường tài chính toàn cầu"
                  </p>
                </div>
              </div>
            </div>

            {/* Mission */}
            <div className="group">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center mb-4 sm:mb-6">
                  <div className="p-2 sm:p-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mb-3 sm:mb-0 sm:mr-4 self-start">
                    <Target className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Sứ Mệnh</h2>
                </div>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
                  Mang đến cho cộng đồng một hệ sinh thái đầu tư – tự do tài chính uy tín và thịnh vượng bằng sự tận tâm, uy tín và chuyên nghiệp.
                </p>
                <div className="p-3 sm:p-4 bg-green-50 rounded-lg sm:rounded-xl">
                  <p className="text-green-800 font-medium italic text-sm sm:text-base">
                    "Đồng hành cùng thành công của mỗi khách hàng"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="flex justify-center mb-3 sm:mb-4">
              <div className="p-2 sm:p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full">
                <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">Giá Trị Cốt Lõi</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-xs sm:max-w-md lg:max-w-2xl mx-auto px-4">
              Những nguyên tắc định hướng mọi hoạt động và quyết định của chúng tôi
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 sm:hover:-translate-y-3 border border-gray-100">
                  <div className="text-center">
                    <div className="inline-flex p-3 sm:p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl sm:rounded-2xl text-white mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                      <div className="w-6 h-6 sm:w-8 sm:h-8">
                        {value.icon}
                      </div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 px-2">{value.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 leading-tight">
            Sẵn Sàng Bắt Đầu Hành Trình Đầu Tư?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-blue-100 mb-6 sm:mb-8 leading-relaxed px-4 sm:px-0">
            Tham gia cùng hàng nghìn nhà đầu tư thông minh đã chọn chúng tôi làm đối tác tin cậy
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-900 font-semibold rounded-full hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-base">
              Mở Tài Khoản Ngay
            </button>
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-base">
              Tìm Hiểu Thêm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;