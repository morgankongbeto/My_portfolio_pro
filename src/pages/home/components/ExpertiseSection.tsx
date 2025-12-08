
import { motion } from 'framer-motion';

const expertiseAreas = [
  { 
    label: 'Développement', 
    icon: 'ri-code-s-slash-line', 
    color: 'border-l-primary-500' 
  },
  { 
    label: 'Design', 
    icon: 'ri-palette-line', 
    color: 'border-l-cyan-500' 
  },
  { 
    label: 'Analyse', 
    icon: 'ri-bar-chart-box-line', 
    color: 'border-l-purple-500' 
  },
  { 
    label: 'Qualité', 
    icon: 'ri-shield-check-line', 
    color: 'border-l-green-500' 
  },
];

export const ExpertiseSection = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-dark-800">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className="relative bg-gradient-to-br from-primary-900 via-purple-900 to-primary-800 rounded-3xl p-12 overflow-hidden shadow-2xl cursor-pointer"
        >
          {/* Animated Border */}
          <div className="absolute inset-0 rounded-3xl">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-primary-500 to-cyan-500 opacity-50 blur-xl"
            ></motion.div>
          </div>

          {/* Floating Particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 20 - 10, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            ></motion.div>
          ))}

          <div className="relative z-10 grid md:grid-cols-12 gap-8 items-center">
            {/* Left - Icon */}
            <motion.div
              whileHover={{ rotateY: 180 }}
              transition={{ duration: 0.6 }}
              className="md:col-span-3 flex justify-center"
            >
              <div className="w-36 h-36 flex items-center justify-center">
                <i className="ri-puzzle-line text-8xl text-white/90"></i>
              </div>
            </motion.div>

            {/* Center - Content */}
            <div className="md:col-span-6 text-center md:text-left">
              <h2 className="font-display text-4xl font-black text-white mb-3">
                Expertise Hybride
              </h2>
              <p className="text-cyan-300 text-lg mb-6 flex items-center justify-center md:justify-start gap-2 flex-wrap">
                <span>Développement</span>
                <span className="w-1.5 h-1.5 bg-cyan-300 rounded-full"></span>
                <span>Design</span>
                <span className="w-1.5 h-1.5 bg-cyan-300 rounded-full"></span>
                <span>Analyse</span>
                <span className="w-1.5 h-1.5 bg-cyan-300 rounded-full"></span>
                <span>Qualité</span>
              </p>
              <p className="text-gray-200 leading-relaxed mb-6">
                Ma force réside dans ma capacité à naviguer entre plusieurs domaines d'expertise. Je ne me contente pas de coder : je conçois des interfaces intuitives, j'analyse les besoins métier, je rédige des spécifications et je garantis la qualité à travers des tests rigoureux. Cette approche holistique me permet de livrer des solutions complètes qui répondent véritablement aux attentes des utilisateurs et des parties prenantes.
              </p>
              <ul className="space-y-2 text-gray-200">
                <li className="flex items-center gap-3">
                  <i className="ri-check-line text-cyan-400 text-xl"></i>
                  <span>Vision 360° des projets web</span>
                </li>
                <li className="flex items-center gap-3">
                  <i className="ri-check-line text-cyan-400 text-xl"></i>
                  <span>Communication fluide entre équipes techniques et métier</span>
                </li>
                <li className="flex items-center gap-3">
                  <i className="ri-check-line text-cyan-400 text-xl"></i>
                  <span>Garantie de qualité à chaque étape du développement</span>
                </li>
              </ul>
            </div>

            {/* Right - Badges */}
            <div className="md:col-span-3 space-y-4">
              {expertiseAreas.map((area, index) => (
                <motion.div
                  key={area.label}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-white/10 backdrop-blur-sm border-l-4 ${area.color} rounded-lg p-4 flex items-center gap-3`}
                >
                  <i className={`${area.icon} text-2xl text-white`}></i>
                  <span className="text-white font-semibold">{area.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
