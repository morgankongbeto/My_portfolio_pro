import { motion } from 'framer-motion';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-blue-900 to-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-lg">
                MK
              </div>
              <span className="font-display text-2xl font-bold">Morgan Kongbeto</span>
            </div>
            <p className="text-white/80 text-sm">
              Développeur Frontend passionné par la création d'expériences web exceptionnelles.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#hero" className="text-white/80 hover:text-white transition-colors duration-300 cursor-pointer">Accueil</a></li>
              <li><a href="#about" className="text-white/80 hover:text-white transition-colors duration-300 cursor-pointer">À propos</a></li>
              <li><a href="#skills" className="text-white/80 hover:text-white transition-colors duration-300 cursor-pointer">Compétences</a></li>
              <li><a href="#projects" className="text-white/80 hover:text-white transition-colors duration-300 cursor-pointer">Projets</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-white transition-colors duration-300 cursor-pointer">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Réseaux Sociaux</h4>
            <div className="flex gap-4 flex-wrap">
              <motion.a
                href="https://github.com/morgan-kongbeto"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                className="w-10 h-10 flex items-center justify-center bg-white/20 rounded-lg hover:bg-white/30 transition-colors duration-300 cursor-pointer"
              >
                <i className="ri-github-fill text-xl"></i>
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/morgan-kongbeto"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                className="w-10 h-10 flex items-center justify-center bg-white/20 rounded-lg hover:bg-white/30 transition-colors duration-300 cursor-pointer"
              >
                <i className="ri-linkedin-box-fill text-xl"></i>
              </motion.a>
              <motion.a
                href="https://wa.me/237XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                className="w-10 h-10 flex items-center justify-center bg-white/20 rounded-lg hover:bg-white/30 transition-colors duration-300 cursor-pointer"
              >
                <i className="ri-whatsapp-fill text-xl"></i>
              </motion.a>
              <motion.a
                href="https://facebook.com/morgan.kongbeto"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                className="w-10 h-10 flex items-center justify-center bg-white/20 rounded-lg hover:bg-white/30 transition-colors duration-300 cursor-pointer"
              >
                <i className="ri-facebook-fill text-xl"></i>
              </motion.a>
              <motion.a
                href="https://youtube.com/@morgankongbeto"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                className="w-10 h-10 flex items-center justify-center bg-white/20 rounded-lg hover:bg-white/30 transition-colors duration-300 cursor-pointer"
              >
                <i className="ri-youtube-fill text-xl"></i>
              </motion.a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
          <p>&copy; {currentYear} Morgan Kongbeto. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};
