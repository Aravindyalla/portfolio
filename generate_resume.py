import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch

def create_resume():
    output_path = os.path.join(os.path.dirname(__file__), "public", "resume.pdf")
    doc = SimpleDocTemplate(
        output_path,
        pagesize=letter,
        rightMargin=36,
        leftMargin=36,
        topMargin=36,
        bottomMargin=36
    )

    styles = getSampleStyleSheet()
    
    # Custom Palette
    PRIMARY = colors.HexColor("#0f172a") # Slate 900
    ACCENT = colors.HexColor("#0284c7")  # Sky 600
    TEXT_DARK = colors.HexColor("#1e293b")
    TEXT_MUTED = colors.HexColor("#475569")
    LINE_COLOR = colors.HexColor("#cbd5e1")
    BG_PILL = colors.HexColor("#f1f5f9")

    name_style = ParagraphStyle(
        'Name',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=20,
        leading=24,
        textColor=PRIMARY
    )

    title_style = ParagraphStyle(
        'Title',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=11,
        leading=14,
        textColor=ACCENT
    )

    contact_style = ParagraphStyle(
        'Contact',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=12,
        textColor=TEXT_MUTED
    )

    section_heading = ParagraphStyle(
        'SectionHeading',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=11,
        leading=15,
        textColor=PRIMARY,
        spaceAfter=4
    )

    item_title = ParagraphStyle(
        'ItemTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9.5,
        leading=13,
        textColor=TEXT_DARK
    )

    item_sub = ParagraphStyle(
        'ItemSub',
        parent=styles['Normal'],
        fontName='Helvetica-Oblique',
        fontSize=8.5,
        leading=11.5,
        textColor=ACCENT
    )

    body_style = ParagraphStyle(
        'Body',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11.5,
        textColor=TEXT_MUTED
    )

    bullet_style = ParagraphStyle(
        'Bullet',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11.5,
        textColor=TEXT_DARK,
        leftIndent=10
    )

    story = []

    # Header
    header_data = [
        [
            Paragraph("<b>ARAVIND NAIDU YALLA</b>", name_style),
            Paragraph("Hyderabad, India<br/>aravindyall@gmail.com", contact_style)
        ],
        [
            Paragraph("AI ENGINEER &bull; GENERATIVE AI &bull; LLMs &bull; RAG", title_style),
            Paragraph("linkedin.com/in/aravind-naidu-yalla-b50953288<br/>github.com/Aravindyalla", contact_style)
        ]
    ]
    header_table = Table(header_data, colWidths=[4.2*inch, 3.1*inch])
    header_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('ALIGN', (1,0), (1,-1), 'RIGHT'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
    ]))
    story.append(header_table)
    story.append(Spacer(1, 6))
    story.append(HRFlowable(width="100%", thickness=1.5, color=ACCENT, spaceBefore=2, spaceAfter=8))

    # Professional Summary
    story.append(Paragraph("<b>PROFESSIONAL SUMMARY</b>", section_heading))
    story.append(Paragraph(
        "AI Engineer at People Media Factory with 1 year of professional experience developing production-grade AI-powered applications. "
        "Specialized in Python, FastAPI, Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), vector embeddings, semantic search, "
        "and agentic architectures. Proven track record in orchestrating multi-document ingestion pipelines, vector databases (Qdrant), "
        "and low-latency inference APIs.",
        body_style
    ))
    story.append(Spacer(1, 8))

    # Technical Skills
    story.append(Paragraph("<b>TECHNICAL SKILLS</b>", section_heading))
    skills_data = [
        [
            Paragraph("<b>AI & Core LLM:</b>", item_title),
            Paragraph("Generative AI, Large Language Models (LLMs), RAG, Agentic AI, Embeddings, Semantic Search, Ollama, Hugging Face", body_style)
        ],
        [
            Paragraph("<b>Backend & APIs:</b>", item_title),
            Paragraph("Python, FastAPI, RESTful APIs, Asynchronous Programming, Microservices Architecture", body_style)
        ],
        [
            Paragraph("<b>Databases & Vector:</b>", item_title),
            Paragraph("Qdrant (Vector Database), PostgreSQL, Similarity Search, Indexing & Chunking", body_style)
        ],
        [
            Paragraph("<b>Tools & Version Control:</b>", item_title),
            Paragraph("Git, GitHub, Docker, Linux, OCR Text Extraction Pipelines, Prompt Engineering", body_style)
        ]
    ]
    skills_table = Table(skills_data, colWidths=[1.8*inch, 5.5*inch])
    skills_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 2),
    ]))
    story.append(skills_table)
    story.append(Spacer(1, 8))

    # Professional Experience
    story.append(Paragraph("<b>PROFESSIONAL EXPERIENCE</b>", section_heading))
    exp_header = [
        [
            Paragraph("<b>People Media Factory</b> &mdash; AI Engineer", item_title),
            Paragraph("Hyderabad, India | Oct 2025 &ndash; Present", contact_style)
        ]
    ]
    t_exp = Table(exp_header, colWidths=[4.8*inch, 2.5*inch])
    t_exp.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('ALIGN', (1,0), (1,-1), 'RIGHT'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
    ]))
    story.append(t_exp)
    story.append(Paragraph("<i>Transitioned from AI Intern to Full-time AI Engineer</i>", item_sub))
    story.append(Spacer(1, 2))
    story.append(Paragraph("&bull; Architected and deployed production-grade AI-powered applications, integrating state-of-the-art LLMs with scalable Python FastAPI backends.", bullet_style))
    story.append(Paragraph("&bull; Engineered end-to-end Retrieval-Augmented Generation (RAG) systems incorporating chunking, OCR pipelines, and vector database indexing.", bullet_style))
    story.append(Paragraph("&bull; Spearheaded AI experimentation, prompt tuning, and model evaluation to maximize generation relevance and factual grounding.", bullet_style))
    story.append(Paragraph("&bull; Built resilient REST APIs and microservice endpoints supporting enterprise media and production workflows.", bullet_style))
    story.append(Spacer(1, 8))

    # Featured Projects
    story.append(Paragraph("<b>KEY PROJECTS</b>", section_heading))

    # Project 1
    p1_header = [
        [
            Paragraph("<b>Enterprise RAG System</b> | <i>Document QA Intelligence</i>", item_title),
            Paragraph("Python, FastAPI, Ollama, Qdrant, Hugging Face, PostgreSQL", contact_style)
        ]
    ]
    t_p1 = Table(p1_header, colWidths=[4.2*inch, 3.1*inch])
    t_p1.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('ALIGN', (1,0), (1,-1), 'RIGHT')]))
    story.append(t_p1)
    story.append(Paragraph("&bull; Built an enterprise Retrieval-Augmented Generation system enabling multi-document context retrieval and high-precision question answering.", bullet_style))
    story.append(Paragraph("&bull; Integrated OCR-based text extraction, smart document parsing, semantic chunking, and embedding generation via Hugging Face models.", bullet_style))
    story.append(Paragraph("&bull; Deployed Qdrant vector database for sub-100ms vector similarity lookups, combined with Ollama LLMs for contextual response synthesis.", bullet_style))
    story.append(Spacer(1, 4))

    # Project 2
    p2_header = [
        [
            Paragraph("<b>AI Music Studio</b> | <i>Generative Audio & Music Workflows</i>", item_title),
            Paragraph("Python, FastAPI, LLMs, Generative AI", contact_style)
        ]
    ]
    t_p2 = Table(p2_header, colWidths=[4.2*inch, 3.1*inch])
    t_p2.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('ALIGN', (1,0), (1,-1), 'RIGHT')]))
    story.append(t_p2)
    story.append(Paragraph("&bull; Developed generative music and audio pipelines orchestrating LLMs for compositional prompts, lyric creation, and audio generation models.", bullet_style))
    story.append(Paragraph("&bull; Created responsive asynchronous FastAPI endpoints to handle streaming inference, job queueing, and multi-track audio generation tasks.", bullet_style))
    story.append(Spacer(1, 4))

    # Project 3
    p3_header = [
        [
            Paragraph("<b>VFX Artist Tracking System</b> | <i>Production Operations Platform</i>", item_title),
            Paragraph("Python, FastAPI, PostgreSQL, REST APIs", contact_style)
        ]
    ]
    t_p3 = Table(p3_header, colWidths=[4.2*inch, 3.1*inch])
    t_p3.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('ALIGN', (1,0), (1,-1), 'RIGHT')]))
    story.append(t_p3)
    story.append(Paragraph("&bull; Engineered an end-to-end production tracking platform for media operations, tracking VFX artists, shot milestones, task statuses, and working activity.", bullet_style))
    story.append(Paragraph("&bull; Designed relational PostgreSQL database schemas with optimized query indexes and RESTful endpoints for real-time artist collaboration.", bullet_style))
    story.append(Spacer(1, 8))

    # Education
    story.append(Paragraph("<b>EDUCATION</b>", section_heading))
    edu_header = [
        [
            Paragraph("<b>Bachelor of Technology in Computer Science & Engineering</b>", item_title),
            Paragraph("Hyderabad, India", contact_style)
        ]
    ]
    t_edu = Table(edu_header, colWidths=[5.0*inch, 2.3*inch])
    t_edu.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('ALIGN', (1,0), (1,-1), 'RIGHT')]))
    story.append(t_edu)
    story.append(Paragraph("Relevant Coursework: Machine Learning, Deep Learning, Natural Language Processing, Data Structures & Algorithms, Database Management Systems", body_style))

    doc.build(story)
    print("Resume successfully generated at:", output_path)

if __name__ == "__main__":
    create_resume()
