import { Link, useNavigate } from "react-router-dom";
import Countdown from "react-countdown";
import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  Clock,
  Watch,
  Users,
  Mic,
  Gift,
  Sparkles,
  Heart,
  Mail,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Home = () => {
  const eventDate = new Date("2025-03-08T09:00:00");
  const navigate = useNavigate();
  const slides = [
    {
      title: "Celebrating Women in Tech - Internatonal Women's Day Kano 2025",
      subtitle: "Redefine Possible",
      description:
        "Join us for an inspiring celebration of women in technology",
      bgImage:
        "https://pbs.twimg.com/media/Fr0dBPDWAAEgfX0?format=jpg&name=medium",
      link: "/",
      icon: <Sparkles className="w-8 h-8 text-white" />,
    },
    {
      title: "About the Event",
      subtitle: "Our Mission",
      description: "Learn about our mission to empower women in technology",
      bgImage:
        "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80",
      link: "/about",
      icon: <Heart className="w-8 h-8 text-white" />,
    },
    {
      title: "Event Schedule",
      subtitle: "What's Happening",
      description: "Explore our exciting lineup of sessions and workshops",
      bgImage:
        "https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&q=80",
      link: "/schedule",
      icon: <Calendar className="w-8 h-8 text-white" />,
    },
    {
      title: "Meet Our Speakers",
      subtitle: "Industry Leaders",
      description: "Get inspired by our distinguished speakers",
      bgImage:
        "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80",
      link: "/speakers",
      icon: <Mic className="w-8 h-8 text-white" />,
    },
    {
      title: "Our Sponsors",
      subtitle: "Supporting Partners",
      description: "Meet the organizations making this event possible",
      bgImage:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80",
      link: "/sponsors",
      icon: <Gift className="w-8 h-8 text-white" />,
    },
    {
      title: "Spotlight",
      subtitle: "Success Stories",
      description: "Celebrating achievements in tech",
      bgImage:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80",
      link: "/spotlight",
      icon: <Sparkles className="w-8 h-8 text-white" />,
    },
    {
      title: "Get Involved",
      subtitle: "Join the Movement",
      description: "Be part of this amazing community",
      bgImage:
        "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80",
      link: "/get-involved",
      icon: <Users className="w-8 h-8 text-white" />,
    },
    {
      title: "Contact Us",
      subtitle: "Get in Touch",
      description: "Reach out to us for any inquiries",
      bgImage:
        "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&q=80",
      link: "/contact",
      icon: <Mail className="w-8 h-8 text-white" />,
    },
  ];

  const speakers = [
    {
      name: "Sarah Johnson",
      role: "Tech Lead at Google",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
    {
      name: "Amina Hassan",
      role: "CEO of TechKano",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
    },
    {
      name: "Linda Chen",
      role: "AI Researcher",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
    },
  ];

  const sponsors = [
    {
      name: "TechCorp",
      tier: "Diamond",
      logo: "https://images-platform.99static.com//pZsHSi3Gc3XPIKp3pqNvze-A1Mk=/428x64:983x619/fit-in/500x500/99designs-contests-attachments/97/97838/attachment_97838747",
    },
    {
      name: "InnovateCo",
      tier: "Gold",
      logo: "https://cdn.logojoy.com/wp-content/uploads/2018/05/30162634/1930-768x591.png",
    },
  ];

  const spotlightPhotos = [
    {
      url: "https://images.unsplash.com/photo-1591115765373-5207764f72e7",
      caption: "Keynote Session 2023",
    },
    {
      url: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b",
      caption: "Workshop Session",
    },
  ];

  const stats = [
    { number: "500+", label: "Attendees" },
    { number: "20+", label: "Speakers" },
    { number: "10+", label: "Interactive Sessions" },
    { number: "1", label: "Transformative Day" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-wtmblue/60 to-wtmteal/60">
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 120000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                onClick={() => navigate(slide.link)}
                className="relative h-full w-full cursor-pointer bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slide.bgImage})`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-wtmblue/60 to-transparent md:py-0 py-20">
                  <div className="container h-full md:flex items-center">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      className="max-w-md text-white"
                    >
                      <div className="mb-4 inline-block p-2 bg-wtmteal rounded-full">
                        {slide.icon}
                      </div>
                      <h2 className="text-md md:text-xl font-bold uppercase tracking-wider mb-2 text-white">
                        {slide.subtitle}
                      </h2>
                      <h1 className="text-xl md:text-3xl font-bold mb-4 text-white">
                        {slide.title}
                      </h1>
                      <p className="md:text-xl mb-8 text-center text-white">
                        {slide.description}
                      </p>
                      {index === 0 && (
                        <div className=" mt-[-25px] mb-3">
                          <div className="md:flex text-center items-center md:space-x-4 text-lg mx-auto w-[50%] space-y-2 md:space-y-0">
                            <div className="flex text-center items-center space-x-2 text-lg">
                              <Calendar className="w-6 h-6" />
                              <span>March 8, 2025</span>
                            </div>
                            <div className="flex text-center items-center space-x-2 text-lg">
                              <MapPin className="w-6 h-6 ml-4" />
                              <span>Kano, Nigeria</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </motion.div>
                    <div className="inline-block text-white bg-white/10 backdrop-blur-md rounded-lg md:p-6 p-3 mx-auto">
                      <Countdown
                        date={eventDate}
                        renderer={({ days, hours, minutes, seconds }) => (
                          <div className="flex gap-8">
                            {/* Days */}
                            <div className="flex flex-col items-center">
                              <div className="md:text-4xl text-xl font-bold mb-2">
                                <Calendar className="md:w-8 md:h-8 mb-2 text-white text-center" />
                                {days}
                              </div>
                              <div className="text-sm">Days</div>
                            </div>

                            {/* Hours */}
                            <div className="flex flex-col items-center">
                              <div className="md:text-4xl text-xl font-bold mb-2">
                                <Clock className="mdd:w-8 md:h-8 mb-2 text-white text-center" />
                                {hours}
                              </div>
                              <div className="text-sm">Hours</div>
                            </div>

                            {/* Minutes */}
                            <div className="flex flex-col items-center">
                              <div className="md:text-4xl text-xl font-bold mb-2">
                                <Clock className="md:w-8 md:h-8 mb-2 text-white text-center" />
                                {minutes}
                              </div>
                              <div className="text-sm">Minutes</div>
                            </div>

                            {/* Seconds */}
                            <div className="flex flex-col items-center">
                              <div className="md:text-4xl text-xl font-bold mb-2 text-center">
                                <Watch className="md:w-8 md:h-8 mb-2 text-white" />
                                {seconds}
                              </div>
                              <div className="text-sm">Seconds</div>
                            </div>
                          </div>
                        )}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <div className=" w-[80%] mx-auto my-6  flex flex-col md:flex-row gap-4 justify-center ">
        <Link to="/get-involved" className=" btn btn-primary">
          Register Now
        </Link>
        <Link to="/schedule" className="btn btn-secondary">
          View Schedule
        </Link>
      </div>
      {/* Featured Speakers */}
      <section className="py-16 bg-wtmblue/9">
        <div className="container">
          <h2 className="section-title text-wtmteal">Featured Speakers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {speakers.map((speaker) => (
              <motion.div
                key={speaker.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-wtmblue">
                    {speaker.name}
                  </h3>
                  <p className="text-wtmteal">{speaker.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/speakers" className="btn btn-primary">
              View All Speakers
            </Link>
          </div>
        </div>
      </section>

      {/* Sponsors Preview */}
      <section className="py-16 bg-gradient-to-r from-wtmblue/5 my-5 to-wtmteal/5">
        <div className="container w-[98%] mx-auto max-w-[800px]">
          <h2 className="section-title text-wtmteal">Our Sponsors</h2>
          <div className="grid grid-cols-2 gap-3">
            {sponsors.map((sponsor) => (
              <motion.div
                key={sponsor.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition"
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="mx-auto md:h-[30vh] h-[15vh] mb-4"
                />
                <h3 className="text-lg font-bold text-wtmblue">
                  {sponsor.name}
                </h3>
                <p className="text-wtmteal">{sponsor.tier} Sponsor</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/sponsors" className="btn btn-primary">
              Become a Sponsor
            </Link>
          </div>
        </div>
      </section>

      {/* Event Spotlight Preview */}
      <section className="py-16">
        <div className="container">
          <h2 className="section-title text-wtmteal">Event Spotlight</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {spotlightPhotos.map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  src={photo.url}
                  alt={photo.caption}
                  className="w-full h-64 object-cover transition duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white text-lg font-semibold">
                      {photo.caption}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/spotlight" className="btn btn-primary">
              View More Photos
            </Link>
          </div>
        </div>
      </section>

      {/* Event Stats */}
      <section className="bg-wtmblue/5 py-10">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-wtmteal mb-2">
                  {stat.number}
                </div>
                <div className="text-wtmblue">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-10 bg-wtmteal px-3 md:px-0">
  <div className="container">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <Link
        to="/about"
        className="group bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition"
      >
        <h3 className="text-2xl font-bold mb-4 group-hover:text-wtmteal">
          About the Event
        </h3>
        <p className="text-gray-600">
          Learn more about IWD Kano and our mission to empower women in
          tech.
        </p>
      </Link>
      <Link
        to="/schedule"
        className="group bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition"
      >
        <h3 className="text-2xl font-bold mb-4 group-hover:text-wtmteal">
          Event Schedule
        </h3>
        <p className="text-gray-600">
          View our exciting lineup of sessions, workshops, and keynotes.
        </p>
      </Link>
      <Link
        to="/get-involved"
        className="group bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition"
      >
        <h3 className="text-2xl font-bold mb-4 group-hover:text-wtmteal">
          Get Involved
        </h3>
        <p className="text-gray-600">
          Join us and empower women in tech by volunteering or becoming a speaker.
        </p>
      </Link>
    </div>
  </div>
</section>
</div>
  );
};

export default Home;
