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
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  type: string;
  location: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: string; // e.g. "Core Expertise", "Proficient", "Production Use"
    icon?: string;
  }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  coursework: string[];
  highlights: string[];
}

export interface PortfolioData {
  personal: {
    name: string;
    role: string;
    company: string;
    location: string;
    experience: string;
    headline: string;
    about: string;
    avatar: string;
    ogImage: string;
    resumeUrl: string;
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
  focusAreas: {
    title: string;
    icon: string;
    description: string;
    tags: string[];
  }[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Aravind Naidu Yalla",
    role: "AI Engineer",
    company: "People Media Factory",
    location: "Hyderabad, India",
    experience: "1 Year Professional Experience (including Internship)",
    headline: "AI Engineer | Generative AI | LLMs | RAG",
    about:
      "I am an AI Engineer working at People Media Factory with around 1 year of professional experience including my internship. I build AI-powered applications using Python, FastAPI, Large Language Models, Retrieval-Augmented Generation, embeddings, semantic search and vector databases. I am particularly interested in Generative AI, LLM applications and Agentic AI.",
    avatar: "/images/avatar.jpg",
    ogImage: "/images/og-card.jpg",
    resumeUrl: "/resume.pdf",
    email: "aravindyall@gmail.com",
    linkedin: "https://www.linkedin.com/in/aravind-naidu-yalla-b50953288",
    github: "https://github.com/Aravindyalla",
    status: "Open to AI Engineering & GenAI Roles",
  },
  stats: [
    { label: "Experience", value: "1 Year", detail: "Industry + Production Internship" },
    { label: "Core Focus", value: "GenAI & RAG", detail: "LLMs, Vectors & Semantic Search" },
    { label: "Primary Stack", value: "Python / FastAPI", detail: "Asynchronous High-Throughput APIs" },
    { label: "Vector Search", value: "Qdrant", detail: "Sub-100ms Embedding Retrieval" },
  ],
  focusAreas: [
    {
      title: "Generative AI & LLMs",
      icon: "brain",
      description:
        "Building prompt chains, structured outputs, local LLM serving with Ollama, and open-source foundation model integrations using Hugging Face.",
      tags: ["Ollama", "Hugging Face", "Prompt Tuning", "Model Quantization"],
    },
    {
      title: "Retrieval-Augmented Generation (RAG)",
      icon: "database",
      description:
        "Architecting multi-document RAG systems featuring OCR ingestion, semantic chunking, embedding generation, and high-dimensional vector search with Qdrant.",
      tags: ["Qdrant", "Embeddings", "Semantic Search", "Hybrid Retrieval"],
    },
    {
      title: "Production Backend & APIs",
      icon: "server",
      description:
        "Designing scalable REST APIs and streaming microservices with Python and FastAPI, coupled with reliable PostgreSQL data models.",
      tags: ["Python", "FastAPI", "PostgreSQL", "REST APIs", "AsyncIO"],
    },
    {
      title: "Agentic AI & Experimentation",
      icon: "sparkles",
      description:
        "Developing autonomous AI workflows, multi-step tool calling, continuous experimentation, and benchmarking for real-world studio media production.",
      tags: ["Agentic Workflows", "Tool Calling", "Evaluation", "Automation"],
    },
  ],
  allSkills: [
    "Python",
    "Generative AI",
    "LLMs",
    "RAG",
    "FastAPI",
    "REST APIs",
    "Qdrant",
    "Vector Databases",
    "Embeddings",
    "Semantic Search",
    "Ollama",
    "Hugging Face",
    "PostgreSQL",
    "Git",
    "GitHub",
  ],
  skillCategories: [
    {
      title: "Generative AI & LLMs",
      description: "Foundation model serving, local inference, and fine-grained prompt orchestration.",
      skills: [
        { name: "Generative AI", level: "Production Focus" },
        { name: "LLMs", level: "Production Focus" },
        { name: "RAG", level: "Production Focus" },
        { name: "Ollama", level: "Inference & Serving" },
        { name: "Hugging Face", level: "Model Integration" },
      ],
    },
    {
      title: "Vector Search & Retrieval",
      description: "Dense embedding generation, semantic similarity scoring, and vector stores.",
      skills: [
        { name: "Qdrant", level: "Vector Database" },
        { name: "Vector Databases", level: "Architecture & Ops" },
        { name: "Embeddings", level: "Semantic Representation" },
        { name: "Semantic Search", level: "Similarity Scoring" },
      ],
    },
    {
      title: "Backend & Systems",
      description: "High-performance asynchronous APIs, microservices, and persistence.",
      skills: [
        { name: "Python", level: "Primary Language" },
        { name: "FastAPI", level: "API Framework" },
        { name: "REST APIs", level: "Endpoint Architecture" },
        { name: "PostgreSQL", level: "Relational Database" },
      ],
    },
    {
      title: "Tooling & Collaboration",
      description: "Version control, deployment pipelines, and collaborative workflows.",
      skills: [
        { name: "Git", level: "Version Control" },
        { name: "GitHub", level: "CI/CD & Collaboration" },
      ],
    },
  ],
  experiences: [
    {
      company: "People Media Factory",
      role: "AI Engineer",
      period: "October 2025 – Present",
      type: "Full-Time (Promoted from AI Intern)",
      location: "Hyderabad, India",
      description:
        "Started as an AI Intern and transitioned to a full-time AI Engineer. Driving AI engineering initiatives across production studios, developing LLM-driven pipelines, RAG question-answering systems, and resilient Python FastAPI backend microservices.",
      highlights: [
        "Architected and deployed enterprise-grade AI-powered applications, combining open-source LLMs (via Ollama & Hugging Face) with high-speed FastAPI backends.",
        "Engineered end-to-end Retrieval-Augmented Generation (RAG) pipelines incorporating multi-format OCR ingestion, chunking algorithms, and Qdrant vector retrieval.",
        "Created production-grade REST APIs and asynchronous background jobs for media asset workflows and VFX studio task tracking.",
        "Conducted extensive AI experimentation, prompt engineering, and semantic search tuning to enhance answer accuracy and minimize model hallucinations.",
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
        "Git",
      ],
    },
  ],
  projects: [
    {
      id: "enterprise-rag-system",
      title: "Enterprise RAG System",
      badge: "Flagship AI Project",
      tagline: "Document-Based Question Answering & Semantic Retrieval Engine",
      description:
        "Built a robust, enterprise-grade Retrieval-Augmented Generation (RAG) system engineered for complex multi-document question answering. The pipeline ingests diverse formats, runs OCR text extraction, generates semantic embeddings, and queries a high-dimensional Qdrant vector database for sub-second contextual synthesis via local LLMs.",
      features: [
        "Document ingestion supporting complex PDF, scanned image, and multi-page enterprise docs",
        "OCR-based text extraction with preprocessing and noisy artifact filtering",
        "Text processing, cleaning, and semantic chunking with overlap control",
        "Dense embedding generation utilizing Hugging Face transformer models",
        "Qdrant vector database integration for fast filtered nearest-neighbor lookups",
        "Semantic search with cosine similarity scoring and re-ranking",
        "LLM-based question answering with strict context grounding and source attribution",
        "Multi-document retrieval enabling cross-file knowledge synthesis",
      ],
      technologies: ["Python", "FastAPI", "Ollama", "Qdrant", "Hugging Face", "PostgreSQL"],
      image: "/images/project-rag.jpg",
      featured: true,
      metrics: [
        { label: "Retrieval Latency", value: "<120ms" },
        { label: "Vector DB", value: "Qdrant" },
        { label: "LLM Runner", value: "Ollama" },
        { label: "Parsing", value: "OCR Engine" },
      ],
      architectureSteps: [
        "Multi-format Document Ingestion & OCR Extraction",
        "Semantic Chunking & Normalization",
        "Hugging Face Embedding Vectorization",
        "Qdrant High-Dimensional Vector Indexing",
        "Top-K Cosine Similarity Retrieval",
        "Prompt Augmentation & Ollama LLM Response Generation",
      ],
    },
    {
      id: "ai-music-studio",
      title: "AI Music Studio",
      badge: "Generative AI & Audio",
      tagline: "Generative Audio & Music Synthesis Workflows via LLM Orchestration",
      description:
        "Engineered AI-powered music and audio generation workflows combining LLM integrations with high-performance Python backend APIs. The system coordinates text-to-music prompts, lyrical arrangement structures, and audio synthesis pipelines for studio creatives.",
      features: [
        "LLM-assisted composition structuring and lyric arrangement generation",
        "Generative audio model inference pipelines with prompt conditioning",
        "Asynchronous task queueing with FastAPI to manage compute-intensive audio synthesis",
        "Audio waveform processing, format encoding, and streaming playback endpoints",
        "Interactive parameter controls for tempo, genre blending, and mood guidance",
        "RESTful API design allowing seamless integration with creative media frontend tools",
      ],
      technologies: ["Python", "FastAPI", "LLMs", "Generative AI"],
      image: "/images/project-music.jpg",
      featured: true,
      metrics: [
        { label: "Pipeline", value: "Prompt-to-Audio" },
        { label: "API Framework", value: "FastAPI Async" },
        { label: "Workflow", value: "Multi-Track Audio" },
        { label: "Model Type", value: "Generative AI" },
      ],
      architectureSteps: [
        "User Mood / Style Prompt Ingestion",
        "LLM Musical Structure & Composition Planning",
        "Audio Generation Pipeline Execution",
        "Waveform Normalization & Stem Processing",
        "Streaming Delivery via FastAPI Endpoints",
      ],
    },
    {
      id: "vfx-artist-tracking-system",
      title: "VFX Artist Tracking System",
      badge: "Production Operations Platform",
      tagline: "Studio Activity & Task Milestone Management Infrastructure",
      description:
        "Designed and implemented an end-to-end production tracking platform tailored for film and media production pipelines. The system enables supervisors to manage VFX artists, shot deadlines, task statuses, and real-time operational activity.",
      features: [
        "Granular task breakdown tracking (Modelling, Shading, FX, Lighting, Compositing)",
        "Real-time artist activity logs, status updates, and working timesheets",
        "Role-based access control and approval states for studio supervisors",
        "PostgreSQL relational schema optimized with indexed status lookups and audit trails",
        "High-performance REST API endpoints built with Python and FastAPI",
        "Automated notifications and timeline milestone progress visualization",
      ],
      technologies: ["Python", "FastAPI", "PostgreSQL", "REST APIs"],
      image: "/images/project-vfx.jpg",
      featured: true,
      metrics: [
        { label: "Database", value: "PostgreSQL" },
        { label: "Backend", value: "FastAPI REST" },
        { label: "Target Domain", value: "VFX Studio Operations" },
        { label: "Concurrency", value: "High-Throughput" },
      ],
      architectureSteps: [
        "Shot & Milestone Task Hierarchy Creation",
        "Artist Activity & Clock-in Logging",
        "State Transition Pipeline Validation",
        "PostgreSQL Relational Persistence & Query Optimization",
        "Supervisor Analytics & Status Reporting API",
      ],
    },
  ],
  education: [
    {
      degree: "Bachelor of Technology in Computer Science & Engineering",
      institution: "JNTUH Affiliated Institute",
      location: "Hyderabad, India",
      period: "Graduated with Strong Academic Record",
      description:
        "Comprehensive foundational education in computer science, software engineering, algorithms, and artificial intelligence.",
      coursework: [
        "Machine Learning & Artificial Intelligence",
        "Natural Language Processing (NLP)",
        "Data Structures & Algorithms (DSA)",
        "Database Management Systems (DBMS)",
        "Distributed Computing & Operating Systems",
        "Object-Oriented Programming (OOP)",
      ],
      highlights: [
        "Focused academic research on natural language processing and semantic information retrieval.",
        "Built machine learning projects exploring vector embeddings and text categorization.",
        "Active technical contributor in algorithmic programming and modern software design.",
      ],
    },
  ],
};
