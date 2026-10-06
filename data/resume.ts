import type { LineIconName, SolidIconName } from "@/components/icon-data";

// All resume content lives here. Edit this file to update the site.
export const resume = {
  name: "Tinh (Tony) Phan",
  titles: ["Senior Full-Stack Engineer", "AI Product Engineer"],
  tags: ["React", "Next.js", "Node.js", "Golang", "PostgreSQL", "MongoDB", "AWS", "AI/LLM"],
  intro:
    "8+ years of experience building and shipping scalable web, mobile, desktop, and AI-powered products. I specialize in full-stack development, cloud-native architecture, and AI integration — turning ideas into reliable, maintainable, and high-impact software.",
  photo: { src: "/photo.jpg", alt: "Portrait of Tinh Phan" },

  contact: [
    { icon: "envelope", label: "tonypavol@gmail.com", href: "mailto:tonypavol@gmail.com", copy: "tonypavol@gmail.com" },
    { icon: "locationDot", label: "Da Nang, Vietnam (UTC+7) · Open to remote" },
    { icon: "linkedin", label: "linkedin.com/in/tonypavol", href: "https://linkedin.com/in/tonypavol" },
    { icon: "github", label: "github.com/tonypavol", href: "https://github.com/tonypavol" },
    { icon: "globe", label: "https://tonypavol.vercel.app", href: "https://tonypavol.vercel.app" },
  ] satisfies { icon: SolidIconName; label: string; href?: string; copy?: string }[],

  skills: [
    { group: "Frontend", items: ["React, Next.js, TypeScript", "JavaScript, React Native", "Redux", "Responsive UI / Design Systems"] },
    { group: "Backend", items: ["Node.js, NestJS, Express.js", "Golang, Python", "REST APIs, GraphQL, Webhooks", "Microservices, Event-driven", "Background jobs, Distributed systems"] },
    { group: "Databases", items: ["PostgreSQL, MongoDB", "Redis, DynamoDB", "Vector DB (Pinecone, Weaviate, FAISS)", "Database design & optimization"] },
    { group: "Cloud & Infrastructure", items: ["AWS, Docker, CI/CD", "Serverless, Lambda, EventBridge", "API Gateway, SQS", "Observability & monitoring"] },
    { group: "AI / LLM", items: ["Python, OpenAI & Claude APIs, LangChain, LlamaIndex", "RAG, Embeddings, Semantic Search", "Hugging Face, Vector DB", "AI Agents, MCP Servers, Prompt Engineering"] },
    { group: "Tools & Others", items: ["Git, GitHub, Jira, Notion", "Claude Code, VS Code, Cursor", "Electron (desktop apps)", "Linux, Bash"] },
  ],

  languages: [
    { name: "English", level: "Fluent" },
    { name: "Vietnamese", level: "Fluent" },
  ],

  summary: [
    "Senior Full-Stack Engineer and former Founder & CTO with 8+ years of experience taking web, mobile, desktop, and AI-powered products from concept to production. I work across TypeScript, Go and AWS, and ship LLM features into real business workflows.",
    "I own features end-to-end — from architecture to release — and use AI coding agents (Claude Code, Cursor) daily to design, review and ship faster, working closely with product and design teams.",
  ],

  experience: [
    {
      company: "ipaymy Technologies Pte. Ltd", period: "2021 – Present", role: "Senior Software Engineer",
      points: [
        "Own full-stack features end-to-end across frontend, backend, APIs and AWS infrastructure for a payments platform.",
        "Build and scale services with TypeScript, React/Next.js, Golang and PostgreSQL on AWS.",
        "Raised system reliability through stricter API design, validation, error handling, observability and automated testing.",
        "Use AI coding agents (Claude Code, OpenAI) across development, testing, debugging, documentation and code review to ship faster.",
        "Partner with product and engineering stakeholders to turn requirements into practical technical solutions.",
      ],
    },
    {
      company: "Snug Pte. Ltd", period: "2023 – 2025", role: "Full-Stack Engineer",
      points: [
        "Built an AI-powered scoring pipeline that analyzes applicant data and ranks property applications.",
        "Implemented the backend scoring services in Golang on AWS with PostgreSQL and asynchronous processing.",
        "Built the React frontend that shows application status and scoring results to users.",
        "Contributed to Snug's AI agent — an MCP server that connects Snug with AI assistants to power smart search and surface the best results for users.",
      ],
    },
    {
      company: "YSM", period: "2021 – 2023", role: "Founder & CTO",
      points: [
        "Founded YSM, a CI/CD platform that lets DevOps engineers deploy products and services to any VPS.",
        "Took the product from idea to production — product design in Figma, architecture, and build.",
        "Designed the microservice architecture for the whole system (Next.js, NestJS, MongoDB, Python, Shell).",
      ],
    },
    {
      company: "TaxiLoyal", period: "2020 – 2021", role: "Senior Developer",
      points: [
        "Built the platform from scratch: web app, admin portal, customer app and driver app.",
        "Delivered the frontend, mobile apps and backend APIs with React, React Native, Node.js and MongoDB.",
        "Designed the database models and backend workflows.",
      ],
    },
    {
      company: "BlinkFreight", period: "2019 – 2020", role: "Full-Stack Engineer",
      points: [
        "Developed an ocean freight booking platform for businesses and individuals.",
        "Built complex booking and business workflows with React, Redux, Node.js, Express, TypeScript and MongoDB.",
        "Improved maintainability with reusable components and a consistent architecture.",
      ],
    },
    {
      company: "PSCD Co., LTD", period: "2018 – 2019", role: "Full Stack Developer",
      points: [
        "Built and maintained a centralized UI component library used across multiple products.",
        "Developed reusable components with React, Redux-Saga, Webpack and Micro Frontends.",
        "Helped establish frontend architecture and development standards.",
        "Built a real-time backend for a game with Node.js and Socket.IO.",
      ],
    },
    {
      company: "AI Email Client", period: "Private project", role: "Desktop App Developer",
      points: [
        "Built a cross-platform desktop email client with Electron and Node.js that lets users manage multiple email accounts in one app.",
        "Added AI-powered smart sorting using the OpenAI and Claude APIs to organize incoming mail automatically.",
      ],
    },
  ],

  education: [
    { degree: "Bachelor of Software Engineering", school: "Da Nang University of Science and Technology, Vietnam", period: "2014 – 2019", gpa: "3.4 / 4.0" },
  ],

  achievements: [
    { icon: "rocket", text: "Built 10+ production products from scratch (web + mobile + backend)" },
    { icon: "brain", text: "Integrated AI/LLM for real business workflows (RAG, scoring, automation)" },
    { icon: "cloud", text: "Experienced in cloud-native & event-driven architectures" },
    { icon: "settings", text: "Founded YSM and took it from idea to production as CTO" },
  ] satisfies { icon: LineIconName; text: string }[],
};
