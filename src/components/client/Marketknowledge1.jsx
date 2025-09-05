import { getFullImageUrl } from '../../utils/helper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import { useGiaoDich } from '../../queries/news.query';

const Marketknowledge1 = () => {
    const { data: articles, isLoading, isError } = useGiaoDich();

    return (
        <>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-8'>
                <Swiper
                    breakpoints={{
                        0: { // mobile
                        slidesPerView: 1,
                        },
                        640: { // tablet
                        slidesPerView: 2,
                        },
                        1024: { // desktop
                        slidesPerView: 3,
                        },
                    }}
                    centeredSlides={true}
                    spaceBetween={0}
                    loop={true}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    freeMode={true}
                    pagination={{
                    clickable: true,
                    infinite: true,
                    }}
                    modules={[Autoplay ,FreeMode]}
                    className="mySwiper"
                >
                    {
                        articles && articles.data.map((slide) => (
                            <SwiperSlide key={slide.id} className="w-full flex-shrink-0 relative">
                                <img src={getFullImageUrl(slide.imageUrl)} className='w-full h-full' alt="" />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </>
    )
}

export default Marketknowledge1