import { motion } from "framer-motion";
import { team } from "../data/Organizers";
import { Twitter, Linkedin } from "lucide-react";

const About = () => {
  return (
    <div>
      {/* About Section with WTM Gradient */}
      <section className="bg-gradient-to-r from-wtmblue/80 to-wtmteal/80 py-10">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl font-bold text-white mb-6">
              About IWD Kano
            </h1>
            <p className="text-md text-white mb-6">
              Empowering women in technology through connection, education, and
              inspiration.
            </p>

            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 mx-auto text-center max-w-3xl">
              <h3 className="text-2xl text-white font-semibold mb-4">
                Overview:
              </h3>
              <p className="text-lg text-white">
                We stand at a pivotal moment where AI is transforming our
                world—bringing unprecedented opportunities but also risking the
                amplification of gender biases and systemic barriers. Join us
                this International Women's Day as we bring together Nigeria's
                brightest minds to redefine what's possible in technology.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-20 bg-gradient-to-r from-wtmblue/5 to-wtmteal/5">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-wtmblue text-center mb-12">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-4">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-wtmblue mb-2">
                    {member.name}
                  </h3>
                  <p className="text-wtmteal text-lg font-semibold mb-4">
                    {member.role}
                  </p>
                  <div className="flex justify-center gap-4">
                    {member.twitter && (
                      <a
                        href={member.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full border-2 border-wtmblue text-wtmblue hover:bg-wtmblue hover:text-white transition"
                      >
                        <Twitter className="w-6 h-6" />
                      </a>
                    )}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full border-2 border-wtmteal text-wtmteal hover:bg-wtmteal hover:text-white transition"
                      >
                        <Linkedin className="w-6 h-6" />
                      </a>
                    )}
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

export default About;
