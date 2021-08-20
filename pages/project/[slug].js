import Image from "../../components/Image";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import projects from '../../projectList';

export default function Project({ project }) {
  const [currentPreview, setCurrentPreview] = useState(0);
  return (
    project && <section className="container has-text-centered mb-3">
      <h1 className="is-size-1 has-text-weight-bold py-4">
        {project.title || "project"}
      </h1>
      <figure className="image mb-2" style={{}}>
        {(project.images && (
          <Image
            image={project.images[currentPreview]}
            style={{
              maxWidth: "30em",
              margin: "auto",
              borderRadius: "1em",
            }}
          />
        )) || (
          <img
            src="https://bulma.io/images/placeholders/1280x960.png"
            alt="Placeholder image"
          />
        )}
      </figure>
      <div className="is-flex is-flex-direction-row">
        {project.images &&
          project.images.map((i, index) => (
            <figure
              className={`image is-64x64 mx-2 project-thumb ${
                index === currentPreview && "has-border"
              }`}
              style={{ overflow: "hidden" }}
              key={index}
              onClick={() => setCurrentPreview(index)}>
              <Image image={i} />
            </figure>
          ))}
      </div>
      <hr />
      <div className="columns px-4">
        <div className="tags column has-text-left">
          {project &&
            project.categories.map((cat) => (
              <span className="tag is-link is-medium" key={cat}>
                {cat}
              </span>
            ))}
        </div>
        <div className="is-flex is-justify-content-center column is-narrow">
          <a
            className="button mx-4 is-medium"
            disabled={!project.github}
            href={project.github || "#"}>
            <span className="icon">
              <FontAwesomeIcon icon={faGithub} />
            </span>
            <span>GitHub</span>
          </a>
          <a
            className="button is-link mx-4 is-medium"
            disabled={!project.url}
            href={project.url || "#"}>
            <span className="icon">
              <FontAwesomeIcon icon={faPlay} />
            </span>
            <span>Live Demo</span>
          </a>
        </div>
      </div>

      <p className="pb-5 px-4 is-size-4 has-text-weight-semibold">{project.subtitle}</p>
      <p className="project-description px-4 has-text-justified is-size-5">
        {project.description}
      </p>
    </section> || <></> 
  );
}

export async function getStaticPaths() {
  return {
    paths: projects.map((project) => ({
      params: {
        slug: project.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const filteredProjects = projects.filter(p => p.slug === params.slug);
  const project = filteredProjects.length && filteredProjects[0] || {}
  return {
    props: { project },
  };
}