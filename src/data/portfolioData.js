// ============================================================
// PORTFOLIO DATA — Bharath G P
// ============================================================

export const personalInfo = {
  name: "Bharath G P",
  fullName: "Bharath G P",
  title: "Java Full-Stack Developer",
  roles: [
    "Java Full-Stack Developer",
    "Spring Boot Engineer",
    "Software Engineer",
    "Graduate Engineer Trainee",
    "Backend Developer",
  ],
  email: "bharathgp223@gmail.com",
  phone: "+91-8088125026",
  linkedin: "https://linkedin.com/in/bharath-gp",
  github: "https://github.com/bharathgp",
  location: "Shivamogga, Karnataka, India",
  availability: "Open to Work",
  resumeUrl: "/resume.pdf",
};

export const summary = `Java Full-Stack Developer with hands-on experience building REST APIs and full-stack applications using Spring Boot, React.js, MySQL, and Oracle SQL. Strong analytical and problem-solving skills with a solid foundation in OOP, Data Structures & Algorithms (150+ LeetCode problems solved), JUnit 5, and Mockito. Proficient in Microsoft Excel, Word, and PowerPoint. Passionate about building scalable backend systems and seeking Software Engineer or Graduate Engineer Trainee opportunities.`;

export const skills = {
  backend: [
    { name: "Java", level: 90, icon: "java" },
    { name: "Spring Boot", level: 85, icon: "spring" },
    { name: "Spring MVC", level: 82, icon: "spring" },
    { name: "Spring Data JPA", level: 82, icon: "spring" },
    { name: "Hibernate", level: 80, icon: "java" },
    { name: "REST APIs", level: 86, icon: "api" },
    { name: "JDBC", level: 80, icon: "java" },
  ],
  database: [
    { name: "MySQL", level: 84, icon: "mysql" },
    { name: "Oracle SQL", level: 80, icon: "database" },
    { name: "PostgreSQL", level: 78, icon: "postgres" },
  ],
  fundamentals: [
    { name: "Data Structures & Algorithms", level: 85, icon: "dsa" },
    { name: "OOP", level: 86, icon: "patterns" },
    { name: "Collections Framework", level: 82, icon: "arch" },
    { name: "Multithreading", level: 74, icon: "thread" },
    { name: "MVC Architecture", level: 84, icon: "arch" },
    { name: "SDLC", level: 80, icon: "sdlc" },
  ],
  tools: [
    { name: "Git & GitHub", level: 85, icon: "git" },
    { name: "Docker & Docker Compose", level: 76, icon: "docker" },
    { name: "JUnit 5 / Mockito", level: 78, icon: "test" },
    { name: "Postman", level: 84, icon: "postman" },
    { name: "GitHub Actions (CI/CD)", level: 70, icon: "actions" },
    { name: "Swagger / OpenAPI", level: 78, icon: "swagger" },
    { name: "Maven", level: 80, icon: "maven" },
  ],
  frontend: [
    { name: "React.js", level: 76, icon: "react" },
    { name: "HTML5 / CSS3", level: 80, icon: "html" },
    { name: "JavaScript", level: 74, icon: "js" },
  ],
  productivity: [
    { name: "Microsoft Excel (Pivot Tables, Charts)", level: 82, icon: "excel" },
    { name: "Microsoft Word", level: 80, icon: "word" },
    { name: "PowerPoint", level: 80, icon: "ppt" },
  ],
};

export const experience = [
  {
    id: 1,
    role: "Java Full-Stack Developer Intern",
    company: "Tekcogent Solutions Pvt. Ltd",
    location: "Chennai",
    period: "Feb 2026 – May 2026",
    highlights: [
      "Developed and deployed full-stack CRUD applications using Spring Boot, React.js, and MySQL, structuring backend services around MVC architecture for maintainability and scalability",
      "Engineered JWT-based authentication and role-based authorization to secure REST API endpoints and enforce access control across application modules",
      "Built centralized exception-handling and input-validation layers to standardize API error responses and improve overall service reliability",
      "Collaborated in an Agile development environment using Git for version control, code reviews, and feature integration",
    ],
    tech: ["Spring Boot", "React.js", "MySQL", "JWT", "Git"],
  },
];

export const projects = [
  {
    id: 1,
    title: "Inventory Management System",
    subtitle: "Spring Boot · PostgreSQL · Docker · JUnit 5",
    description:
      "A layered Controller–Service–Repository inventory platform built with Spring Boot, Hibernate, and PostgreSQL, exposing 15+ REST APIs for CRUD operations, pagination, filtering, and stock tracking. Secured with JWT authentication and role-based authorization, containerized with Docker, and deployed on Render.",
    highlights: [
      "Built a layered Controller–Service–Repository architecture with Spring Boot, Hibernate, and PostgreSQL to develop 15+ REST APIs, including CRUD operations, pagination, filtering, and stock tracking",
      "Implemented DTO-based validation, centralized exception handling, and audit logging for reliable request processing and a complete history of inventory updates",
      "Integrated JWT authentication and role-based authorization to secure REST APIs and restrict access based on user roles",
      "Containerized the application with Docker and Docker Compose, enabling one-command setup across development environments",
      "Documented REST APIs using Swagger/OpenAPI and deployed the application on Render with PostgreSQL for cloud-based access and testing",
    ],
    tech: ["Java", "Spring Boot", "PostgreSQL", "Hibernate", "REST APIs", "JWT", "Docker", "Swagger"],
    github: "https://github.com/bharathgp/inventory-management-system",
    live: "https://inventory-management-system-c84f.onrender.com",
    year: "2026",
    status: "Completed",
    featured: true,
  },
  {
    id: 2,
    title: "Sorting Visualizer",
    subtitle: "React.js · JavaScript · DSA",
    description:
      "An interactive React.js visualizer for five sorting algorithms — Bubble, Selection, Merge, Insertion, and Quick Sort — rendering real-time animations to show how each algorithm reorders elements step by step.",
    highlights: [
      "Built real-time animated visualizations for five sorting algorithms: Bubble, Selection, Merge, Insertion, and Quick Sort",
      "Designed a reusable Hook-based component architecture with centralized state management to control array size, animation speed, and algorithm switching",
    ],
    tech: ["React.js", "JavaScript", "DSA"],
    github: "https://github.com/bharathgp/sorting-visualizer",
    live: null,
    year: "2025",
    status: "Completed",
    featured: true,
  },
];

export const education = [
  {
    id: 1,
    degree: "Bachelor of Engineering",
    field: "Information Science Engineering",
    institution: "Jawaharlal Nehru New College of Engineering (JNNCE)",
    location: "Shivamogga, Karnataka",
    period: "2022 – 2026",
    score: "7.75 / 10.0",
    scoreLabel: "CGPA",
    status: "Final Year",
    highlights: [
      "Strong focus on core CS fundamentals, algorithms, and backend system design",
      "Built production-grade Spring Boot projects as part of internship and personal learning",
    ],
  },
  {
    id: 2,
    degree: "Diploma",
    field: "Tool & Die Making",
    institution: "Government Tool Room & Training Centre (GTTC)",
    location: "Karnataka",
    period: "2020 – 2023",
    score: "84.04%",
    scoreLabel: "Score",
    status: "Completed",
    highlights: [],
  },
  {
    id: 3,
    degree: "SSLC",
    field: "Karnataka State Board",
    institution: "Bharatiya Vidya Samsthe",
    location: "Honnali, Karnataka",
    period: "2010 – 2020",
    score: "71.0%",
    scoreLabel: "Score",
    status: "Completed",
    highlights: [],
  },
];

export const certifications = [
  {
    id: 1,
    title: "Data Structures and Algorithms Using Java",
    issuer: "NPTEL",
    year: "2025",
    credentialUrl: "#",
    icon: "nptel",
  },
  {
    id: 2,
    title: "The Complete SQL Bootcamp",
    issuer: "Udemy",
    year: "2025",
    credentialUrl: "#",
    icon: "udemy",
  },
];

export const achievements = [
  {
    id: 1,
    metric: "150+",
    unit: "Problems",
    label: "LeetCode Solved",
    description: "Solved 150+ LeetCode problems in Data Structures & Algorithms",
    icon: "dsa",
  },
  {
    id: 2,
    metric: "15+",
    unit: "APIs",
    label: "REST Endpoints Built",
    description: "Designed and exposed production-grade RESTful API endpoints across projects",
    icon: "api",
  },
  {
    id: 3,
    metric: "7.75",
    unit: "CGPA",
    label: "Academic Performance",
    description: "B.E. in Information Science Engineering, JNNCE Shivamogga",
    icon: "academic",
  },
  {
    id: 4,
    metric: "2",
    unit: "Certs",
    label: "NPTEL & Udemy Certified",
    description: "Certified in Java DSA (NPTEL) and SQL (Udemy)",
    icon: "cert",
  },
];

export const strengths = [
  "Hands-on experience building REST APIs and full-stack applications with Spring Boot, React.js, MySQL, and Oracle SQL",
  "Solid foundation in OOP, Data Structures & Algorithms, with 150+ LeetCode problems solved",
  "Security-aware API design: JWT authentication, role-based access control, centralized exception handling",
  "Containerization and DevOps discipline: Docker, Docker Compose, Git, GitHub Actions",
  "Collaborative Agile development experience with version control and code reviews",
  "Proficient in Microsoft Excel, Word, and PowerPoint for data analysis, reporting, and documentation",
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];
