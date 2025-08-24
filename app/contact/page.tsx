import { profile } from "../../data/site";

export default function ContactPage() {
  return (
    <main style={{ minHeight: "80vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: 32 }}>Contact</h1>
      <div style={{ background: "rgba(255,255,255,0.07)", borderRadius: 20, boxShadow: "0 2px 16px 0 rgba(0,0,0,0.10)", padding: 32, minWidth: 320, maxWidth: 400, width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
        <p style={{ color: "#d1d5db", marginBottom: 16 }}>Feel free to reach out for opportunities or collaboration!</p>
        <a href={`mailto:${profile.email}`} style={{ color: "#60a5fa", fontWeight: 500, marginBottom: 8 }}>{profile.email}</a>
        <div style={{ display: "flex", gap: 16, marginTop: 16 }}>
          <a href={profile.github} target="_blank" rel="noopener" style={{ color: "#fff", fontSize: 24 }}>GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noopener" style={{ color: "#fff", fontSize: 24 }}>LinkedIn</a>
        </div>
      </div>
    </main>
  );
}
