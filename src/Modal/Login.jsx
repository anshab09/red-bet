

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaTimes, FaAndroid } from "react-icons/fa";

const Login = ({ onClose }) => {
  // const images = [
  //   "https://reddybook.live/assets/images/log_one.png",
  //   "https://reddybook.live/assets/images/log_three.png",
  //   "https://reddybook.live/assets/images/log_four.png",

  // ];

  const images = [
    "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e", // Basketball court
    "https://images.unsplash.com/photo-1574629810360-7efbbe195018", // Soccer ball
    "https://images.unsplash.com/photo-1461896836934-ffe607ba8211", // Running
    "https://images.unsplash.com/photo-1517649763962-0c623066013b"  // Tennis
];



  return (

    <div className="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-70 p-4 md:p-0">
      <div className="w-full max-w-4xl h-[580px] bg-white rounded-xl overflow-hidden shadow-2xl flex relative">
        {/* Close button */}
        <button onClick={onClose} className="absolute top-4 right-4 z-50 text-white cursor-pointer  bg-opacity-50 rounded-full p-2 hover:bg-opacity-70">
          <FaTimes className="text-lg" />
        </button>

        {/* Left: Login Form */}
        <div className="w-full md:w-1/2 bg-[#004AAD] p-6 md:p-8 flex flex-col justify-between">
          <div className="pt-8 md:pt-12">


            <div className="flex flex-col items-center mb-6 md:mb-8">
              <h2 className="text-white text-2xl md:text-3xl font-bold text-center">
                LOGIN NOW
              </h2>
              {/* Decorative line below the title */}
              <div className="w-1/4 h-0.5 bg-white mt-2"></div>
            </div>

            <div className="mb-4 md:mb-6">
              <p className="text-white text-xs mb-1">USERNAME / MOBILE NUMBER</p>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-md bg-[#00337f] text-white border-none focus:outline-none focus:bg-[#8B0000] focus:ring-2  h-10 transition-colors"
              />
            </div>

            <div className="mb-4 md:mb-6">
              <p className="text-white text-xs  mb-1">PASSWORD</p>
              <input
                type="password"
                className="w-full px-4 py-2 rounded-md bg-[#00337f] text-white border-none focus:outline-none focus:bg-[#8B0000] focus:ring-2  h-10 transition-colors"
              />
            </div>

            <div className="flex items-center justify-between text-white text-xs md:text-sm mb-4 md:mb-6">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="form-checkbox rounded" />
                Remember Me!
              </label>
              <a href="#" className="hover:underline">
                Forgot Password
              </a>
            </div>

            <button className="w-full bg-white text-black text-sm py-1.5 mb-3 rounded-md hover:opacity-90 ">
              LOG IN
            </button>

            <button className="w-full bg-white text-black text-sm  py-1.5 mb-3 rounded-md hover:opacity-90">
              LOGIN WITH DEMO ID
            </button>

            <button className="w-full bg-[#8B0000] text-white text-md  py-1.5 rounded-md hover:opacity-90  flex items-center justify-center gap-2">
              <FaAndroid className="text-lg" />
              Download APK
            </button>
          </div>

          <div className="text-center text-white text-[10px] md:text-xs pt-4 ">
            Powered by <span className=" font-semibold text-[#8B0000]">reddybook</span>
            <br />
            reddybook.clubofficial@gmail.com

          </div>
        </div>

        {/* Right: Carousel - Hidden on small screens */}
        <div className="hidden md:block w-full md:w-1/2 h-full relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            autoplay={{ delay: 3000 }}
            loop={true}
            navigation
            className="h-full"
          >
            {images.map((img, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={img}
                  alt={`Slide ${idx + 1}`}
                  className="object-cover w-full h-full"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Login;