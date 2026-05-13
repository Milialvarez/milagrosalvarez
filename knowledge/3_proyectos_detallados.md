# Proyectos Destacados

## 1. Project Tasks Assistant (Agente de IA y RAG)
Una API backend de alto rendimiento diseñada para la gestión de proyectos ágiles, construida con Clean Architecture (Arquitectura Hexagonal) y potenciada con IA Generativa para Inteligencia de Negocios en tiempo real.
* **El "Cerebro" (AI):** Actúa como un Scrum Master virtual. Integra un motor Text-to-SQL que traduce preguntas en lenguaje natural a consultas de base de datos, evaluando bloqueos y el estado de los sprints mediante RAG.
* **Stack IA:** Groq API (Llama 3.3 70B para latencia ultra baja), LangChain (SQLDatabase Chain & Prompt Templates).
* **Stack Backend:** Python 3.11, FastAPI, PostgreSQL (Async) + SQLAlchemy 2.0, Alembic, Pydantic V2, Uvicorn, Pytest.
* **Características:** Autenticación JWT, envío asíncrono de emails, background tasks (limpieza de tokens), reportes generados por IA con métricas, y sistema completo de Sprints y Tasks.

## 2. Prompt Injection Detector (AI Firewall)
Un firewall impulsado por IA diseñado para detectar y bloquear prompts maliciosos (Prompt Injection, Jailbreaks, Data Exfiltration) antes de que lleguen a un LLM principal.
* **Funcionamiento:** Convierte el texto en vectores (SentenceTransformers `all-MiniLM-L6-v2`) y lo evalúa con una red neuronal Multi-Clase hecha en PyTorch.
* **Explainable AI (XAI):** Si detecta una amenaza, usa la API de Groq (Llama 3.1 8B) actuando como juez (LLM-as-a-Judge) para generar una explicación legible del porqué se bloqueó, citando el intento malicioso.
* **Stack:** PyTorch, Pandas, Streamlit, Supabase (para logging seguro), GitHub Actions (Pipeline MLOps / CI-CD). Incluye un flujo Human-in-the-Loop (HITL) para mejora continua.

## 3. CIRO - Sistema de Gestión Odontológico
Plataforma administrativa y financiera para un centro odontológico. Milagros lideró el diseño y desarrollo del backend.
* **Funcionalidades:** Gestión de pacientes (historia clínica, presupuestos, procedimientos), manejo de la cuenta corriente personal de cada paciente (trazabilidad de deuda), turnos en calendario, asignación de tareas, registro de gastos de la institución y reportes estadísticos diarios/semanales.
* **Stack:** Java, Spring Boot, JPA/Hibernate, PostgreSQL.

## 4. Galpón Vial - Municipio de Lobería
Plataforma integral para digitalizar al 100% las auditorías, control de stock y gestión de flota de vehículos del municipio.
* **Módulos:** Almacén (control de herramientas/repuestos, auditoría de entradas/salidas), Vehículos (trazabilidad, combustible, reportes de incidentes), Servicios (asignación de operarios), y un sólido modelo de Seguridad RBAC con permisos granulares.
* **Stack:** NestJS (TypeScript, arquitectura modular), React, Tailwind CSS, PostgreSQL (TypeORM), JWT, Bcrypt, Cloudinary (imágenes), Docker.

## 5. Flora Cordeiro Inmobiliaria
Aplicación web fullstack para digitalizar los procesos de un negocio inmobiliario.
* **Funcionalidades:** CRUD avanzado de propiedades, manejo de sesiones seguras, formularios dinámicos y panel administrativo.
* **Stack:** Next.js, Next Auth, TypeScript, Prisma ORM, PostgreSQL, Cloudinary.

## 6. Jornadas Interhospitalarias Tandil 2025
Sistema de soporte web para congresos médicos (colaboración con hospitales pediátricos).
* **Funcionalidades:** Registro de usuarios/médicos, generación automática de contraseñas y credenciales, subida de manuscritos científicos y panel de administrador con estadísticas.
* **Stack:** Next.js, TypeScript, Prisma ORM, PostgreSQL.

## 7. Agapanthus Departments
Plataforma premium de alquileres temporarios enfocada en un diseño UX/UI altamente usable y accesible.
* **Funcionalidades:** Gestión de disponibilidad, sistema de reseñas y almacenamiento persistente.
* **Stack:** Next.js, Prisma ORM, PostgreSQL.
