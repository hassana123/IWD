import { motion } from 'framer-motion';
import { Twitter, Linkedin } from 'lucide-react'; // Import the icons

const Speakers = () => {
  const speakers = [
    {
      name: 'Dr. Amina Hassan',
      role: 'CEO, TechKano',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      bio: "Leading innovation in Northern Nigeria's tech ecosystem.",
      socials: {
        twitter: '#',
        linkedin: '#',
      },
      category: 'Tech Innovators',
    },
    {
      name: 'Sarah Johnson',
      role: 'Tech Lead, Google',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e',
      bio: 'Expert in AI and machine learning technologies.',
      socials: {
        twitter: '#',
        linkedin: '#',
      },
      category: 'AI Pioneers',
    },
    {
      name: 'Zainab Ahmed',
      role: 'Founder, CodeQueens',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956',
      bio: 'Empowering women through code education.',
      socials: {
        twitter: '#',
        linkedin: '#',
      },
      category: 'Industry Leaders',
    },
    // Add more speakers as needed
  ];

  return (
    <div>
      {/* Speakers Section Header */}
      <section className="bg-gradient-to-r from-wtmblue/80 to-wtmteal/80 py-5 mt-10">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Speakers</h1>
            <p className="text-xl text-white mb-6">
              Meet the inspiring leaders and innovators sharing their knowledge at IWD Kano.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Speaker Grid */}
      <section className="md:py-10 py-5">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {speakers.map((speaker, index) => (
              <motion.div
                key={speaker.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
              >
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="text-wtmteal font-semibold text-sm mb-2">{speaker.category}</div>
                  <h3 className="text-xl font-bold text-wtmblue mb-2">{speaker.name}</h3>
                  <p className="text-primary font-semibold mb-3">{speaker.role}</p>
                  <p className="text-gray-600 mb-4">{speaker.bio}</p>
                  <div className="flex space-x-4">
                    {/* Twitter Icon */}
                    <a
                      href={speaker.socials.twitter}
                      className="text-gray-400 hover:text-wtmteal transition"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    {/* LinkedIn Icon */}
                    <a
                      href={speaker.socials.linkedin}
                      className="text-gray-400 hover:text-wtmteal transition"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Speakers;