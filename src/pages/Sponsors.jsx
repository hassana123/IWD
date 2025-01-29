import { motion } from 'framer-motion';

const Sponsors = () => {
  const sponsorshipTiers = [
    {
      name: 'Diamond',
      price: '$5,000',
      benefits: [
        'Premium logo placement',
        'Speaking opportunity',
        '10 event tickets',
        'Dedicated booth space',
        'Social media promotion',
      ],
    },
    {
      name: 'Gold',
      price: '$3,000',
      benefits: [
        'Logo on website',
        '5 event tickets',
        'Booth space',
        'Social media mention',
      ],
    },
    {
      name: 'Silver',
      price: '$1,500',
      benefits: [
        'Logo on website',
        '3 event tickets',
        'Social media mention',
      ],
    },
  ];

  const currentSponsors = [
    {
      name: 'TechCorp',
      tier: 'Diamond',
      logo: 'https://via.placeholder.com/200x100',
    },
    {
      name: 'InnovateCo',
      tier: 'Gold',
      logo: 'https://via.placeholder.com/200x100',
    },
    {
      name: 'DevHub',
      tier: 'Silver',
      logo: 'https://via.placeholder.com/200x100',
    },
    // Add more sponsors as needed
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Sponsors</h1>
            <p className="text-xl text-gray-600">
              Meet the organizations supporting women in technology.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <h2 className="section-title">Current Sponsors</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {currentSponsors.map((sponsor, index) => (
              <motion.div
                key={sponsor.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="mx-auto mb-4"
                />
                <h3 className="text-xl font-bold">{sponsor.name}</h3>
                <p className="text-primary">{sponsor.tier} Sponsor</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="section-title">Sponsorship Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sponsorshipTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <p className="text-3xl font-bold text-primary mb-6">{tier.price}</p>
                  <ul className="space-y-3">
                    {tier.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center">
                        <span className="text-primary mr-2">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full btn-primary mt-6">
                    Become a Sponsor
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sponsors;