import { CalendarOutlined } from "@ant-design/icons"
import { DateFormat, getFullImageUrl } from "../../utils/helper";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import path from "../../constants/path";

const ArticleItem = ({ data }) => {
  return (
    <>
      <div key={data.id} className="bg-white rounded-lg sm:rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group transform hover:-translate-y-2">
        <div className="relative overflow-hidden">
          <img 
            src={getFullImageUrl(data.imageUrl)} 
            alt={data.title}
            className="w-full cursor-pointer h-40 sm:h-48 lg:h-52 object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        
        <div className="p-4 sm:p-6">
          <Link to={path.client.newsDetail(data.id)}>
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors leading-tight">
              {data.title}
            </h3>
          </Link>
          {/* <p className="text-gray-600 mb-3 sm:mb-4 line-clamp-3 text-sm sm:text-base leading-relaxed">{data.createdAt}</p> */}
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4 space-y-2 sm:space-y-0">
            <div className="flex items-center space-x-2">
              <CalendarOutlined className="mr-2" />
              {DateFormat(data.createdAt)}
            </div>
          </div>

          <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors group text-sm sm:text-base">
            <span>Đọc thêm</span>
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </>
  );
};

export default ArticleItem;
