import { motion } from 'framer-motion';

const Speakers = () => {
  const speakers = [
    {
      name: 'Dr. Amina Hassan',
      role: 'CEO, TechKano',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      bio: "Leading innovation in Northern Nigeria'S tech ecosystem.",
      socials: {
        twitter: '#',
        linkedin: '#',
      },
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
    },
    // Add more speakers as needed
  ];

  return (
    <div>
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Speakers</h1>
            <p className="text-xl text-gray-600">
              Meet the inspiring leaders and innovators sharing their knowledge at IWD Kano.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {speakers.map((speaker, index) => (
              <motion.div
                key={speaker.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{speaker.name}</h3>
                  <p className="text-primary font-semibold mb-3">{speaker.role}</p>
                  <p className="text-gray-600 mb-4">{speaker.bio}</p>
                  <div className="flex space-x-4">
                    <a
                      href={speaker.socials.twitter}
                      className="text-gray-400 hover:text-primary transition"
                    >
                      Twitter
                    </a>
                    <a
                      href={speaker.socials.linkedin}
                      className="text-gray-400 hover:text-primary transition"
                    >
                      LinkedIn
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