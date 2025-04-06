/* eslint-disable @next/next/no-img-element */
'user client'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// Import required modules
import { Autoplay } from 'swiper/modules';

export default function Carousel({swiperRef,intervalDelay}) {
    const scrollImages=[1,2,3,4,]
    return (
        <div className="relative w-full h-full">
          {/* Background Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-blue-800 opacity-50 z-10"></div>
    
          <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Store Swiper instance
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: intervalDelay, // Sync with text delay
          disableOnInteraction: false,
        }}
            className="mySwiper w-full h-full"
          >
            {scrollImages.map((src, index) => (
              <SwiperSlide key={index} className="relative w-full h-full overflow-hidden">
                <img
                  src={`/assets/slide-${src}.jpeg`} // Adjust the path to your images
                  alt={`Slide ${index + 1}`}
                  className="mySwiper-slide absolute top-0 left-0 w-full h-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      );
//   return (
//     <div className="h-full relative w-full">
//       {/* Swiper Component */}
//       <Swiper
//         onSwiper={(swiper) => (swiperRef.current = swiper)} // Store Swiper instance
//         slidesPerView={1}
//         spaceBetween={30}
//         loop={true}
//         autoplay={{
//           delay: intervalDelay, // Sync with text delay
//           disableOnInteraction: false,
//         }}
//         modules={[Autoplay]}
//         className="mySwiper"
//       >
//         {scrollImages?.map((item, i) => (
//           <SwiperSlide key={i} className="mySwiper-slide">
//             <img src={item} alt={`Slide ${i + 1}`} />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
}


