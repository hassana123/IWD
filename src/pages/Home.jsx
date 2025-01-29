import { Link } from 'react-router-dom';
import Countdown from 'react-countdown';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
const Home = () => {
  const eventDate = new Date('2025-03-08T09:00:00');

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
      <section className="relative bg-gradient-to-r from-[#FF69B4]/10 to-[#FFB6C1]/10 py-25 md:py-35">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="md:text-5xl text-4xl md:text-7xl font-bold mb-6">
              Celebrating Women in Tech
              <span className="block my-1 text-primary">IWD 2024</span>
            </h1>
            <div className="flex md:gap-5 items-center justify-center flex-col md:flex-row text-center md:text-left">
      <p className="text-xl md:text-2xl mb-3 text-gray-600 flex items-center">
        <FaCalendarAlt className="mr-2 text-gray-600" />
        Redefine Possible March 8, 2024
      </p>
      <p className="text-xl md:text-2xl mb-8 text-gray-600 flex items-center">
        <FaMapMarkerAlt className="mr-2 text-gray-600" />
        Kano, Nigeria
      </p>
    </div>
            <div className=" w-[80%] mx-auto  flex flex-col md:flex-row gap-4 justify-center mb-12">
              <Link to="/get-involved" className="btn-primary">
                Register Now
              </Link>
              <Link to="/schedule" className="btn-secondary">
                View Schedule
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg inline-block">
              <Countdown
                date={eventDate}
                renderer={({ days, hours, minutes, seconds }) => (
                  <div className="flex gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">{days}</div>
                      <div className="text-sm text-gray-600">Days</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">{hours}</div>
                      <div className="text-sm text-gray-600">Hours</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">{minutes}</div>
                      <div className="text-sm text-gray-600">Minutes</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">{seconds}</div>
                      <div className="text-sm text-gray-600">Seconds</div>
                    </div>
                  </div>
                )}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Speakers */}
      <section className="py-20">
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