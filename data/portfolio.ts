// ─────────────────────────────────────────────
// PERSONAL INFO
// ─────────────────────────────────────────────
export const personalInfo = {
  name: "Manasi Manoj Koppal",
  title: "Data Scientist · Analyst · Engineer · ML Engineer",
  email: "koppalmanasi@gmail.com",
  phone: "+1 930-904-3679",
  linkedin: "https://www.linkedin.com/in/manasi-koppal/",
  github: "https://github.com/manasikoppal",   
  location: "Troy, Ohio",
  status: "Available Now",
  gpa: "3.71 / 4.0",
  bio: "Data Scientist and ML Engineer with hands-on experience building end-to-end pipelines, NLP models, and interactive dashboards. Passionate about turning raw data into decisions.",
};

// ─────────────────────────────────────────────
// SKILLS
// Order matches the bento grid placement (ML first → anchors the 2×2 large tile).
// ─────────────────────────────────────────────
export const skills = [
  {
    category: "Machine Learning",
    items: ["Scikit-learn", "TensorFlow", "PyTorch", "Keras", "NLP", "XGBoost", "BERT"],
  },
  {
    category: "Generative AI & LLMs",
    items: ["LLMs", "CrewAI", "Agentic AI", "RAG Pipelines", "Prompt Engineering", "LangChain"],
  },
  {
    category: "Languages",
    items: ["Python", "SQL", "R", "PostgreSQL"],
  },
  {
    category: "Visualization",
    items: ["Power BI", "Tableau", "Plotly", "Seaborn", "Matplotlib"],
  },
  {
    category: "Cloud & Big Data",
    items: ["GCP", "AWS S3", "Snowflake", "BigQuery", "Spark", "Hadoop", "Hive"],
  },
  {
    category: "Statistics",
    items: ["A/B Testing", "Hypothesis Testing", "Causal Inference", "EDA", "Regression"],
  },
  {
    category: "Data Engineering",
    items: ["ETL", "Airflow", "Docker", "Pandas", "NumPy"],
  },
];

// ─────────────────────────────────────────────
// PROJECTS
// To add a GitHub link later, paste the URL into the githubUrl field below each project title.
// ─────────────────────────────────────────────
export const projects = [
  {
    githubUrl: null as string | null,
    title: "YOLOv8 Traffic Detection",
    description:
      "Real-time vehicle detection and traffic flow analysis system using YOLOv8 object detection on live CCTV footage. Classifies vehicle types, estimates congestion levels, and surfaces actionable insights for smart-city traffic management.",
    impact: [
      "Achieved 92% mean average precision (mAP) on a custom traffic dataset",
      "Reduced manual traffic review time by ~70% through automated annotation",
      "Processed 30 FPS video streams on a single GPU with sub-50 ms inference latency",
    ],
    tech: ["Python", "YOLOv8", "OpenCV", "PyTorch", "NumPy", "Matplotlib"],
    category: "Computer Vision",
  },
  {
    githubUrl: "https://github.com/manasikoppal/Hotel_Review_Analysis",
    title: "Hotel Review Sentiment Analysis",
    description:
      "End-to-end NLP pipeline that preprocesses and classifies 20 000 hotel reviews into positive, neutral, and negative sentiment. Uses NLTK for POS tagging and linguistic feature extraction, TF-IDF vectorization, and a Random Forest classifier — deployed as a Streamlit app for hotel managers.",
    impact: [
      "Built full preprocessing pipeline with NLTK: stop-word removal, POS tagging, and TF-IDF vectorization",
      "Random Forest classifier selected after comparing multiple models on balanced train/test splits",
      "Deployed interactive Streamlit app for non-technical hotel staff to predict sentiment in real time",
    ],
    tech: ["Python", "NLTK", "Scikit-learn", "TF-IDF", "Random Forest", "Streamlit", "Pandas"],
    category: "NLP",
  },
  {
    githubUrl: "https://github.com/manasikoppal/IndyGo-Transit-Dashboard",
    title: "IndyGo Transit Dashboard",
    description:
      "Interactive Power BI dashboard analyzing Indianapolis public transit ridership, on-time performance, and route efficiency across 2022–2024. Processed a 20.6M-row fact table from GPS trackers and Automatic Passenger Counters to surface actionable route planning insights.",
    impact: [
      "Cleaned and aggregated a 20.6M-row ridership dataset with significant missing values and invalid IDs",
      "Identified underperforming routes and ridership trends across monthly, bid-period, and annual windows",
      "Visualized stop-level ridership on geographic maps to support resource allocation decisions",
    ],
    tech: ["Power BI", "Python", "SQL", "ETL", "CSV", "Pandas"],
    category: "Data Analytics",
  },
  {
    githubUrl: null as string | null,
    title: "MediSupply AI",
    description:
      "Built a pharmaceutical supply-chain intelligence platform from 4 openFDA datasets — resolving product/manufacturer identity, building a queryable knowledge graph, and classifying disruption causes with an LLM-validated pipeline.",
    impact: [
      "95.5% classification accuracy (Claude teacher)",
      "137K+ products mapped across a 390K-node graph",
    ],
    tech: ["Python", "FastAPI", "LLM Classification", "SQLite", "Docker"],
    category: "Data Engineering · Healthcare AI",
  },
  {
    githubUrl: null as string | null,
    title: "AI Stock Analysis",
    description:
      "Designed a 3-agent CrewAI pipeline (data, news, and research analysts) that synthesizes live financials and headlines into BUY/HOLD/SELL investment reports in under 60 seconds.",
    impact: [
      "Full report generation in <60s",
      "Zero-cost stack (Groq + yfinance)",
    ],
    tech: ["CrewAI", "Groq LLM", "Streamlit", "yfinance", "Plotly"],
    category: "Agentic AI · Financial Research",
  },
  {
    githubUrl: null as string | null,
    title: "Drive to Survive — F1 Analytics",
    description:
      "Built a Flask + MySQL web app to explore F1 teams, drivers, and season data, with interactive Chart.js dashboards for pole positions, points progression, and constructor standings.",
    impact: [
      "5 interactive analytics views",
      "Team project (3 contributors)",
    ],
    tech: ["Flask", "MySQL", "Chart.js", "Python", "JavaScript"],
    category: "Full-Stack Data App",
  },
];

// ─────────────────────────────────────────────
// EXPERIENCE
// ─────────────────────────────────────────────
export const experience = [
  {
    role: "Graduate Research Assistant",
    company: "Indiana University",
    location: "Bloomington, Indiana",
    period: "Nov 2025 – May 2026",
    bullets: [
      "Conducting research on large-scale data analysis and machine learning pipelines under faculty supervision",
      "Developing reproducible ETL workflows using Python and SQL for academic datasets",
      "Contributing to research publications and presenting findings at internal lab meetings",
    ],
  },
  {
    role: "Data Scientist Intern",
    company: "AI Variant",
    location: "Remote",
    period: "Jul 2023 – Apr 2024",
    bullets: [
      "Built and deployed 5 end-to-end ML models (classification, regression) on GCP serving live client traffic",
      "Reduced churn model inference latency by 35% through feature engineering and model compression",
      "Automated retraining pipelines with Apache Airflow, cutting model refresh time from 2 weeks to 2 days",
      "Collaborated with cross-functional teams to translate business requirements into measurable ML objectives",
    ],
  },
  {
    role: "Data Engineer Intern",
    company: "Fabrix.ai",
    location: "Remote",
    period: "Sep 2022 – Oct 2022",
    bullets: [
      "Designed and maintained ETL pipelines ingesting 10 GB+ of daily media metadata into a Snowflake data warehouse",
      "Optimized SQL queries reducing average job runtime by 40%",
      "Documented pipeline architecture and wrote data quality checks that caught 97% of upstream schema issues",
    ],
  },
];

// ─────────────────────────────────────────────
// EDUCATION
// ─────────────────────────────────────────────
export const education = [
  {
    degree: "Master of Science, Data Science",
    institution: "Indiana University",
    location: "Bloomington, Indiana",
    period: "2024 – 2026",
    gpa: "3.71 / 4.0",
    highlights: [
      "Graduate Research Assistant — ML pipelines & data analysis",
      "Coursework: Applied ML, Big Data Systems, Statistical Modeling, NLP, Cloud Computing",
    ],
  },
  {
    degree: "Bachelor of Engineering, Computer Science",
    institution: "P.D.A. College of Engineering (PDACE)",
    location: "India",
    period: "2019 – 2023",
    gpa: "8.05 / 10.0",
    highlights: [
      "Published conference paper at ICIRCA 2023",
      "Coursework: Data Structures, DBMS, Machine Learning, Operating Systems",
    ],
  },
];

// ─────────────────────────────────────────────
// CERTIFICATIONS & ACHIEVEMENTS
// ─────────────────────────────────────────────
export const certifications = [
  {
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    year: "2025",
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
    issuer: "Oracle",
    year: "2025",
  },
  {
    title: "TechSaksham",
    issuer: "Microsoft",
    year: "2023",
  },
  {
    title: "Data Science",
    issuer: "ExcelR",
    year: "2023",
  },
  {
    title: "Understanding Incubation and Entrepreneurship",
    issuer: "NPTEL",
    year: "2023",
  },
  {
    title: "Introduction to Internet of Things (IoT)",
    issuer: "NPTEL",
    year: "2022",
  },
  {
    title: "YOLO-Based Video Processing for CCTV Surveillance — Conference Paper",
    issuer: "ICIRCA 2023",
    year: "2023",
  },
];

