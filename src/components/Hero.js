import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image"
import { Navigation } from "swiper/modules";

const Hero = () => {
  return (
    /* <div
      className={`hero flex justify-center items-center w-full h-[700px] bg-black-gradient-radial bg-black bg-cover bg-top mb-12`}
    >
      <div className=' bg-[rgba(0,0,0,0.6)] w-full h-full flex justify-center items-center'>
        <h1 className=' text-7xl text-yellow-300'>Batman Shows Website</h1>
      </div>
    </div> */
    <div
      className={`hero flex justify-center items-center w-full h-[700px] bg-black-gradient-radial bg-black bg-cover bg-top mb-12 relative`}
    >  
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 5000 }} // Configura el autoplay
        loop={true} // Hace que el carrusel se repita
        navigation={true}
        modules={[Navigation]}
      >
        <SwiperSlide>
          <div className="w-full h-[700px] bg-[url('/assets/batmanhero1.jpg')] bg-cover bg-blend-multiply bg-center">
            
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[700px] bg-[url('/assets/batmanhero2.jpg')] bg-cover bg-blend-multiply bg-center">
           
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[700px] bg-[url('/assets/batmanhero3.jpg')] bg-cover bg-blend-multiply bg-center">
            <Image src={`/assets/batmanhero3.jpg`} alt={`imagen3`} height={0} width={1920} className="object-cover"/>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className='z-10 flex justify-center items-center absolute'>
          <h1 className='text-7xl text-yellow-300'>Batman Shows Website</h1> 
      </div>
    </div>
    
    
  );
};

export default Hero;
