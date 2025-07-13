'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    id: 1,
    title: "🧾 Kontos",
    description: "Un asistente automatizado para ayudarte a entender tus finanzas personales. Solo copia y pega tus movimientos bancarios, y Kontos los analiza, clasifica y te ofrece consejos útiles.",
    image: "/images/projects/kontos.png",
    technologies: ["Python", "NLP", "Regex", "LLMs", "FastAPI"],
    liveUrl: "#",
    githubUrl: "https://github.com/AngelSalinasT/kontos",
    featured: true
  },
  {
    id: 2,
    title: "🩺 MediScann",
    description: "Una herramienta de predicción médica que detecta enfermedades de la piel a partir de una imagen. Utiliza inteligencia artificial entrenada con más de 20,000 imágenes y alcanza una precisión del 87%.",
    image: "/images/projects/mediscann.png",
    technologies: ["Python", "TensorFlow", "Flask", "Computer Vision"],
    liveUrl: "#",
    githubUrl: "https://github.com/AngelSalinasT/MediScann",
    featured: false
  },
  {
    id: 3,
    title: "🧑‍💻 Este Portafolio",
    description: "Un sitio web minimalista y artístico hecho con Next.js y Tailwind CSS. Diseñado para presentar mis proyectos, experiencia y contacto profesional.",
    image: "/images/projects/portfolio.png",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "https://github.com/AngelSalinasT/pageforme",
    featured: false
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk text-white mb-6">
            Proyectos
          </h2>
          <div className="w-24 h-1 bg-gradient-purple mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Una selección de mis proyectos más recientes que demuestran mi pasión por la automatización y la inteligencia artificial.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-black/30 border border-primary-500/10 rounded-2xl overflow-hidden hover:shadow-xl hover:border-primary-500/30 transition-all duration-300 flex flex-col min-h-[600px] backdrop-blur-sm ${
                project.featured ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <div className="p-6 flex flex-col h-full">
                <div className={`relative bg-gradient-to-br from-black/50 to-gray-900/30 rounded-xl mb-6 overflow-hidden flex-shrink-0 ${
                  project.featured ? 'h-64' : 'h-48'
                }`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      // Si la imagen no existe, mostrar placeholder
                      const target = e.currentTarget as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center" style={{display: 'none'}}>
                    <span className="text-gray-400 text-sm">Imagen del Proyecto</span>
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-gradient-purple text-white px-3 py-1 rounded-full text-xs font-medium z-10">
                      Destacado
                    </div>
                  )}
                </div>

                <div className="flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white mb-3 font-space-grotesk">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-dark-700 text-primary-300 rounded-full text-xs font-medium border border-dark-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 mt-auto">
                    <motion.a
                      href={project.liveUrl}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-purple text-white rounded-lg hover:shadow-lg transition-all text-sm font-medium"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Ver Demo
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border border-primary-500 text-primary-300 rounded-lg hover:bg-primary-500 hover:text-white transition-colors text-sm font-medium"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-4 h-4" />
                      Código
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/AngelSalinasT"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-purple text-white rounded-full hover:shadow-lg transition-all font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5" />
            Ver Más en GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
} 