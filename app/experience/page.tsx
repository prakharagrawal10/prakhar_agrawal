import { experience } from "../../data/site";

export default function ExperiencePage() {
  return (
    <main style={{ minHeight: "80vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: 32 }}>Experience</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: 32, maxWidth: 700, width: "100%" }}>
        {experience.map((exp) => (
          <div key={exp.company + exp.role} style={{
            background: "rgba(255,255,255,0.07)", borderRadius: 20, boxShadow: "0 2px 16px 0 rgba(0,0,0,0.10)", padding: 24, display: "flex", flexDirection: "column", alignItems: "flex-start"
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 8 }}>
              {exp.icon && <img src={exp.icon} alt={exp.company} width={40} height={40} style={{ borderRadius: 8 }} />}
              <div>
                <h2 style={{ fontSize: "1.15rem", fontWeight: 600 }}>{exp.role}</h2>
                <span style={{ color: "#60a5fa", fontWeight: 500 }}>{exp.company}</span>
                <span style={{ color: "#d1d5db", marginLeft: 12 }}>{exp.period}</span>
                {exp.location && <span style={{ color: "#a5b4fc", marginLeft: 12 }}>{exp.location}</span>}
              </div>
            </div>
            <ul style={{ color: "#d1d5db", marginLeft: 8, marginTop: 8 }}>
              {Array.isArray(exp.description) ? exp.description.map((d, i) => <li key={i}>• {d}</li>) : <li>{exp.description}</li>}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}
