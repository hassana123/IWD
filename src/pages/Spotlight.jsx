import { motion } from "framer-motion";
import { photos } from "../data/Spotlight";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const Spotlight = () => {
  return (
    <div>
      {/* Spotlight Header Section */}
      <section className="bg-gradient-to-r from-wtmblue/80 to-wtmteal/80 py-5 mt-10">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl mt-3  md:text-5xl font-bold text-white mb-6">
              Event Spotlight 
            </h1>
            <p className="text-xl text-white mb-6">
              Relive the unforgettable moments from our past events!
            </p>
          </motion.div>
        </div>
      </section>

      {/* 🎥 Animated Image Slider */}
      <section className="py-10 bg-gradient-to-b from-wtmblue/10 to-wtmteal/10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-wtmblue text-center mb-10">
            Event Highlights
          </h2>

          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation
            className="w-[100%]"
          >
            {photos.map((photo, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    type: "spring",
                    stiffness: 100,
                  }}
                  className=" w-[100%] relative rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
                >
                  <img
                    src={photo.url}
                    alt={photo.caption}
                    className="w-[100%] h-72 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-0 left-0 right-0 py-4">
                      <p className="text-white text-lg font-semibold">
                        🎆 {photo.caption} 🎇
                      </p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* 🎬 Event Highlights YouTube Video */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-wtmblue text-center mb-10">
            Full Event Recap 🎥
          </h2>
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative w-full h-0 pb-[56.25%]"
            >
              <iframe
                src="https://www.youtube.com/embed/SqjYgKXXDnc?si=s3aO_yEZX4dka-7D"
                title="Event Highlights"
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                allowFullScreen
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Spotlight;
