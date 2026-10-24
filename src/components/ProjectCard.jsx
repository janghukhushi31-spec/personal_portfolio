import { ArrowUpRight, ArrowRight } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card-top">
        <span className="project-number">{project.number}</span>
        <span className="project-status"><span className="status-dot" />{project.status}</span>
      </div>
      <p className="project-category">{project.category}</p>
      <h3>{project.title}</h3>
      <p className="project-summary">{project.summary}</p>
      <p className="project-details">{project.details}</p>
      <div className="tag-list">
        {project.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}
      </div>
      {project.link ? (
        <a className="text-link" href={project.link} target="_blank" rel="noreferrer">View project <ArrowUpRight size={16} /></a>
      ) : (
        <span className="text-link muted-link">Project details <ArrowRight size={16} /></span>
      )}
    </article>
  );
}