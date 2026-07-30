export type NavLink = { label: string; href: string };

export type Skill = { name: string; icon: string; level: number };
export type SkillGroup = { category: string; items: Skill[] };

export type Project = {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  accent: "purple" | "orange" | "mixed";
};

export type SocialLink = { name: string; url: string; icon: string };

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const typewriterRoles = [
  "Self-Taught Developer",
  "Web & UI Builder",
  "Open Source Explorer",
  "Passionate Learner",
  "Code & Tech Enthusiast",
];

export const bio = {
  name: "KHiroVerse",
  tagline: "Self-Taught Developer",
  intro:
    "Hey there! I'm a 14-year-old self-taught dev who loves building fun, fast web apps. I spend my time exploring React, TypeScript, and turning random ideas into code.",
  funFacts: [
    "Learned to code completely on my own",
    "Refactors code just for the fun of it",
    "Breaks things first, reads docs later",
    "Loves dark mode & neon glow aesthetics"
  ],
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Comfortable",
    items: [
      { name: "HTML", icon: "html", level: 92 },
      { name: "Tailwind", icon: "typescript", level: 88 },
      { name: "JavaScript", icon: "javascript", level: 82 },
      { name: "REACT", icon: "react", level: 95 },
    ],
  },
  {
    category: "Exploring / Learning",
    items: [
      { name: "Node.js", icon: "server", level: 85 },
      { name: "Express", icon: "server", level: 80 },
      { name: "TypeScript", icon: "typescript", level: 78 },
      { name: "Vite", icon: "vite", level: 72 },
    ],
  },
  {
    category: "Tools I Use",
    items: [
      { name: "Git", icon: "git-branch", level: 90 },
      { name: "VS Code", icon: "code-block", level: 70 },
      { name: "Figma", icon: "palette", level: 80 },
      { name: "GitHub", icon: "Github", level: 92 },
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Task App",
    description:
      "A task manager app with a clean, intuitive interface.",
    tags: ["React", "TypeScript", "CSS", "Vite"],
    github: "https://github.com/KHiroVerse/KHiroVerse-Task-App",
    demo: "https://khiroverse-task-app.vercel.app/",
    accent: "purple",
  },
  {
    title: "Friend Memory App",
    description:
      "A Friend Memory App with a clean, intuitive interface.",
    tags: ["Node.js", "Express", "OpenAI"], 
    github: "https://github.com/KHiroVerse/KFMA",
    demo: "https://kfma.vercel.app/",
    accent: "orange",
  },
  {
    title: "WeatherDash",
    description:
      "A weather dashboard app with a clean, intuitive interface.",
    tags: ["Vite", "React", "Tailwind"],
    github: "https://github.com/KHiroVerse/Weather-Dash",
    demo: "https://weatherdash-khiroverse.vercel.app/",
    accent: "mixed",
  },
];

export const EMAIL_ADDRESS = "khiroverse@gmail.com";

export const socials: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/KHiroVerse", icon: "github" },
  { name: "Discord", url: "https://discord.com/users/khiroverse", icon: "discord" },
  { name: "YouTube", url: "https://youtube.com/@KHiroVerse", icon: "youtube" },
  { name: "Email", url: `mailto:${EMAIL_ADDRESS}`, icon: "mail" },
];

export const footerQuote =
  '// "First, solve the problem. Then, write the code." — some wise dev on the internet';
