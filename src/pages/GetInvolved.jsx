import { useState } from 'react';
import { motion } from 'framer-motion';

const GetInvolved = () => {
  // State to control whether the volunteer form or speaker form is open
  const [isVolunteerFormOpen, setIsVolunteerFormOpen] = useState(false);
  const [isSpeakerFormOpen, setIsSpeakerFormOpen] = useState(false);

  // Function to toggle Volunteer Form
  const toggleVolunteerForm = () => {
    setIsVolunteerFormOpen((prev) => !prev);
  };

  // Function to toggle Speaker Form
  const toggleSpeakerForm = () => {
    setIsSpeakerFormOpen((prev) => !prev);
  };

  return (
    <div>
      {/* Get Involved Header */}
      <section className="bg-gradient-to-r from-wtmblue/80 to-wtmteal/80 py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Get Involved</h1>
            <p className="text-xl text-white mb-6">
              Join us in celebrating and empowering women in technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Volunteer and Speaker Application Sections */}
      <section className="md:py-10 py-5">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Volunteer Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              {!isVolunteerFormOpen ? (
                <>
                  <h2 className="text-3xl font-bold mb-6 text-wtmblue">Volunteer Opportunities</h2>
                  <p className="text-lg text-gray-700 mb-6">We are looking for volunteers to help with different roles. Join us to make a difference!</p>
                  <ul className="space-y-4 mb-6">
                    <li className="flex items-center text-wtmteal">
                      <span className="mr-2">✓</span> Marketing Volunteer
                    </li>
                    <li className="flex items-center text-wtmteal">
                      <span className="mr-2">✓</span> Graphics Design Volunteer
                    </li>
                  </ul>
                  <button
                    className="btn btn-primary hover:bg-wtmteal/80 transition"
                    onClick={toggleVolunteerForm}
                  >
                    Apply as a Volunteer
                  </button>
                </>
              ) : (
                <div>
                  <button
                    className="text-wtmteal text-xl mb-4"
                    onClick={toggleVolunteerForm}
                  >
                    &#8592; Back
                  </button>
                  <h2 className="text-3xl font-bold mb-6 text-wtmblue">Volunteer Form</h2>
                  <form className="space-y-6">
                    <div>
                      <label className="block text-gray-700 mb-2">Full Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-primary focus:border-primary"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-primary focus:border-primary"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-primary focus:border-primary"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">Areas of Interest</label>
                      <select className="w-full px-4 py-2 border rounded-lg focus:ring-primary focus:border-primary">
                        <option>Event Management</option>
                        <option>Technical Support</option>
                        <option>Registration</option>
                        <option>Social Media</option>
                      </select>
                    </div>
                    <button type="submit" className="btn btn-primary hover:bg-wtmteal/80 transition">
                      Submit Application
                    </button>
                  </form>
                </div>
              )}
            </motion.div>

            {/* Speaker Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              {!isSpeakerFormOpen ? (
                <>
                  <h2 className="text-3xl font-bold mb-6 text-wtmblue">Call for Speakers</h2>
                  <p className="text-lg text-gray-700 mb-6">We are looking for inspiring speakers! Share your knowledge and ideas with the tech community.</p>
                  <h3 className="text-xl font-semibold mb-4">Session Proposal Guidelines</h3>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center text-wtmteal">
                      <span className="mr-2">✓</span> Submit a detailed description of your proposed session.
                    </li>
                    <li className="flex items-center text-wtmteal">
                      <span className="mr-2">✓</span> Include the objectives and outcomes of the session.
                    </li>
                    <li className="flex items-center text-wtmteal">
                      <span className="mr-2">✓</span> Ensure the topic aligns with our mission of empowering women in tech.
                    </li>
                  </ul>
                  <h4 className="text-lg font-semibold mb-4">Requirements & Deadlines</h4>
                  <p className="mb-4">We ask that all speakers submit their proposals by <strong>March 1st, 2025</strong>.</p>
                  <button
                    className="btn btn-primary hover:bg-wtmteal/80 transition"
                    onClick={toggleSpeakerForm}
                  >
                    Submit Proposal
                  </button>
                </>
              ) : (
                <div>
                  <button
                    className="text-wtmteal text-xl mb-4"
                    onClick={toggleSpeakerForm}
                  >
                    &#8592; Back
                  </button>
                  <h2 className="text-3xl font-bold mb-6 text-wtmblue">Speaker Application</h2>
                  <form className="space-y-6">
                    <div>
                      <label className="block text-gray-700 mb-2">Full Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-primary focus:border-primary"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-primary focus:border-primary"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">Topic Title</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-primary focus:border-primary"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">Topic Description</label>
                      <textarea
                        className="w-full px-4 py-2 border rounded-lg focus:ring-primary focus:border-primary"
                        rows="4"
                        required
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary hover:bg-wtmteal/80 transition">
                      Submit Proposal
                    </button>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;
