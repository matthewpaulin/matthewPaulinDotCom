import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopeSquare,
  faFileCode,
  faExternalLinkAlt,
  faTools,
} from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Image from "../components/Image";
import projects from "../projectList";
import { AnimateWhenVisible } from "../components/AnimateWhenVisible";
import { Main } from "../components/Main";
import { motion } from "framer-motion";
export default function Home({ projects }) {
  const projectsToDisplay = 3;
  return (
    <Main>
      <div>
        <section
          id="main-hero"
          className="is-flex is-flex-direction-column is-justify-content-center px-6 pt-6"
        >
          <div className="has-text-centered is-align-self-center">
            <svg
              id="name"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 1079 112"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M101.896 10.352V110H88.792V35.696L55.672 110H46.456L13.192 35.552V110H0.0880127V10.352H14.2L51.064 92.72L87.928 10.352H101.896Z"
                stroke="white"
                strokeWidth="5"
              />
              <path
                d="M119.223 70.256C119.223 62.192 120.855 55.136 124.119 49.088C127.383 42.944 131.847 38.192 137.511 34.832C143.271 31.472 149.655 29.792 156.663 29.792C163.575 29.792 169.575 31.28 174.663 34.256C179.751 37.232 183.543 40.976 186.039 45.488V31.088H199.287V110H186.039V95.312C183.447 99.92 179.559 103.76 174.375 106.832C169.287 109.808 163.335 111.296 156.519 111.296C149.511 111.296 143.175 109.568 137.511 106.112C131.847 102.656 127.383 97.808 124.119 91.568C120.855 85.328 119.223 78.224 119.223 70.256ZM186.039 70.4C186.039 64.448 184.839 59.264 182.439 54.848C180.039 50.432 176.775 47.072 172.647 44.768C168.615 42.368 164.151 41.168 159.255 41.168C154.359 41.168 149.895 42.32 145.863 44.624C141.831 46.928 138.615 50.288 136.215 54.704C133.815 59.12 132.615 64.304 132.615 70.256C132.615 76.304 133.815 81.584 136.215 86.096C138.615 90.512 141.831 93.92 145.863 96.32C149.895 98.624 154.359 99.776 159.255 99.776C164.151 99.776 168.615 98.624 172.647 96.32C176.775 93.92 180.039 90.512 182.439 86.096C184.839 81.584 186.039 76.352 186.039 70.4Z"
                stroke="white"
                strokeWidth="5"
              />
              <path
                d="M237.416 41.888V88.4C237.416 92.24 238.232 94.976 239.864 96.608C241.496 98.144 244.328 98.912 248.36 98.912H258.008V110H246.2C238.904 110 233.432 108.32 229.784 104.96C226.136 101.6 224.312 96.08 224.312 88.4V41.888H214.088V31.088H224.312V11.216H237.416V31.088H258.008V41.888H237.416Z"
                stroke="white"
                strokeWidth="5"
              />
              <path
                d="M289.869 41.888V88.4C289.869 92.24 290.685 94.976 292.317 96.608C293.949 98.144 296.781 98.912 300.813 98.912H310.461V110H298.653C291.357 110 285.885 108.32 282.237 104.96C278.589 101.6 276.765 96.08 276.765 88.4V41.888H266.541V31.088H276.765V11.216H289.869V31.088H310.461V41.888H289.869Z"
                stroke="white"
                strokeWidth="5"
              />
              <path
                d="M365.506 29.648C371.458 29.648 376.834 30.944 381.634 33.536C386.434 36.032 390.178 39.824 392.866 44.912C395.65 50 397.042 56.192 397.042 63.488V110H384.082V65.36C384.082 57.488 382.114 51.488 378.178 47.36C374.242 43.136 368.866 41.024 362.05 41.024C355.138 41.024 349.618 43.184 345.49 47.504C341.458 51.824 339.442 58.112 339.442 66.368V110H326.338V3.43999H339.442V42.32C342.034 38.288 345.586 35.168 350.098 32.96C354.706 30.752 359.842 29.648 365.506 29.648Z"
                stroke="white"
                strokeWidth="5"
              />
              <path
                d="M490.447 67.52C490.447 70.016 490.303 72.656 490.015 75.44H426.943C427.423 83.216 430.063 89.312 434.863 93.728C439.759 98.048 445.663 100.208 452.575 100.208C458.239 100.208 462.943 98.912 466.687 96.32C470.527 93.632 473.215 90.08 474.751 85.664H488.863C486.751 93.248 482.527 99.44 476.191 104.24C469.855 108.944 461.983 111.296 452.575 111.296C445.087 111.296 438.367 109.616 432.415 106.256C426.559 102.896 421.951 98.144 418.591 92C415.231 85.76 413.551 78.56 413.551 70.4C413.551 62.24 415.183 55.088 418.447 48.944C421.711 42.8 426.271 38.096 432.127 34.832C438.079 31.472 444.895 29.792 452.575 29.792C460.063 29.792 466.687 31.424 472.447 34.688C478.207 37.952 482.623 42.464 485.695 48.224C488.863 53.888 490.447 60.32 490.447 67.52ZM476.911 64.784C476.911 59.792 475.807 55.52 473.599 51.968C471.391 48.32 468.367 45.584 464.527 43.76C460.783 41.84 456.607 40.88 451.999 40.88C445.375 40.88 439.711 42.992 435.007 47.216C430.399 51.44 427.759 57.296 427.087 64.784H476.911Z"
                stroke="white"
                strokeWidth="5"
              />
              <path
                d="M612.864 31.088L588.24 110H574.704L555.696 47.36L536.688 110H523.152L498.384 31.088H511.776L529.92 97.328L549.504 31.088H562.896L582.048 97.472L599.904 31.088H612.864Z"
                stroke="white"
                strokeWidth="5"
              />
              <path
                d="M731.364 39.008C731.364 47.36 728.484 54.32 722.724 59.888C717.06 65.36 708.372 68.096 696.66 68.096H677.364V110H664.26V9.63199H696.66C707.988 9.63199 716.58 12.368 722.436 17.84C728.388 23.312 731.364 30.368 731.364 39.008ZM696.66 57.296C703.956 57.296 709.332 55.712 712.788 52.544C716.244 49.376 717.972 44.864 717.972 39.008C717.972 26.624 710.868 20.432 696.66 20.432H677.364V57.296H696.66Z"
                stroke="white"
                strokeWidth="5"
              />
              <path
                d="M742.755 70.256C742.755 62.192 744.387 55.136 747.651 49.088C750.915 42.944 755.378 38.192 761.042 34.832C766.802 31.472 773.187 29.792 780.195 29.792C787.107 29.792 793.107 31.28 798.195 34.256C803.283 37.232 807.074 40.976 809.57 45.488V31.088H822.818V110H809.57V95.312C806.978 99.92 803.09 103.76 797.906 106.832C792.818 109.808 786.866 111.296 780.05 111.296C773.042 111.296 766.706 109.568 761.042 106.112C755.378 102.656 750.915 97.808 747.651 91.568C744.387 85.328 742.755 78.224 742.755 70.256ZM809.57 70.4C809.57 64.448 808.371 59.264 805.971 54.848C803.571 50.432 800.307 47.072 796.179 44.768C792.147 42.368 787.682 41.168 782.786 41.168C777.89 41.168 773.427 42.32 769.395 44.624C765.363 46.928 762.147 50.288 759.747 54.704C757.347 59.12 756.146 64.304 756.146 70.256C756.146 76.304 757.347 81.584 759.747 86.096C762.147 90.512 765.363 93.92 769.395 96.32C773.427 98.624 777.89 99.776 782.786 99.776C787.682 99.776 792.147 98.624 796.179 96.32C800.307 93.92 803.571 90.512 805.971 86.096C808.371 81.584 809.57 76.352 809.57 70.4Z"
                stroke="white"
                strokeWidth="5"
              />
              <path
                d="M914.947 31.088V110H901.843V98.336C899.347 102.368 895.843 105.536 891.331 107.84C886.915 110.048 882.019 111.152 876.643 111.152C870.499 111.152 864.979 109.904 860.083 107.408C855.187 104.816 851.299 100.976 848.419 95.888C845.635 90.8 844.243 84.608 844.243 77.312V31.088H857.203V75.584C857.203 83.36 859.171 89.36 863.107 93.584C867.043 97.712 872.419 99.776 879.235 99.776C886.243 99.776 891.763 97.616 895.795 93.296C899.827 88.976 901.843 82.688 901.843 74.432V31.088H914.947Z"
                stroke="white"
                strokeWidth="5"
              />
              <path
                d="M950.176 3.43999V110H937.072V3.43999H950.176Z"
                stroke="white"
                strokeWidth="5"
              />
              <path
                d="M979.278 18.272C976.782 18.272 974.67 17.408 972.942 15.68C971.214 13.952 970.35 11.84 970.35 9.34398C970.35 6.84799 971.214 4.73599 972.942 3.00799C974.67 1.27999 976.782 0.415985 979.278 0.415985C981.678 0.415985 983.694 1.27999 985.326 3.00799C987.054 4.73599 987.918 6.84799 987.918 9.34398C987.918 11.84 987.054 13.952 985.326 15.68C983.694 17.408 981.678 18.272 979.278 18.272ZM985.614 31.088V110H972.51V31.088H985.614Z"
                stroke="white"
                strokeWidth="5"
              />
              <path
                d="M1046.4 29.648C1056 29.648 1063.77 32.576 1069.72 38.432C1075.68 44.192 1078.65 52.544 1078.65 63.488V110H1065.69V65.36C1065.69 57.488 1063.72 51.488 1059.79 47.36C1055.85 43.136 1050.48 41.024 1043.66 41.024C1036.75 41.024 1031.23 43.184 1027.1 47.504C1023.07 51.824 1021.05 58.112 1021.05 66.368V110H1007.95V31.088H1021.05V42.32C1023.64 38.288 1027.15 35.168 1031.56 32.96C1036.08 30.752 1041.02 29.648 1046.4 29.648Z"
                stroke="white"
                strokeWidth="5"
              />
            </svg>
            <p className="fadein is-size-4 pt-6">
              Fourth-year Software Engineering Student @ McMaster University
            </p>

            <ul className="fadein is-flex is-flex-direction-row is-justify-content-center py-6">
              <li className="px-5">
                <a href="mailto:matthewjpaulin@gmail.com">
                  <span className="icon is-large has-text-light glowing hero-icon">
                    <FontAwesomeIcon icon={faEnvelopeSquare} />
                  </span>
                </a>
              </li>
              <li className="px-5">
                <a href="https://github.com/matthewpaulin">
                  <span className="icon is-large has-text-light glowing hero-icon">
                    <FontAwesomeIcon icon={faGithubSquare} />
                  </span>
                </a>
              </li>
              <li className="px-5">
                <a href="https://www.linkedin.com/in/matthew-paulin">
                  <span className="icon is-large has-text-light glowing hero-icon">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </section>
        <section id="projects" className="py-5">
          <div className="narrow-container is-size-4 mb-6 is-family-monospace section-title">
            <hr />
            <span>Featured Projects</span>
            <hr />
          </div>
          <ul id="featured-projects-mobile" className="container">
            {projects &&
              projects.map(
                (project, idx) =>
                  idx < projectsToDisplay && (
                    <AnimateWhenVisible key={project.id + "mobile"}>
                      <li className="card has-text-light mb-4">
                        <header className="card-header">
                          <p className="card-header-title is-centered is-size-4 has-text-light">
                            {project.title}
                          </p>
                        </header>
                        <div className="card-image">
                          <figure className="image">
                            {(project.preview.url && (
                              <Image
                                image={project.preview}
                                style={{
                                  maxHeight: "350px",
                                  width: "auto",
                                  margin: "auto",
                                }}
                              />
                            )) || (
                              <img
                                src="https://bulma.io/images/placeholders/1280x960.png"
                                alt="Placeholder image"
                              />
                            )}
                          </figure>
                        </div>
                        <div className="card-content">
                          <div className="project-tech">
                            <span className="icon has-text-light">
                              <FontAwesomeIcon icon={faTools} />
                            </span>
                            <div className="project-tech-tags">
                              {project.categories.map((cat, index) => (
                                <span className="tech-tag" key={index}>
                                  {cat}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="project-preview is-flex is-flex-direction-column is-justify-content-space-between">
                            <div className="content has-text-justified">
                              {project.subtitle}
                            </div>
                            <div className="project-links">
                              <Link
                                href={`/project/${project.slug}`}
                                key={project.id}
                              >
                                <button className="button is-light is-rounded is-outlined">
                                  View Project
                                </button>
                              </Link>

                              <div className="external-links">
                                <a
                                  href={project.github}
                                  className="icon has-text-light"
                                >
                                  <FontAwesomeIcon icon={faFileCode} />
                                </a>
                                <a
                                  href={project.url}
                                  className="icon has-text-light"
                                >
                                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                                </a>
                              </div>
                            </div>
                            {project.date && (
                              <p className="has-text-right pt-2 is-size-7">
                                {project.date}
                              </p>
                            )}
                          </div>
                        </div>
                      </li>
                    </AnimateWhenVisible>
                  )
              )}
          </ul>
          <ul id="featured-projects" className="narrow-container">
            {projects &&
              projects.map(
                (project, idx) =>
                  idx < 3 && (
                    <AnimateWhenVisible key={project.id}>
                      <li
                        className={`featured-project ${
                          idx % 2 == 0 ? "right-content" : "left-content"
                        }`}
                      >
                        <div className="project-image">
                          {(project.preview.url && (
                            <Image
                              image={project.preview}
                              style={{
                                maxHeight: "350px",
                                width: "auto",
                                margin: "auto",
                              }}
                            />
                          )) || (
                            <img
                              src="https://bulma.io/images/placeholders/1280x960.png"
                              alt="Placeholder image"
                            />
                          )}
                        </div>
                        <div className="project-info is-family-monospace has-text-light">
                          <div className="project-title is-size-3 has-text-weight-medium">
                            {idx % 2 == 0 && project.date && (
                              <span className="has-text-left is-size-7 has-text-light">
                                {project.date}
                              </span>
                            )}
                            {project.title}
                            {idx % 2 != 0 && project.date && (
                              <span className="has-text-right is-size-7 has-text-light">
                                {project.date}
                              </span>
                            )}
                          </div>
                          <div
                            className={`project-description ${
                              idx % 2 == 0 ? "right" : "left"
                            }`}
                          >
                            {project.subtitle}
                          </div>
                          <div className="project-tech">
                            <span className="icon has-text-light">
                              <FontAwesomeIcon icon={faTools} />
                            </span>
                            <div className="project-tech-tags">
                              {project.categories.map((cat, index) => (
                                <span className="tech-tag" key={index}>
                                  {cat}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="project-links">
                            <Link
                              href={`/project/${project.slug}`}
                              key={project.id}
                            >
                              <button className="button is-light is-rounded is-outlined">
                                View Project
                              </button>
                            </Link>

                            <div className="external-links">
                              <Link href={project.github}>
                                <a className="icon has-text-light">
                                  <FontAwesomeIcon icon={faFileCode} />
                                </a>
                              </Link>
                              <Link href={project.url}>
                                <a className="icon has-text-light">
                                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                                </a>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </li>
                    </AnimateWhenVisible>
                  )
              )}
          </ul>
          {projects && projects.length > projectsToDisplay && (
            <>
              <div className="narrow-container is-size-4 my-6 is-family-monospace section-title">
                <hr />
                <span>Other Projects</span>
                <hr />
              </div>
              <div className="other-projects narrow-container">
                {projects.map(
                  (project, idx) =>
                    idx >= projectsToDisplay && (
                      <AnimateWhenVisible key={project.id}>
                        <Link href={`/project/${project.slug}`}>
                          <motion.div
                            className="grid-project"
                            whileHover={{ scale: 1.05 }}
                          >
                            <div className="project-image">
                              {(project.preview.url && (
                                <Image
                                  image={project.preview}
                                  style={{
                                    maxHeight: "350px",
                                    width: "auto",
                                    margin: "auto",
                                  }}
                                />
                              )) || (
                                <img
                                  src="https://bulma.io/images/placeholders/1280x960.png"
                                  alt="Placeholder image"
                                />
                              )}
                            </div>
                            <div className="project-info is-family-monospace has-text-light">
                              <div className="project-description">
                                <div className="is-size-4">{project.title}</div>
                                {project.subtitle}
                              </div>
                              <div>
                                <div className="project-tech-tags has-text pb-2">
                                  {project.categories &&
                                    project.categories.map((cat, index) => (
                                      <span className="tech-tag" key={index}>
                                        {cat}
                                      </span>
                                    ))}
                                </div>
                                <div className="project-links">
                                  {project.date && (
                                    <p className="has-text-left pt-2 is-size-7">
                                      {project.date}
                                    </p>
                                  )}

                                  <div className="external-links">
                                    {project.github && (
                                      <Link href={project.github}>
                                        <a className="icon has-text-light">
                                          <FontAwesomeIcon icon={faFileCode} />
                                        </a>
                                      </Link>
                                    )}
                                    {project.url && (
                                      <Link href={project.url}>
                                        <a className="icon has-text-light">
                                          <FontAwesomeIcon
                                            icon={faExternalLinkAlt}
                                          />
                                        </a>
                                      </Link>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        </Link>
                      </AnimateWhenVisible>
                    )
                )}
              </div>
            </>
          )}
        </section>
      </div>
    </Main>
  );
}

export async function getStaticProps() {
  return {
    props: { projects },
  };
}
