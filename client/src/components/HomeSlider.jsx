// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import product1 from "../assets/loveseate-1.png";
import product2 from "../assets/loveseate-2.png";
import product3 from "../assets/loveseate-3.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";

// import "./styles.css";

// import required modules
import { EffectCreative, Autoplay } from "swiper/modules";

export default function App() {
  return (
    <div className="">
      <Swiper
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[EffectCreative, Autoplay]}
        className="w-72 md:w-[500px] h-64 md:h-80 mx-auto my-8"
      >
        <SwiperSlide className="bg-gray-100 flex items-center justify-center">
          <img src={product1} alt="" />
        </SwiperSlide>
        <SwiperSlide className="bg-gray-100 flex items-center justify-center">
          <img src={product2} alt="" />
        </SwiperSlide>
        <SwiperSlide className="bg-gray-100 flex items-center justify-center">
          <img src={product3} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
