'use client'

import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Twitter, MessageCircle } from 'lucide-react'

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/AngelSalinasT',
    icon: Github,
    color: 'hover:bg-gray-900'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/angel-salinas-424515223/',
    icon: Linkedin,
    color: 'hover:bg-blue-600'
  }
]

export default function Contact() {
  return (
    <section className="py-20 px-6 bg-dark-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk text-white mb-6">
            Contacto
          </h2>
          <div className="w-24 h-1 bg-gradient-purple mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            ¿Quieres trabajar conmigo o tienes una idea que te gustaría automatizar? Estoy abierto a colaboraciones, ofertas y proyectos retadores.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 font-space-grotesk">
              Hablemos
            </h3>
            
            <div className="space-y-6">
              <motion.a
                href="mailto:angel@correo.com"
                className="flex items-center gap-4 p-4 bg-dark-800 rounded-xl shadow-sm hover:shadow-md transition-shadow group border border-primary-500/30"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="w-12 h-12 bg-gradient-purple rounded-lg flex items-center justify-center group-hover:shadow-lg transition-all">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-medium text-white">Email</p>
                  <p className="text-gray-300">angel@correo.com</p>
                </div>
              </motion.a>

              <motion.a
                href="https://wa.me/34600000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-dark-800 rounded-xl shadow-sm hover:shadow-md transition-shadow group border border-primary-500/30"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center group-hover:bg-green-600 transition-colors">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-medium text-white">WhatsApp</p>
                  <p className="text-gray-300">+34 600 000 000</p>
                </div>
              </motion.a>
            </div>

            {/* Redes sociales */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-white mb-4">
                Sígueme
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-dark-700 rounded-lg flex items-center justify-center text-gray-300 transition-colors border border-dark-600 ${social.color}`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Formulario de contacto */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-dark-800 border border-primary-500/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 font-space-grotesk">
                Envíame un mensaje
              </h3>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-dark-700 border border-dark-600 text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors placeholder-gray-400"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-dark-700 border border-dark-600 text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors placeholder-gray-400"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-dark-700 border border-dark-600 text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none placeholder-gray-400"
                    placeholder="Cuéntame sobre tu proyecto o idea de automatización..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-gradient-purple text-white py-3 px-6 rounded-lg font-medium hover:shadow-lg transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Enviar Mensaje
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-8 border-t border-dark-700"
        >
          <p className="text-gray-400">
            © 2024 Ángel Salinas. Hecho con ❤️ usando Next.js y Framer Motion.
          </p>
        </motion.div>
      </div>
    </section>
  )
} 