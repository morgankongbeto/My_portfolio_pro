import { motion } from 'framer-motion';
import { useTypewriter } from '../../../hooks/useTypewriter';
import { Button } from '../../../components/base/Button';

export const HeroSection = () => {
  const typewriterText = useTypewriter([
    'Créateur d\'interfaces',
    'Analyste métier',
    'Passionné UX/UI',
  ]);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-dark-900 via-dark-800 to-primary-900 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
      </div>

      {/* Dot Grid Pattern */}
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>

      {/* Floating Shapes */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-40 right-20 w-20 h-20 border-4 border-cyan-400/30 rounded-lg"
      ></motion.div>
      
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-40 left-20 w-16 h-16 border-4 border-primary-400/30 rounded-full"
      ></motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 min-h-screen flex items-center">
        <div className="grid md:grid-cols-5 gap-12 items-center w-full">
          {/* Left Side - Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-2 flex justify-center md:justify-start order-2 md:order-1"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-gray-500 rounded-full blur-xl opacity-50"
              ></motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, rotate: -3 }}
                className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl"
                style={{ transform: 'rotate(-3deg)' }}
              >
                <img 
                  src="./public/kgt.png"
                  alt="Morgan Kongbeto"
                  className="w-full h-full object-cover mt-1"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-3 text-center md:text-left order-1 md:order-2"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-display text-6xl md:text-7xl font-black text-white mb-6 leading-tight"
            >
              Morgan KONGBETO
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-8"
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-200 mb-2">
                Développeur Frontend
              </h2>
              <div className="h-12 flex items-center justify-center md:justify-start">
                <span className="text-xl md:text-2xl font-medium bg-gradient-to-r from-blue-400 to-gray-400 bg-clip-text text-transparent">
                  {typewriterText}
                  <span className="animate-pulse">|</span>
                </span>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto md:mx-0"
            >
              Passionné par la création d'interfaces web modernes et intuitives, je combine mes compétences en développement frontend avec une expertise en analyse métier et assurance qualité pour livrer des solutions complètes et performantes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex justify-center md:justify-start"
            >
              <Button 
                onClick={scrollToProjects}
                variant="primary"
                icon="ri-arrow-down-line"
              >
                Voir mes projets
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50 cursor-pointer"
        onClick={scrollToProjects}
      >
        <i className="ri-mouse-line text-3xl"></i>
      </motion.div>
    </section>
  );
};
