import React, { useState } from 'react';
import verticalData from '../../Data/verticalData';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './index.css';
import { Pagination } from 'swiper/modules';

const VerticalList = (e) => {

  return (
    <div className='vertList'>
      <Swiper
        centeredSlides={true}
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
        }}
        className="mySwiper"
      >
        {verticalData.map((e) =>
          <SwiperSlide key={e.id}>
            <div className="side-card">
              <div className="card-img">
                <img src={e.img} alt={e.img} className='mainImg' />
              </div>
              <div className="vert-card-body">
                <p className="para">{e.des}</p>
                <div className="price">
                  <h4>{e.price}</h4>
                  <Star stars={e.starRating} />
                </div>
              </div>
            </div>
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  )
}

export default VerticalList;

export const Star = ({ stars }) => {

  const ratingStar = Array.from({ length: 5 }, (e, index) => {
    let number = index + 1;
    return (
      <span key={index}>
        {stars >= number
          ? <img className='starIcon' src='./Assets/star-fill.svg' />
          : <img className='starIcon' src='./Assets/star.svg' />
        }
      </span>
    )
  })

  return (
    <div className="icon-style">
      {ratingStar}
    </div>
  )
}