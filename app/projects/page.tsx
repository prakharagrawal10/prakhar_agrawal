import { projects } from "../../data/site";

export default function ProjectsPage() {
  return (
    <main style={{ minHeight: "80vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: 32 }}>Projects</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 32, justifyContent: "center", maxWidth: 1000 }}>
        {projects.map((project) => (
          <div key={project.title} style={{
            background: "rgba(255,255,255,0.07)", borderRadius: 20, boxShadow: "0 2px 16px 0 rgba(0,0,0,0.10)", padding: 24, minWidth: 280, maxWidth: 340, display: "flex", flexDirection: "column", alignItems: "flex-start", marginBottom: 16
          }}>
            <img src={project.image} alt={project.title} width={280} height={140} style={{ borderRadius: 12, marginBottom: 16, objectFit: "cover" }} />
            <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: 8 }}>{project.title}</h2>
            <p style={{ color: "#d1d5db", marginBottom: 12 }}>{project.description}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 12 }}>
              {project.tech.map((tech) => (
                <span key={tech} style={{ background: "#232526", color: "#fff", borderRadius: 8, padding: "2px 10px", fontSize: 12 }}>{tech}</span>
              ))}
            </div>
            <div style={{ display: "flex", gap: 12 }}>
              {project.github && <a href={project.github} target="_blank" rel="noopener" style={{ color: "#60a5fa", fontWeight: 500 }}>GitHub</a>}
              {project.demo && <a href={project.demo} target="_blank" rel="noopener" style={{ color: "#34d399", fontWeight: 500 }}>Demo</a>}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
