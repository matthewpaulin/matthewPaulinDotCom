import Image from "../components/Image";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import about from "../aboutPage";
import categories from "../categoryList";
import { Main } from "../components/Main";
export default function About({ about, languages, web, databases, other }) {
  const [skillsExpanded, setSkillsExpanded] = useState(true);
  const [experienceExpanded, setExperienceExpanded] = useState(true);
  const [achievementsExpanded, setAchievementsExpanded] = useState(true);
  const [educationExpanded, setEducationExpanded] = useState(true);
  const toggleSkillsExpanded = () => setSkillsExpanded(!skillsExpanded);
  const toggleExperienceExpanded = () =>
    setExperienceExpanded(!experienceExpanded);
  const toggleAchievementsExpanded = () =>
    setAchievementsExpanded(!achievementsExpanded);
  const toggleEducationExpanded = () =>
    setEducationExpanded(!educationExpanded);
  return (
    <Main>
      <div className="container my-5" id="about-page">
        {about && (
          <>
            <div id="about" className="has-text-justified">
              <h1 className="is-size-1 has-text-weight-bold">About Me</h1>
              <p className="is-size-5 py-3 has-text-justified has-text-weight-medium">
                {about.intro}
              </p>
            </div>
            <div className="is-flex is-align-items-center">
              <h1 className="pl-4 is-size-2 has-text-weight-semibold">
                Skills
              </h1>
              <a
                className="ml-4 icon has-text-grey-light"
                onClick={toggleSkillsExpanded}
              >
                <FontAwesomeIcon
                  icon={faAngleDown}
                  className={`rotating-icon ${skillsExpanded && "open"}`}
                />
              </a>
            </div>
            {skillsExpanded && (
              <>
                <hr />
                <div className="columns is-multiline is-centered mt-4">
                  {languages && (
                    <div className="column is-full-tablet is-half-desktop">
                      <h1 className="is-size-3 has-text-weight-medium pb-3 has-text-centered">
                        Programming Languages
                      </h1>
                      <div className="is-flex is-flex-wrap-wrap is-justify-content-center">
                        {languages.map((tech) => (
                          <div className="tech is-flex m-3" key={tech.name}>
                            <figure className={"image tech-img"}>
                              <Image
                                style={{
                                  height: "64px",
                                  width: "auto",
                                }}
                                image={tech.icon}
                              />
                            </figure>

                            <p
                              className="has-background-link has-text-light is-size-5 has-text-weight-semibold px-3"
                              style={{
                                lineHeight: "64px",
                                borderTopRightRadius: "12px",
                                borderBottomRightRadius: "12px",
                                borderLeft: "none",
                              }}
                            >
                              {tech.name}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {web && (
                    <div className="column is-full-tablet is-half-desktop">
                      <h1 className="is-size-3 has-text-weight-medium has-text-light pb-3 has-text-centered">
                        Web Technologies
                      </h1>
                      <div className="is-flex is-flex-wrap-wrap is-justify-content-center">
                        {web.map((tech) => (
                          <div className="tech is-flex m-3" key={tech.name}>
                            <figure className={"image tech-img"}>
                              <Image
                                style={{
                                  height: "64px",
                                  width: "auto",
                                }}
                                image={tech.icon}
                              />
                            </figure>

                            <p
                              className="has-background-danger has-text-light is-size-5 has-text-weight-semibold px-3"
                              style={{
                                lineHeight: "64px",
                                borderTopRightRadius: "12px",
                                borderBottomRightRadius: "12px",
                                borderLeft: "none",
                              }}
                            >
                              {tech.name}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {databases && (
                    <div className="column is-full-tablet is-half-desktop">
                      <h1 className="is-size-3 has-text-weight-medium has-text-light pb-3 has-text-centered">
                        Databases
                      </h1>
                      <div className="is-flex is-flex-wrap-wrap is-justify-content-center">
                        {databases.map((tech) => (
                          <div className="tech is-flex m-3" key={tech.name}>
                            <figure className={"image tech-img"}>
                              <Image
                                style={{
                                  height: "64px",
                                  width: "auto",
                                }}
                                image={tech.icon}
                              />
                            </figure>

                            <p
                              className="has-background-success has-text-light is-size-5 has-text-weight-semibold px-3"
                              style={{
                                lineHeight: "64px",
                                borderTopRightRadius: "12px",
                                borderBottomRightRadius: "12px",
                                borderLeft: "none",
                              }}
                            >
                              {tech.name}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {other && (
                    <div className="column is-full-tablet is-half-desktop">
                      <h1 className="is-size-3 has-text-weight-medium has-text-light pb-3 has-text-centered">
                        Other Tools
                      </h1>
                      <div className="is-flex is-flex-wrap-wrap is-justify-content-center">
                        {other.map((tech) => (
                          <div className="tech is-flex m-3" key={tech.name}>
                            <figure className={"image tech-img"}>
                              <Image
                                style={{
                                  height: "64px",
                                  width: "auto",
                                }}
                                image={tech.icon}
                              />
                            </figure>

                            <p
                              className="has-background-primary has-text-light is-size-5 has-text-weight-semibold px-3"
                              style={{
                                lineHeight: "64px",
                                borderTopRightRadius: "12px",
                                borderBottomRightRadius: "12px",
                                borderLeft: "none",
                              }}
                            >
                              {tech.name}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}

            {/* Experience*/}
            <div className="is-flex is-align-items-center">
              <h1 className="pl-4 is-size-2 has-text-weight-semibold has-text-light">
                Experience
              </h1>
              <a
                className="ml-4 icon has-text-grey-light"
                onClick={toggleExperienceExpanded}
              >
                <FontAwesomeIcon
                  icon={faAngleDown}
                  className={`rotating-icon ${experienceExpanded && "open"}`}
                />
              </a>
            </div>
            {experienceExpanded && (
              <>
                <hr />
                {about.experience.map((job, index) => (
                  <div className="mb-5" key={index}>
                    <p className="is-size-4 has-text-weight-semibold px-2">
                      {job.title}
                    </p>
                    <p className="is-size-5 px-2">{job.date} </p>
                  </div>
                ))}
              </>
            )}

            {/* education */}
            <div className="is-flex is-align-items-center">
              <h1 className="pl-4 is-size-2 has-text-weight-semibold has-text-light">
                Education
              </h1>
              <a
                className="ml-4 icon has-text-grey-light"
                onClick={toggleEducationExpanded}
              >
                <FontAwesomeIcon
                  icon={faAngleDown}
                  className={`rotating-icon ${educationExpanded && "open"}`}
                />
              </a>
            </div>
            {educationExpanded && (
              <>
                <hr />
                <div className="mb-5">
                  <p className="is-size-4 has-text-weight-medium">
                    {about.education.description}
                    <span className="ml-3 has-text-weight-normal">
                      {about.education.date}
                    </span>
                  </p>
                  <li className="pl-3 is-size-4 has-text-weight-normal">
                    {about.education.gpa}
                  </li>
                </div>
              </>
            )}

            {/* achievements */}
            <div className="is-flex is-align-items-center">
              <h1 className="pl-4 is-size-2 has-text-weight-semibold has-text-light">
                Achievements
              </h1>
              <a
                className="ml-4 icon has-text-grey-light"
                onClick={toggleAchievementsExpanded}
              >
                <FontAwesomeIcon
                  icon={faAngleDown}
                  className={`rotating-icon ${achievementsExpanded && "open"}`}
                />
              </a>
            </div>
            {achievementsExpanded && (
              <>
                <hr />
                {about.achievements.map((award, index) => (
                  <div className="mb-5" key={index}>
                    <ul>
                      <li className="is-size-4 has-text-weight-semibold px-2">
                        {award}
                      </li>
                    </ul>
                  </div>
                ))}
              </>
            )}
          </>
        )}
      </div>
    </Main>
  );
}

export async function getStaticProps() {
  const languages = categories.filter((cat) => cat.type === "lang");
  const web = categories.filter((cat) => cat.type === "web");
  const databases = categories.filter((cat) => cat.type === "db");
  const other = categories.filter((cat) => cat.type === "other");

  return {
    props: { about, languages, web, databases, other },
  };
}
