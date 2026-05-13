// src/data.ts
export const portfolioData = {
  es: {
    nav: {
      about: "Sobre mí",
      experience: "Experiencia",
      projects: "Proyectos",
      education: "Formación",
      contact: "Contacto",
    },
    hero: {
      greeting: "Hola, soy",
      name: "Milagros Alvarez",
      role: "Software Developer & Fullstack Engineer",
      description: "Impulsada por la curiosidad técnica y la excelencia académica. Me especializo en diseñar soluciones escalables donde la arquitectura limpia y la inteligencia artificial convergen. Mi enfoque no es solo escribir código, sino liderar procesos de transformación digital con impacto real.",
      downloadCV: "Descargar CV",
      stats: {
        exp: "+1 Año de Exp.",
        projects: "+6 Proyectos",
        github: "+1400 Contribuciones"
      }
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
          demo: "#" 
        },
        {
          title: "Galpón Vial Municipal",
          description: "Digitalización total de procesos de auditoría para el sector público. Arquitectura Fullstack con NestJS y React.",
          link: "https://github.com/malvarezgayral/galponvial-intranet-backend",
          demo: "#"
        },
        {
          title: "Project Tasks Assistant (AI)",
          description: "Agente inteligente con RAG para la organización de equipos ágiles. Mi incursión más fuerte en IA aplicada.",
          link: "https://github.com/Milialvarez/project-tasks-assistant",
          demo: "#"
        },
        {
          title: "Agapanthus Departments",
          description: "Aplicación web con diseño UX/UI premium. Gestión de reseñas y almacenamiento en PostgreSQL con Prisma ORM.",
          link: "https://github.com/magnoitsystems/Agapanthus-Departments",
          demo: "https://www.agapanthuslasmarias.com/"
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
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      name: "Milagros Alvarez",
      role: "Software Developer & Fullstack Engineer",
      description: "Driven by technical curiosity and academic excellence. I specialize in designing scalable solutions where clean architecture and AI converge. My focus isn't just writing code, but leading digital transformation processes with real impact.",
      downloadCV: "Download CV",
      stats: {
        exp: "+1 Year Exp.",
        projects: "+6 Projects",
        github: "+1400 Contributions"
      }
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