// src/data.ts
export const portfolioData = {
  es: {
    nav: {
      about: "Sobre mí",
      experience: "Experiencia",
      skills: "Habilidades",
      projects: "Proyectos",
      education: "Formación",
      ai: "Preguntale a mi IA",
      contact: "Contacto",
    },
    hero: {
      greeting: "Hola, soy",
      name: "Milagros Alvarez",
      role: "Software Developer & Fullstack Engineer",
      description: "Especialista en construir soluciones robustas donde la ingeniería de sistemas y el desarrollo moderno se encuentran. Enfocada en escalabilidad y código de calidad.",
      downloadCV: "Descargar CV",
      stats: {
        exp: "+1 Año de Exp.",
        projects: "+7 Proyectos",
        github: "+1400 Contribuciones"
      }
    },
    about: {
      title: "Detrás del Código",
      image: "/perfil.jpeg", 
      text: [
        "Soy Técnica Universitaria en Desarrollo de Aplicaciones y actual estudiante de Ingeniería en Sistemas en la UNICEN. Mi enfoque principal es el **Desarrollo Backend**, donde transformo problemas complejos en arquitecturas eficientes.",
        "A lo largo de mi trayectoria, he consolidado una base sólida en el ecosistema de **Java, Python y TypeScript**, digitalizando procesos que optimicen el día a día de los clientes. Mi experiencia en **Magno (Software Solutions)** me ha permitido liderar diseños de backend y sumar criterio técnico a mis decisiones arquitectónicas.",
        "No solo escribo código; diseño soluciones. Me apasiona aplicar **Metodologías Ágiles** para asegurar que cada entrega aporte valor real y sea mantenible a largo plazo."
      ]
    },
    experience: {
      title: "Trayectoria Profesional",
      items: [
        {
          role: "Desarrolladora de Software Fullstack",
          company: "MAGNO (Software Solutions)",
          date: "Febrero 2025 - Presente",
          responsibilities: [
            "Liderazgo técnico en el diseño de arquitecturas escalables utilizando Java (Spring Boot) y TypeScript (NestJS).",
            "Integración proactiva de modelos de IA para optimizar procesos internos y de clientes.",
            "Desarrollo de interfaces de usuario altamente interactivas con Next.js, React y Tailwind CSS.",
            "Gestión ágil bajo marcos Scrum, asegurando entregas continuas de alto valor."
          ],
          softSkills: "Liderazgo técnico, Comunicación asertiva, Resolución analítica de problemas complejos."
        }
      ]
    },
  skills: {
      headerTitle: "Ecosistema ",
      headerHighlight: "Técnico",
      headerSubtitle: "Arquitecturas robustas, interfaces intuitivas y soluciones inteligentes impulsadas por IA.",
      categories: [
        {
          title: "Backend & Arquitectura",
          items: [
            { name: "Java", icon: "FaJava", color: "text-orange-500" },
            { name: "Spring Boot", icon: "SiSpringboot", color: "text-green-500" },
            { name: "TypeScript", icon: "SiTypescript", color: "text-blue-500" },
            { name: "NestJS", icon: "SiNestjs", color: "text-red-500" },
            { name: "Python", icon: "SiPython", color: "text-yellow-400" },
            { name: "FastAPI", icon: "SiFastapi", color: "text-teal-400" }
          ]
        },
        {
          title: "Frontend & UI",
          items: [
            { name: "React", icon: "SiReact", color: "text-cyan-400" },
            { name: "Next.js", icon: "SiNextdotjs", color: "text-white" },
            { name: "Tailwind CSS", icon: "SiTailwindcss", color: "text-cyan-500" },
            { name: "Angular", icon: "SiAngular", color: "text-red-600" }
          ]
        },
        {
          title: "Bases de Datos & Tools",
          items: [
            { name: "PostgreSQL", icon: "SiPostgresql", color: "text-blue-400" },
            { name: "MySQL", icon: "SiMysql", color: "text-blue-500" },
            { name: "JPA", icon: "FaDatabase", color: "text-slate-400" },
            { name: "Prisma ORM", icon: "SiPrisma", color: "text-white" },
            { name: "Git", icon: "SiGit", color: "text-orange-600" },
            { name: "Docker", icon: "FaDocker", color: "text-blue-400" },
            { name: "Scrum / Agile", icon: "FaProjectDiagram", color: "text-violet-400" }
          ]
        },
        {
          title: "AI & Automatización",
          items: [
            { name: "Langchain", icon: "SiLangchain", color: "text-green-400" },
            { name: "PyTorch", icon: "SiPytorch", color: "text-orange-500" },
            { name: "Hugging Face", icon: "SiHuggingface", color: "text-yellow-400" },
            { name: "OpenAI", icon: "SiOpenai", color: "text-white" },
            { name: "Gemini", icon: "SiGooglegemini", color: "text-blue-400" },
            { name: "Pandas", icon: "SiPandas", color: "text-indigo-400" },
            { name: "Streamlit", icon: "SiStreamlit", color: "text-red-400" },
            { name: "Selenium", icon: "SiSelenium", color: "text-green-500" }
          ]
        }
      ]
    },
    projects: {
      title: "Portfolio de Proyectos",
      liveDemo: "Demo en Vivo",
      viewCode: "Ver Código",
      items: [
        {
          title: "CIRO - Gestión Integral",
          description: "Liderazgo del backend para una plataforma odontológica crítica. Implementación de lógica financiera y administrativa compleja, gestión de turnos y expedientes médicos utilizando Java y Spring Boot.",
          link: "https://github.com/magnoitsystems/ciro-backend",
          demo: "https://ciro-frontend.vercel.app/",
          image: "/ciro.png" 
        },
        {
          title: "Galpón Vial Municipal",
          description: "Sistema de digitalización para procesos de auditoría y control de stock en el sector público. Desarrollado con NestJS para un backend robusto y React para una interfaz administrativa eficiente.",
          link: "https://github.com/malvarezgayral/galponvial-intranet-backend",
          demo: "https://galponvial.loberia.gob.ar/login",
          image: "/galpon.png"
        },
        {
          title: "Project Tasks Assistant (AI)",
          description: "Agente inteligente con RAG (Retrieval-Augmented Generation). Permite gestionar proyectos y sprints mediante un chatbot que analiza métricas y genera reportes basados en el contexto real de las tareas.",
          link: "https://github.com/Milialvarez/project-tasks-assistant",
          demo: "#",
          image: "/project.jpeg"
        },
        {
          title: "Prompt Injection Detector",
          description: "Firewall de seguridad para LLMs. Gateway desarrollado con Machine Learning que intercepta y analiza prompts en tiempo real para prevenir ataques de inyección y filtrar contenido malicioso.",
          link: "https://github.com/Milialvarez/project-tasks-assistant",
          demo: "https://prompt-injection-detector.streamlit.app/",
          image: "/prompt.png"
        },
        {
          title: "Agapanthus Departments",
          description: "Plataforma premium de alquileres temporarios con enfoque en UX/UI. Incluye sistema de reseñas, gestión de disponibilidad y almacenamiento persistente en PostgreSQL mediante Prisma ORM.",
          link: "https://github.com/magnoitsystems/Agapanthus-Departments",
          demo: "https://www.agapanthuslasmarias.com/",
          image: "/agapanthus.png"
        },
        {
          title: "Flora Cordeiro Inmobiliaria",
          description: "Solución integral para gestión inmobiliaria. Manejo de sesiones seguras, CRUD avanzado de propiedades y formularios dinámicos integrados con una arquitectura Next.js escalable.",
          link: "https://github.com/magnoitsystems/Flora-inmobiliaria",
          demo: "https://flora-cordeiro-inmobiliaria.vercel.app/",
          image: "/flora.png"
        },
        {
          title: "Jornadas Interhospitalarias",
          description: "Sistema de soporte para congresos médicos. Gestión de registros, generación automática de credenciales y plataforma de subida de manuscritos científicos con panel de administración diferenciado.",
          link: "https://github.com/magnoitsystems/proyecto-jornadas-interhospitalarias",
          demo: "https://www.jornadasinterhospitalariastandil.com/",
          image: "/jornadas.png"
        }
      ]
    },
    education: {
      title: "Educación Académica",
      items: [
        {
          degree: "Ingeniería de Sistemas",
          institution: "UNICEN",
          date: "2025 - Presente (3er año aprobado)",
          description: "Ciencias de la computación, diseño de algoritmos y arquitecturas de software a gran escala."
        },
        {
          degree: "Tecnicatura Univ. en Desarrollo de Apps",
          institution: "UNICEN",
          date: "2023 - 2025 (Graduada)",
          description: "Desarrollo Fullstack, bases de datos y metodologías ágiles."
        }
      ],
      certifications: {
        title: "Logros y Certificados",
        list: [
          { 
            name: "EF Set English C1 (Advanced)", 
            icon: "🇬🇧",
            description: "Acreditación internacional de nivel avanzado.", 
            file: "/EF SET Certificate Milagros Alvarez.pdf" 
          },
          { 
            name: "QA Testing", 
            icon: "🔍",
            description: "IT School. Creación de casos de prueba, reportes de bugs, etc", 
            file: "/Testing QA - Milagros Alvarez.pdf"
          },
          { 
            name: "Fundamentos de Automatización", 
            icon: "🤖",
            description: "IT School. Fundamentos teóricos de RPA", 
            file: "/Fundamentos de la automatización - Milagros Alvarez.pdf"
          }
        ]
      }
    },
    ai: {
      title: "Consultora de Perfil (AI)",
      description: "¿Tenés dudas sobre mi experiencia o stack técnico? Mi asistente entrenado puede responderte en tiempo real.",
      placeholder: "Ej: ¿Qué experiencia tiene Milagros con arquitecturas hexagonales?",
      button: "Consultar IA",
      responsePlaceholder: "La respuesta aparecerá aquí..."
    },
    contact: {
      title: "Construyamos algo escalable",
      subtitle: "Tenés un proyecto en mente o solo querés saludar? ¡Hablemos!",
      button: "Enviar Mail",
      email: "milagrosalvarez2604@gmail.com"
    }
  },
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      skills: "Skills",
      projects: "Projects",
      education: "Education",
      ai: "Ask my AI",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      name: "Milagros Alvarez",
      role: "Software Developer & Fullstack Engineer",
      description: "Specializing in building robust solutions where systems engineering and modern development meet. Focused on scalability and clean code.",
      downloadCV: "Download CV",
      stats: {
        exp: "+1 Year Exp.",
        projects: "+7 Projects",
        github: "+1400 Contributions"
      }
    },
    about: {
      title: "Behind the Code",
      image: "/perfil.jpeg",
      text: [
        "I am a University Technician in Application Development and a current Systems Engineering student at UNICEN. My main focus is **Backend Development**, transforming complex problems into efficient architectures.",
        "Throughout my career, I've built a solid foundation in **Java, Python, and TypeScript**, working in real-world environments demanding high availability. My experience at **Magno (Software Solutions)** includes leading backend designs using Hexagonal Architecture.",
        "I don't just write code; I design solutions. I am passionate about **Clean Code and Agile Methodologies** to ensure every delivery provides long-term value."
      ]
    },
    experience: {
      title: "Professional Path",
      items: [
        {
          role: "Fullstack Software Developer",
          company: "MAGNO (Software Solutions)",
          date: "February 2025 - Present",
          responsibilities: [
            "Technical leadership in scalable architectures using Spring Boot and NestJS.",
            "Proactive AI integration to optimize internal workflows and client products.",
            "Developing interactive UIs with Next.js and Tailwind CSS.",
            "Agile management under Scrum frameworks for high-value delivery."
          ],
          softSkills: "Technical leadership, Clear architecture communication, Analytical problem solving."
        }
      ]
    },
    skills: {
      headerTitle: "Tech ",
      headerHighlight: "Ecosystem",
      headerSubtitle: "Robust architectures, intuitive interfaces, and smart AI-driven solutions.",
      categories: [
        {
          title: "Backend & Architecture",
          items: [
            { name: "Java", icon: "FaJava", color: "text-orange-500" },
            { name: "Spring Boot", icon: "SiSpringboot", color: "text-green-500" },
            { name: "TypeScript", icon: "SiTypescript", color: "text-blue-500" },
            { name: "NestJS", icon: "SiNestjs", color: "text-red-500" },
            { name: "Python", icon: "SiPython", color: "text-yellow-400" },
            { name: "FastAPI", icon: "SiFastapi", color: "text-teal-400" }
          ]
        },
        {
          title: "Frontend & UI",
          items: [
            { name: "React", icon: "SiReact", color: "text-cyan-400" },
            { name: "Next.js", icon: "SiNextdotjs", color: "text-white" },
            { name: "Tailwind CSS", icon: "SiTailwindcss", color: "text-cyan-500" },
            { name: "Angular", icon: "SiAngular", color: "text-red-600" }
          ]
        },
        {
          title: "Databases & Tools",
          items: [
            { name: "PostgreSQL", icon: "SiPostgresql", color: "text-blue-400" },
            { name: "MySQL", icon: "SiMysql", color: "text-blue-500" },
            { name: "JPA", icon: "FaDatabase", color: "text-slate-400" },
            { name: "Prisma ORM", icon: "SiPrisma", color: "text-white" },
            { name: "Git", icon: "SiGit", color: "text-orange-600" },
            { name: "Docker", icon: "FaDocker", color: "text-blue-400" },
            { name: "Scrum / Agile", icon: "FaProjectDiagram", color: "text-violet-400" }
          ]
        },
        {
          title: "AI & Automation",
          items: [
            { name: "Langchain", icon: "SiLangchain", color: "text-green-400" },
            { name: "PyTorch", icon: "SiPytorch", color: "text-orange-500" },
            { name: "Hugging Face", icon: "SiHuggingface", color: "text-yellow-400" },
            { name: "OpenAI", icon: "SiOpenai", color: "text-white" },
            { name: "Gemini", icon: "SiGooglegemini", color: "text-blue-400" },
            { name: "Pandas", icon: "SiPandas", color: "text-indigo-400" },
            { name: "Streamlit", icon: "SiStreamlit", color: "text-red-400" },
            { name: "Selenium", icon: "SiSelenium", color: "text-green-500" }
          ]
        }
      ]
    },
    projects: {
      title: "Project Showcase",
      liveDemo: "Live Demo",
      viewCode: "View Code",
      items: [
        {
          title: "CIRO - Management System",
          description: "Backend leadership for a critical dental platform. Implementing complex financial logic, appointment scheduling, and medical records using Java and Spring Boot.",
          link: "https://github.com/magnoitsystems/ciro-backend",
          demo: "https://ciro-frontend.vercel.app/",
          image: "/ciro.png"
        },
        {
          title: "Municipal Road Warehouse",
          description: "Digitalization system for audit processes and stock control in the public sector. Built with NestJS for a robust backend and React for an efficient admin interface.",
          link: "https://github.com/malvarezgayral/galponvial-intranet-backend",
          demo: "https://galponvial.loberia.gob.ar/login",
          image: "/galpon.png"
        },
        {
          title: "Project Tasks Assistant (AI)",
          description: "Intelligent agent featuring RAG (Retrieval-Augmented Generation). Manages projects and sprints via a chatbot that analyzes metrics based on real task context.",
          link: "https://github.com/Milialvarez/project-tasks-assistant",
          demo: "#",
          image: "/project.jpeg"
        },
        {
          title: "Prompt Injection Detector",
          description: "AI Security Firewall. A Machine Learning-based gateway that intercepts and analyzes prompts in real-time to prevent injection attacks and filter malicious content.",
          link: "https://github.com/Milialvarez/project-tasks-assistant",
          demo: "https://prompt-injection-detector.streamlit.app/",
          image: "/prompt.png"
        },
        {
          title: "Agapanthus Departments",
          description: "Premium short-term rental platform with a UX/UI focus. Features a review system, availability management, and PostgreSQL storage via Prisma ORM.",
          link: "https://github.com/magnoitsystems/Agapanthus-Departments",
          demo: "https://www.agapanthuslasmarias.com/",
          image: "/agapanthus.png"
        },
        {
          title: "Flora Cordeiro Real Estate",
          description: "Comprehensive real estate management solution. Features secure session handling, advanced property CRUD, and dynamic forms built on a scalable Next.js architecture.",
          link: "https://github.com/magnoitsystems/Flora-inmobiliaria",
          demo: "https://flora-cordeiro-inmobiliaria.vercel.app/",
          image: "/flora.png"
        },
        {
          title: "Pediatric Congress Platform",
          description: "Support system for medical conferences. Handles registration, automated credential generation, and scientific manuscript uploads with a dedicated admin panel.",
          link: "https://github.com/magnoitsystems/proyecto-jornadas-interhospitalarias",
          demo: "https://www.jornadasinterhospitalariastandil.com/",
          image: "/jornadas.png"
        }
      ]
    },
    education: {
      title: "Academic Education",
      items: [
        {
          degree: "Systems Engineering",
          institution: "UNICEN",
          date: "2025 - Present (3rd year completed)",
          description: "Computer science, algorithm design, and large-scale software architecture."
        },
        {
          degree: "Software Dev University Degree",
          institution: "UNICEN",
          date: "2023 - 2025 (Graduated)",
          description: "Fullstack development, databases, and agile methodologies."
        }
      ],
      certifications: {
        title: "Achievements",
        list: [
          { 
            name: "EF Set English C1 (Advanced)", 
            icon: "🇬🇧",
            description: "International accreditation. Proficiency in technical vocabulary.", 
            file: "/EF SET Certificate Milagros Alvarez.pdf" 
          },
          { 
            name: "QA Testing", 
            icon: "🔍",
            description: "IT School. Test cases creation, bugs reports.", 
            file: "/Testing QA - Milagros Alvarez.pdf"
          },
          { 
            name: "Fundamentos de Automatización", 
            icon: "🤖",
            description: "IT School. RPA foundations.", 
            file: "/Fundamentos de la automatización - Milagros Alvarez.pdf"
          }
        ]
      }
    },
    ai: {
      title: "Profile Consultant (AI)",
      description: "Have questions about my experience? My AI assistant can answer you in real-time.",
      placeholder: "e.g., What is Milagros' experience with backend architectures?",
      button: "Consult AI",
      responsePlaceholder: "The response will appear here..."
    },
    contact: {
      title: "Let's Build Something Scalable",
      subtitle: "Got a project in mind or just want to say hi? Let's talk!",
      button: "Say Hello",
      email: "milagrosalvarez2604@gmail.com"
    }
  }
};