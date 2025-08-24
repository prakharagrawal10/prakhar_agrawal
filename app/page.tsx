
import Image from "next/image";
import { profile } from "../data/site";

export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(135deg, #232526 0%, #414345 100%)"
    }}>
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1.5rem",
        padding: "2rem 1rem",
        borderRadius: "1.5rem",
        background: "rgba(255,255,255,0.05)",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        backdropFilter: "blur(8px)",
        border: "1px solid rgba(255,255,255,0.18)"
      }}>
        <Image
          src={profile.avatar}
          alt={profile.name}
          width={120}
          height={120}
          style={{ borderRadius: "50%", boxShadow: "0 4px 24px 0 rgba(0,0,0,0.2)" }}
        />
        <h1 style={{ fontSize: "2.5rem", fontWeight: 700, color: "#fff", textAlign: "center" }}>{profile.name}</h1>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 400, color: "#e0e0e0", textAlign: "center" }}>{profile.tagline}</h2>
        <p style={{ maxWidth: 480, color: "#d1d5db", textAlign: "center" }}>{profile.bio}</p>
        <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
          <a href={profile.resume} target="_blank" rel="noopener" style={{
            padding: "0.75rem 1.5rem",
            borderRadius: "999px",
            background: "linear-gradient(90deg,#6EE7B7,#3B82F6)",
            color: "#fff",
            fontWeight: 600,
            textDecoration: "none",
            boxShadow: "0 2px 8px 0 rgba(59,130,246,0.15)",
            transition: "transform 0.2s"
          }}>Resume</a>
          <a href={profile.github} target="_blank" rel="noopener" style={{
            padding: "0.75rem 1.5rem",
            borderRadius: "999px",
            background: "linear-gradient(90deg,#6366F1,#8B5CF6)",
            color: "#fff",
            fontWeight: 600,
            textDecoration: "none",
            boxShadow: "0 2px 8px 0 rgba(99,102,241,0.15)",
            transition: "transform 0.2s"
          }}>GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noopener" style={{
            padding: "0.75rem 1.5rem",
            borderRadius: "999px",
            background: "linear-gradient(90deg,#06b6d4,#3b82f6)",
            color: "#fff",
            fontWeight: 600,
            textDecoration: "none",
            boxShadow: "0 2px 8px 0 rgba(6,182,212,0.15)",
            transition: "transform 0.2s"
          }}>LinkedIn</a>
        </div>
      </div>
    </main>
  );
}
