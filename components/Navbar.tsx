import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <nav style={{
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "1.5rem 0 1rem 0",
      position: "fixed",
      top: 0,
      left: 0,
      zIndex: 100,
      background: "rgba(20,22,30,0.85)",
      boxShadow: "0 2px 16px 0 rgba(0,0,0,0.10)",
      backdropFilter: "blur(8px)"
    }}>
      <div style={{ display: "flex", gap: 32 }}>
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} style={{
            color: "#fff",
            fontWeight: 500,
            fontSize: 18,
            textDecoration: "none",
            padding: "0.5rem 1.25rem",
            borderRadius: 8,
            transition: "background 0.2s, color 0.2s",
          }}>
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
