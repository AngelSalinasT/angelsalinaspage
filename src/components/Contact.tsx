'use client'

import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, MessageCircle } from 'lucide-react'
import { useState } from 'react'

// Ícono personalizado para TikTok
const TikTokIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
)

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
  },
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@buildanddream?_t=ZS-8xyqu36iZeq&_r=1',
    icon: TikTokIcon,
    color: 'hover:bg-pink-600'
  }
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus('error')
      setErrorMessage('Por favor completa todos los campos')
      setTimeout(() => setSubmitStatus('idle'), 3000)
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setSubmitStatus('idle'), 3000)
      } else {
        setSubmitStatus('error')
        setErrorMessage(data.error || 'Error al enviar el mensaje')
        setTimeout(() => setSubmitStatus('idle'), 3000)
      }
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
      setErrorMessage('Error de conexión. Por favor intenta de nuevo.')
      setTimeout(() => setSubmitStatus('idle'), 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-20 px-6 bg-black/20">
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
                href="mailto:angel@angelsalinas.dev"
                className="flex items-center gap-4 p-4 bg-black/30 rounded-xl shadow-sm hover:shadow-md transition-shadow group border border-primary-500/10 backdrop-blur-sm hover:border-primary-500/30"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="w-12 h-12 bg-gradient-purple rounded-lg flex items-center justify-center group-hover:shadow-lg transition-all">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-medium text-white">Email</p>
                  <p className="text-gray-300">angel@angelsalinas.dev</p>
                </div>
              </motion.a>

              <motion.a
                href="http://wa.me/525650361257"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-black/30 rounded-xl shadow-sm hover:shadow-md transition-shadow group border border-primary-500/10 backdrop-blur-sm hover:border-primary-500/30"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center group-hover:bg-green-600 transition-colors">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-medium text-white">WhatsApp</p>
                  <p className="text-gray-300">+52 56 5036 1257</p>
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
                    className={`w-12 h-12 bg-black/40 rounded-lg flex items-center justify-center text-gray-300 transition-colors border border-primary-500/10 hover:border-primary-500/30 ${social.color}`}
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
            <div className="bg-black/30 border border-primary-500/10 rounded-2xl p-8 backdrop-blur-sm hover:border-primary-500/30 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6 font-space-grotesk">
                Envíame un mensaje
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black/40 border border-primary-500/10 text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors placeholder-gray-400"
                    placeholder="Tu nombre"
                    required
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
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black/40 border border-primary-500/10 text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors placeholder-gray-400"
                    placeholder="tu@email.com"
                    required
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
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black/40 border border-primary-500/10 text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none placeholder-gray-400"
                    placeholder="Cuéntame sobre tu proyecto o idea de automatización..."
                    required
                  ></textarea>
                </div>

                {/* Status messages */}
                {submitStatus === 'success' && (
                  <div className="p-3 bg-green-500/20 border border-green-500/30 rounded-lg text-green-300 text-sm">
                    ¡Mensaje enviado exitosamente! Te responderé pronto.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-300 text-sm">
                    {errorMessage}
                  </div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-purple text-white py-3 px-6 rounded-lg font-medium hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
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
          className="text-center mt-16 pt-8 border-t border-primary-500/10"
        >
          <p className="text-gray-400">
            © 2024 Ángel Salinas. Hecho con ❤️ usando Next.js y Framer Motion.
          </p>
        </motion.div>
      </div>
    </section>
  )
} 