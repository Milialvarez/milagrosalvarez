/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, MouseEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "../data";
import { 
  Download, Mail, Globe, Sparkles, Send,
  ChevronLeft, ChevronRight, ExternalLink, 
  Loader2
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Portfolio() {
const [lang, setLang] = useState<"es" | "en">("es");
  const data = portfolioData[lang];
  const [currentProject, setCurrentProject] = useState(0);
  const [aiQuery, setAiQuery] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const nextProject = () => setCurrentProject((prev) => (prev + 1) % data.projects.items.length);
  const prevProject = () => setCurrentProject((prev) => (prev - 1 + data.projects.items.length) % data.projects.items.length);

  const handleAiSearch = async () => {
    if (!aiQuery.trim() || isLoading) return;

    setIsLoading(true);
    setAiResponse(""); 

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [{ role: "user", content: aiQuery }]
        }),
      });

      const result = await response.json();
      
      if (result.content) {
        setAiResponse(result.content);
      } else {
        setAiResponse("Lo siento, hubo un problema al procesar la respuesta.");
      }
    } catch (error) {
      console.error("Error consultando la IA:", error);
      setAiResponse("Error de conexion. Intentalo de nuevo.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSmoothScroll = (e: MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, 
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#070708] text-slate-200 font-sans selection:bg-violet-500/30 overflow-x-hidden">
      
      {/* FONDO ANIMADO SUTIL */}
      <div className="fixed inset-0 z-[0] pointer-events-none">
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-violet-600/10 blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 60, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 2 }}
          className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[120px]"
        />
      </div>

      <div className="relative z-10">
        {/* NAVBAR */}
        <nav className="fixed w-full backdrop-blur-md bg-[#0A0A0B]/80 border-b border-white/5 z-50">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <motion.span whileHover={{ scale: 1.1 }} className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent cursor-pointer">
              MA.
            </motion.span>
            
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
              {['about', 'experience', 'projects', 'education', 'ai', 'contact'].map((section) => (
                <a 
                  key={section}
                  href={`#${section}`} 
                  onClick={(e) => handleSmoothScroll(e, section)}
                  className="hover:text-white transition-colors"
                >
                  {data.nav[section as keyof typeof data.nav]}
                </a>
              ))}
            </div>

            <button 
              onClick={() => setLang(lang === "es" ? "en" : "es")}
              className="flex items-center gap-2 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full transition-all border border-white/10"
            >
              <Globe size={18} className="text-violet-400" />
              <span className="font-semibold uppercase text-xs tracking-widest">{lang}</span>
            </button>
          </div>
        </nav>

        <main className="max-w-6xl mx-auto px-6 pt-20 pb-10">
          
          {/* HERO SECTION */}
          <section id="home" className="min-h-[90vh] flex flex-col justify-center">
            <div className="grid md:grid-cols-12 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                className="md:col-span-8"
              >
                <h2 className="text-violet-400 font-mono mb-4 text-lg">{data.hero.greeting}</h2>
                <h1 className="text-6xl md:text-8xl font-black mb-4 tracking-tighter text-white">
                  {data.hero.name.split(" ")[0]} <br/> 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-blue-500">
                    {data.hero.name.split(" ")[1]}
                  </span>
                </h1>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-400 mb-8 italic">
                  {data.hero.role}
                </h3>
                <p className="max-w-xl text-lg text-slate-400 leading-relaxed mb-10">
                  {data.hero.description}
                </p>
                
                <div className="flex flex-wrap gap-6">
                  <motion.a 
                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(139, 92, 246, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                    href="/Milagros-Alvarez-CV.pdf" 
                    className="bg-violet-600 text-white px-8 py-4 rounded-full font-bold flex items-center gap-2"
                  >
                    <Download size={20} /> {data.hero.downloadCV}
                  </motion.a>
                  <div className="flex gap-4">
                    <a href="https://github.com/Milialvarez" className="p-4 bg-white/5 border border-white/5 rounded-full hover:text-violet-400 transition-colors"><FaGithub size={24}/></a>
                    <a href="https://www.linkedin.com/in/milagrosalvarez-dev" className="p-4 bg-white/5 border border-white/5 rounded-full hover:text-violet-400 transition-colors"><FaLinkedin size={24}/></a>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="md:col-span-4 grid grid-cols-1 gap-4"
              >
                {[
                  { label: data.hero.stats.exp, color: "from-violet-500" },
                  { label: data.hero.stats.projects, color: "from-blue-500" },
                  { label: data.hero.stats.github, color: "from-teal-500" }
                ].map((stat, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ x: 10 }}
                    className={`p-6 rounded-2xl bg-gradient-to-r ${stat.color} to-transparent border border-white/10 backdrop-blur-xl`}
                  >
                    <span className="text-2xl font-black text-white">{stat.label}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* SECCIÓN SOBRE MÍ */}
          <section id="about" className="py-24 border-t border-white/5">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-4xl font-bold mb-8 text-white">{data.about.title}</h3>
                <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                  {data.about.text.map((p, i) => (
                    <p key={i} dangerouslySetInnerHTML={{ __html: p.replace(/\*\*(.*?)\*\*/g, '<span class="text-violet-400 font-bold">$1</span>') }} />
                  ))}
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute -inset-4 bg-gradient-to-tr from-violet-500 to-blue-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] border border-white/10 bg-[#121214]">
                  <img 
                    src={data.about.image} 
                    alt="Milagros Alvarez" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </motion.div>
            </div>
          </section>

          {/* EXPERIENCIA */}
          <section id="experience" className="py-24">
            <h3 className="text-4xl font-bold mb-16 text-white">{data.experience.title}</h3>
            <div className="space-y-12">
              {data.experience.items.map((exp, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-[#121214] border border-white/5 p-8 rounded-3xl"
                >
                  <div className="flex flex-wrap justify-between items-start mb-6">
                    <div>
                      <h4 className="text-2xl font-bold text-violet-400">{exp.role}</h4>
                      <p className="text-xl text-white opacity-80">{exp.company}</p>
                    </div>
                    <span className="bg-violet-500/10 border border-violet-500/20 text-violet-300 px-4 py-1 rounded-full text-sm font-mono">{exp.date}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {exp.responsibilities.map((res, j) => (
                      <li key={j} className="flex gap-3 text-slate-400">
                        <span className="text-violet-500">▹</span> {res}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-6 border-t border-white/5">
                    <p className="text-sm font-mono text-slate-500 uppercase tracking-widest">Soft Skills</p>
                    <p className="text-slate-300 italic">{exp.softSkills}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* PROYECTOS CON CAPTURAS DE PANTALLA */}
          <section id="projects" className="py-24">
            <div className="flex justify-between items-end mb-12">
              <h3 className="text-4xl font-bold text-white">{data.projects.title}</h3>
              <div className="flex gap-4">
                <button onClick={prevProject} className="p-3 bg-white/5 rounded-full hover:bg-violet-500 transition-all"><ChevronLeft/></button>
                <button onClick={nextProject} className="p-3 bg-white/5 rounded-full hover:bg-violet-500 transition-all"><ChevronRight/></button>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-3xl bg-[#121214] border border-white/5 p-8 md:p-12">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={currentProject}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                  className="grid md:grid-cols-2 gap-12 items-center"
                >
                  <div className="aspect-video bg-slate-900 rounded-2xl flex items-center justify-center border border-white/5 relative group overflow-hidden shadow-2xl">
                    {data.projects.items[currentProject].image ? (
                      <img 
                        src={data.projects.items[currentProject].image} 
                        alt={data.projects.items[currentProject].title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <span className="text-slate-600 font-bold uppercase tracking-[10px]">No Image</span>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-transparent to-transparent opacity-60" />
                  </div>
                  <div>
                    <h4 className="text-3xl font-bold text-white mb-4">{data.projects.items[currentProject].title}</h4>
                    <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                      {data.projects.items[currentProject].description}
                    </p>
                    <div className="flex gap-4">
                      <a href={data.projects.items[currentProject].link} target="_blank" className="flex items-center gap-2 bg-white/5 border border-white/10 hover:bg-white/10 px-6 py-3 rounded-xl transition-all">
                        <FaGithub/> {data.projects.viewCode}
                      </a>
                      {data.projects.items[currentProject].demo !== "#" && (
                        <a href={data.projects.items[currentProject].demo} target="_blank" className="flex items-center gap-2 bg-white text-black hover:bg-gray-200 px-6 py-3 rounded-xl transition-all font-bold">
                          <ExternalLink size={18}/> {data.projects.liveDemo}
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </section>

          {/* EDUCACIÓN & CERTIFICACIONES */}
          <section id="education" className="py-24 grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-3xl font-bold mb-12 text-white">{data.education.title}</h3>
              <div className="space-y-10">
                {data.education.items.map((edu, i) => (
                  <div key={i} className="relative pl-6 border-l-2 border-violet-500/30">
                    <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-violet-500" />
                    <p className="text-violet-400 font-mono text-sm mb-1">{edu.date}</p>
                    <h4 className="text-xl font-bold text-white mb-1">{edu.degree}</h4>
                    <p className="text-slate-300 font-medium mb-3">{edu.institution}</p>
                    <p className="text-slate-400 text-sm leading-relaxed">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
            <h3 className="text-3xl font-bold mb-12 text-white">{data.education.certifications.title}</h3>
            <div className="grid grid-cols-1 gap-6">
              {data.education.certifications.list.map((cert: any, i: number) => (
                <motion.div 
                  key={i} 
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 bg-[#121214] p-6 rounded-2xl border border-white/5 group"
                >
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <span className="font-bold text-lg text-white block mb-1">{cert.name}</span>
                      {cert.file && (
                        <motion.a
                          href={cert.file}
                          download
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="text-slate-500 hover:text-violet-400 p-2 bg-white/5 rounded-lg transition-colors"
                          title="Descargar Certificado"
                        >
                          <Download size={18} />
                        </motion.a>
                      )}
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">{cert.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          </section>

          {/* SECCIÓN AI CONSULTANT */}
          <section id="ai" className="py-24">
            <div className="bg-[#121214] border border-white/5 rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Sparkles size={120} className="text-violet-500" />
              </div>
              
              <div className="relative z-10 max-w-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <span className="bg-violet-500/20 text-violet-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                    <Sparkles size={14}/> AI Assistant
                  </span>
                </div>
                <h3 className="text-4xl font-bold text-white mb-4">{data.ai.title}</h3>
                <p className="text-slate-400 text-lg mb-8">{data.ai.description}</p>
                
                <div className="flex flex-col gap-4">
                  <form 
                    onSubmit={(e) => { e.preventDefault(); handleAiSearch(); }}
                    className="relative"
                  >
                    <input 
                      type="text" 
                      value={aiQuery}
                      onChange={(e) => setAiQuery(e.target.value)}
                      placeholder={data.ai.placeholder}
                      disabled={isLoading}
                      className="w-full bg-[#0A0A0B] border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-violet-500 transition-colors pr-16 text-slate-200 disabled:opacity-50"
                    />
                    <button 
                      type="submit"
                      disabled={isLoading || !aiQuery.trim()}
                      className="absolute right-3 top-2 bottom-2 bg-violet-600 hover:bg-violet-500 text-white px-4 rounded-xl transition-all disabled:bg-slate-800 disabled:text-slate-500"
                    >
                      {isLoading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                    </button>
                  </form>
                  
                  <div className="bg-[#0A0A0B]/50 border border-white/5 rounded-2xl p-6 min-h-[120px] flex items-start text-slate-300 leading-relaxed overflow-y-auto">
                    {isLoading ? (
                      <div className="flex items-center gap-3 text-slate-500 italic">
                        <Loader2 size={16} className="animate-spin text-violet-500" />
                        Pensando...
                      </div>
                    ) : aiResponse ? (
                      <motion.p 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }}
                        className="whitespace-pre-wrap"
                      >
                        {aiResponse}
                      </motion.p>
                    ) : (
                      <span className="text-slate-500 italic">{data.ai.responsePlaceholder}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CONTACTO */}
          <section id="contact" className="py-24">
            <div className="max-w-4xl mx-auto relative rounded-[2.5rem] bg-[#111113] border border-white/5 p-12 md:p-20 text-center overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500" />
              
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                {data.contact.title}
              </h3>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                {data.contact.subtitle}
              </p>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={`mailto:${data.contact.email}`}
                className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-colors"
              >
                <Mail size={20} /> {data.contact.button}
              </motion.a>
            </div>
          </section>

        </main>

        <footer className="py-8 border-t border-white/5 text-center text-slate-500">
          <p className="text-sm font-mono uppercase tracking-[3px]">© 2026 Milagros Alvarez</p>
        </footer>
      </div>
      
    </div>
  );
}