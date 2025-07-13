'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Building, GraduationCap } from 'lucide-react'

const experiences = [
  {
    id: 1,
    title: "Ingeniería en Software",
    company: "Universidad Autónoma de Querétaro",
    location: "Querétaro, México",
    period: "2022 - 2027",
    description: "Promedio: 9.0. Enfocado en backend, automatización y sistemas distribuidos.",
    technologies: ["Backend", "Automatización", "Sistemas Distribuidos"],
    type: "education"
  },
  {
    id: 2,
    title: "Desarrollo Backend y Automatización",
    company: "Cimiento",
    location: "México",
    period: "Presente",
    description: "Desarrollo backend y automatización de procesos para proyectos internos y externos. Enfoque en APIs, bots conversacionales e integración de herramientas como n8n y LangChain.",
    technologies: ["APIs", "Bots Conversacionales", "n8n", "LangChain", "Automatización"],
    type: "work"
  }
]

export default function Experience() {
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
            Experiencia
          </h2>
          <div className="w-24 h-1 bg-gradient-purple mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Línea de tiempo */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-purple z-5 md:left-1/2 md:transform md:-translate-x-1/2" style={{ boxShadow: 'none' }}></div>

          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative mb-12"
            >
              {/* Punto en la línea de tiempo */}
              <div className="absolute left-6 w-4 h-4 bg-gradient-purple rounded-full shadow-lg z-10 md:left-1/2 md:transform md:-translate-x-2"></div>

              {/* Contenido */}
              <div className="ml-16 md:ml-0 md:ml-8 md:pl-8">
                <div className="bg-black border border-primary-500/20 rounded-2xl p-6 hover:border-primary-500/40 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-3">
                    {experience.type === 'education' ? (
                      <GraduationCap className="w-5 h-5 text-primary-400" />
                    ) : (
                      <Building className="w-5 h-5 text-primary-400" />
                    )}
                    <h3 className="text-xl font-bold text-white font-space-grotesk">
                      {experience.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{experience.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{experience.location}</span>
                    </div>
                  </div>

                  <h4 className="text-lg font-semibold text-primary-300 mb-3">
                    {experience.company}
                  </h4>

                  <p className="text-gray-300 leading-relaxed mb-4">
                    {experience.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-black/40 text-primary-300 rounded-full text-xs font-medium border border-primary-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-purple text-white rounded-full hover:shadow-lg transition-all font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Descargar CV
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
} 