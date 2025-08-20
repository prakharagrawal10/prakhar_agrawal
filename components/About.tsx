import { profile } from "../data/site";

export default function About() {
  return (
    <section className="about-section">
      <div className="about-card">
        <h2>About Me</h2>
        <p>{profile.bio}</p>
        <ul>
          <li><b>CGPA:</b> 9.2</li>
          <li><b>Specialization:</b> Computer Science & AI</li>
        </ul>
      </div>
    </section>
  );
}
