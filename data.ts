// src/data.ts
export const portfolioData = {
  es: {
    nav: {
      about: "Sobre mí",
      experience: "Experiencia",
      projects: "Proyectos",
      education: "Formación",
      ai: "Preguntale a mi IA",
      contact: "Contacto",
    },
    hero: {
      greeting: "Hola, soy",
      name: "Milagros Alvarez",
      role: "Software Developer & Fullstack Engineer",
      description: "Especialista en construir soluciones robustas donde la ingeniería de sistemas y el desarrollo moderno se encuentran. Enfocada en escalabilidad y código limpio.",
      downloadCV: "Descargar CV",
      stats: {
        exp: "+1 Año de Exp.",
        projects: "+6 Proyectos",
        github: "+1400 Contribuciones"
      }
    },
    about: {
      title: "Detrás del Código",
      image: "/perfil.jpeg", 
      text: [
        "Soy Técnica Universitaria en Desarrollo de Aplicaciones y actual estudiante de Ingeniería en Sistemas en la UNICEN. Mi enfoque principal es el **Desarrollo Backend**, donde transformo problemas complejos en arquitecturas eficientes.",
        "A lo largo de mi trayectoria, he consolidado una base sólida en el ecosistema de **Java, Python y TypeScript**, trabajando en entornos reales que exigen alta disponibilidad y escalabilidad. Mi experiencia en **Magno (Software Solutions)** me ha permitido liderar diseños de backend utilizando patrones como Arquitectura Hexagonal y Microservicios.",
        "No solo escribo código; diseño soluciones. Me apasiona aplicar **Clean Code y Metodologías Ágiles (Scrum)** para asegurar que cada entrega aporte valor real y sea mantenible a largo plazo. Actualmente, busco desafíos donde pueda potenciar mis habilidades en backend y seguir innovando con tecnologías emergentes."
      ]
    },
    ai: {
      title: "Consultora de Perfil (AI)",
      description: "¿Tenés dudas sobre mi experiencia o stack técnico? Mi asistente entrenado puede responderte en tiempo real.",
      placeholder: "Ej: ¿Qué experiencia tiene Milagros con arquitecturas hexagonales?",
      button: "Consultar IA",
      responsePlaceholder: "La respuesta aparecerá aquí..."
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
            "Desarrollo de interfaces de usuario altamente interactivas con Next.js y Tailwind CSS.",
            "Gestión ágil bajo marcos Scrum, asegurando entregas continuas de alto valor."
          ],
          softSkills: "Liderazgo técnico, Comunicación clara de arquitectura, Resolución analítica de problemas complejos."
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
          description: "Liderazgo del backend para una plataforma odontológica crítica. Implementación de lógica financiera y administrativa con Java/Spring Boot.",
          link: "https://github.com/magnoitsystems/ciro-backend",
          demo: "https://ciro-frontend.vercel.app/",
          image: "/public/ciro.png"
        },
        {
          title: "Galpón Vial Municipal",
          description: "Digitalización total de procesos de auditoría para el sector público. Arquitectura Fullstack con NestJS y React.",
          link: "https://github.com/malvarezgayral/galponvial-intranet-backend",
          demo: "https://galponvial.loberia.gob.ar/login",
          image: "/public/galpon.png"
        },
        {
          title: "Project Tasks Assistant (AI)",
          description: "Agente inteligente con RAG para la organización de equipos ágiles. No solo funciona como una herramienta para gestionar proyectos, tareas y sprints, sino que provee un chatbot que genera análisis, métricas y responde preguntas basándose en el contexto de tu proyecto.",
          link: "https://github.com/Milialvarez/project-tasks-assistant",
          demo: "",
          image: "/public/project.jpeg"
        },
        {
          title: "Prompt Injection Detector - AI Firewall",
          description: "Un firewall diseñado para diferenciar prompts seguros de maliciosos. Desarrollé desde cero un Gateway de Seguridad basado en Machine Learning que intercepta y analiza los prompts antes de que lleguen al modelo principal.",
          link: "https://github.com/Milialvarez/project-tasks-assistant",
          demo: "https://prompt-injection-detector.streamlit.app/",
          image: "/public/prompt.png"
        },
        {
          title: "Agapanthus Departments",
          description: "Aplicación web con diseño UX/UI premium. Gestión de reseñas y almacenamiento en PostgreSQL con Prisma ORM.",
          link: "https://github.com/magnoitsystems/Agapanthus-Departments",
          demo: "https://www.agapanthuslasmarias.com/",
          image: "/public/agapanthus.png"
        },
        {
          title: "Flora Cordeiro Inmobiliaria",
          description: "Aplicación web desarrollada con Next.js, Prisma ORM y PostgreSQL para brindar optimización al trabajo inmobiliario, permitiendo manejo de sesiones, CRUD de propiedades, formulario de contacto, entre otros.",
          link: "https://github.com/magnoitsystems/Flora-inmobiliaria",
          demo: "https://flora-cordeiro-inmobiliaria.vercel.app/",
          image: "/public/flora.png"
        },
        {
          title: "Jornadas Interhospitalarias de Pediatría Tandil",
          description: "Aplicación web desarrollada con Next.js, Prisma ORM y PostgreSQL con el objetivo de publicitar y dar soporte a las necesidades de las jornadas interhospitalarias de pediatría en Tandil 2025. Permite el registro de usuarios a la jornada, generación de contraseñas automáticas, subida de manuscritos, acceso de administrador diferenciado, entre otros.",
          link: "https://github.com/magnoitsystems/proyecto-jornadas-interhospitalarias",
          demo: "https://www.jornadasinterhospitalariastandil.com/",
          image: "/public/jornadas.png"
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
          description: "Formación integral enfocada en ciencias de la computación, diseño de algoritmos, arquitecturas complejas y resolución de problemas a gran escala."
        },
        {
          degree: "Tecnicatura Univ. en Desarrollo de Apps",
          institution: "UNICEN",
          date: "2023 - 2025 (Graduada)",
          description: "Carrera práctica orientada al desarrollo de software Fullstack, bases de datos, patrones de diseño y metodologías ágiles de trabajo."
        }
      ],
      certifications: {
        title: "Logros y Certificados",
        list: [
          { 
            name: "EF Set English C1 (Advanced)", 
            icon: "🇬🇧",
            description: "Acreditación internacional de nivel avanzado. Capacidad para comunicarse fluidamente en entornos técnicos y de negocios." 
          },
          { 
            name: "QA Testing", 
            icon: "🔍",
            description: "IT School. Creación de casos de prueba, reporte de bugs y estrategias para asegurar la calidad y fiabilidad del software." 
          },
          { 
            name: "Fundamentos de Automatización", 
            icon: "🤖",
            description: "IT School. Bases de integración continua, scripting y automatización de pruebas para optimizar ciclos de entrega." 
          }
        ]
      }
    },
    contact: {
      title: "Construyamos algo escalable",
      subtitle: "Actualmente estoy abierta a nuevas oportunidades. Ya sea que tengas una pregunta, un proyecto en mente o solo quieras saludar, ¡haré lo posible por responderte!",
      button: "Say Hello",
      email: "milagrosalvarez2604@gmail.com"
    }
  },
  en: {
    nav: {
      about: "About",
      experience: "Experience",
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
        projects: "+6 Projects",
        github: "+1400 Contributions"
      }
    },
    about: {
      title: "Behind the Code",
      image: "/perfil.png",
      text: [
        "I am a University Technician in Application Development and a current Systems Engineering student at UNICEN. My main focus is **Backend Development**, where I transform complex problems into efficient architectures.",
        "Throughout my career, I have consolidated a solid foundation in the **Java, Python, and TypeScript** ecosystem, working in real environments that demand high availability and scalability. My experience at **Magno (Software Solutions)** has allowed me to lead backend designs using patterns such as Hexagonal Architecture and Microservices.",
        "I don't just write code; I design solutions. I am passionate about applying **Clean Code and Agile Methodologies (Scrum)** to ensure that every delivery provides real value and is maintainable in the long term."
      ]
    },
    ai: {
      title: "Profile Consultant (AI)",
      description: "Have doubts about my experience or technical stack? My trained assistant can answer you in real-time.",
      placeholder: "e.g., What is Milagros' experience with hexagonal architectures?",
      button: "Consult AI",
      responsePlaceholder: "The response will appear here..."
    },
    experience: {
      title: "Professional Background",
      items: [
        {
          role: "Fullstack Software Developer",
          company: "MAGNO (Software Solutions)",
          date: "February 2025 - Present",
          responsibilities: [
            "Technical leadership in scalable architecture design using Java (Spring Boot) and TypeScript (NestJS).",
            "Proactive integration of AI models to optimize internal and client processes.",
            "Development of highly interactive user interfaces with Next.js and Tailwind CSS.",
            "Agile management under Scrum frameworks, ensuring high-value continuous delivery."
          ],
          softSkills: "Technical leadership, Clear architecture communication, Analytical complex problem solving."
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
          description: "Backend leadership for a critical dental platform. Implementation of financial and administrative logic with Java/Spring Boot.",
          link: "https://github.com/magnoitsystems/ciro-backend",
          demo: "#"
        },
        {
          title: "Municipal Road Warehouse",
          description: "Total digitalization of audit processes for the public sector. Fullstack architecture with NestJS and React.",
          link: "https://github.com/malvarezgayral/galponvial-intranet-backend",
          demo: "#"
        },
        {
          title: "Project Tasks Assistant (AI)",
          description: "Intelligent RAG agent for agile team organization. My strongest venture into applied AI.",
          link: "https://github.com/Milialvarez/project-tasks-assistant",
          demo: "#"
        },
        {
          title: "Agapanthus Departments",
          description: "Web application with premium UX/UI design. Review management and PostgreSQL storage with Prisma ORM.",
          link: "https://github.com/magnoitsystems/Agapanthus-Departments",
          demo: "https://www.agapanthuslasmarias.com/"
        }
      ]
    },
    education: {
      title: "Education & Background",
      items: [
        {
          degree: "Systems Engineering",
          institution: "UNICEN",
          date: "2025 - Present (3rd year completed)",
          description: "Comprehensive background focused on computer science, algorithm design, complex architectures, and large-scale problem solving."
        },
        {
          degree: "University Degree in Software Dev",
          institution: "UNICEN",
          date: "2023 - 2025 (Graduated)",
          description: "Practical degree oriented towards Fullstack software development, databases, design patterns, and agile work methodologies."
        }
      ],
      certifications: {
        title: "Achievements & Certificates",
        list: [
          { 
            name: "EF Set English C1 (Advanced)", 
            icon: "🇬🇧",
            description: "International accreditation of advanced level. Ability to communicate fluently in technical and business environments." 
          },
          { 
            name: "QA Testing", 
            icon: "🔍",
            description: "IT School. Creation of test cases, bug reporting, and strategies to ensure software quality and reliability." 
          },
          { 
            name: "Automation Fundamentals", 
            icon: "🤖",
            description: "IT School. Foundations of continuous integration, scripting, and test automation to optimize delivery cycles." 
          }
        ]
      }
    },
    contact: {
      title: "Let's Build Something Scalable",
      subtitle: "I'm currently open to new opportunities. Whether you have a question, a project in mind, or just want to say hi, I'll try my best to get back to you!",
      button: "Say Hello",
      email: "milagrosalvarez2604@gmail.com"
    }
  }
};