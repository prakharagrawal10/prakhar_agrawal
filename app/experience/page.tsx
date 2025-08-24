"use client";

import Image from "next/image";


import { experience } from "../../data/site";
import { motion } from "framer-motion";
const MotionH1 = motion("h1");
const MotionDiv = motion("div");

type Experience = {
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string[] | string;
  icon?: string;
};

export default function ExperiencePage() {
  return (
    <main style={{ minHeight: "80vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "40px 0" }}>
      <MotionH1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{
          fontSize: "2.3rem", fontWeight: 800, color: "#fff", marginBottom: 32,
          letterSpacing: "-1px", textShadow: "0 2px 24px #0006"
        }}
      >
        Experience
      </MotionH1>
      <div style={{ display: "flex", flexDirection: "column", gap: 40, maxWidth: 800, width: "100%" }}>
        {experience.map((exp: Experience, i: number) => (
          <MotionDiv
            key={exp.company + exp.role}
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.1 * i, duration: 0.7 }}
            whileHover={{ scale: 1.03, boxShadow: "0 8px 32px #60a5fa33" }}
            style={{
              background: "rgba(40,40,50,0.65)", borderRadius: 28, boxShadow: "0 8px 40px 0 #0004, 0 1.5px 8px 0 #60a5fa33",
              padding: 32, width: "100%", display: "flex", flexDirection: "column", alignItems: "flex-start",
              backdropFilter: "blur(12px)", border: "1.5px solid #3b3b4a", transition: "box-shadow 0.2s"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 10 }}>
              {exp.icon && (
                <div style={{
                  background: "linear-gradient(135deg,#60a5fa 0%,#a78bfa 100%)",
                  borderRadius: 12, padding: 6, display: "flex", alignItems: "center", justifyContent: "center"
                }}>
                  <Image src={exp.icon} alt={exp.company} width={36} height={36} style={{ borderRadius: 8, background: "#fff" }} />
                </div>
              )}
              <div>
                <h2 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#60a5fa" }}>{exp.role}</h2>
                <span style={{ color: "#a5b4fc", fontWeight: 600 }}>{exp.company}</span>
                <span style={{ color: "#d1d5db", marginLeft: 12 }}>{exp.period}</span>
                {exp.location && <span style={{ color: "#34d399", marginLeft: 12 }}>{exp.location}</span>}
              </div>
            </div>
            <ul style={{ color: "#e0e7ef", marginLeft: 8, marginTop: 8, fontSize: 15 }}>
              {Array.isArray(exp.description)
                ? exp.description.map((d: string, j: number) => <li key={j}>• {d}</li>)
                : <li>{exp.description}</li>}
            </ul>
          </MotionDiv>
        ))}
      </div>
    </main>
  );
}
