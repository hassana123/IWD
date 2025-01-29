import { motion } from 'framer-motion';

const About = () => {
  const team = [
    {
      name: 'Fatima Ibrahim',
      role: 'Event Director',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    },
    {
      name: 'Zainab Ahmed',
      role: 'Program Coordinator',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e',
    },
    {
      name: 'Aisha Mohammed',
      role: 'Community Lead',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956',
    },
  ];

  return (
    <div>
      <section className="bg-gradient-to-r from-[#FF69B4]/10 to-secondary/10 py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About IWD Kano</h1>
            <p className="text-xl text-gray-600">
              Empowering women in technology through connection, education, and inspiration.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="md:py-20 py-10">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                International Women's Day Kano celebration began in 2020 as a small
                gathering of women in tech. Today, it has grown into one of Northern
                Nigeria's largest tech events celebrating women's achievements in
                technology.
              </p>
              <p className="text-gray-600">
                Our mission is to inspire the next generation of women leaders in
                technology while providing a platform for networking, learning, and
                growth.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-primary/5 p-8 rounded-lg"
            >
              <h2 className="text-3xl font-bold mb-6">Event Highlights</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-primary text-2xl mr-4">•</span>
                  <span>Inspiring keynotes from industry leaders</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary text-2xl mr-4">•</span>
                  <span>Interactive workshops and panel discussions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary text-2xl mr-4">•</span>
                  <span>Networking opportunities with tech professionals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary text-2xl mr-4">•</span>
                  <span>Career development sessions</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="section-title">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;