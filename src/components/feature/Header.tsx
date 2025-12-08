import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { useScrollSpy } from '../../hooks/useScrollSpy';

const navItems = [
  { id: 'hero', label: 'Accueil' },
  { id: 'about', label: 'À propos' },
  { id: 'skills', label: 'Compétences' },
  { id: 'projects', label: 'Projets' },
  { id: 'timeline', label: 'Parcours' },
  { id: 'contact', label: 'Contact' },
];

export const Header = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = useScrollSpy(navItems.map(item => item.id));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 dark:bg-dark-900/95 backdrop-blur-md shadow-md' 
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => scrollToSection('hero')}
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-gray-600 flex items-center justify-center text-white font-bold text-base shadow-lg">
                MK
              </div>
              <span className="font-bold text-lg text-gray-900 dark:text-white hidden sm:block">
                Morgan Kongbeto
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1 bg-gray-100/80 dark:bg-dark-800/80 rounded-full px-2 py-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer whitespace-nowrap ${
                    activeSection === item.id
                      ? 'text-white'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-blue-600 to-gray-600 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              ))}
            </div>

            {/* Right */}
            <div className="flex items-center gap-3">
              {/* Theme Toggle */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
                className="w-11 h-11 rounded-xl bg-gray-100 dark:bg-dark-800 flex items-center justify-center transition-colors duration-300 cursor-pointer hover:bg-gray-200 dark:hover:bg-dark-700"
              >
                <i className={`${isDark ? 'ri-moon-line' : 'ri-sun-line'} text-lg text-gray-700 dark:text-gray-300`}></i>
              </motion.button>

              {/* Button CV*/}
              <motion.a
                href="/cv-morgan-kongbeto.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-gray-600 text-white rounded-xl font-semibold text-sm hover:shadow-lg transition-all duration-300 whitespace-nowrap cursor-pointer"
              >
                <i className="ri-download-line"></i>
                <span>Télécharger CV</span>
              </motion.a>

              {/* Mobile Menu Button */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden w-11 h-11 rounded-xl bg-gray-100 dark:bg-dark-800 flex items-center justify-center cursor-pointer"
              >
                <i className={`${isMobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-xl text-gray-700 dark:text-gray-300`}></i>
              </motion.button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-20 left-0 right-0 z-40 lg:hidden bg-white dark:bg-dark-900 shadow-xl rounded-b-3xl mx-4"
        >
          <div className="p-6 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left px-5 py-3 rounded-xl font-medium transition-all duration-300 cursor-pointer ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-blue-600 to-gray-600 text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-800'
                }`}
              >
                {item.label}
              </button>
            ))}
            <motion.a
              href="/cv-morgan-kongbeto.pdf"
              download
              whileTap={{ scale: 0.95 }}
              className="flex md:hidden items-center justify-center gap-2 w-full px-5 py-3 bg-gradient-to-r from-blue-600 to-gray-600 text-white rounded-xl font-semibold text-sm mt-4 cursor-pointer"
            >
              <i className="ri-download-line"></i>
              <span>Télécharger CV</span>
            </motion.a>
          </div>
        </motion.div>
      )}
    </>
  );
};
