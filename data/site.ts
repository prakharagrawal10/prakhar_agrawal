// All portfolio content for Prakhar Agrawal
// Fill in your real data here

export const profile = {
  name: "Prakhar Agrawal",
  tagline: "Full-Stack Developer | AI/ML Enthusiast",
  bio: "Computer Science and Engineering student with hands-on experience in AI/ML and full-stack web development. Eager to contribute technical skills and grow in a dynamic, innovation-driven environment.",
  avatar: "/avatar.png",
  resume: "/resume.pdf",
  github: "https://github.com/prakhargarwal",
  linkedin: "https://linkedin.com/in/prakhargarwal",
  email: "prakhar.agra10@gmail.com",
  phone: "+91-9019791569"
};

export const skills = [
  { name: "Python", icon: "/skills/python.svg" },
  { name: "C", icon: "/skills/c.svg" },
  { name: "C++", icon: "/skills/cpp.svg" },
  { name: "Java", icon: "/skills/java.svg" },
  { name: "JavaScript", icon: "/skills/javascript.svg" },
  { name: "TypeScript", icon: "/skills/typescript.svg" },
  { name: "React.js", icon: "/skills/react.svg" },
  { name: "Node.js", icon: "/skills/nodejs.svg" },
  { name: "Express.js", icon: "/skills/express.svg" },
  { name: "MongoDB", icon: "/skills/mongodb.svg" },
  { name: "MySQL", icon: "/skills/mysql.svg" },
  { name: "Redis", icon: "/skills/redis.svg" },
  { name: "TensorFlow", icon: "/skills/tensorflow.svg" },
  { name: "OpenCV", icon: "/skills/opencv.svg" },
  { name: "Pandas", icon: "/skills/pandas.svg" },
  { name: "Matplotlib", icon: "/skills/matplotlib.svg" },
  { name: "Keras", icon: "/skills/keras.svg" },
  { name: "Flask", icon: "/skills/flask.svg" },
  { name: "HTML", icon: "/skills/html.svg" },
  { name: "CSS", icon: "/skills/css.svg" }
];

export const projects = [
  {
    title: "Movie Reservation System",
    description: "Developed a full-stack movie booking platform with REST APIs using Node.js and Express; implemented JWT and Clerk for secure authentication. Integrated Stripe for dynamic payment processing and used Redis for session caching and real-time seat locking. Dockerized the backend for seamless deployment and followed clean architecture principles to ensure modular, maintainable code.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Redis", "Stripe", "Clerk", "Docker"],
    github: "",
    demo: "",
    image: "/project-screenshots/movie-reservation.png"
  },
  {
    title: "FarmWise - AI-Powered Soil Nutrient Predictor",
    description: "Developed a web-based ML application that provides personalized predictions of soil nutrient to assist farmers in optimizing crop yields. Trained models using RandomForestRegressor and DecisionTreeClassifier, achieving a prediction accuracy of 92% on agricultural data. Built the frontend with HTML/JS and integrated it with a Flask backend serving TensorFlow models in real time for seamless user interaction.",
    tech: ["Python", "Flask", "TensorFlow", "HTML", "CSS", "JavaScript"],
    github: "",
    demo: "",
    image: "/project-screenshots/farmwise.png"
  },
  {
    title: "AI-ML Based Real-time Age and Gender Prediction",
    description: "Built a real-time computer vision system to predict age and gender from live camera feeds using a custom-trained CNN. Trained the model on a dataset of 24,000+ labeled images, optimizing performance using Mean Absolute Error (MAE) as the loss function. Integrated with OpenCV for live video processing and deployed the model using Python scripts for real-time inference.",
    tech: ["Python", "NumPy", "Pandas", "Matplotlib", "TensorFlow", "Keras", "OpenCV"],
    github: "",
    demo: "",
    image: "/project-screenshots/age-gender.png"
  }
];

export const experience = [
  {
    company: "Accenture",
    role: "Advanced Application Engineering Intern",
    period: "May 2025 – July 2025",
    location: "Bangalore",
    description: [
      "Contributed to the Standard Chartered Bank (SCB) Phase 2 Implementation project, ensuring accurate and consistent data handling.",
      "Used SQL to extract, validate, and analyze large financial datasets.",
      "Performed data profiling to assess data quality and identify anomalies and mismatches.",
      "Enhanced teamwork and communication skills through collaboration with experienced professionals."
    ],
    icon: "/companies/accenture.svg"
  },
  {
    company: "Radisys",
    role: "Summer Intern",
    period: "June 2024 – July 2024",
    location: "Bangalore",
    description: [
      "Acquired theoretical basic knowledge of overall 5G RAN.",
      "Gained a deeper understanding of the 5G Packet Data Convergence Protocol (PDCP) and successfully submitted a project presentation in college."
    ],
    icon: "/companies/radisys.svg"
  }
];

export const education = [
  {
    school: "Vellore Institute of Technology",
    degree: "Bachelor of Technology, Computer Science Core",
    cgpa: 8.86,
    year: "2022 – 2026"
  },
  {
    school: "DPS, Bangalore East",
    degree: "CBSE XII",
    percentage: 91,
    year: "2022"
  },
  {
    school: "Narayana Olympiad School, Bangalore",
    degree: "CBSE X",
    percentage: 93,
    year: "2020"
  }
];

export const stats = {
  projects: 3,
  techs: 20,
  experience: 2
};

export const softSkills = [
  "Communication",
  "Teamwork",
  "Problem Solving",
  "Flexibility"
];
