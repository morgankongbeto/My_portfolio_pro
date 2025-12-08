
import { motion } from 'framer-motion';
import { timelineData } from '../../../mocks/timeline';

export const TimelineSection = () => {
  return (
    <section id="timeline" className="py-24 bg-white dark:bg-dark-900 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-4">
            Parcours
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Mon évolution professionnelle et mes formations
          </p>
        </motion.div>

        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-600 to-cyan-500 hidden md:block"></div>

          <div className="space-y-16">
            {timelineData.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: event.side === 'right' ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  event.side === 'right' ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Connection Point */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-white dark:bg-dark-900 border-4 border-primary-600 dark:border-cyan-500 rounded-full z-10">
                  <motion.div
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 bg-primary-600 dark:bg-cyan-500 rounded-full opacity-50"
                  ></motion.div>
                </div>

                {/* Card */}
                <div className={`w-full md:w-5/12 ${event.side === 'right' ? 'md:pr-16' : 'md:pl-16'}`}>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 cursor-pointer"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-4 py-2 bg-gradient-to-r from-primary-600 to-cyan-500 text-white rounded-full text-sm font-bold">
                        {event.date}
                      </span>
                      <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-primary-600 to-cyan-500 rounded-lg text-white">
                        <i className={`${event.icon} text-xl`}></i>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {event.title}
                    </h3>
                    
                    <p className="text-cyan-600 dark:text-cyan-400 font-semibold mb-4">
                      {event.company}
                    </p>
                    
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                      {event.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {event.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden md:block w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
