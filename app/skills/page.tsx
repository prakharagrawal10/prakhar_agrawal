import { skills } from "../../data/site";

export default function SkillsPage() {
  return (
    <main style={{ minHeight: "80vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: 32 }}>Skills</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 24, justifyContent: "center", maxWidth: 800 }}>
        {skills.map((skill) => (
          <div key={skill.name} style={{
            display: "flex", flexDirection: "column", alignItems: "center", padding: 16, borderRadius: 16, background: "rgba(255,255,255,0.07)", boxShadow: "0 2px 12px 0 rgba(0,0,0,0.08)", minWidth: 100, minHeight: 100
          }}>
            <img src={skill.icon} alt={skill.name} width={40} height={40} style={{ marginBottom: 8 }} />
            <span style={{ color: "#fff", fontWeight: 500 }}>{skill.name}</span>
          </div>
        ))}
      </div>
    </main>
  );
}
