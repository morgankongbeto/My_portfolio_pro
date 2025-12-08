
import { motion } from 'framer-motion';
import { useState } from 'react';
import { projectsData, categories } from '../../../mocks/projects';
import { ProjectCard } from '../../../components/base/ProjectCard';

export const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-dark-800 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/5 rounded-lg blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-4">
            Projets
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Une sélection de mes réalisations démontrant mes compétences variées
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-primary-600 to-cyan-500 text-white border-2 border-cyan-400 shadow-lg scale-110'
                  : 'bg-white dark:bg-dark-900 text-gray-700 dark:text-gray-300 border-2 border-gray-300 dark:border-gray-600 hover:border-primary-500 dark:hover:border-cyan-500'
              }`}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              <ProjectCard {...project} delay={index * 0.1} />
            </motion.div>
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <i className="ri-folder-open-line text-6xl text-gray-400 dark:text-gray-600 mb-4"></i>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Aucun projet dans cette catégorie
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};
