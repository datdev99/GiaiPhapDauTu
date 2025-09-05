import FastNew from '../../components/client/FastNew/FastNew';
import EconomicCalendar from '../../components/client/EconomicCalendar/EconomicCalendar';
// import img_prospero from '../../assets/prospero1.png';
import Footer from '../../components/layout/footer/Footer';
import News from '../../components/client/News/News';
import Slider from '../../components/AutoPlay';
import Marketknowledge from '../../components/client/Marketknowledge';

const TechHomepage = () => {
  // const [currentSlide, setCurrentSlide] = useState(0);
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Slider data - Forex Market
    const slides = [
    {
        id: 1,
        title: "Vàng - Kênh đầu tư an toàn",
        description: "Phân tích xu hướng giá vàng và chiến lược đầu tư trong bối cảnh kinh tế hiện tại",
        image: "https://images.unsplash.com/photo-1610375461246-83df859d849d?w=800&h=400&fit=crop",
        category: "Vàng (GOLD)"
    },
    {
        id: 2,
        title: "Thị trường Dầu thô WTI & Brent",
        description: "Cập nhật giá dầu và các yếu tố ảnh hưởng đến thị trường năng lượng",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop",
        category: "Dầu thô (OIL)"
    },
    {
        id: 3,
        title: "EUR/USD - Cặp tiền chủ đạo",
        description: "Phân tích cặp tiền Euro/USD và những động thái của ECB",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop",
        category: "Euro (EUR/USD)"
    }
    ];

    

  // Auto slide
  

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Banner */}
      <section className="bg-gradient-to-t from-[#141737] via-[#1f1f4a] to-[#2a2a5a] text-white py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="block">Cung Cấp Giải Pháp Đầu Tư</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400 mt-2">
              AZ GROUP
            </span>
          </h1>
          {/* <ul className="text-left max-w-4xl mx-auto mb-8 space-y-4 text-gray-300 text-lg sm:text-xl md:text-2xl leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 mt-1">✔</span>
              Bạn là một nhà giao dịch mới bước vào thị trường hoặc chưa có kinh nghiệm, 
              hãy để chuyên gia hỗ trợ và cung cấp dịch vụ.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 mt-1">✔</span>
              Bạn là một nhà giao dịch đã có kinh nghiệm muốn tối đa hóa lợi nhuận, 
              chúng tôi chia sẻ thêm nhiều giải pháp, công cụ và danh mục hiệu quả.
            </li>
          </ul> */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-8">
            <div className="bg-[#1f1f4a]/60 p-6 rounded-2xl shadow-lg">
              <p className="text-lg sm:text-xl text-gray-200 leading-relaxed">
                Bạn là một nhà giao dịch mới bước vào thị trường hoặc chưa có kinh nghiệm giao dịch, 
                hãy để những chuyên gia giúp bạn bằng việc hỗ trợ và cung cấp các dịch vụ.
              </p>
            </div>
            <div className="bg-[#1f1f4a]/60 p-6 rounded-2xl shadow-lg">
              <p className="text-lg sm:text-xl text-gray-200 leading-relaxed">
                Bạn là một nhà giao dịch đã có kinh nghiệm muốn cải thiện và tối đa hóa lợi nhuận, 
                chúng tôi mang đến nhiều giải pháp, công cụ và danh mục đầu tư hiệu quả hơn.
              </p>
            </div>
          </div>

          <button className="cursor-pointer bg-gradient-to-r from-yellow-400 to-pink-500 text-[#141737] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:opacity-90 hover:scale-105 transition-all shadow-lg text-sm sm:text-base">
            YÊU CẦU TƯ VẤN
          </button>
        </div>
      </section>


      {/* Fast New */}
      <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="container grid lg:grid-cols-12 gap-4 mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="lg:col-span-8 max-h-[950px] overflow-y-auto no-scrollbar">
            <FastNew />
          </div>
          <div className='lg:col-span-4'>
            <div className="max-h-[540px] overflow-y-auto no-scrollbar">
              <EconomicCalendar />
            </div>
            <div className='mt-8 hidden lg:block'>
              <Slider />
            </div>
          </div>
        </div>
      </div>

      {/* Banner */}
      {/* <div>
        <img src={img_prospero} alt="prospero" />
      </div> */}
      

      {/* Slider */}
      <Marketknowledge slides={slides} />

      {/* News Section */}
      <News />
    </div>
  );
};

export default TechHomepage;