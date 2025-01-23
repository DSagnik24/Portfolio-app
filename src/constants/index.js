import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications.I have honed my skills in front-end technologies like React and Vanilla, as well as back-end technologies like SpringBoot, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including Java SpringBoot ,React, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: " AICARE 2025",
    image: project1,
    link: "https://aicare.uem.edu.in/",
    description:
      "A premier conference co-sponsored by IEEE.Focused on Artificial Intelligence and computational advancements in engineering.",
    technologies: ["HTML", "CSS", "Tailwind CSS", "Node.js", "Microsoft CMT"],
  },
  {
    title: "EmployeeR",
    image: project2,
    link: "https://github.com/DSagnik24/Employee_Storage",
    description:
      " A web application to manage employee records with full CRUD functionality.Spring Boot for backend, integrated with MySQL for data storage, and tested endpoints using Postman.",
    technologies: ["ReactJs", "Java SpringBoot", "MySql", "Postman"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    link: "https://portfolio-sagnikdutta.vercel.app/",
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap","Framer Motion" ],
  },
  {
    title: "Stream-Ninja",
    image: project4,
    link: "https://github.com/DSagnik24/Stream-Ninja",
    description:
      "Designed and implemented a video streaming and uploading application.Engineered a robust backend architecture using Spring Boot, ensuring seamless user experience under high traffic conditions.",
    technologies: ["ReactJs", "Java SpringBoot", "MOngoDB", "Postman"],
  },
];

export const CONTACT = {
  address: "KOlkata ,West Bengal",
  phoneNo: "+91 8240251268",
  email: "sagnikduttaofficial18@gmail.com",
};
