import { motion } from "framer-motion";
import { team } from "../data/Organizers"; // Importing team data
import { Twitter, Linkedin } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper.js
import "swiper/css"; // Default Swiper styles
import "swiper/css/pagination"; 
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules"; // Swiper modules

const About = () => {
  return (
    <div>
      {/* About Section with WTM Gradient */}
      <section className="bg-gradient-to-r from-wtmblue/80 to-wtmteal/80 py-5 mt-10">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl font-bold text-white mb-6">
              About IWD Kano
            </h1>
            <p className="text-md text-white mb-6">
              Empowering women in technology through connection, education, and
              inspiration.
            </p>

            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 mx-auto text-center max-w-3xl">
              <h3 className="text-2xl text-white font-semibold mb-4">
                Overview:
              </h3>
              <p className="text-lg text-white">
                We stand at a pivotal moment where AI is transforming our
                world—bringing unprecedented opportunities but also risking the
                amplification of gender biases and systemic barriers. Join us
                this International Women's Day as we bring together Nigeria's
                brightest minds to redefine what's possible in technology.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Meet the Team Section with Swiper Slider */}
      <section className="py-20 bg-gradient-to-r from-wtmblue/5 to-wtmteal/5">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-wtmblue text-center mb-12">
            Meet the Team
          </h2>

          {/* Swiper Slider for Team Members */}
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={30}
            centeredSlides={true} 
            // slidesPerView={1.5} /
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation
            className="px-4 relative"
          >
            {team.map((member, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="w-[100%] rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 bg-white"
      
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6 text-center">
                    <h3 className="text-2xl font-bold text-wtmblue mb-2">
                      {member.name}
                    </h3>
                    <p className="text-wtmteal text-lg font-semibold mb-4">
                      {member.role}
                    </p>
                    <div className="flex justify-center gap-4">
                      {member.twitter && (
                        <a
                          href={member.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full border-2 border-wtmblue text-wtmblue hover:bg-wtmblue hover:text-white transition"
                        >
                          <Twitter className="w-6 h-6" />
                        </a>
                      )}
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full border-2 border-wtmteal text-wtmteal hover:bg-wtmteal hover:text-white transition"
                        >
                          <Linkedin className="w-6 h-6" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
   {/* Our Story and Event Highlights Section */}
   <section className="md:py-10 py-5">
        <div className="w-[90%] mx-auto max-w-[900px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-wtmblue mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4">
                International Women's Day Kano celebration began in 2020 as a
                small gathering of women in tech. Today, it has grown into one
                of Northern Nigeria's largest tech events celebrating women's
                achievements in technology.
              </p>
              <h2 className="text-3xl font-bold text-wtmblue mb-6">
                Our Mission
              </h2>
              <p className="text-gray-600">
                Our mission is to inspire the next generation of women leaders
                in technology while providing a platform for networking,
                learning, and growth.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-primary/5 p-8 rounded-lg"
            >
              <h2 className="text-3xl font-bold text-wtmblue mb-6">
                Event Highlights
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-wtmteal text-2xl mr-4">•</span>
                  <span>Inspiring keynotes from industry leaders</span>
                </li>
                <li className="flex items-start">
                  <span className="text-wtmteal text-2xl mr-4">•</span>
                  <span>Interactive workshops and panel discussions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-wtmteal text-2xl mr-4">•</span>
                  <span>Networking opportunities with tech professionals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-wtmteal text-2xl mr-4">•</span>
                  <span>Career development sessions</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Swiper Custom Styling */}
      <style jsx>{`
        .swiper-button-prev,
        .swiper-button-next {
          background-color: rgba(64, 129, 236, 0.9);
          color: white;
          border-radius: 50%;
          width: 45px;
          height: 45px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease-in-out;
        }

        .swiper-button-prev:hover,
        .swiper-button-next:hover {
          background-color: rgba(0, 184, 159, 0.9);
        }

        .swiper-pagination-bullet {
          display :none;
        }

        // .swiper-pagination-bullet-active {
        //   background-color: #00b89f !important;
        //   width: 14px;
        //   height: 14px;
        //   opacity: 1;
        // }
      `}</style>
    </div>
  );
};

export default About;
