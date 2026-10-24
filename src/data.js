// Edit this file to update the content shown on your portfolio.
// Replace placeholder URLs and add only information you can verify.

export const profile = {
  name: "Khushi Singh",
  role: "ECE Avionics Student",
  tagline: "Curious about hardware, avionics, and the science behind flight.",
  location: "India",
  photo: "/Profilepic.png",
  email: "janghukhushi31@gmail.com", // TODO: replace with your professional email
  linkedin: "https://www.linkedin.com/in/khushi-singh-96194737b/",
  github: "https://github.com/janghukhushi31-spec", // TODO: replace with your GitHub profile
  resume: "/resume.pdf",
  about: "I’m a B.Tech student specialising in Electronics and Communication Engineering (Avionics), interested in aerospace systems, embedded hardware, and practical engineering projects. I enjoy learning by building, documenting experiments, and collaborating with people who are curious about how things work."
};

export const projects = [
  {
    number: "01",
    title: "Low-Cost Radiosonde System",
    category: "Aerospace · Embedded Systems",
    summary: "A student project exploring a budget-friendly atmospheric data collection system for balloon-based weather observations.",
    details: "The proposed design brings together an ESP32, LoRa communication, environmental sensing, and GPS to explore the collection and transmission of atmospheric measurements.",
    tags: ["ESP32", "LoRa / SX1278", "BME280", "NEO-6M GPS"],
    status: "In progress",
    link: ""
  },
  {
    number: "02",
    title: "RC Aircraft Design & Build",
    category: "Aircraft · CAD · Prototyping",
    summary: "Exploring fixed-wing RC aircraft design, airframe geometry, material choices, and component integration.",
    details: "The work includes learning about aircraft configuration and CAD workflows, with attention to the relationship between design, stability, propulsion, and fabrication.",
    tags: ["Aircraft fundamentals", "CAD", "Foam airframe", "Prototyping"],
    status: "Learning / development",
    link: ""
  },
  {
    number: "03",
    title: "Arduino & Embedded Prototyping",
    category: "Electronics · Hardware",
    summary: "Hands-on learning through Arduino basics, circuit concepts, and simulation-based project work.",
    details: "A foundation in microcontroller-based prototyping, connecting sensors and components, and testing ideas through structured experiments.",
    tags: ["Arduino", "Electronics", "Simulation", "Debugging"],
    status: "Learning / development",
    link: ""
  }
];

export const certifications = [
  {
    name: "Arduino Beginners Course",
    issuer: "Arduino",
    description:
      "Introductory learning in Arduino and microcontroller fundamentals.",
    date: "Add completion date",
    credentialUrl: "/Arduino IDE.pdf",
  },
  {
    name: "DevFest Jammu",
    issuer: "Google Developer Groups / Event Organizer",
    description:
      "Participation in DevFest Jammu, exploring technology and developer communities.",
    date: "Add event date",
    credentialUrl: "/Devfest.pdf",
  },
  {
    name: "Add Your Next Certificate",
    issuer: "Issuing Organization",
    description:
      "Briefly describe the skills or knowledge gained.",
    date: "2026",
    credentialUrl: "/Nptel.pdf",
  },
  {
    name: "Add Another Certificate",
    issuer: "Issuing Organization",
    description:
      "Briefly describe the course or achievement.",
    date: "2026",
    credentialUrl: "/internship.pdf",
  },
  {
  name: "MATLAB Onramp",
  issuer: "MathWorks",
  description:
    "Learned MATLAB fundamentals, including commands, variables, arrays, and basic data analysis.",
  date: "Add completion date",
  credentialUrl: "/MATLAB.pdf",
},
{
  name: "Machine Learning Onramp",
  issuer: "MathWorks",
  description:
    "Introduction to machine learning concepts and workflows using MATLAB.",
  date: "Add completion date",
  credentialUrl: "/MLonramp.pdf",
},
];

export const experiences = [
  {
    type: "Internship opportunities",
    organisation: "Open to aerospace, avionics, embedded systems, and electronics roles",
    period: "Seeking an opportunity",
    description: "Interested in practical learning, research exposure, hardware prototyping, testing, and engineering documentation.",
    points: [
      "Preferred areas: aerospace research, avionics, embedded systems, and electronics",
      "Open to remote, on-site, or hybrid opportunities that fit student eligibility"
    ]
  }
];

export const skills = [
  { name: "Embedded Systems", group: "Hardware" },
  { name: "Arduino", group: "Hardware" },
  { name: "ESP32", group: "Hardware" },
  { name: "LoRa Communication", group: "Hardware" },
  { name: "Electronics Fundamentals", group: "Hardware" },
  { name: "C / C++", group: "Programming" },
  { name: "Python", group: "Programming" },
  { name: "CAD & 3D Design", group: "Design" },
  { name: "Technical Documentation", group: "Professional" },
  { name: "Presentation & Teamwork", group: "Professional" }
];

export const highlights = [
  { value: "ECE", label: "Avionics focus" },
  { value: "Build", label: "Learn by doing" },
  { value: "Space", label: "Long-term interest" }
];