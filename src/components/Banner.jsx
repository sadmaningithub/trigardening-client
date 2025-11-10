// import Swiper core and required modules
import { Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './banner.css'
import banner_1 from "../assets/img/banner-1.jpg";
import banner_2 from "../assets/img/banner-2.jpg";
import banner_3 from "../assets/img/banner-3.jpg";


const Banner = () => {
    return (
        <>
            <Swiper
                className=''
                // install Swiper modules
                modules={[Pagination, A11y]}
                spaceBetween={0}
                slidesPerView={1}
                centeredSlides={true}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}

            >
                <SwiperSlide className=' '>
                    <div className='relative max-h-screen '>
                        <div className='absolute top-1/2 left-1/6 -translate-y-1/2  text-white '>
                            <div className=''>
                                <h1 className='text-6xl font-semibold mb-5'>Nurture Your Green Paradise</h1>
                                <h3 className='text-3xl font-normal mb-8'>Your slogan goes here</h3>

                                <div className='flex flex-row items-center gap-5 '>
                                    <button className='bg-[#CC7722] rounded-full  text-3xl font-medium text-white px-8 py-4'>Shop Now</button>
                                    <button className='bg-[#CC7722] rounded-full  text-3xl font-medium text-white px-8 py-4'>Call Now</button>
                                </div>
                            </div>
                        </div>
                        <img className='' src={banner_1} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner_2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner_3} alt="" />
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Banner;