export const profile = {
  name: "Mouad Elbaz",
  role: "Data Engineering & Machine Learning Student",
  rotatingRoles: [
    "AI / Data Engineering Developer",
    "Full-Stack AI Developer",
    "RAG Systems Builder",
  ],
  summary:
    "I build intelligent data platforms, RAG systems, machine learning solutions, and full-stack dashboards that transform complex data into practical business value.",
  location: "Agadir, Morocco",
  phone: "+212 751 81 12 01",
  email: "elbaz.ouad1249@gmail.com",
  resumeHref: "/CV.pdf",
  imageSrc: "/mouad.png",
};

export const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/in/mouadelbaz" },
  { label: "GitHub", href: "https://github.com/moad-cod" },
  { label: "X/Twitter", href: "https://x.com/MouadEl_AI" },
];

export const technologies = [
  "Python",
  "SQL",
  "Java",
  "Git",
  "PySpark",
  "Apache Hadoop",
  "Apache Airflow",
  "dbt",
  "PostgreSQL",
  "MySQL",
  "Redis",
  "HBase",
  "Qdrant",
  "FAISS",
  "FastAPI",
  "Next.js",
  "Docker",
  "Linux",
  "Scikit-learn",
  "PyTorch",
  "OpenCV",
  "XGBoost",
  "Pandas",
  "NumPy",
];

export const projectGroups = [
  "Programming Languages",
  "Data Engineering",
  "Databases & Vector Search",
  "Machine Learning & AI",
  "Backend & APIs",
  "DevOps / Cloud / Systems",
  "Security",
];

export const projects = [
  {
    number: "01",
    title: "Operational Intelligence Platform",
    type: "Data Engineering, Machine Learning, RAG, Enterprise Dashboard",
    status: null,
    github: "https://github.com/moad-cod/operational-intelligence-platform",
    images: [
      "/Operational Intelligence Platform/1.png",
      "/Operational Intelligence Platform/2.png",
      "/Operational Intelligence Platform/3.png",
      "/Operational Intelligence Platform/4.png",
      "/Operational Intelligence Platform/5.png",
      "/Operational Intelligence Platform/6.png",
      "/Operational Intelligence Platform/7.png",
      "/Operational Intelligence Platform/8.png",
      "/Operational Intelligence Platform/9.png",
    ],
    description:
      "An enterprise operational intelligence platform built during my PFE internship at the Prefecture d'Agadir Ida-Outanane. The platform consolidates ITSM, inventory, and security data into an asynchronous ELT pipeline using Medallion Architecture. It includes a multilingual RAG system for enterprise IT support, machine learning models for ticket triage and anomaly detection, and a real-time dashboard for incident tracking and KPI visualization.",
    highlights: [
      "Consolidated over 200,000 records from GLPI ITSM, OCS Inventory, and security logs.",
      "Built an asynchronous ELT pipeline using Bronze, Silver, and Gold Medallion Architecture.",
      "Orchestrated pipelines with Apache Airflow and modeled data with dbt.",
      "Built a multilingual RAG system using BM25, dense vector search, Reciprocal Rank Fusion, Cross-Encoder reranking, Qdrant, FAISS, and Groq API.",
      "Trained XGBoost for IT ticket triage and Isolation Forest for hardware anomaly detection.",
      "Achieved around 86% accuracy across both ML models.",
      "Built backend services with FastAPI and a Next.js dashboard.",
    ],
    technologies: [
      "Python",
      "Apache Airflow",
      "dbt",
      "PySpark",
      "Qdrant",
      "FAISS",
      "XGBoost",
      "Scikit-learn",
      "FastAPI",
      "Next.js",
      "Docker",
      "Groq API",
    ],
  },
  {
    number: "02",
    title: "RAGForge",
    type: "AI Knowledge & RAG Platform",
    status: "Under Development",
    github: "https://github.com/moad-cod/RAGForge",
    images: [],
    description:
      "RAGForge is an under-development AI Knowledge & RAG platform for automated document ingestion, hybrid search, semantic retrieval, metadata reranking, and LLM-powered contextual Q&A.",
    highlights: [
      "Built automated document ingestion.",
      "Implemented hybrid keyword and semantic search.",
      "Added metadata reranking for better contextual answers.",
      "Used PostgreSQL for relational storage.",
      "Used Qdrant for vector search.",
      "Containerized the microservices cluster with Docker.",
    ],
    technologies: ["Python", "FastAPI", "PostgreSQL", "Qdrant", "Docker", "RAG", "LLMs"],
  },
  {
    number: "03",
    title: "PlantGuard AI",
    type: "Plant Disease Detection System",
    status: null,
    github: "https://github.com/moad-cod/Plant-Disease-Classification-using-CNN",
    images: [],
    description:
      "An AI-powered plant disease detection system trained on the PlantVillage dataset. The project compares CNN, ResNet, and EfficientNet-B3 architectures across 38 disease categories and includes anomaly detection for out-of-distribution cases.",
    highlights: [
      "Trained and benchmarked CNN, ResNet, and EfficientNet-B3 models.",
      "Used a dataset with over 70,000 plant disease images.",
      "Classified 38 disease categories.",
      "Achieved around 99.7% F1-score.",
      "Added out-of-distribution detection using MSP and GOAD.",
      "Deployed the model as an interactive Streamlit web app.",
      "Containerized the app with Docker.",
    ],
    technologies: [
      "Python",
      "PyTorch",
      "TorchVision",
      "EfficientNet-B3",
      "ResNet",
      "CNN",
      "GOAD",
      "OpenCV",
      "Streamlit",
      "Docker",
    ],
  },
];

export const experiences = [
  {
    title: "Data Engineering & Machine Learning Intern",
    company: "Prefecture d'Agadir Ida-Outanane",
    location: "Agadir, Morocco",
    date: "Apr 15 - Jul 15, 2026",
    summary:
      "Designed and built a complete operational intelligence platform combining data engineering, machine learning, RAG, FastAPI services, and a Next.js dashboard.",
    technologies: [
      "Python",
      "Apache Airflow",
      "dbt",
      "PySpark",
      "Qdrant",
      "FAISS",
      "XGBoost",
      "Scikit-learn",
      "FastAPI",
      "Next.js",
      "Docker",
      "Groq API",
    ],
  },
  {
    title: "Developer Intern",
    company: "Prefecture d'Agadir Ida-Outanane",
    location: "Agadir, Morocco",
    date: "Apr - Jun 2025",
    summary:
      "Built a secure enterprise attendance management system with RBAC, multi-tier authentication, dynamic session management, IP compliance analysis, audit logging, and secure local network configuration.",
    technologies: [
      "Backend Security",
      "RBAC",
      "Authentication",
      "Audit Logging",
      "Network Security",
      "Linux",
    ],
  },
];

export const education = [
  {
    title: "Bachelor in Big Data",
    school: "Universite Sultan Moulay Slimane, Morocco",
    date: "2025 - 2026",
  },
  {
    title: "Technicien Specialise en Reseaux et Systemes",
    school: "ISTA Agadir, Morocco",
    date: "2023 - 2025",
  },
  {
    title: "Baccalaureat Sciences Physiques",
    school: "Lycee Qualifiant, Morocco",
    date: "2022 - 2023",
  },
];

export const certifications = [
  "Machine Learning Specialization — DeepLearning.AI",
  "Network Security — Cisco",
  "Microsoft Certified: Developer & Cybersecurity Pathways — Microsoft",
  "Introduction to Data Warehousing — IBM / Coursera",
];
