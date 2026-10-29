import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Get to know Marieme SALL: her approach, interests, and the technologies she is exploring.",
};

const skills = [
  "HTML & CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Responsive design",
  "Git & GitHub",
];

export default function AboutPage() {
  return (
    <div className="container page-shell">
      <section className="page-intro">
        <p className="eyebrow">A LITTLE ABOUT ME</p>
        <h1>
          The person behind
          <br />
          <span>the screen.</span>
        </h1>
        <p className="page-lede">
          I&apos;m Marieme, a web developer who loves making the internet feel a
          little more human.
        </p>
      </section>

      <section className="about-layout">
        <div className="about-image">
          <Image
            alt="Colorful illustrated portrait representing Marieme"
            className="portrait"
            fill
            sizes="(max-width: 720px) 100vw, 40vw"
            src="/images/profile-portrait.svg"
          />
        </div>
        <div className="about-story">
          <p className="eyebrow">MY APPROACH</p>
          <h2>Curiosity first. People always.</h2>
          <p>
            I like understanding the person on the other side of a screen before
            deciding what to build. That perspective helps me create websites
            that are clear, considerate, and easy to use.
          </p>
          <p>
            I&apos;m growing my skills one project at a time, exploring
            frontend development and finding the sweet spot between thoughtful
            design and well-built code.
          </p>
          <p>
            Away from the screen, I&apos;m usually learning something new,
            collecting inspiration, or sketching out an idea for later.
          </p>
          <Link className="text-link" href="/projects">
            See what I&apos;m working on <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="skills-section">
        <div>
          <p className="eyebrow">TOOLS IN MY TOOLKIT</p>
          <h2>Things I&apos;m learning and using<span>.</span></h2>
        </div>
        <ul className="skills-list">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
