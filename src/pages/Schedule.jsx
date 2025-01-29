import { useState } from 'react';
import { motion } from 'framer-motion';

const Schedule = () => {
  const [selectedTrack, setSelectedTrack] = useState('all');

  const tracks = [
    { id: 'all', name: 'All Sessions' },
    { id: 'leadership', name: 'Leadership' },
    { id: 'technical', name: 'Technical' },
    { id: 'career', name: 'Career Growth' },
  ];

  const sessions = [
    {
      time: '09:00 - 10:00',
      title: 'Opening Keynote: Breaking Barriers in Tech',
      speaker: 'Dr. Amina Hassan',
      track: 'leadership',
      description: 'An inspiring talk about overcoming challenges in the tech industry.',
    },
    {
      time: '10:15 - 11:15',
      title: 'Workshop: Introduction to AI and Machine Learning',
      speaker: 'Sarah Johnson',
      track: 'technical',
      description: 'Hands-on workshop covering the basics of AI and ML.',
    },
    {
      time: '11:30 - 12:30',
      title: 'Panel: Navigating Your Tech Career',
      speaker: 'Various Industry Leaders',
      track: 'career',
      description: 'Expert panel discussion on career development strategies.',
    },
    // Add more sessions as needed
  ];

  const filteredSessions = selectedTrack === 'all'
    ? sessions
    : sessions.filter(session => session.track === selectedTrack);

  return (
    <div>
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Event Schedule</h1>
            <p className="text-xl text-gray-600">
              Explore our exciting lineup of sessions, workshops, and keynotes.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          {/* Track Filter */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {tracks.map((track) => (
              <button
                key={track.id}
                onClick={() => setSelectedTrack(track.id)}
                className={`px-6 py-2 rounded-full transition ${
                  selectedTrack === track.id
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {track.name}
              </button>
            ))}
          </div>

          {/* Schedule Grid */}
          <div className="space-y-6">
            {filteredSessions.map((session, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="md:w-1/4">
                    <div className="text-lg font-bold text-primary">{session.time}</div>
                    <div className="text-sm text-gray-500 capitalize">
                      Track: {session.track}
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-bold mb-2">{session.title}</h3>
                    <p className="text-gray-600 mb-2">{session.description}</p>
                    <p className="text-sm font-semibold">Speaker: {session.speaker}</p>
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

export default Schedule;