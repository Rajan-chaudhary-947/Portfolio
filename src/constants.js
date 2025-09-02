// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import ejsLogo from './assets/tech_logo/ejs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import excaliLogo from './assets/tech_logo/excalidraw.png';
import softwareLogo from './assets/tech_logo/software.png';
import cnLogo from './assets/tech_logo/cn.png';
import zustandLogo from './assets/tech_logo/zustand.png';

// Experience Section Logo's


// Education Section Logo's
import iimtLogo from './assets/edu_logo/iimt2.png';
import schLogo from './assets/edu_logo/school.png';

// Project Section Logo's
import communityLogo from './assets/project_logo/cummunity.png';
import chatAppLogo from './assets/project_logo/chatApp.png';
import removebgLogo from './assets/project_logo/remove_bg.png';
import weatherAppLogo from './assets/project_logo/weatherApp.png';
import airLogo from './assets/project_logo/airbnb.png';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'EJS', logo: ejsLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Zustand', logo: zustandLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      
    ],
  },
  {
    title: 'Backend',
    skills: [
      
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'Springboot', logo: springbootLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Excalidraw', logo: excaliLogo },
    ],
  },
  {
    title: 'Coursework ',
    skills: [
      { name: 'Data Structures & Algorithms', logo: javaLogo },
      { name: 'Object Oriented Programming', logo: javaLogo },
      { name: 'Database Management', logo: mongodbLogo },
      { name: 'Web Development', logo: reactjsLogo },
      { name: 'Computer Networks ', logo: cnLogo },
      { name: 'Operating Systems', logo: cnLogo },
      { name: 'Software Engineering', logo: softwareLogo },
      { name: 'Internet of Things', logo: softwareLogo },
    ],
  }
];

export const education = [
  {
    id: 0,
    img: iimtLogo,
    school: "IIMT University, Meerut",
    date: "Sept 2022 - July 2026",
    grade: "7.5 SGPA*",
    desc: "I'm a student of Bachelor's degree (B.Tech.) in Computer Science IIMT University, Meerut. During my time at IIMT, I gain a strong foundation in programming, software development, and computer science principles. I study courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participate in various workshops and technical events, which enhance my skills and knowledge. My experience at IIMT University is instrumental in shaping my technical abilities and professional growth.",
    degree: "Bachelor of Technology - B.Tech CSE",
  },
  {
    id: 1,
    img: schLogo,
    school: "MRD Janta Inter College, Anandnagar Maharajganj",
    date: "Apr 2018 - Mar 2020",
    grade: "50.2%",
    desc: "I completed my Intermediate education from MRD Janta Inter College, Anandnagar Maharajganj, under the UP Board, where I studied Physics, Chemistry, and Mathematics (PCM).",
    degree: "Intermediate - PCM",
  },
  {
    id: 2,
    img: schLogo,
    school: "MR AKG Inter College, Dhani Bazar Maharajganj ",
    date: "Apr 2017 - Mar 2018",
    grade: "74.5%",
    desc: "I completed my high schooling from MR AKG Inter College, Dhani Bazar Maharajganj, under the UP Board, where I studied Mathematics, Science, English and Hindi with Social Science.",
    degree: "High School - PCM ",
  },
];


export const course = [
  {
    id: 0,
    title: "Programming in Java",
    org: "IIT, Kharagpur",
    description:
      "A comprehensive course covering Java programming fundamentals, object-oriented concepts, Applet programming and practical applications using AWT & Swing.",
    date: "Jan 2024 - Apr 2024",
  },
  {
    id: 1,
    title: "Theory of Computation",
    org: "IIT, Hyderabad",
    description:
      "An advanced course exploring the theoretical foundations of computation, including automata theory, formal languages, and computational complexity.",
    date: "Jan 2024 - Apr 2024",
  },
  {
    id: 2,
    title: "Introduction to internet of things",
    org: "IIT, Kharagpur",
    description:
      "A foundational course on IoT concepts, architectures, protocols, and applications, focusing on the integration of physical devices with the internet.",
    date: "Jul 2023 - Oct 2023",
  },
  {
    id: 3,
    title: "Data Structures and Algorithms using Java",
    org: "Coding Ninjas",
    description:
      "A Well-structured course that covers essential data structures and algorithms using Java, including arrays, linked lists, trees, graphs, DP and sorting algorithms.",
    date: "Aug 2024 - Sep 2024",
  },
  {
    id: 4,
    title: "Basics of Java and OOPs with Java",
    org: "Coding Ninjas",
    description:
      "A beginner-friendly course introducing Java programming and object-oriented concepts, covering syntax, data types, control structures, and OOP principles.",
    date: "Jan 2024 - Mar 2024",
  }
];
  
export const projects = [
  {
    id: 0,
    title: "Student Alumini Community",
    description:
      "A full-stack web app to connect students with alumni for networking, updates, resource and knowledge sharing. including features like profile creation, event management, and discussion forums.",
    image: communityLogo,
  tags: ["HTML", "Tailwind CSS", "JavaScript", "React JS", "Node.js", "Express", "MongoDB", "Zustand", "Socket.io", "JWT"],
    github: "TBD soon",
    webapp: "TBD soon",
  },
  {
    id: 1,
    title: "Chat App",
    description:
      "A full-stack real-time chat application that enables users to create accounts, log in securely using JWT authentication, and exchange instant messages. Built using the MERN stack with Socket.io for real-time communication, the app features responsive design, persistent chat history, and modern UI/UX.",
    image: chatAppLogo,
    tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript", "Zustand", "Socket.io", "JWT"],
    github: "TBD soon",
    webapp: "TBD soon",
  },
  {
    id: 2,
    title: "Airbnb Clone",
    description:
      "Inspired by Airbnb's layout, Designed with a familiar user interface with a personal touch. Users can perform CRUD operations on property listings managing fields such as title, price, image, location and description. ",
    image: airLogo,
    tags: [ "MongoDB", "Express", "React JS", "NodeJS", "JavaScript", "BootStrap", "EJS", "JWT", "Socket.io"],
    github: "TBD soon",
    webapp: "TBD soon",
  },
  {
    id: 3,
    title: "Image Background Remover",
    description:
      "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
    image: removebgLogo,
    tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
    github: "TBD soon",
    webapp: "TBD soon",
  },
  {
    id: 4,
    title: "Weather App",
    description:
      "A simple and efficient web application that fetches and shows the current weather for any city worldwide, including temperature, humidity, wind speed, and conditions like sunny, cloudy, or rainy",
    image: weatherAppLogo,
    tags: ["HTML", "CSS", "JavaScript", "API"],
    github: "TBD soon",
    webapp: "TBD soon",
  },    
];  
