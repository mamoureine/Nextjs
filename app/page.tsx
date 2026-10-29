import Image from "next/image";
import Link from "next/link";
import { ProjectCard } from "./components/project-card";

const projects = [
  {
    number: "01",
    title: "Nexa dashboard",
    category: "Product design · Dashboard",
    description:
      "A clear, calm space for making sense of busy project data.",
    image: "/images/project-dashboard.svg",
    imageAlt: "Illustrated preview of a clean analytics dashboard",
  },
  {
    number: "02",
    title: "Atelier Objects",
    category: "E-commerce · Frontend",
    description:
      "A considered storefront that lets beautiful everyday objects shine.",
    image: "/images/project-store.svg",
    imageAlt: "Illustrated preview of an editorial homeware storefront",
  },
  {
    number: "03",
    title: "Daymark",
    category: "Web app · Productivity",
    description:
      "A lightweight planner designed to make the next step feel simple.",
    image: "/images/project-planner.svg",
    imageAlt: "Illustrated preview of a simple weekly planning app",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero container">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> WEB DEVELOPER · DESIGN MINDED</p>
          <h1>
            Thoughtful websites,
            <br />
            <span>made for people.</span>
          </h1>
          <p className="hero-description">
            Hi, I&apos;m Marieme — I turn ideas into welcoming, useful digital
            experiences with a little curiosity and a lot of care.
          </p>
          <div className="hero-actions">
            <Link className="button button-dark" href="/projects">
              Explore my work <span aria-hidden="true">↗</span>
            </Link>
            <Link className="text-link" href="/about">
              A little about me <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="hero-note">
            <span className="note-line" />
            <span>Curious by nature. Thoughtful by design.</span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />
          <div className="portrait-frame">
            <Image
              alt="Colorful illustrated portrait representing Marieme"
              className="portrait"
              fill
              priority
              sizes="(max-width: 720px) 75vw, 34vw"
              src="/images/profile-portrait.svg"
            />
          </div>
          <div className="floating-note note-top">
            <span aria-hidden="true">✳</span> open to what&apos;s next
          </div>
          <div className="floating-note note-bottom">
            <span aria-hidden="true">✦</span> made with intention
          </div>
        </div>
      </section>

      <section aria-label="Areas of focus" className="focus-strip">
        <div className="container focus-content">
          <span>FRONTEND DEVELOPMENT</span>
          <span aria-hidden="true">✳</span>
          <span>THOUGHTFUL DESIGN</span>
          <span aria-hidden="true">✳</span>
          <span>DETAIL-DRIVEN WORK</span>
          <span aria-hidden="true">✳</span>
        </div>
      </section>

      <section className="section container" id="work">
        <div className="section-heading">
          <div>
            <p className="eyebrow">A FEW IDEAS, BROUGHT TO LIFE</p>
            <h2>Selected projects<span>.</span></h2>
          </div>
          <Link className="text-link" href="/projects">
            All projects <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.number} {...project} />
          ))}
        </div>
        <p className="portfolio-note">
          Project previews are concept work and can be replaced with your own
          projects.
        </p>
      </section>

      <section className="about-teaser">
        <div className="container teaser-content">
          <div>
            <p className="eyebrow">A PERSON BEHIND THE PIXELS</p>
            <h2>
              Good work starts
              <br />
              with <span>good questions.</span>
            </h2>
          </div>
          <div className="teaser-copy">
            <p>
              I enjoy learning how things work, finding the simple answer to a
              tricky problem, and making the details feel just right.
            </p>
            <Link className="button button-light" href="/about">
              More about me <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="contact-banner container">
        <div>
          <p className="eyebrow">HAVE SOMETHING IN MIND?</p>
          <h2>Let&apos;s make it happen<span>.</span></h2>
        </div>
        <Link className="button button-dark" href="/contact">
          Get in touch <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </>
  );
}
