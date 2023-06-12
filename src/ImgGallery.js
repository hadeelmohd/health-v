import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination, Navigation } from 'swiper';

import slider1 from './img/slider1.JPG';
import slider2 from './img/slider2.JPG';
import slider3 from './img/slider3.JPG';
import slider4 from './img/slider4.JPG';
import slider5 from './img/slider5.JPG';
import slider6 from './img/slider6.JPG';
import slider7 from './img/slider7.JPG';

const ImgGallery = () => {
    return (
<div className="" id=''>
      <Swiper
slidesPerView={3}
centeredSlides={true}
autoplay={{
    delay: 2500,
    disableOnInteraction: false,
  }}
spaceBetween={0}
loop={true}
pagination={{
clickable: true,
}}
navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
className="mySwiper"
      >
        <SwiperSlide>
          <img src={slider1} className="slides" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} className="slides" id="slide2" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} className="slides" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider4} className="slides" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider5} className="slides" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider6} className="slides" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider7} className="slides" alt="slide_image" />
        </SwiperSlide>

      </Swiper>
    </div>
    );
}
export default ImgGallery;