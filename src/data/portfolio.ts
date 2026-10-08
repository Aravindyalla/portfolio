export interface Project {
  id: string;
  title: string;
  badge: string;
  tagline: string;
  description: string;
  features: string[];
  technologies: string[];
  image: string;
  featured: boolean;
  metrics?: { label: string; value: string }[];
  architectureSteps?: string[];
  visualWorkflow?: string[];
}

export interface ExperienceRole {
  title: string;
  period: string;
  type: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  roles: ExperienceRole[];
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface SkillItem {
  name: string;
  level: string;
  isExploring?: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  badge?: string;
  skills: SkillItem[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  displayTitle: string;
  startDate: string;
  endDate: string;
  period: string;
  grade: string;
  location: string;
  affiliatedUniversity: string;
  description: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  badge: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    role: string;
    company: string;
    location: string;
    experience: string;
    headline: string;
    shortDescription: string;
    about: string;
    aboutSecondary: string;
    ogImage: string;
    resumeUrl: string;
    phone: string;
    email: string;
    linkedin: string;
    github: string;
    status: string;
  };
  stats: { label: string; value: string; detail: string }[];
  skillCategories: SkillCategory[];
  allSkills: string[];
  experiences: ExperienceItem[];
  projects: Project[];
  education: EducationItem[];
  certifications: CertificationItem[];
  focusAreas: {
    title: string;
    icon: string;
    description: string;
    tags: string[];
  }[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "ARAVIND NAIDU YALLA",
    role: "AI Software Engineer",
    company: "People Media Factory",
    location: "Hyderabad, India",
    experience: "1 Year Professional Experience (including Internship)",
    headline: "Production AI Systems · Python · Generative AI",
    shortDescription:
      "AI Software Engineer building practical AI applications and backend systems using Python, LLMs, RAG, FastAPI, vector databases and modern AI technologies.",
    about:
      "AI Software Engineer with 1 year of hands-on experience building and deploying AI-powered applications and backend systems. Experienced in Python, FastAPI, LLMs, RAG, embeddings, semantic search, Qdrant, Ollama, Hugging Face and PostgreSQL.",
    aboutSecondary:
      "At People Media Factory, I have worked across the development lifecycle—from understanding requirements and designing solutions to deployment, debugging and maintenance. I enjoy turning real-world business requirements into practical software and AI solutions.",
    ogImage: "/images/og-card.jpg",
    resumeUrl: "/resume.pdf",
    phone: "+91 7729804283",
    email: "aravindyallao@gmail.com",
    linkedin: "https://www.linkedin.com/in/aravind-naidu-yalla-b50953288",
    github: "https://github.com/Aravindyalla",
    status: "AI Developer / AI Software Engineer – People Media Factory",
  },
  stats: [
    { label: "Experience", value: "1 Year", detail: "May 2026 – Present (Full-Time) | Oct 2025 – Apr 2026 (Intern)" },
    { label: "Core Stack", value: "Python & FastAPI", detail: "REST APIs, Backend Services, Microservices" },
    { label: "AI & Retrieval", value: "RAG & LLMs", detail: "Qdrant Vector DB, Ollama, Hugging Face" },
    { label: "Deployment", value: "IIS & NSSM", detail: "Production Windows Server & Service Orchestration" },
  ],
  focusAreas: [
    {
      title: "Generative AI & LLMs",
      icon: "brain",
      description:
        "Building prompt chains, structured outputs, local LLM hosting with Ollama, and open-source foundation model integrations with Hugging Face.",
      tags: ["Ollama", "Hugging Face", "LLMs", "Prompt Engineering"],
    },
    {
      title: "Retrieval-Augmented Generation (RAG)",
      icon: "database",
      description:
        "Architecting end-to-end document intelligence pipelines featuring OCR text extraction, semantic chunking, dense embeddings, and Qdrant vector retrieval.",
      tags: ["Qdrant", "Embeddings", "Semantic Search", "OCR"],
    },
    {
      title: "Production Backend & APIs",
      icon: "server",
      description:
        "Developing robust REST APIs and services with Python and FastAPI, coupled with PostgreSQL data schemas, SQLAlchemy, and query optimization.",
      tags: ["Python", "FastAPI", "PostgreSQL", "REST APIs", "SQLAlchemy"],
    },
    {
      title: "Deployment & Operations",
      icon: "sparkles",
      description:
        "Deploying and maintaining production backend services using IIS and NSSM, diagnosing production issues, and ensuring reliability.",
      tags: ["IIS", "NSSM", "Debugging", "Git/GitHub", "Optimization"],
    },
  ],
  allSkills: [
    "Python",
    "LLMs",
    "Generative AI",
    "RAG",
    "Prompt Engineering",
    "Embeddings",
    "Semantic Search",
    "Hugging Face",
    "Ollama",
    "FastAPI",
    "REST APIs",
    "Flask",
    "Pydantic",
    "SQLAlchemy",
    "OOP",
    "PostgreSQL",
    "Qdrant",
    "SQL",
    "Git",
    "GitHub",
    "Debugging",
    "Troubleshooting",
    "API Design",
    "IIS",
    "NSSM",
    "Agentic AI",
    "LangChain",
    "LangGraph",
    "Tool Calling",
  ],
  skillCategories: [
    {
      title: "AI & Generative AI",
      description: "Foundation model integration, prompt engineering, semantic retrieval, and local inference.",
      skills: [
        { name: "Python", level: "Primary Language" },
        { name: "LLMs", level: "Production Focus" },
        { name: "Generative AI", level: "Core Domain" },
        { name: "RAG", level: "System Architecture" },
        { name: "Prompt Engineering", level: "Production Use" },
        { name: "Embeddings", level: "Semantic Representation" },
        { name: "Semantic Search", level: "Similarity Scoring" },
        { name: "Hugging Face", level: "Model Integration" },
        { name: "Ollama", level: "Local Inference" },
      ],
    },
    {
      title: "Backend",
      description: "High-performance asynchronous APIs, object-oriented design, and robust data schemas.",
      skills: [
        { name: "FastAPI", level: "Production Framework" },
        { name: "REST APIs", level: "Endpoint Architecture" },
        { name: "Flask", level: "Web Framework" },
        { name: "Pydantic", level: "Data Validation" },
        { name: "SQLAlchemy", level: "ORM & Querying" },
        { name: "OOP", level: "Software Design" },
      ],
    },
    {
      title: "Databases",
      description: "Relational persistence and high-dimensional vector databases for fast similarity search.",
      skills: [
        { name: "PostgreSQL", level: "Relational Database" },
        { name: "Qdrant", level: "Vector Database" },
        { name: "SQL", level: "Query Optimization" },
      ],
    },
    {
      title: "Engineering & Operations",
      description: "Deployment, system troubleshooting, version control, and service management.",
      skills: [
        { name: "Git", level: "Version Control" },
        { name: "GitHub", level: "CI/CD & Collaboration" },
        { name: "Debugging", level: "Root Cause Analysis" },
        { name: "Troubleshooting", level: "Production Ops" },
        { name: "API Design", level: "Contract Architecture" },
        { name: "IIS", level: "Web Server Deployment" },
        { name: "NSSM", level: "Windows Service Manager" },
      ],
    },
    {
      title: "Learning / Exploring",
      badge: "Actively Exploring",
      description: "Exploring next-generation autonomous agent loops, tool use, and cognitive workflows.",
      skills: [
        { name: "Agentic AI", level: "Exploring / Research", isExploring: true },
        { name: "LangChain", level: "Exploring / Experimentation", isExploring: true },
        { name: "LangGraph", level: "Exploring / State Graphs", isExploring: true },
        { name: "Tool Calling", level: "Exploring / Function Calling", isExploring: true },
      ],
    },
  ],
  experiences: [
    {
      company: "People Media Factory",
      role: "AI Developer / AI Software Engineer",
      location: "Hyderabad, India",
      roles: [
        {
          title: "AI Developer / AI Software Engineer",
          period: "May 2026 – Present",
          type: "Full-Time",
        },
        {
          title: "AI Intern",
          period: "October 2025 – April 2026",
          type: "Internship",
        },
      ],
      description:
        "Working across the complete development lifecycle—from understanding requirements and designing architectures to deployment, debugging, and continuous maintenance. Driving AI-powered applications, backend services, and document intelligence pipelines.",
      highlights: [
        "Built and deployed AI-powered applications using Python, FastAPI, LLMs and RAG.",
        "Developed backend services and REST APIs for production applications.",
        "Built document intelligence workflows involving OCR, embeddings, semantic search and vector databases.",
        "Integrated Hugging Face models and locally hosted LLMs using Ollama.",
        "Worked with PostgreSQL for application data and query optimization.",
        "Diagnosed production issues and optimized backend/database performance.",
        "Deployed and maintained applications using IIS and NSSM.",
        "Worked with Git/GitHub and collaborated with cross-functional teams.",
      ],
      technologies: [
        "Python",
        "FastAPI",
        "LLMs",
        "RAG",
        "Qdrant",
        "Ollama",
        "Hugging Face",
        "PostgreSQL",
        "IIS",
        "NSSM",
        "Git",
      ],
    },
  ],
  projects: [
    {
      id: "enterprise-rag-chatbot",
      title: "Enterprise RAG Chatbot — Document Intelligence",
      badge: "Document Intelligence",
      tagline: "End-to-End Document Question-Answering System",
      description:
        "Built an end-to-end document question-answering system using Retrieval-Augmented Generation.",
      features: [
        "Document ingestion",
        "OCR-based text extraction",
        "Text processing and chunking",
        "Embedding generation",
        "Qdrant vector storage",
        "Semantic similarity search",
        "LLM-based question answering",
        "Multi-document retrieval",
      ],
      visualWorkflow: [
        "Documents",
        "OCR / Text Extraction",
        "Text Processing",
        "Chunking",
        "Embeddings",
        "Qdrant",
        "Semantic Search",
        "Relevant Context",
        "LLM",
        "Answer",
      ],
      technologies: [
        "Python",
        "FastAPI",
        "RAG",
        "Qdrant",
        "Ollama",
        "Hugging Face",
        "OCR",
        "Embeddings",
        "Semantic Search",
      ],
      image: "/images/project-rag.jpg",
      featured: true,
      metrics: [
        { label: "Vector DB", value: "Qdrant" },
        { label: "LLM Runner", value: "Ollama" },
        { label: "Embedding", value: "Hugging Face" },
        { label: "Extraction", value: "OCR Engine" },
      ],
      architectureSteps: [
        "Documents Ingestion & OCR Extraction",
        "Text Processing & Smart Chunking",
        "Dense Embedding Generation",
        "Qdrant Vector Storage & Indexing",
        "Semantic Similarity Search & Relevant Context Extraction",
        "Augmented Prompting & LLM Grounded Answer Generation",
      ],
    },
    {
      id: "vfx-production-tracking-system",
      title: "VFX Production Tracking System",
      badge: "Studio Operations Platform",
      tagline: "Production Platform for Managing VFX Artists, Tasks & Work Activity",
      description:
        "Built a production tracking platform for managing VFX artists, tasks and work activity.",
      features: [
        "Role-based access control",
        "Artist and supervisor workflows",
        "Task assignment",
        "Status tracking",
        "Working-time tracking",
        "Activity tracking",
        "Reporting and analytics",
        "Production deployment",
      ],
      technologies: [
        "Python",
        "FastAPI",
        "PostgreSQL",
        "REST APIs",
        "IIS",
        "NSSM",
        "Git",
      ],
      image: "/images/project-vfx.jpg",
      featured: true,
      metrics: [
        { label: "Database", value: "PostgreSQL" },
        { label: "Backend", value: "FastAPI REST" },
        { label: "Web Server", value: "IIS" },
        { label: "Service Host", value: "NSSM" },
      ],
      architectureSteps: [
        "Role-Based Authentication & Permissions Setup",
        "Task Assignment & Status Tracking Pipeline",
        "Artist Working-Time & Activity Tracking Logs",
        "PostgreSQL Relational Schema & Query Optimization",
        "Production Service Deployment via IIS and NSSM",
      ],
    },
    {
      id: "ai-music-studio",
      title: "AI Music Studio",
      badge: "Generative Audio & AI",
      tagline: "AI-Powered Music & Audio Generation Workflows",
      description:
        "Worked on AI-powered music and audio generation workflows involving text prompts, LLM integrations and backend APIs.",
      features: [
        "Text prompt to musical audio generation workflows",
        "LLM integrations for composition guidance and lyric structures",
        "FastAPI asynchronous backend endpoints for audio inference",
        "Audio AI model coordination and format processing",
        "Interactive creative controls and parameter tuning",
      ],
      technologies: [
        "Python",
        "FastAPI",
        "Generative AI",
        "LLMs",
        "Audio AI",
      ],
      image: "/images/project-music.jpg",
      featured: true,
      metrics: [
        { label: "Domain", value: "Audio AI" },
        { label: "API Framework", value: "FastAPI" },
        { label: "Core Model", value: "LLMs & GenAI" },
        { label: "Execution", value: "Async Pipelines" },
      ],
      architectureSteps: [
        "Text Prompt Ingestion & Parameter Conditioning",
        "LLM Musical Structure & Composition Guidance",
        "Audio AI Model Inference Execution",
        "FastAPI Endpoint Delivery & Audio Streaming",
      ],
    },
  ],
  education: [
    {
      institution: "Kakinada Institute of Engineering and Technology",
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science (Data Science)",
      displayTitle: "B.Tech — Computer Science (Data Science)",
      startDate: "December 2021",
      endDate: "April 2025",
      period: "December 2021 – April 2025",
      grade: "CGPA: 7.5 / 10",
      location: "Kakinada, Andhra Pradesh, India",
      affiliatedUniversity: "Jawaharlal Nehru Technological University Kakinada (JNTUK)",
      description:
        "B.Tech in Computer Science (Data Science), affiliated with Jawaharlal Nehru Technological University Kakinada (JNTUK). Graduated in 2025 with a CGPA of 7.5/10.",
    },
  ],
  certifications: [
    {
      title: "Python for Data Science",
      issuer: "Infosys Springboard",
      badge: "Data Science & Python",
    },
    {
      title: "Salesforce Developer",
      issuer: "SmartInternz",
      badge: "Developer Certification",
    },
  ],
};
