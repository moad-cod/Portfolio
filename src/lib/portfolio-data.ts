export const profile = {
  "name": "Mouad Elbaz",
  "role": "Junior Engineer · Data, Python Backend & AI/ML",
  "supportingLine": "I build data pipelines, Python services, and reproducible machine-learning systems.",
  "summary": "From enterprise ELT and FastAPI services to retrieval systems and model training, I turn complex data into useful, testable applications.",
  "location": "Agadir, Morocco",
  "phone": "+212 751 81 12 01",
  "email": "elbaz.ouad1249@gmail.com",
  "imageSrc": "/mouad.png",
  "portfolio": "https://mouadelbaz.vercel.app/"
};

export const resumes = [
  { label: "Data Engineering", href: "/Mouad_Elbaz_resume_CV1_Eng.pdf", filename: "Mouad-Elbaz-Data-Engineering-CV.pdf" },
  { label: "Python Backend", href: "/Mouad_Elbaz_resume_CV2_Python.pdf", filename: "Mouad-Elbaz-Python-Backend-CV.pdf" },
  { label: "AI & Machine Learning", href: "/Mouad_Elbaz_resume_CV3_AI.pdf", filename: "Mouad-Elbaz-AI-ML-CV.pdf" },
];

export const languages = ["Arabic — Native", "French — Intermediate", "English — Advanced"];

export const socialLinks = [
  {
    "label": "LinkedIn",
    "href": "https://linkedin.com/in/mouadelbaz"
  },
  {
    "label": "GitHub",
    "href": "https://github.com/moad-cod"
  },
  {
    "label": "X/Twitter",
    "href": "https://x.com/MouadEl_AI"
  }
];

export const technologyCategories = [
  {
    "name": "Data Engineering",
    "items": [
      "Python",
      "SQL",
      "PySpark",
      "Apache Spark",
      "Apache Airflow",
      "Celery",
      "dbt",
      "Hadoop",
      "ETL / ELT",
      "Medallion Architecture"
    ]
  },
  {
    "name": "AI & Machine Learning",
    "items": [
      "RAG",
      "QLoRA",
      "LLM Fine-Tuning",
      "Hybrid Retrieval",
      "BM25",
      "FastEmbed",
      "PyTorch",
      "Scikit-learn",
      "XGBoost",
      "Pandas",
      "NumPy"
    ]
  },
  {
    "name": "Data & Backend",
    "items": [
      "PostgreSQL",
      "MySQL",
      "Redis",
      "Qdrant",
      "MinIO",
      "FAISS",
      "FastAPI",
      "Spring Boot",
      "Next.js",
      "REST APIs"
    ]
  },
  {
    "name": "DevOps & Cloud",
    "items": [
      "Docker",
      "Git",
      "Linux",
      "Oracle Cloud Infrastructure (OCI)"
    ]
  }
];

export const priorityTechnologies = [
  "Python",
  "Apache Airflow",
  "dbt",
  "Apache Spark",
  "FastAPI",
  "PostgreSQL",
  "Qdrant",
  "Docker",
  "PyTorch",
  "QLoRA"
];

export const projects = [
  {
    "number": "01",
    "title": "CCSR — Canonical Computer Science Research",
    "type": "Data Engineering · Backend · AI",
    "status": null,
    "github": "https://github.com/moad-cod/CCSR",
    "imageCaption": null,
    "images": [],
    "description": "An open-source, local-first AI research engineering platform evolved from RAGForge. CCSR is designed around reproducible experimentation, evaluation, artifact lineage, retrieval tracing, and research-oriented AI workflows. Its current mature domain is Retrieval-Augmented Generation.",
    "highlights": [
      "Durable Bronze / Silver / Gold ingestion using MinIO",
      "PostgreSQL metadata, lineage, and authoritative state",
      "Dense + BM25 sparse hybrid retrieval with Qdrant",
      "Configurable chunking strategies",
      "Retrieval tracing and source inspection",
      "SSE streaming",
      "Redis caching and ingestion events",
      "FastAPI control plane",
      "Next.js frontend",
      "Airflow and Celery ingestion orchestration",
      "Benchmarking for latency, throughput, retries, recovery, duplicate processing, and scaling behavior"
    ],
    "technologies": [
      "FastAPI",
      "Next.js",
      "PostgreSQL",
      "Qdrant",
      "MinIO",
      "Redis",
      "Airflow",
      "Celery",
      "Docker",
      "BM25",
      "FastEmbed"
    ],
    "researchDesign": [],
    "planned": null
  },
  {
    "number": "02",
    "title": "Qwen MedQuAD — Medical LLM Fine-Tuning Research",
    "type": "AI & Machine Learning",
    "status": "Research in progress",
    "github": "https://github.com/moad-cod/qwen-medquad-finetuning",
    "imageCaption": null,
    "images": [],
    "description": "A reproducible research project studying when medical language models should rely on domain fine-tuning, retrieval, or calibrated abstention. The project uses MedQuAD and Qwen to investigate answer quality, grounding, uncertainty, and robustness.",
    "highlights": [
      "Built a leakage-audited MedQuAD cleaning pipeline",
      "16,357 cleaned QA records",
      "Fine-tuned Qwen3-4B using 4-bit QLoRA",
      "14,344 normalized question groups",
      "Group-safe train / validation / test split",
      "No detected question-group leakage"
    ],
    "technologies": [
      "Qwen3",
      "QLoRA",
      "PyTorch",
      "Transformers",
      "PEFT",
      "MedQuAD",
      "Python"
    ],
    "researchDesign": [
      "Base Qwen",
      "Base Qwen + RAG",
      "Fine-tuned Qwen",
      "Fine-tuned Qwen + RAG"
    ],
    "planned": "Planned: complete four-system evaluation, retrieval stress tests, final statistical analysis, and larger Qwen model experiments. Research topics include answer quality, evidence grounding, uncertainty, robustness, and selective answering / abstention."
  },
  {
    "number": "03",
    "title": "Operational Intelligence Platform",
    "type": "Data Engineering · Backend · AI",
    "status": "PFE · Professional project",
    "github": "https://github.com/moad-cod/operational-intelligence-platform",
    "imageCaption": "Dashboard, analytics, ELT, RAG, and operational intelligence views.",
    "images": [
      "/Operational Intelligence Platform/1.png",
      "/Operational Intelligence Platform/2.png",
      "/Operational Intelligence Platform/3.png",
      "/Operational Intelligence Platform/4.png",
      "/Operational Intelligence Platform/5.png",
      "/Operational Intelligence Platform/6.png",
      "/Operational Intelligence Platform/7.png",
      "/Operational Intelligence Platform/8.png",
      "/Operational Intelligence Platform/9.png"
    ],
    "description": "A data and AI platform developed during my PFE internship to consolidate, process, analyze, and query enterprise IT operations data.",
    "highlights": [
      "Consolidated 200,000+ records",
      "Sources included GLPI ITSM, OCS Inventory, and security logs",
      "Asynchronous ELT pipeline",
      "Medallion Architecture",
      "Bronze / Silver / Gold analytical layers",
      "Apache Airflow orchestration",
      "dbt transformations",
      "Multilingual RAG system",
      "BM25 + dense vector retrieval",
      "Reciprocal Rank Fusion",
      "Cross-Encoder reranking",
      "Qdrant",
      "XGBoost ticket triage",
      "Isolation Forest hardware anomaly detection",
      "FastAPI backend",
      "Next.js KPI dashboard"
    ],
    "technologies": [
      "Airflow",
      "dbt",
      "Qdrant",
      "BM25",
      "XGBoost",
      "Isolation Forest",
      "FastAPI",
      "Next.js"
    ],
    "researchDesign": [],
    "planned": null
  },
  {
    "number": "04",
    "title": "PlantGuard AI — Plant Disease Detection",
    "type": "AI & Machine Learning",
    "status": null,
    "github": "https://github.com/moad-cod/Plant-Disease-Classification-using-CNN",
    "imageCaption": "Plant disease detection interface and model preview.",
    "images": [
      "/PlantGuard AI/1.png"
    ],
    "description": "A deep learning plant disease classification system combining supervised image classification with out-of-distribution detection.",
    "highlights": [
      "CNN, ResNet, and EfficientNet-B3 benchmarking",
      "38 disease categories",
      "70,000+ PlantVillage images",
      "Approximately 99.7% F1-score",
      "MSP out-of-distribution detection",
      "GOAD out-of-distribution detection",
      "Streamlit deployment",
      "Dockerized application"
    ],
    "technologies": [
      "PyTorch",
      "TorchVision",
      "EfficientNet-B3",
      "ResNet",
      "CNN",
      "GOAD",
      "Streamlit",
      "Docker"
    ],
    "researchDesign": [],
    "planned": null
  }
];

export const experiences = [
  {
    "title": "Data Engineering & Machine Learning Intern (PFE)",
    "company": "Prefecture d'Agadir Ida-Outanane",
    "location": "Agadir, Morocco",
    "date": "Apr 2026 – Jul 2026",
    "summary": "Integrated 200,000+ enterprise records with asynchronous ELT, Airflow, and dbt; built multilingual retrieval and ML services in FastAPI for a Next.js dashboard.",
    "technologies": [
      "Medallion Architecture",
      "Airflow",
      "dbt",
      "RAG",
      "XGBoost",
      "Isolation Forest",
      "FastAPI",
      "Next.js"
    ]
  },
  {
    "title": "Developer Intern",
    "company": "Prefecture d'Agadir Ida-Outanane",
    "location": "Agadir, Morocco",
    "date": "Apr 2025 – Jun 2025",
    "summary": "Built secure internal systems with RBAC, authentication, session management, audit logging, and network/security controls.",
    "technologies": [
      "RBAC",
      "Authentication",
      "Audit Logging",
      "Network Security"
    ]
  }
];

export const education = [
  {
    "title": "Bachelor in Big Data",
    "school": "Universite Sultan Moulay Slimane · Morocco",
    "date": "2026"
  },
  {
    "title": "Technicien Specialise en Reseaux et Systemes",
    "school": "ISTA Agadir · Agadir, Morocco",
    "date": "2023 – 2025"
  },
  {
    "title": "Baccalaureat Sciences Physiques",
    "school": "Morocco",
    "date": "2022 – 2023"
  }
];

export const certifications = [
  "Machine Learning Specialization — DeepLearning.AI",
  "Network Security — Cisco",
  "Developer & Cybersecurity Pathways — Microsoft Learn",
  "Introduction to Data Warehousing — 365 Data Science"
];

export const research = {
  "description": "Interested in reproducible AI research, Retrieval-Augmented Generation, LLM fine-tuning, uncertainty estimation, selective prediction, multimodal AI, and explainable AI.",
  "direction": "Brain Region-Aware Explainable Artificial Intelligence for EEG-Based Neurological Disorder Detection",
  "support": "Exploring how spatial brain-region information and temporal EEG features can improve both classification performance and interpretability."
};
