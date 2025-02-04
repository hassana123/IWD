import { motion } from 'framer-motion';
import { photos } from '../data/Spotlight';
const Spotlight = () => {
  // const photos = [
  //   {
  //     url: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7',
  //     caption: 'Keynote Session 2023',
  //   },
  //   {
  //     url: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b',
  //     caption: 'Workshop Session',
  //   },
  //   {
  //     url: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1',
  //     caption: 'Networking Event',
  //   },
  //   {
  //     url: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b',
  //     caption: 'Panel Discussion',
  //   },
  //   {
  //     url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87',
  //     caption: 'Award Ceremony',
  //   },
  //   {
  //     url: 'https://images.unsplash.com/photo-1511578314322-379afb476865',
  //     caption: 'Tech Exhibition',
  //   },
  //   // Add more photos as needed
  // ];

  return (
    <div>
      {/* Spotlight Header Section */}
      <section className="bg-gradient-to-r from-wtmblue/80 to-wtmteal/80 py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Event Spotlight</h1>
            <p className="text-xl text-white mb-6">
              Relive the memorable moments from our previous events.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {photos.map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg shadow-xl transition-transform transform hover:scale-105"
              >
                <img
                  src={photo.url}
                  alt={photo.caption}
                  className="w-full h-64 object-cover transition duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white text-lg font-semibold">{photo.caption}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Highlights Video */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="section-title text-wtmblue">Event Highlights</h2>
          <div className="max-w-3xl mx-auto">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/LMt7aW_j2fk?si=cfOzwXt9R5z5vj2z"
                title="Event Highlights"
                className="w-full h-[400px] rounded-lg shadow-lg"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Spotlight;
