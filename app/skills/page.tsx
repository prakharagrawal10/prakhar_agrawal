"use client";


import Image from "next/image";
import { skills } from "../../data/site";

import { motion } from "framer-motion";
const MotionH1 = motion("h1");
const MotionH2 = motion("h2");
const MotionDiv = motion("div");

export default function SkillsPage() {
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
        Skills
      </MotionH1>
      <div style={{ width: "100%", maxWidth: 1100, display: "flex", flexDirection: "column", gap: 40 }}>
        {skills.map((group, idx) => (
          <section key={group.category} style={{ width: "100%" }}>
            <MotionH2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx, duration: 0.6 }}
              style={{
                fontSize: "1.35rem", fontWeight: 700, color: "#60a5fa", marginBottom: 18,
                letterSpacing: "-0.5px", textShadow: "0 1px 8px #0003"
              }}
            >
              {group.category}
            </MotionH2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 28, justifyContent: "flex-start" }}>
              {group.items.map((skill, i) => (
                <MotionDiv
                  key={skill.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i, duration: 0.5 }}
                  whileHover={{ scale: 1.08, boxShadow: "0 4px 24px #60a5fa44" }}
                  style={{
                    display: "flex", flexDirection: "column", alignItems: "center", padding: 18, borderRadius: 18,
                    background: "rgba(255,255,255,0.08)", boxShadow: "0 2px 12px 0 rgba(0,0,0,0.10)", minWidth: 100, minHeight: 100,
                    transition: "box-shadow 0.2s"
                  }}
                >
                  <Image src={skill.icon} alt={skill.name} width={44} height={44} style={{ marginBottom: 10 }} />
                  <span style={{ color: "#fff", fontWeight: 600, fontSize: 16 }}>{skill.name}</span>
                </MotionDiv>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
