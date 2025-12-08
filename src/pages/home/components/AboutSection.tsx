
import { motion } from 'framer-motion';

const stats = [
  { value: '6+', label: 'Projets complétés', icon: 'ri-code-box-line' },
  { value: '8+', label: 'Technologies maîtrisées', icon: 'ri-stack-line' },
  { value: '2+', label: 'Années d\'expérience', icon: 'ri-time-line' },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-dark-800 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          {/* Left Side - Vertical Title */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3 flex flex-col items-center md:items-start"
          >
            <h2 className="font-display text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-8 md:mb-0 md:writing-mode-vertical md:transform md:rotate-180">
              À Propos
            </h2>
            
            <motion.div
              animate={{ rotateY: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="hidden md:block mt-12 w-24 h-24 border-4 border-primary-500/30 rounded-lg"
              style={{ transformStyle: 'preserve-3d' }}
            ></motion.div>
          </motion.div>

          {/* Right Side - Content */}
          <div className="md:col-span-9 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white dark:bg-dark-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 dark:border-gray-700"
            >
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Développeur frontend junior passionné, je me spécialise dans la création d'interfaces web modernes et performantes avec <strong className="text-primary-600 dark:text-cyan-400">React.js</strong> et <strong className="text-primary-600 dark:text-cyan-400">Tailwind CSS</strong>. Mon parcours m'a également permis d'acquérir une solide expérience en développement backend avec <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary-600 dark:bg-primary-700 text-white rounded-full text-sm font-semibold">Java</span>, me permettant de comprendre et de contribuer à des projets full-stack.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white dark:bg-dark-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 dark:border-gray-700 md:ml-16"
            >
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Ce qui me distingue, c'est ma capacité à combiner développement et analyse métier. Grâce à mes bases en <strong className="text-primary-600 dark:text-cyan-400">Business Analysis (BA)</strong> et <strong className="text-primary-600 dark:text-cyan-400">Quality Assurance (QA)</strong>, je peux non seulement coder des solutions techniques, mais aussi comprendre les besoins métier, rédiger des spécifications fonctionnelles et garantir la qualité des livrables à travers des tests rigoureux.
              </p>
              
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 border-2 border-primary-500 dark:border-cyan-500 text-primary-600 dark:text-cyan-400 rounded-full text-sm font-semibold flex items-center gap-2">
                  <i className="ri-bar-chart-box-line"></i>
                  Business Analysis
                </span>
                <span className="px-4 py-2 border-2 border-primary-500 dark:border-cyan-500 text-primary-600 dark:text-cyan-400 rounded-full text-sm font-semibold flex items-center gap-2">
                  <i className="ri-shield-check-line"></i>
                  Quality Assurance
                </span>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gradient-to-br from-primary-600 to-cyan-500 rounded-2xl p-6 text-white shadow-lg cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-xl">
                      <i className={`${stat.icon} text-2xl`}></i>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">{stat.value}</div>
                      <div className="text-sm text-white/90">{stat.label}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
