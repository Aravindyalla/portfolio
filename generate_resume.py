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
        topMargin=32,
        bottomMargin=32
    )

    styles = getSampleStyleSheet()
    
    # Custom Palette
    PRIMARY = colors.HexColor("#0f172a") # Slate 900
    ACCENT = colors.HexColor("#0284c7")  # Sky 600
    TEXT_DARK = colors.HexColor("#1e293b")
    TEXT_MUTED = colors.HexColor("#475569")

    name_style = ParagraphStyle(
        'Name',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=18,
        leading=22,
        textColor=PRIMARY
    )

    title_style = ParagraphStyle(
        'Title',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10,
        leading=13,
        textColor=ACCENT
    )

    contact_style = ParagraphStyle(
        'Contact',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.2,
        leading=11.5,
        textColor=TEXT_MUTED
    )

    section_heading = ParagraphStyle(
        'SectionHeading',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10.5,
        leading=14,
        textColor=PRIMARY,
        spaceAfter=3
    )

    item_title = ParagraphStyle(
        'ItemTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9,
        leading=12,
        textColor=TEXT_DARK
    )

    item_sub = ParagraphStyle(
        'ItemSub',
        parent=styles['Normal'],
        fontName='Helvetica-Oblique',
        fontSize=8.2,
        leading=11,
        textColor=ACCENT
    )

    body_style = ParagraphStyle(
        'Body',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.2,
        leading=11,
        textColor=TEXT_MUTED
    )

    bullet_style = ParagraphStyle(
        'Bullet',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.2,
        leading=11,
        textColor=TEXT_DARK,
        leftIndent=8
    )

    story = []

    # Header
    header_data = [
        [
            Paragraph("<b>ARAVIND NAIDU YALLA</b>", name_style),
            Paragraph("Hyderabad, India &bull; +91 7729804283<br/>aravindyallao@gmail.com", contact_style)
        ],
        [
            Paragraph("AI SOFTWARE ENGINEER &bull; PRODUCTION AI SYSTEMS", title_style),
            Paragraph("linkedin.com/in/aravind-naidu-yalla-b50953288<br/>github.com/Aravindyalla", contact_style)
        ]
    ]
    header_table = Table(header_data, colWidths=[4.3*inch, 3.2*inch])
    header_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('ALIGN', (1,0), (1,-1), 'RIGHT'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
    ]))
    story.append(header_table)
    story.append(Spacer(1, 4))
    story.append(HRFlowable(width="100%", thickness=1.5, color=ACCENT, spaceBefore=2, spaceAfter=6))

    # Professional Profile Summary
    story.append(Paragraph("<b>PROFESSIONAL PROFILE</b>", section_heading))
    story.append(Paragraph(
        "AI Software Engineer with 1 year of hands-on experience building and deploying AI-powered applications and backend systems. "
        "Experienced in Python, FastAPI, LLMs, RAG, embeddings, semantic search, Qdrant, Ollama, Hugging Face and PostgreSQL. "
        "At People Media Factory, worked across the development lifecycle—from understanding requirements and designing solutions "
        "to deployment, debugging and maintenance. Focused on turning real-world business requirements into practical software and AI solutions.",
        body_style
    ))
    story.append(Spacer(1, 6))

    # Technical Skills
    story.append(Paragraph("<b>TECHNICAL SKILLS</b>", section_heading))
    skills_data = [
        [
            Paragraph("<b>AI & Generative AI:</b>", item_title),
            Paragraph("Python, LLMs, Generative AI, RAG, Prompt Engineering, Embeddings, Semantic Search, Hugging Face, Ollama", body_style)
        ],
        [
            Paragraph("<b>Backend:</b>", item_title),
            Paragraph("FastAPI, REST APIs, Flask, Pydantic, SQLAlchemy, Object-Oriented Programming (OOP)", body_style)
        ],
        [
            Paragraph("<b>Databases:</b>", item_title),
            Paragraph("PostgreSQL, Qdrant (Vector Database), SQL", body_style)
        ],
        [
            Paragraph("<b>Engineering & Ops:</b>", item_title),
            Paragraph("Git, GitHub, Debugging, Troubleshooting, API Design, IIS, NSSM", body_style)
        ],
        [
            Paragraph("<b>Learning / Exploring:</b>", item_title),
            Paragraph("Agentic AI, LangChain, LangGraph, Tool Calling", body_style)
        ]
    ]
    skills_table = Table(skills_data, colWidths=[1.8*inch, 5.7*inch])
    skills_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1.5),
    ]))
    story.append(skills_table)
    story.append(Spacer(1, 6))

    # Professional Experience
    story.append(Paragraph("<b>PROFESSIONAL EXPERIENCE</b>", section_heading))
    exp_header = [
        [
            Paragraph("<b>People Media Factory</b> &mdash; AI Developer / AI Software Engineer", item_title),
            Paragraph("Hyderabad, India", contact_style)
        ],
        [
            Paragraph("<i>May 2026 &ndash; Present &bull; Full-Time | October 2025 &ndash; April 2026 &bull; Intern</i>", item_sub),
            Paragraph("Promoted: Intern &rarr; Full-Time", contact_style)
        ]
    ]
    t_exp = Table(exp_header, colWidths=[5.0*inch, 2.5*inch])
    t_exp.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('ALIGN', (1,0), (1,-1), 'RIGHT'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
    ]))
    story.append(t_exp)
    story.append(Spacer(1, 2))
    story.append(Paragraph("&bull; Built and deployed AI-powered applications using Python, FastAPI, LLMs and RAG.", bullet_style))
    story.append(Paragraph("&bull; Developed backend services and REST APIs for production applications.", bullet_style))
    story.append(Paragraph("&bull; Built document intelligence workflows involving OCR, embeddings, semantic search and vector databases.", bullet_style))
    story.append(Paragraph("&bull; Integrated Hugging Face models and locally hosted LLMs using Ollama.", bullet_style))
    story.append(Paragraph("&bull; Worked with PostgreSQL for application data and query optimization.", bullet_style))
    story.append(Paragraph("&bull; Diagnosed production issues and optimized backend/database performance.", bullet_style))
    story.append(Paragraph("&bull; Deployed and maintained applications using IIS and NSSM.", bullet_style))
    story.append(Paragraph("&bull; Worked with Git/GitHub and collaborated with cross-functional teams.", bullet_style))
    story.append(Spacer(1, 6))

    # Projects
    story.append(Paragraph("<b>KEY PROJECTS</b>", section_heading))

    # Project 1
    p1_header = [
        [
            Paragraph("<b>Enterprise RAG Chatbot &mdash; Document Intelligence</b>", item_title),
            Paragraph("Python, FastAPI, RAG, Qdrant, Ollama, Hugging Face, OCR, Embeddings", contact_style)
        ]
    ]
    t_p1 = Table(p1_header, colWidths=[4.5*inch, 3.0*inch])
    t_p1.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('ALIGN', (1,0), (1,-1), 'RIGHT')]))
    story.append(t_p1)
    story.append(Paragraph("&bull; Built an end-to-end document question-answering system using Retrieval-Augmented Generation (RAG).", bullet_style))
    story.append(Paragraph("&bull; Engineered workflow: Documents &rarr; OCR/Extraction &rarr; Text Processing &rarr; Chunking &rarr; Embeddings &rarr; Qdrant &rarr; Semantic Search &rarr; Relevant Context &rarr; LLM &rarr; Answer.", bullet_style))
    story.append(Paragraph("&bull; Implemented multi-document ingestion, dense embeddings, Qdrant vector storage, and grounded question answering.", bullet_style))
    story.append(Spacer(1, 3))

    # Project 2
    p2_header = [
        [
            Paragraph("<b>VFX Production Tracking System</b>", item_title),
            Paragraph("Python, FastAPI, PostgreSQL, REST APIs, IIS, NSSM, Git", contact_style)
        ]
    ]
    t_p2 = Table(p2_header, colWidths=[4.5*inch, 3.0*inch])
    t_p2.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('ALIGN', (1,0), (1,-1), 'RIGHT')]))
    story.append(t_p2)
    story.append(Paragraph("&bull; Built a production tracking platform for managing VFX artists, tasks, statuses, working activity, and timesheets.", bullet_style))
    story.append(Paragraph("&bull; Designed role-based access control, supervisor approval workflows, and optimized PostgreSQL schema.", bullet_style))
    story.append(Paragraph("&bull; Deployed and managed production services on Windows Server using IIS and NSSM.", bullet_style))
    story.append(Spacer(1, 3))

    # Project 3
    p3_header = [
        [
            Paragraph("<b>AI Music Studio</b>", item_title),
            Paragraph("Python, FastAPI, Generative AI, LLMs, Audio AI", contact_style)
        ]
    ]
    t_p3 = Table(p3_header, colWidths=[4.5*inch, 3.0*inch])
    t_p3.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('ALIGN', (1,0), (1,-1), 'RIGHT')]))
    story.append(t_p3)
    story.append(Paragraph("&bull; Worked on AI-powered music and audio generation workflows involving text prompts, LLM integrations and backend APIs.", bullet_style))
    story.append(Paragraph("&bull; Orchestrated asynchronous FastAPI endpoints to handle compute-intensive audio generation models.", bullet_style))
    story.append(Spacer(1, 6))

    # Education & Certifications
    story.append(Paragraph("<b>EDUCATION & CERTIFICATIONS</b>", section_heading))
    edu_header = [
        [
            Paragraph("<b>B.Tech &mdash; Computer Science (Data Science)</b> &bull; CGPA: 7.5 / 10", item_title),
            Paragraph("Dec 2021 &ndash; Apr 2025", contact_style)
        ]
    ]
    t_edu = Table(edu_header, colWidths=[5.5*inch, 2.0*inch])
    t_edu.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('ALIGN', (1,0), (1,-1), 'RIGHT')]))
    story.append(t_edu)
    story.append(Paragraph("Kakinada Institute of Engineering and Technology &bull; Kakinada, Andhra Pradesh", item_sub))
    story.append(Paragraph("<i>Affiliated to Jawaharlal Nehru Technological University Kakinada (JNTUK)</i>", body_style))
    story.append(Paragraph("&bull; <b>Certifications:</b> Python for Data Science (Infosys Springboard) &bull; Salesforce Developer (SmartInternz)", bullet_style))

    doc.build(story)
    print("Resume successfully generated at:", output_path)

if __name__ == "__main__":
    create_resume()
