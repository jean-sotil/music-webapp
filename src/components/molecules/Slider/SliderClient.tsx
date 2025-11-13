"use client";

import type React from "react";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

type SlideProps = {
  id: number;
  slide: React.ReactElement;
};

export interface SliderProps {
  autoplay?: boolean;
  className?: string;
  height?: string;
  infinite?: boolean;
  isMobile?: boolean;
  slides: SlideProps[];
}

const Slider: React.FC<SliderProps> = ({
  autoplay = false,
  className,
  height = "h-auto",
  infinite = true,
  slides,
  isMobile,
}) => {
  const slidesPerView = isMobile ? 1 : 4;
  const modules = [Pagination, Navigation];

  if (autoplay) {
    modules.push(Autoplay);
  }

  return (
    <div className={`w-full ${height} ${className || ""}`}>
      <Swiper
        modules={modules}
        spaceBetween={30}
        slidesPerView={slidesPerView}
        pagination={{ clickable: true }}
        navigation
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={infinite}
        className="mySwiper h-full w-full"
      >
        {slides.map(({ id, slide }) => (
          <SwiperSlide key={id}>{slide}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
