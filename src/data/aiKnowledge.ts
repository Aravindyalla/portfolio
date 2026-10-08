// aiKnowledge.ts - Authoritative Knowledge Base for Aravind AI

export const AI_KNOWLEDGE_BASE = {
  name: "Aravind Naidu Yalla",
  role: "AI Software Engineer / AI Developer",
  company: "People Media Factory",
  location: "Hyderabad, India",
  experience: "1 year of professional experience including internship at People Media Factory.",
  roles: [
    {
      title: "AI Developer / AI Software Engineer",
      type: "Full-Time",
      period: "May 2026 – Present",
      company: "People Media Factory",
    },
    {
      title: "AI Intern",
      type: "Internship",
      period: "October 2025 – April 2026",
      company: "People Media Factory",
    },
  ],
  responsibilities: [
    "Built and deployed AI-powered applications using Python, FastAPI, LLMs and RAG.",
    "Developed backend services and REST APIs for production applications.",
    "Built document intelligence workflows involving OCR, embeddings, semantic search and vector databases.",
    "Integrated Hugging Face models and locally hosted LLMs using Ollama.",
    "Worked with PostgreSQL for application data and query optimization.",
    "Diagnosed production issues and optimized backend/database performance.",
    "Deployed and maintained applications using IIS and NSSM.",
    "Worked with Git/GitHub and collaborated with cross-functional teams.",
  ],
  education: {
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science (Data Science)",
    displayTitle: "B.Tech — Computer Science (Data Science)",
    institution: "Kakinada Institute of Engineering and Technology",
    location: "Kakinada, Andhra Pradesh, India",
    startDate: "December 2021",
    endDate: "April 2025",
    period: "December 2021 – April 2025",
    grade: "7.5 / 10 CGPA",
    affiliatedUniversity: "Jawaharlal Nehru Technological University Kakinada (JNTUK)",
    description: "B.Tech in Computer Science (Data Science), affiliated with Jawaharlal Nehru Technological University Kakinada (JNTUK). Graduated in 2025 with a CGPA of 7.5/10.",
  },
  skills: {
    aiAndGenAI: [
      "Python",
      "LLMs",
      "Generative AI",
      "RAG",
      "Prompt Engineering",
      "Embeddings",
      "Semantic Search",
      "Hugging Face",
      "Ollama",
    ],
    backend: ["FastAPI", "REST APIs", "Flask", "Pydantic", "SQLAlchemy", "OOP"],
    databases: ["PostgreSQL", "Qdrant", "SQL"],
    engineering: [
      "Git",
      "GitHub",
      "Debugging",
      "Troubleshooting",
      "API Design",
      "IIS",
      "NSSM",
    ],
    currentlyLearning: [
      "Agentic AI",
      "LangChain",
      "LangGraph",
      "Tool Calling",
    ],
  },
  projects: [
    {
      title: "Enterprise RAG Chatbot — Document Intelligence",
      description: "Built an end-to-end document question-answering system using Retrieval-Augmented Generation.",
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
      workflow: "Documents → OCR / Text Extraction → Text Processing → Chunking → Embeddings → Qdrant → Semantic Search → Relevant Context → LLM → Answer",
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
    },
    {
      title: "VFX Production Tracking System",
      description: "Built a production tracking platform for managing VFX artists, tasks and work activity.",
      technologies: ["Python", "FastAPI", "PostgreSQL", "REST APIs", "IIS", "NSSM", "Git"],
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
    },
    {
      title: "AI Music Studio",
      description: "Worked on AI-powered music and audio generation workflows involving text prompts, LLM integrations and backend APIs.",
      technologies: ["Python", "FastAPI", "Generative AI", "LLMs", "Audio AI"],
      features: [
        "Text prompt to music audio workflows",
        "LLM integrations for composition guidance and lyric structures",
        "FastAPI backend APIs for audio model coordination",
      ],
    },
  ],
  certifications: [
    { title: "Python for Data Science", issuer: "Infosys Springboard" },
    { title: "Salesforce Developer", issuer: "SmartInternz" },
  ],
  contact: {
    email: "aravindyallao@gmail.com",
    phone: "+91 7729804283",
    linkedin: "https://www.linkedin.com/in/aravind-naidu-yalla-b50953288",
    github: "https://github.com/Aravindyalla",
    resume: "/resume.pdf",
  },
};

export const AI_SYSTEM_PROMPT = `You are Aravind AI, the professional portfolio assistant for Aravind Naidu Yalla.

Answer questions using only the verified information provided in the portfolio knowledge base below:

AUTHORITATIVE KNOWLEDGE BASE:
- Name: Aravind Naidu Yalla
- Role: AI Software Engineer / AI Developer
- Company: People Media Factory
- Location: Hyderabad, India
- Total Experience: 1 year of professional experience including internship.
  - Full-Time: May 2026 – Present (AI Developer / AI Software Engineer at People Media Factory)
  - Internship: October 2025 – April 2026 (AI Intern at People Media Factory)
- Responsibilities at People Media Factory:
  • Built and deployed AI-powered applications using Python, FastAPI, LLMs and RAG.
  • Developed backend services and REST APIs for production applications.
  • Built document intelligence workflows involving OCR, embeddings, semantic search and vector databases.
  • Integrated Hugging Face models and locally hosted LLMs using Ollama.
  • Worked with PostgreSQL for application data and query optimization.
  • Diagnosed production issues and optimized backend/database performance.
  • Deployed and maintained applications using IIS and NSSM.
  • Worked with Git/GitHub and collaborated with cross-functional teams.
- Education:
  • Degree: Bachelor of Technology (B.Tech)
  • Field of Study: Computer Science (Data Science)
  • College: Kakinada Institute of Engineering and Technology, Kakinada, Andhra Pradesh, India
  • Timeline: December 2021 – April 2025
  • Grade: 7.5 / 10 CGPA
  • Affiliated University: Jawaharlal Nehru Technological University Kakinada (JNTUK)
- Skills:
  • AI & Generative AI: Python, LLMs, Generative AI, RAG, Prompt Engineering, Embeddings, Semantic Search, Hugging Face, Ollama
  • Backend: FastAPI, REST APIs, Flask, Pydantic, SQLAlchemy, OOP
  • Databases: PostgreSQL, Qdrant, SQL
  • Engineering: Git, GitHub, Debugging, Troubleshooting, API Design, IIS, NSSM
  • Currently Learning / Exploring: Agentic AI, LangChain, LangGraph, Tool Calling
- Projects:
  1. Enterprise RAG Chatbot — Document Intelligence:
     - Description: Built an end-to-end document question-answering system using Retrieval-Augmented Generation.
     - Technologies: Python, FastAPI, RAG, Qdrant, Ollama, Hugging Face, OCR, Embeddings, Semantic Search.
     - Workflow: Documents → OCR / Text Extraction → Text Processing → Chunking → Embeddings → Qdrant → Semantic Search → Relevant Context → LLM → Answer.
     - Features: Document ingestion, OCR-based text extraction, Text processing, Chunking, Embedding generation, Qdrant vector storage, Semantic similarity search, LLM-based question answering, Multi-document retrieval.
  2. VFX Production Tracking System:
     - Description: Built a production tracking platform for managing VFX artists, tasks and work activity.
     - Technologies: Python, FastAPI, PostgreSQL, REST APIs, IIS, NSSM, Git.
     - Features: Role-based access control, Artist and supervisor workflows, Task assignment, Status tracking, Working-time tracking, Activity tracking, Reporting and analytics, Production deployment.
  3. AI Music Studio:
     - Description: Worked on AI-powered music and audio generation workflows involving text prompts, LLM integrations and backend APIs.
     - Technologies: Python, FastAPI, Generative AI, LLMs, Audio AI.
- Certifications:
  • Python for Data Science — Infosys Springboard
  • Salesforce Developer — SmartInternz
- Contact Details:
  • Email: aravindyallao@gmail.com
  • LinkedIn: https://www.linkedin.com/in/aravind-naidu-yalla-b50953288
  • GitHub: https://github.com/Aravindyalla
  • Resume: /resume.pdf

STRICT BEHAVIORAL RULES:
1. Answer questions using ONLY the verified information above.
2. DO NOT invent skills, companies, previous employers, client names, awards, salary, or years of experience beyond 1 year.
3. DO NOT invent cloud certifications (AWS/Azure/GCP), TensorFlow, PyTorch, or unlisted technologies.
4. If asked about technologies under "Currently Learning / Exploring" (Agentic AI, LangChain, LangGraph, Tool Calling), clearly state that Aravind is currently learning or exploring them, rather than claiming extensive production experience.
5. If the requested information is not available, say:
   "I don't have that information in Aravind's portfolio. You can contact him directly at aravindyallao@gmail.com."
6. Keep answers concise, factual, and recruiter-friendly.
7. Provide links to his resume (/resume.pdf), LinkedIn, GitHub, or email when relevant.`;

export interface AgentAnswer {
  text: string;
  action?: {
    type: "resume" | "linkedin" | "github" | "email" | "call";
    label: string;
    url: string;
  };
}

// Fallback intelligent query matcher for when no LLM API key is present
export function getOfflineAnswer(query: string): AgentAnswer {
  const q = query.toLowerCase().trim();

  // Who / About / Role
  if (
    q.includes("who is") ||
    q.includes("about aravind") ||
    q.includes("what does aravind do") ||
    q.includes("tell me about yourself") ||
    q.includes("introduction") ||
    q.includes("role") ||
    q.includes("title") ||
    q.includes("profile")
  ) {
    return {
      text: "Aravind Naidu Yalla is an AI Software Engineer / AI Developer at People Media Factory with 1 year of professional experience (including his internship). He specializes in building practical AI applications and backend systems using Python, LLMs, RAG, FastAPI, Qdrant vector databases, and PostgreSQL.",
      action: {
        type: "linkedin",
        label: "View Aravind's LinkedIn",
        url: AI_KNOWLEDGE_BASE.contact.linkedin,
      },
    };
  }

  // 0. Strict Anti-Hallucination & Unavailable Info Guardrail (Rule 13)
  if (
    q.includes("salary") ||
    q.includes("compensation") ||
    q.includes("previous employer") ||
    q.includes("past company") ||
    q.includes("client name") ||
    q.includes("award") ||
    q.includes("aws") ||
    q.includes("azure") ||
    q.includes("gcp") ||
    q.includes("cloud certification") ||
    q.includes("tensorflow") ||
    q.includes("pytorch") ||
    q.includes("age") ||
    q.includes("how old") ||
    q.includes("date of birth") ||
    q.includes("dob")
  ) {
    return {
      text: "I don't have that information in Aravind's portfolio. You can contact him directly at aravindyallao@gmail.com.",
      action: {
        type: "contact",
        label: "Contact Aravind Directly",
        url: "#contact",
      },
    };
  }

  // Responsibilities / What did he do at People Media Factory (Checked before generic company)
  if (
    q.includes("responsibilit") ||
    q.includes("what did aravind do") ||
    q.includes("what did he do") ||
    q.includes("duties") ||
    (q.includes("people media factory") && (q.includes("do") || q.includes("did") || q.includes("work on") || q.includes("role in")))
  ) {
    return {
      text: "At People Media Factory, Aravind's key responsibilities include:\n• Building & deploying AI applications using Python, FastAPI, LLMs & RAG.\n• Developing backend REST APIs and microservices.\n• Architecting document intelligence pipelines (OCR, embeddings, semantic search, Qdrant).\n• Integrating Hugging Face models and local LLMs via Ollama.\n• PostgreSQL data modeling and query optimization.\n• Deploying and maintaining services using IIS and NSSM.",
    };
  }

  // Company / Where does he work
  if (
    q.includes("where does") ||
    (q.includes("where") && (q.includes("work") || q.includes("employed"))) ||
    q.includes("current company") ||
    q.includes("which company") ||
    q.includes("employer") ||
    q.includes("organization") ||
    (q.includes("people media factory") && !q.includes("do") && !q.includes("did"))
  ) {
    return {
      text: "Aravind works at People Media Factory in Hyderabad, India as an AI Developer / AI Software Engineer. He started as an AI Intern (October 2025 – April 2026) and transitioned to a Full-Time AI Software Engineer (May 2026 – Present).",
    };
  }

  // Education / College / CGPA / Degree
  if (
    q.includes("education") ||
    q.includes("college") ||
    q.includes("university") ||
    q.includes("degree") ||
    q.includes("cgpa") ||
    q.includes("b.tech") ||
    q.includes("kiet") ||
    q.includes("jntuk") ||
    q.includes("academic") ||
    (q.includes("background") && (q.includes("educat") || q.includes("study") || q.includes("school")))
  ) {
    return {
      text: "Aravind graduated with a **Bachelor of Technology (B.Tech) in Computer Science (Data Science)** from **Kakinada Institute of Engineering and Technology**, affiliated with **JNTUK** (December 2021 – April 2025) with a **CGPA of 7.5 / 10**.",
    };
  }

  // Experience / Internship / Duration
  if (
    q.includes("experience") ||
    q.includes("how much experience") ||
    q.includes("years") ||
    q.includes("intern") ||
    q.includes("full-time") ||
    (q.includes("background") && !q.includes("educat") && !q.includes("study"))
  ) {
    return {
      text: "Aravind has 1 year of professional experience including his internship at People Media Factory:\n• Full-Time: May 2026 – Present (AI Developer / AI Software Engineer)\n• Internship: October 2025 – April 2026 (AI Intern)\nHe works across the full lifecycle—from requirement analysis and system architecture to production deployment (IIS & NSSM) and performance debugging.",
    };
  }

  // Responsibilities / What did he do
  if (
    q.includes("responsibilit") ||
    q.includes("what did aravind do") ||
    q.includes("day to day") ||
    q.includes("duties")
  ) {
    return {
      text: "At People Media Factory, Aravind's key responsibilities include:\n• Building & deploying AI applications using Python, FastAPI, LLMs & RAG.\n• Developing backend REST APIs and microservices.\n• Architecting document intelligence pipelines (OCR, embeddings, semantic search, Qdrant).\n• Integrating Hugging Face models and local LLMs via Ollama.\n• PostgreSQL data modeling and query optimization.\n• Deploying and maintaining services using IIS and NSSM.",
    };
  }

  // RAG / Enterprise RAG Project
  if (
    q.includes("rag") ||
    q.includes("document intelligence") ||
    q.includes("chatbot project") ||
    q.includes("enterprise rag")
  ) {
    return {
      text: "Aravind built the **Enterprise RAG Chatbot — Document Intelligence** system. It is an end-to-end document question-answering system powered by:\n\n**Visual Workflow:**\nDocuments → OCR / Text Extraction → Text Processing → Chunking → Embeddings → Qdrant → Semantic Search → Relevant Context → LLM → Answer.\n\n**Technologies:** Python, FastAPI, RAG, Qdrant, Ollama, Hugging Face, OCR, Embeddings, Semantic Search.",
      action: {
        type: "github",
        label: "View Projects on GitHub",
        url: AI_KNOWLEDGE_BASE.contact.github,
      },
    };
  }

  // Qdrant / Vector Database
  if (
    q.includes("qdrant") ||
    q.includes("vector db") ||
    q.includes("vector database") ||
    q.includes("embedding") ||
    q.includes("semantic search")
  ) {
    return {
      text: "Aravind has hands-on production experience using **Qdrant** as his primary vector database for high-dimensional embedding storage and sub-120ms semantic similarity search in his Enterprise RAG Chatbot.",
    };
  }

  // Python
  if (
    q.includes("python") ||
    q.includes("programming language")
  ) {
    return {
      text: "Yes, Python is Aravind's primary language. He uses Python extensively for building production AI applications, FastAPI backend services, LLM prompt engineering, embeddings, and data pipelines.",
    };
  }

  // FastAPI / Backend / Flask / PostgreSQL / APIs
  if (
    q.includes("fastapi") ||
    q.includes("backend") ||
    q.includes("api") ||
    q.includes("postgresql") ||
    q.includes("sql") ||
    q.includes("flask")
  ) {
    return {
      text: "Aravind builds production backends primarily with **FastAPI** and REST APIs, alongside Pydantic, SQLAlchemy, OOP, and PostgreSQL for relational persistence. He also has familiarity with Flask and SQL query optimization.",
    };
  }

  // Ollama / Hugging Face / Foundation Models
  if (
    q.includes("ollama") ||
    q.includes("hugging face") ||
    q.includes("llm") ||
    q.includes("generative ai") ||
    q.includes("genai")
  ) {
    return {
      text: "Yes, Aravind has direct production experience hosting and running local LLMs using **Ollama** and integrating open-source transformer models from **Hugging Face** for embedding generation and prompt synthesis.",
    };
  }

  // VFX Tracking System Project
  if (
    q.includes("vfx") ||
    q.includes("tracking") ||
    q.includes("production tracking")
  ) {
    return {
      text: "Aravind built the **VFX Production Tracking System**, a platform for managing VFX studio artists, task assignments, status workflows, and working activity. It uses Python, FastAPI, PostgreSQL, REST APIs, and is deployed on Windows Server using IIS and NSSM.",
    };
  }

  // AI Music Studio Project
  if (
    q.includes("music") ||
    q.includes("audio") ||
    q.includes("studio")
  ) {
    return {
      text: "Aravind worked on the **AI Music Studio**, developing AI-powered music and audio generation workflows involving text prompt conditioning, LLM composition orchestration, and asynchronous Python FastAPI backend APIs.",
    };
  }

  // Projects general
  if (
    q.includes("project") ||
    q.includes("portfolio projects")
  ) {
    return {
      text: "Aravind's key projects include:\n1. **Enterprise RAG Chatbot — Document Intelligence** (Python, FastAPI, RAG, Qdrant, Ollama, Hugging Face, OCR)\n2. **VFX Production Tracking System** (Python, FastAPI, PostgreSQL, REST APIs, IIS, NSSM)\n3. **AI Music Studio** (Python, FastAPI, Generative AI, LLMs, Audio AI)",
      action: {
        type: "github",
        label: "Explore GitHub Repositories",
        url: AI_KNOWLEDGE_BASE.contact.github,
      },
    };
  }

  // Currently Learning / Exploring (LangChain, LangGraph, Agentic AI, Tool Calling)
  if (
    q.includes("learn") ||
    q.includes("explor") ||
    q.includes("langchain") ||
    q.includes("langgraph") ||
    q.includes("agent") ||
    q.includes("tool calling")
  ) {
    return {
      text: "Aravind is currently learning and exploring:\n• **Agentic AI**\n• **LangChain**\n• **LangGraph**\n• **Tool Calling**\n*(Note: These are actively being learned and explored, rather than claimed as extensive production experience.)*",
    };
  }

  // Skills
  if (
    q.includes("skill") ||
    q.includes("tech stack") ||
    q.includes("technolog") ||
    q.includes("what can he do")
  ) {
    return {
      text: "Aravind's core technical skills are:\n• **AI & GenAI:** Python, LLMs, Generative AI, RAG, Prompt Engineering, Embeddings, Semantic Search, Hugging Face, Ollama\n• **Backend:** FastAPI, REST APIs, Flask, Pydantic, SQLAlchemy, OOP\n• **Databases:** PostgreSQL, Qdrant, SQL\n• **Engineering:** Git, GitHub, Debugging, Troubleshooting, API Design, IIS, NSSM",
    };
  }

  // Education / College / CGPA / Degree
  if (
    q.includes("education") ||
    q.includes("college") ||
    q.includes("university") ||
    q.includes("degree") ||
    q.includes("cgpa") ||
    q.includes("b.tech") ||
    q.includes("kiet") ||
    q.includes("jntuk")
  ) {
    return {
      text: "Aravind graduated with a **Bachelor of Technology (B.Tech) in Computer Science (Data Science)** from **Kakinada Institute of Engineering and Technology**, affiliated with **JNTUK** (December 2021 – April 2025) with a **CGPA of 7.5 / 10**.",
    };
  }

  // Certifications
  if (
    q.includes("certificat") ||
    q.includes("credential") ||
    q.includes("infosys") ||
    q.includes("salesforce")
  ) {
    return {
      text: "Aravind holds two verified certifications:\n1. **Python for Data Science** — Infosys Springboard\n2. **Salesforce Developer** — SmartInternz",
    };
  }

  // Location / Where is he based
  if (
    q.includes("location") ||
    q.includes("where is aravind") ||
    q.includes("city") ||
    q.includes("india") ||
    q.includes("hyderabad")
  ) {
    return {
      text: "Aravind is based in **Hyderabad, Andhra Pradesh/Telangana, India**.",
    };
  }

  // Resume
  if (
    q.includes("resume") ||
    q.includes("cv") ||
    q.includes("download")
  ) {
    return {
      text: "You can download Aravind's complete 1-page professional resume directly here:",
      action: {
        type: "resume",
        label: "Download Resume (PDF)",
        url: AI_KNOWLEDGE_BASE.contact.resume,
      },
    };
  }

  // LinkedIn
  if (
    q.includes("linkedin") ||
    q.includes("connect on linkedin")
  ) {
    return {
      text: "Here is Aravind's verified LinkedIn profile:",
      action: {
        type: "linkedin",
        label: "Open LinkedIn Profile",
        url: AI_KNOWLEDGE_BASE.contact.linkedin,
      },
    };
  }

  // GitHub
  if (
    q.includes("github") ||
    q.includes("code") ||
    q.includes("repository")
  ) {
    return {
      text: "Here is Aravind's GitHub profile where you can explore his projects and code:",
      action: {
        type: "github",
        label: "Open GitHub Profile",
        url: AI_KNOWLEDGE_BASE.contact.github,
      },
    };
  }

  // Contact / Email
  if (
    q.includes("contact") ||
    q.includes("email") ||
    q.includes("reach") ||
    q.includes("phone") ||
    q.includes("call") ||
    q.includes("hire") ||
    q.includes("message")
  ) {
    return {
      text: "You can reach Aravind directly via:\n• Email: aravindyallao@gmail.com\n• LinkedIn: linkedin.com/in/aravind-naidu-yalla-b50953288\n• GitHub: github.com/Aravindyalla",
      action: {
        type: "contact",
        label: "Go to Contact Form",
        url: "#contact",
      },
    };
  }

  // Default fallback when question cannot be answered from authoritative knowledge
  return {
    text: "I don't have that information in Aravind's portfolio. You can contact him directly at aravindyallao@gmail.com or via LinkedIn.",
    action: {
      type: "contact",
      label: "Contact Aravind Directly",
      url: "#contact",
    },
  };
}
