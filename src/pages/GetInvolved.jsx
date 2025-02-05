import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { submitVolunteerApplication } from '../components/Volunteer';
const GetInvolved = () => {
  // State to control whether the volunteer form or speaker form is open
  const [isVolunteerFormOpen, setIsVolunteerFormOpen] = useState(false);
  const [isSpeakerFormOpen, setIsSpeakerFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    areaOfInterest: '',
    reason: '',
  });
  const [errors, setErrors] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate= useNavigate();
  // Function to toggle Volunteer Form
  const toggleVolunteerForm = () => {
    setIsVolunteerFormOpen((prev) => !prev);
  };

  // Function to toggle Speaker Form
  const toggleSpeakerForm = () => {
    setIsSpeakerFormOpen((prev) => !prev);
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

   const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmissionStatus(null);
    const result = await submitVolunteerApplication(formData);
    setIsLoading(false);
    if (!result.success) {
      setErrors(result.errors || {});
      setSubmissionStatus({ success: false, message: result.error || 'Submission failed' });
    } else {
      setSubmissionStatus({ success: true, message: 'Application submitted successfully!' });
      setFormData({ fullName: '', email: '', phone: '', areaOfInterest: '', reason: '' });
    }
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
              <button className="text-wtmteal text-xl mb-4 flex items-center" onClick={toggleVolunteerForm}>
                <ArrowLeft className="h-5 w-5 mr-2" /> Back
              </button>
              <h2 className="text-3xl font-bold text-wtmblue">Volunteer Form</h2>
              {submissionStatus && submissionStatus.success ? (
                <div className="text-center">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
                  <p className="text-green-600 mt-4 text-xl">{submissionStatus.message}</p>
                  <button className="btn btn-primary mt-6" onClick={() => navigate('/')}>
                    Go Back to Home
                  </button>
                </div>
              ) : (
                <form className="space-y-6 mt-6" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-gray-700">Full Name</label>
                    <input name="fullName" type="text" className="w-full p-2 border rounded-lg" value={formData.fullName} onChange={handleChange} required />
                    {errors.fullName && <p className="text-red-600">{errors.fullName}</p>}
                  </div>
                  <div>
                    <label className="block text-gray-700">Email</label>
                    <input name="email" type="email" className="w-full p-2 border rounded-lg" value={formData.email} onChange={handleChange} required />
                    {errors.email && <p className="text-red-600">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-gray-700">Phone Number</label>
                    <input name="phone" type="tel" className="w-full p-2 border rounded-lg" value={formData.phone} onChange={handleChange} required />
                    {errors.phone && <p className="text-red-600">{errors.phone}</p>}
                  </div>
                  <div>
                    <label className="block text-gray-700">Areas of Interest</label>
                    <select name="areaOfInterest" className="w-full p-2 border rounded-lg" value={formData.areaOfInterest} onChange={handleChange} required>
                      <option value="">Select an option</option>
                      <option>Event Management</option>
                      <option>Technical Support</option>
                      <option>Social Media</option>
                      <option>Workshop Facilitation</option>
                      <option>Community Outreach</option>
                      <option>Fundraising</option>
                      <option>Logistics & Operations</option>
                    </select>
                    {errors.areaOfInterest && <p className="text-red-600">{errors.areaOfInterest}</p>}
                  </div>
                  <div>
                    <label className="block text-gray-700">Why do you want to volunteer?</label>
                    <textarea name="reason" className="w-full p-2 border rounded-lg" rows="4" value={formData.reason} onChange={handleChange} required></textarea>
                    {errors.reason && <p className="text-red-600">{errors.reason}</p>}
                  </div>
                  <button type="submit" className="btn btn-primary" disabled={isLoading}>
                    {isLoading ? 'Submitting...' : 'Submit Application'}
                  </button>
                </form>
              )}
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
