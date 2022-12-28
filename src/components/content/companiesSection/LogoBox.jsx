import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Logo from './Logo';
import logoList from '../../../services/data/companyList';

const LogoBox = () => {
  return (
    <div className="bg-gray-50 py-5">
      <Swiper
        spaceBetween={10}
        mousewheel
        loop
        slidesPerView={5}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
      >
        {logoList.map((logo) => (
          <SwiperSlide key={logo.id}>
            <Logo logo={logo.url} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LogoBox;
