import Image from "../../components/Image";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import projects from "../../projectList";
import { Main } from "../../components/Main";

export default function Project({ project }) {
  const [currentPreview, setCurrentPreview] = useState(0);
  return (
    <Main>
      {project && (
        <section className="container has-text-centered mb-6">
          <h1 className="is-size-1 has-text-weight-bold py-4">
            {project.title || "project"}
          </h1>
          <figure className="image mb-2" style={{}}>
            {(project.images.length && (
              <Image
                image={project.images[currentPreview]}
                style={{
                  maxWidth: "30em",
                  margin: "auto",
                  borderRadius: "1em",
                }}
              />
            )) ||
              (project.preview && (
                <Image
                  image={project.preview}
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
                  onClick={() => setCurrentPreview(index)}
                >
                  <Image image={i} />
                </figure>
              ))}
          </div>
          <hr />
          <div className="columns px-4">
            <div className="tags column has-text-left">
              {project &&
                project.categories.map((cat) => (
                  <span className="tag is-primary is-medium" key={cat}>
                    {cat}
                  </span>
                ))}
            </div>
            <div className="is-flex is-justify-content-center column is-narrow">
              <a
                className="button mx-4 is-medium"
                disabled={!project.github}
                href={project.github || "#"}
                target="_blank"
              >
                <span className="icon">
                  <FontAwesomeIcon icon={faGithub} />
                </span>
                <span>GitHub</span>
              </a>
              {project.url && (
                <a
                  className="button is-primary mx-4 is-medium"
                  href={project.url || "#"}
                  target="_blank"
                >
                  <span className="icon">
                    <FontAwesomeIcon icon={faPlay} />
                  </span>
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>
          <p className="pb-5 px-4 is-size-4 has-text-left has-text-weight-semibold">
            {project.subtitle}
          </p>
          {project.description && (
            <p className="project-description px-4 has-text-justified is-size-5">
              {project.description}
            </p>
          )}
        </section>
      )}
    </Main>
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
  const filteredProjects = projects.filter((p) => p.slug === params.slug);
  const project = (filteredProjects.length && filteredProjects[0]) || {};
  return {
    props: { project },
  };
}
