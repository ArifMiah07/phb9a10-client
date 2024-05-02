import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/bundle';
import './Banner.css';
import { Link } from "react-router-dom";
import Slide1 from './Slide1';
import Slide2 from './Slides/Slide2/Slide2';
import Slide3 from './Slides/Slide3/Slide3';

const Banner = () => {
    return (
        <div className=' mx-auto flex justify-center text-white font-black text-[56px]'>
            <Swiper
                 modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide><Slide1></Slide1>  </SwiperSlide>
                <SwiperSlide> <Slide2></Slide2> </SwiperSlide>
                <SwiperSlide> <Slide3></Slide3> </SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;