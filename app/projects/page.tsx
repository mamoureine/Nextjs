import type { Metadata } from "next";
import { ProjectCard } from "../components/project-card";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore a selection of design and frontend project concepts by Marieme SALL.",
};

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

export default function ProjectsPage() {
  return (
    <div className="container page-shell">
      <section className="page-intro">
        <p className="eyebrow">A SELECTION OF IDEAS</p>
        <h1>
          Work made with
          <br />
          <span>intention.</span>
        </h1>
        <p className="page-lede">
          A few early concepts exploring friendly interfaces, useful details,
          and the small moments that make a product feel right.
        </p>
      </section>
      <div className="project-grid project-grid-page">
        {projects.map((project) => (
          <ProjectCard key={project.number} {...project} />
        ))}
      </div>
      <p className="portfolio-note">
        These project previews are illustrative concepts, not completed client
        projects. Replace them with your own work when you&apos;re ready.
      </p>
    </div>
  );
}
