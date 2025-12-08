
import { motion } from 'framer-motion';
import { useState } from 'react';

const contactInfo = [
  { 
    icon: 'ri-mail-line', 
    label: 'Email', 
    value: 'morgankongbeto13@email.com',
    link: 'mailto:morgankongbeto13@email.com'
  },
  { 
    icon: 'ri-linkedin-box-line', 
    label: 'LinkedIn', 
    value: 'Morgan Kongbeto',
    link: 'https://linkedin.com/in/morgan-kongbeto'
  },
  { 
    icon: 'ri-github-line', 
    label: 'GitHub', 
    value: '@morgan-kongbeto',
    link: 'https://github.com/morgankongbeto'
  },
];

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const formBody = new URLSearchParams();
      formBody.append('name', formData.name);
      formBody.append('email', formData.email);
      formBody.append('message', formData.message);

      const response = await fetch('https://readdy.ai/api/form/d4qu9mrm5ik2goc1f84g', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString(),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-dark-800 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-4">
            Contact
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discutons de votre prochain projet
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 space-y-8"
          >
            <div>
              <h3 className="font-display text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Restons en Contact
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Je suis toujours ouvert à de nouvelles opportunités et collaborations. N'hésitez pas à me contacter !
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-primary-600 to-cyan-500 rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
                    <i className={`${info.icon} text-xl`}></i>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{info.label}</div>
                    <div className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                      {info.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="hidden md:block mt-12"
            >
              <i className="ri-mail-send-line text-8xl text-primary-500/20 dark:text-cyan-500/20"></i>
            </motion.div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3"
          >
            <form 
              id="contact-form"
              data-readdy-form
              onSubmit={handleSubmit}
              className="bg-white/80 dark:bg-dark-900/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200 dark:border-gray-700"
            >
              <div className="space-y-6">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b-2 border-gray-300 dark:border-gray-600 focus:border-primary-600 dark:focus:border-cyan-500 outline-none py-4 text-gray-900 dark:text-white transition-colors duration-300 peer"
                    placeholder=" "
                  />
                  <label className="absolute left-0 top-4 text-gray-500 dark:text-gray-400 transition-all duration-300 peer-focus:-top-6 peer-focus:text-primary-600 dark:peer-focus:text-cyan-500 peer-focus:text-sm peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-sm">
                    Nom complet
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b-2 border-gray-300 dark:border-gray-600 focus:border-primary-600 dark:focus:border-cyan-500 outline-none py-4 text-gray-900 dark:text-white transition-colors duration-300 peer"
                    placeholder=" "
                  />
                  <label className="absolute left-0 top-4 text-gray-500 dark:text-gray-400 transition-all duration-300 peer-focus:-top-6 peer-focus:text-primary-600 dark:peer-focus:text-cyan-500 peer-focus:text-sm peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-sm">
                    Email
                  </label>
                </div>

                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    maxLength={500}
                    rows={5}
                    className="w-full bg-transparent border-b-2 border-gray-300 dark:border-gray-600 focus:border-primary-600 dark:focus:border-cyan-500 outline-none py-4 text-gray-900 dark:text-white transition-colors duration-300 resize-vertical peer"
                    placeholder=" "
                  />
                  <label className="absolute left-0 top-4 text-gray-500 dark:text-gray-400 transition-all duration-300 peer-focus:-top-6 peer-focus:text-primary-600 dark:peer-focus:text-cyan-500 peer-focus:text-sm peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-sm">
                    Message (max 500 caractères)
                  </label>
                  <div className="text-right text-sm text-gray-400 mt-1">
                    {formData.message.length}/500
                  </div>
                </div>

                <motion.button
                  type="submit"
                  disabled={status === 'loading'}
                  whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
                  whileTap={{ scale: status === 'loading' ? 1 : 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-primary-600 to-cyan-500 text-white rounded-2xl font-semibold text-lg flex items-center justify-center gap-3 hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  {status === 'loading' && (
                    <i className="ri-loader-4-line animate-spin text-xl"></i>
                  )}
                  {status === 'success' && (
                    <i className="ri-check-line text-xl"></i>
                  )}
                  {status === 'error' && (
                    <i className="ri-close-line text-xl"></i>
                  )}
                  {status === 'idle' && 'Envoyer le message'}
                  {status === 'loading' && 'Envoi en cours...'}
                  {status === 'success' && 'Message envoyé !'}
                  {status === 'error' && 'Erreur, réessayez'}
                  {status === 'idle' && <i className="ri-send-plane-line text-xl"></i>}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
