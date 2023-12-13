/** @format */
"use client";

import { Box, Image } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { createContext } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

import { Autoplay } from "swiper/modules";
// import logo from "../assets/logo.png";
// import logo1 from "../assets/logo1.png";
// import logo2 from "../assets/logo2.png";
// import logo3 from "../assets/logo3.png";
// import logo4 from "../assets/logo4.png";

const SwiperSlider = () => {
  const logos = [
    "https://www.heygotrade.com/static/4073b61adb815bb2d3bcd0a33205615a/ee95e/tsla.png",
    "https://www.heygotrade.com/static/8facd9c2dd185de8a8a37e0a73ef4629/ee95e/sbux.png",
    "https://www.heygotrade.com/static/618b2deb3ab3c8aeb49aeb59718a50ae/ee95e/nflx.png",
    "https://www.heygotrade.com/static/b15932087d3fb1c4595b1602bfcd2f69/ee95e/nke.png",
    "https://www.heygotrade.com/static/31fe4c36a25df835f635368141dbff98/ee95e/msft.png",
    "https://www.heygotrade.com/static/824e2a2872416fa919d1a994be49cd5f/ee95e/aapl.png",
    "https://www.heygotrade.com/static/2a930fb8205c4561b7688566102b3e65/ee95e/googl.png",
    "https://www.heygotrade.com/static/d9082f6c733f2bed7ff9f90bf43a74d8/3fe45/mtch.png",
    "https://www.heygotrade.com/static/04e5953729bbe63897eefe6aa630344e/ee95e/fb.png",
    "https://upload.wikimedia.org/wikipedia/commons/archive/7/7b/20220624045737%21Zoom_Communications_Logo.svg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8tVitevGYN09YgZE-lwAg_4i8ec4SNhWhv2bElkRNWw&s",
    "https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg",
  ];
  return (
    <Box my={"24px"} maxW={"30rem"}>
      <Swiper
        spaceBetween={10}
        slidesPerView={5}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        navigation={false}
        modules={[Autoplay]}
      >
        {logos.map((image, index) => (
          <SwiperSlide key={index}>
            <Box pos={"relative"}>
              <Image src={image} alt={`logo ${index + 1}`} h={"50px"} />
            </Box>
          </SwiperSlide>
        ))}
        <Box
          top={0}
          pos={"absolute"}
          h="50px"
          w={"100%"}
          bgGradient="linear(to-l,#FFFFFF,  transparent, transparent, #FFFFFF)"
          zIndex={999}
        />
      </Swiper>
    </Box>
  );
};

export default SwiperSlider;
