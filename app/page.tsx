"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../data";
import { Download, Mail, Globe, Code2, Database, Wrench } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa"; 

export default function Portfolio() {
  const [lang, setLang] = useState<"es" | "en">("es");
  const data = portfolioData[lang];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-violet-500/30">
      
      {/* Navegación y Toggle de Idioma */}
      <nav className="fixed w-full backdrop-blur-md bg-slate-950/80 z-50 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-bold bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
            MA.
          </span>
          <button 
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            className="flex items-center gap-2 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full transition-all border border-white/10"
          >
            <Globe size={18} className="text-violet-400" />
            <span className="font-semibold uppercase text-sm tracking-wider">{lang}</span>
          </button>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20 space-y-32">
        
        {/* HERO SECTION */}
        <section className="min-h-[70vh] flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-violet-400 font-mono mb-4 text-lg">{data.hero.greeting}</h2>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight text-white">
              {data.hero.name}
            </h1>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-400 mb-6">
              {data.hero.role}
            </h3>
            <p className="max-w-2xl text-lg text-slate-400 leading-relaxed mb-10">
              {data.hero.description}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/Milagros-Alvarez-CV.pdf" 
                download
                className="flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white px-8 py-4 rounded-lg font-semibold shadow-lg shadow-violet-500/25 transition-colors"
              >
                <Download size={20} />
                {data.hero.downloadCV}
              </motion.a>
              
              <div className="flex gap-4 items-center ml-4">
                <a href="https://github.com/Milialvarez" target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-violet-400 transition-colors">
                  <FaGithub size={24} />
                </a>
                <a href="https://www.linkedin.com/in/milagrosalvarez-dev" target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-violet-400 transition-colors">
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* EXPERIENCIA & EDUCACIÓN */}
        <section className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3 text-white">
              <span className="text-violet-500">01.</span> Experiencia
            </h3>
            <div className="space-y-8 border-l border-violet-500/30 pl-6">
              {data.experience.map((exp, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[31px] top-1 h-4 w-4 rounded-full bg-violet-500 border-4 border-slate-950" />
                  <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                  <p className="text-violet-400 font-mono text-sm mb-2">{exp.company} • {exp.date}</p>
                  <p className="text-slate-400">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3 text-white">
              <span className="text-blue-500">02.</span> Educación
            </h3>
            <div className="space-y-8 border-l border-blue-500/30 pl-6">
              {data.education.map((edu, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[31px] top-1 h-4 w-4 rounded-full bg-blue-500 border-4 border-slate-950" />
                  <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                  <p className="text-blue-400 font-mono text-sm mb-2">{edu.institution}</p>
                  <p className="text-slate-400">{edu.date}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TECNOLOGÍAS */}
        <section>
          <h3 className="text-3xl font-bold mb-10 flex items-center gap-3 text-white justify-center">
            <span className="text-violet-500">03.</span> Stack Tecnológico
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div whileHover={{ y: -5 }} className="bg-white/5 border border-white/10 p-6 rounded-xl hover:border-violet-500/50 transition-colors">
              <Code2 className="text-violet-400 mb-4" size={32} />
              <h4 className="text-xl font-bold mb-4 text-white">Frontend</h4>
              <div className="flex flex-wrap gap-2">
                {data.tech.frontend.map(t => <span key={t} className="bg-violet-500/10 text-violet-300 px-3 py-1 rounded-full text-sm">{t}</span>)}
              </div>
            </motion.div>
            
            <motion.div whileHover={{ y: -5 }} className="bg-white/5 border border-white/10 p-6 rounded-xl hover:border-blue-500/50 transition-colors">
              <Database className="text-blue-400 mb-4" size={32} />
              <h4 className="text-xl font-bold mb-4 text-white">Backend & DB</h4>
              <div className="flex flex-wrap gap-2">
                {data.tech.backend.concat(data.tech.db).map(t => <span key={t} className="bg-blue-500/10 text-blue-300 px-3 py-1 rounded-full text-sm">{t}</span>)}
              </div>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="bg-white/5 border border-white/10 p-6 rounded-xl hover:border-teal-500/50 transition-colors">
              <Wrench className="text-teal-400 mb-4" size={32} />
              <h4 className="text-xl font-bold mb-4 text-white">Herramientas</h4>
              <div className="flex flex-wrap gap-2">
                {data.tech.tools.map(t => <span key={t} className="bg-teal-500/10 text-teal-300 px-3 py-1 rounded-full text-sm">{t}</span>)}
              </div>
            </motion.div>
          </div>
        </section>

        {/* PROYECTOS (Carrusel simplificado css) */}
        <section>
          <h3 className="text-3xl font-bold mb-10 flex items-center gap-3 text-white">
            <span className="text-violet-500">04.</span> Proyectos Destacados
          </h3>
          <div className="flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory hide-scrollbar">
            {data.projects.map((proj, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02 }}
                className="min-w-[300px] md:min-w-[400px] bg-white/5 border border-white/10 rounded-xl p-6 snap-center flex flex-col justify-between hover:bg-white/10 transition-all"
              >
                <div>
                  <div className="h-40 bg-slate-900 rounded-lg mb-4 flex items-center justify-center text-slate-500 border border-white/5">
                    {/* Aquí iría la etiqueta <img> cuando tengas las imágenes */}
                    [Imagen del Proyecto]
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">{proj.title}</h4>
                  <p className="text-slate-400 mb-4">{proj.description}</p>
                </div>
                <a href={proj.link} target="_blank" rel="noreferrer" className="text-violet-400 hover:text-violet-300 flex items-center gap-2 font-mono text-sm mt-4">
                  Ver código <FaGithub size={16} />
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CERTIFICACIONES */}
        <section className="text-center">
          <h3 className="text-3xl font-bold mb-10 flex items-center gap-3 text-white justify-center">
            <span className="text-blue-500">05.</span> Certificaciones
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {data.certs.map((cert, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -3 }}
                className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-4 rounded-xl cursor-pointer hover:border-violet-500/50"
              >
                <span className="font-semibold">{cert}</span>
                <Download size={16} className="text-violet-400" />
              </motion.div>
            ))}
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 text-center text-slate-500">
        <p>Diseñado y construido con ❤️ por Milagros Alvarez.</p>
        <div className="flex justify-center items-center gap-2 mt-2">
          <Mail size={16} /> <a href={`mailto:${data.about.email}`} className="hover:text-violet-400 transition-colors">{data.about.email}</a>
        </div>
      </footer>
      
    </div>
  );
}