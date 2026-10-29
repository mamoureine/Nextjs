import Image from "next/image";

type ProjectCardProps = {
  category: string;
  description: string;
  image: string;
  imageAlt: string;
  number: string;
  title: string;
};

export function ProjectCard({
  category,
  description,
  image,
  imageAlt,
  number,
  title,
}: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-image">
        <Image
          alt={imageAlt}
          className="project-art"
          fill
          sizes="(max-width: 720px) 100vw, (max-width: 1000px) 50vw, 33vw"
          src={image}
        />
        <span className="project-number">{number}</span>
      </div>
      <div className="project-copy">
        <div>
          <p className="eyebrow">{category}</p>
          <h3>{title}</h3>
          <p className="muted">{description}</p>
        </div>
        <span aria-hidden="true" className="project-arrow">
          ↗
        </span>
      </div>
    </article>
  );
}
