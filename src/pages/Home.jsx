import { Link, useNavigate } from 'react-router-dom';
import Countdown from 'react-countdown';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Mic, Gift, Sparkles, Heart, Mail } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Home = () => {
  const eventDate = new Date('2025-03-08T09:00:00');
const navigate = useNavigate();
  const slides = [
    {
      title: "IWD Kano 2025",
      subtitle: "",
      description: "Join us for an inspiring celebration of women in technology",
      bgImage: "https://pbs.twimg.com/media/Fr0dBPDWAAEgfX0?format=jpg&name=medium",
      link: "/",
      icon: <Sparkles className="w-8 h-8" />
    },
    {
      title: "About the Event",
      subtitle: "Our Mission",
      description: "Learn about our mission to empower women in technology",
      bgImage: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80",
      link: "/about",
      icon: <Heart className="w-8 h-8" />
    },
    {
      title: "Event Schedule",
      subtitle: "What's Happening",
      description: "Explore our exciting lineup of sessions and workshops",
      bgImage: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&q=80",
      link: "/schedule",
      icon: <Calendar className="w-8 h-8" />
    },
    {
      title: "Meet Our Speakers",
      subtitle: "Industry Leaders",
      description: "Get inspired by our distinguished speakers",
      bgImage: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80",
      link: "/speakers",
      icon: <Mic className="w-8 h-8" />
    },
    {
      title: "Our Sponsors",
      subtitle: "Supporting Partners",
      description: "Meet the organizations making this event possible",
      bgImage: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80",
      link: "/sponsors",
      icon: <Gift className="w-8 h-8" />
    },
    {
      title: "Spotlight",
      subtitle: "Success Stories",
      description: "Celebrating achievements in tech",
      bgImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80",
      link: "/spotlight",
      icon: <Sparkles className="w-8 h-8" />
    },
    {
      title: "Get Involved",
      subtitle: "Join the Movement",
      description: "Be part of this amazing community",
      bgImage: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80",
      link: "/get-involved",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Contact Us",
      subtitle: "Get in Touch",
      description: "Reach out to us for any inquiries",
      bgImage: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&q=80",
      link: "/contact",
      icon: <Mail className="w-8 h-8" />
    }
  ];

  const speakers = [
    {
      name: 'Sarah Johnson',
      role: 'Tech Lead at Google',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    },
    {
      name: 'Amina Hassan',
      role: 'CEO of TechKano',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e',
    },
    {
      name: 'Linda Chen',
      role: 'AI Researcher',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956',
    },
  ];

  const stats = [
    { number: '500+', label: 'Attendees' },
    { number: '20+', label: 'Speakers' },
    { number: '15+', label: 'Workshops' },
    { number: '10+', label: 'Partners' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative ">
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 180000,
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
                className="relative h-full w-full cursor-pointer  bg-cover  bg-center"
                style={{ 
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slide.bgImage})` 
                }}
              >
                <div className="absolute inset-0  bg-gradient-to-r from-primary/60 to-transparent">
                  <div className="container mx-20  h-full flex items-center">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      className="max-w-3xl text-white"
                    >
                      
                      <div className="mb-4 inline-block p-2 bg-pink-500 rounded-full">
                        {slide.icon}
                      </div>
                      <h2 className="text-xl font-bold uppercase tracking-wider mb-2">
                        {slide.subtitle}
                      </h2>
                      <h1 className="text-3xl md:text-5xl font-bold mb-4">
                        {slide.title}
                      </h1>
                      <p className="text-xl mb-8">
                        {slide.description}
                      </p>
                      {index === 0 && (
                        <div className="space-y-3 mt-[-15px]">
                          <div className="flex items-center space-x-4 text-lg">
                            <Calendar className="w-6 h-6" />
                            <span>March 8, 2025</span>
                            <MapPin className="w-6 h-6 ml-4" />
                            <span>Kano, Nigeria</span>
                          </div>
                          <div className="inline-block bg-white/10 backdrop-blur-md rounded-lg p-6">
                            <Countdown
                              date={eventDate}
                              renderer={({ days, hours, minutes, seconds }) => (
                                <div className="flex gap-8">
                                  <div className="text-center">
                                    <div className="text-4xl font-bold">{days}</div>
                                    <div className="text-sm">Days</div>
                                  </div>
                                  <div className="text-center">
                                    <div className="text-4xl font-bold">{hours}</div>
                                    <div className="text-sm">Hours</div>
                                  </div>
                                  <div className="text-center">
                                    <div className="text-4xl font-bold">{minutes}</div>
                                    <div className="text-sm">Minutes</div>
                                  </div>
                                  <div className="text-center">
                                    <div className="text-4xl font-bold">{seconds}</div>
                                    <div className="text-sm">Seconds</div>
                                  </div>
                                </div>
                              )}
                            />
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <div className=" w-[80%] mx-auto my-5  flex flex-col md:flex-row gap-4 justify-center mb-12">
              <Link to="/get-involved" className=" btn btn-primary">
                Register Now
              </Link>
              <Link to="/schedule" className="btn btn-secondary">
                View Schedule
              </Link>
            </div>
       {/* Featured Speakers */}
       <section className="">
        <div className="container">
          <h2 className="section-title">Featured Speakers</h2>
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
                  <h3 className="text-xl font-bold mb-2">{speaker.name}</h3>
                  <p className="text-gray-600">{speaker.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Stats */}
      <section className="bg-[]/5 py-10">
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
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-10">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link
              to="/about"
              className="group bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary">
                About the Event
              </h3>
              <p className="text-gray-600">
                Learn more about IWD Kano and our mission to empower women in tech.
              </p>
            </Link>
            <Link
              to="/schedule"
              className="group bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary">
                Event Schedule
              </h3>
              <p className="text-gray-600">
                View our exciting lineup of sessions, workshops, and keynotes.
              </p>
            </Link>
            <Link
              to="/sponsors"
              className="group bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary">
                Our Sponsors
              </h3>
              <p className="text-gray-600">
                Meet the amazing organizations supporting women in tech.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;