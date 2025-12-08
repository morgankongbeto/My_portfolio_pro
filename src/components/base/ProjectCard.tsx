
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  delay?: number;
}

export const ProjectCard = ({ 
  title, 
  description, 
  image, 
  tags, 
  github, 
  demo, 
  featured = false,
  delay = 0 
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8 }}
      className="group relative rounded-3xl overflow-hidden bg-white dark:bg-dark-800 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
    >
      {featured && (
        <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-primary-600 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
          En production
        </div>
      )}
      
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover object-top grayscale-[30%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 group-hover:from-black/90 transition-all duration-300"></div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-200 text-sm mb-4 line-clamp-2">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-white/20 backdrop-blur-sm text-cyan-300 rounded-xl text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          {github && (
            <a 
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center text-white hover:text-cyan-400 transition-colors duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              <i className="ri-github-fill text-2xl"></i>
            </a>
          )}
          {demo && (
            <a 
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center text-white hover:text-cyan-400 transition-colors duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              <i className="ri-external-link-line text-2xl"></i>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};
