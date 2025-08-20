// All portfolio content for Prakhar Agrawal
// Fill in your real data here

export const profile = {
  name: "Prakhar Agrawal",
  tagline: "Full-Stack Developer | AI/ML Enthusiast",
  bio: "Passionate about building impactful products with modern web technologies and AI. CGPA: 9.2, Specialization: Computer Science & AI.",
  avatar: "/avatar.png",
  resume: "/resume.pdf",
  github: "https://github.com/prakhargarwal",
  linkedin: "https://linkedin.com/in/prakhargarwal"
};

export const skills = [
  { name: "TypeScript", icon: "/skills/typescript.svg" },
  { name: "React", icon: "/skills/react.svg" },
  { name: "Next.js", icon: "/skills/nextjs.svg" },
  { name: "Node.js", icon: "/skills/nodejs.svg" },
  { name: "Python", icon: "/skills/python.svg" },
  { name: "TensorFlow", icon: "/skills/tensorflow.svg" },
  { name: "Framer Motion", icon: "/skills/framer.svg" },
  { name: "PostgreSQL", icon: "/skills/postgresql.svg" },
  { name: "Docker", icon: "/skills/docker.svg" }
];

export const projects = [
  {
    title: "AI Chatbot Platform",
    description: "Conversational AI platform for customer support with NLP and analytics.",
    tech: ["Next.js", "TypeScript", "Python", "TensorFlow"],
    github: "https://github.com/prakhargarwal/ai-chatbot",
    demo: "https://ai-chatbot-demo.com",
    image: "/project-screenshots/ai-chatbot.png"
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio with modern animations and glassmorphism UI.",
    tech: ["Next.js", "Framer Motion", "Shadcn/UI"],
    github: "https://github.com/prakhargarwal/portfolio",
    demo: "https://prakhar.dev",
    image: "/project-screenshots/portfolio.png"
  }
];

export const experience = [
  {
    company: "TechCorp",
    role: "Software Engineer Intern",
    period: "May 2024 - July 2024",
    description: "Worked on scalable backend APIs and integrated AI models for analytics.",
    icon: "/companies/techcorp.svg"
  },
  {
    company: "OpenAI Research",
    role: "ML Research Intern",
    period: "Jan 2024 - Apr 2024",
    description: "Developed deep learning models for NLP tasks and published 2 papers.",
    icon: "/companies/openai.svg"
  }
];

export const stats = {
  projects: 12,
  techs: 18,
  experience: 3
};
