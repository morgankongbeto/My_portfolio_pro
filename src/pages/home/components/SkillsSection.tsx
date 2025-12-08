import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { skillsData } from '../../../mocks/skills';
import { SkillCard } from '../../../components/base/SkillCard';

const tabs = [
  { id: 'frontend', label: 'Frontend', icon: 'ri-reactjs-line' },
  { id: 'backend', label: 'Backend/Outils', icon: 'ri-code-s-slash-line' },
  { id: 'design', label: 'Design', icon: 'ri-palette-line' },
  { id: 'methodologies', label: 'Méthodologies', icon: 'ri-task-line' },
];

export const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState('frontend');
  const [hoveredMethod, setHoveredMethod] = useState<string | null>(null);

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-dark-800 dark:to-dark-900 relative overflow-hidden">
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-500/5 rounded-lg blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-slate-500/5 rounded-lg blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-4">
            Compétences
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Un ensemble de compétences techniques et méthodologiques pour créer des solutions complètes
          </p>
        </motion.div>

        {/* Tabs Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-3 px-6 py-3.5 rounded-lg font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-600 to-slate-700 text-white shadow-lg shadow-blue-500/30'
                  : 'bg-white dark:bg-dark-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark-700 border border-gray-200 dark:border-dark-700'
              }`}
            >
              <motion.i 
                className={`${tab.icon} text-xl`}
                animate={activeTab === tab.id ? { rotate: [0, 10, -10, 0] } : {}}
                transition={{ duration: 0.5 }}
              ></motion.i>
              <span>{tab.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Content Area with AnimatePresence */}
        <AnimatePresence mode="wait">
          {activeTab === 'frontend' && (
            <motion.div
              key="frontend"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {skillsData.frontend.map((skill, index) => (
                <SkillCard
                  key={skill.name}
                  {...skill}
                  size="medium"
                  delay={index * 0.1}
                />
              ))}
            </motion.div>
          )}

          {activeTab === 'backend' && (
            <motion.div
              key="backend"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {skillsData.backend.map((skill, index) => (
                <SkillCard
                  key={skill.name}
                  {...skill}
                  size="medium"
                  delay={index * 0.1}
                />
              ))}
            </motion.div>
          )}

          {activeTab === 'design' && (
            <motion.div
              key="design"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {skillsData.design.map((skill, index) => (
                <SkillCard
                  key={skill.name}
                  {...skill}
                  size="medium"
                  delay={index * 0.1}
                />
              ))}
            </motion.div>
          )}

          {activeTab === 'methodologies' && (
            <motion.div
              key="methodologies"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto space-y-4"
            >
              {skillsData.methodologies.map((method, index) => (
                <motion.div
                  key={method.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  onHoverStart={() => setHoveredMethod(method.name)}
                  onHoverEnd={() => setHoveredMethod(null)}
                  className="flex items-center gap-6 bg-white dark:bg-dark-800 rounded-lg p-6 border-l-4 border-blue-600 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer relative overflow-hidden"
                >
                  {/* Animated background on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-50 to-slate-50 dark:from-blue-900/10 dark:to-slate-900/10"
                    initial={{ x: '-100%' }}
                    animate={{ x: hoveredMethod === method.name ? '0%' : '-100%' }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <motion.div 
                    className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-blue-600 to-slate-700 rounded-lg text-white flex-shrink-0 relative z-10"
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <i className={`${method.icon} text-3xl`}></i>
                  </motion.div>
                  
                  <div className="flex-1 relative z-10">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {method.name}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {method.description}
                    </p>
                  </div>
                  
                  <motion.div 
                    className="flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex-shrink-0 relative z-10"
                    animate={hoveredMethod === method.name ? { scale: [1, 1.1, 1] } : {}}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div 
                      className="w-2 h-2 bg-blue-600 rounded-full"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold">
                      Bases
                    </span>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
