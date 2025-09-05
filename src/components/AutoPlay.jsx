import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import img_prospero from '../assets/prospero2.png';

export default function Slider() {
  const slides = [
    { id: 1, title: "Slide 1", image: img_prospero },
    { id: 2, title: "Slide 2", image: img_prospero },
    { id: 3, title: "Slide 3", image: img_prospero },
  ];

  return (
    <div className="w-full max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ 
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        slidesPerView={1}
        spaceBetween={20}
        loop={slides.length > 1}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 25,
          },
        }}
        className="rounded-lg sm:rounded-xl lg:rounded-2xl shadow-md sm:shadow-lg lg:shadow-xl"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-96">
              <img
                src={slide.image}
                alt={slide.title}
                className="cursor-pointer w-full h-full object-cover rounded-lg sm:rounded-xl lg:rounded-2xl"
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}