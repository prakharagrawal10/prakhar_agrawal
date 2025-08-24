

"use client";

"use client";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { projects as myProjects } from "../../data/site";
import "./projects.css";

function Card({ i, title, description, url, color, progress, range, targetScale, githubLink, liveLink }) {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);
  return (
    <div ref={container} className="project-container">
      <motion.div
        style={{ scale, top: `calc(-5vh + ${i * 25}px)`, transform: `scale(var(--project-scale, 1))`, marginTop: "var(--project-margin, 0)" }}
        className="project-card"
        whileHover={{ y: -8, transition: { duration: 0.3 } }}
      >
        <div className="project-image-section">
          <img
            src={url}
            alt={title}
            className="project-image"
            style={{ backgroundColor: color }}
          />
          <div
            className="project-overlay"
            style={{ backgroundColor: color, mixBlendMode: "overlay" }}
          ></div>
          <div className="project-number">Project {i + 1}</div>
        </div>
        <div className="project-content-section">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
              <div style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: color }}></div>
              <div style={{ height: 1, width: 48, background: "#52525b" }}></div>
            </div>
            <h2 className="project-title">{title}</h2>
            <p className="project-desc">{description}</p>
          </div>
          <div className="project-links">
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link code"
                style={{ color }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                <span>Code</span>
              </a>
            )}
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link live"
                style={{ color }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                <span>Live</span>
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({ target: container, offset: ["start start", "end end"] });
  const colorList = ["#60a5fa", "#a78bfa", "#34d399", "#f472b6", "#fbbf24", "#38bdf8"];
  return (
    <main className="projects-main" ref={container}>
      <section className="projects-section">
        {myProjects.map((project, i) => {
          const targetScale = 1 - (myProjects.length - i) * 0.05;
          const color = colorList[i % colorList.length];
          const url = project.image.startsWith("/") ? project.image : `/project-screenshots/${project.image}`;
          return (
            <Card
              key={`p_${i}`}
              i={i}
              url={url}
              title={project.title}
              color={color}
              description={project.description}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
              githubLink={project.github}
              liveLink={project.demo}
            />
          );
        })}
      </section>
    </main>
  );
}

