'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <section className="py-20 px-6 bg-black/40">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk text-white mb-6">
            Sobre Mí
          </h2>
          <div className="w-24 h-1 bg-gradient-purple mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center items-center h-full"
          >
            {/* Imagen de perfil */}
            <div className="w-80 h-80 bg-gradient-purple rounded-xl flex items-center justify-center animate-glow overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-primary-500/50 border-2 border-transparent hover:border-primary-400">
              <Image
                src="/images/profile.jpg"
                alt="Ángel Salinas"
                width={320}
                height={320}
                className="rounded-xl object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  // Si la imagen no existe, mostrar las iniciales
                  const target = e.currentTarget as HTMLImageElement;
                  target.style.display = 'none';
                  const nextElement = target.nextElementSibling as HTMLElement;
                  if (nextElement) {
                    nextElement.style.display = 'flex';
                  }
                }}
              />
              <span className="text-white text-8xl font-bold" style={{display: 'none'}}>AS</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Soy Ángel Salinas, ingeniero en software con enfoque en desarrollo backend, automatización e inteligencia artificial aplicada.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Me apasiona construir herramientas útiles que resuelvan problemas reales de forma sencilla, funcional y elegante.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                Actualmente colaboro en la consultora <strong className="text-primary-300">Cimiento</strong>, desarrollando soluciones automatizadas para mejorar la operación de distintos negocios.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                A la par, desarrollo proyectos personales donde combino APIs, agentes inteligentes y procesamiento de datos.
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                {['Python', 'FastAPI', 'TensorFlow', 'NLP', 'LLMs', 'Computer Vision', 'n8n', 'LangChain'].map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="px-4 py-2 bg-dark-800 text-primary-300 rounded-full text-sm font-medium hover:bg-primary-500 hover:text-white transition-colors border border-dark-700"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 