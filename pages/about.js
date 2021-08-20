import Image from "../components/Image";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
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
    <div className="container mt-3 mb-5 has-text-black" id="about-page">
      {about && (
        <>
          <div id="about" className="has-text-justified">
            <h1 className="is-size-1 has-text-weight-bold has-text-black">
              About Me
            </h1>
            <p className="is-size-5 py-3 has-text-justified has-text-weight-medium">
              {about.intro}
            </p>
          </div>
          <div className="is-flex is-align-items-center">
            <h1 className="is-size-2 has-text-weight-semibold has-text-black ">
              Skills
            </h1>
            <a className="ml-4 icon" onClick={toggleSkillsExpanded}>
              <FontAwesomeIcon
                icon={faAngleDown}
                className={`rotating-icon ${skillsExpanded && "open"}`}
              />
            </a>
          </div>
          {skillsExpanded && (
            <>
              <hr className="about-hr" />
              <div className="columns is-multiline is-centered mt-4">
                {languages && (
                  <div className="column is-full-mobile is-half-tablet">
                    <h1 className="is-size-3 has-text-weight-medium has-text-black pb-3">
                      Programming Languages
                    </h1>
                    <div className="is-flex is-flex-wrap-wrap">
                      {languages.map((tech) => (
                        <span className="tech is-flex m-3" key={tech.name}>
                          <figure className={"image tech-img"}>
                            <Image
                              style={{
                                borderTopLeftRadius: "12px",
                                borderBottomLeftRadius: "12px",
                                borderRight: "none",
                                height: "64px",
                                width: "auto",
                              }}
                              image={tech.icon}
                            />
                          </figure>

                          <p
                            className="has-background-link has-text-white is-size-5 has-text-weight-semibold px-3"
                            style={{
                              lineHeight: "64px",
                              borderTopRightRadius: "12px",
                              borderBottomRightRadius: "12px",
                              borderLeft: "none",
                            }}>
                            {tech.name}
                          </p>
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {web && (
                  <div className="column is-full-mobile is-half-tablet">
                    <h1 className="is-size-3 has-text-weight-medium has-text-black pb-3">
                      Web Technologies
                    </h1>
                    <div className="is-flex is-flex-wrap-wrap">
                      {web.map((tech) => (
                        <span className="tech is-flex m-3" key={tech.name}>
                          <figure className={"image tech-img"}>
                            <Image
                              style={{
                                borderTopLeftRadius: "12px",
                                borderBottomLeftRadius: "12px",
                                borderRight: "none",
                                height: "64px",
                                width: "auto",
                              }}
                              image={tech.icon}
                            />
                          </figure>

                          <p
                            className="has-background-danger has-text-white is-size-5 has-text-weight-semibold px-3"
                            style={{
                              lineHeight: "64px",
                              borderTopRightRadius: "12px",
                              borderBottomRightRadius: "12px",
                              borderLeft: "none",
                            }}>
                            {tech.name}
                          </p>
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {databases && (
                  <div className="column is-full-mobile is-half-tablet">
                    <h1 className="is-size-3 has-text-weight-medium has-text-black pb-3">
                      Databases
                    </h1>
                    <div className="is-flex is-flex-wrap-wrap">
                      {databases.map((tech) => (
                        <span className="tech is-flex m-3" key={tech.name}>
                          <figure className={"image tech-img"}>
                            <Image
                              style={{
                                borderTopLeftRadius: "12px",
                                borderBottomLeftRadius: "12px",
                                borderRight: "none",
                                height: "64px",
                                width: "auto",
                              }}
                              image={tech.icon}
                            />
                          </figure>

                          <p
                            className="has-background-success has-text-white is-size-5 has-text-weight-semibold px-3"
                            style={{
                              lineHeight: "64px",
                              borderTopRightRadius: "12px",
                              borderBottomRightRadius: "12px",
                              borderLeft: "none",
                            }}>
                            {tech.name}
                          </p>
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {other && (
                  <div className="column is-full-mobile is-half-tablet">
                    <h1 className="is-size-3 has-text-weight-medium has-text-black pb-3">
                      Other Tools
                    </h1>
                    <div className="is-flex is-flex-wrap-wrap">
                      {other.map((tech) => (
                        <span className="tech is-flex m-3" key={tech.name}>
                          <figure className={"image tech-img"}>
                            <Image
                              style={{
                                borderTopLeftRadius: "12px",
                                borderBottomLeftRadius: "12px",
                                borderRight: "none",
                                height: "64px",
                                width: "auto",
                              }}
                              image={tech.icon}
                            />
                          </figure>

                          <p
                            className="has-background-primary has-text-white is-size-5 has-text-weight-semibold px-3"
                            style={{
                              lineHeight: "64px",
                              borderTopRightRadius: "12px",
                              borderBottomRightRadius: "12px",
                              borderLeft: "none",
                            }}>
                            {tech.name}
                          </p>
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </>
          )}

          {/* Experience*/}
          <div className="is-flex is-align-items-center">
            <h1 className="is-size-2 has-text-weight-semibold has-text-black">
              Experience
            </h1>
            <a className="ml-4 icon" onClick={toggleExperienceExpanded}>
              <FontAwesomeIcon
                icon={faAngleDown}
                className={`rotating-icon ${experienceExpanded && "open"}`}
              />
            </a>
          </div>
          {experienceExpanded && (
            <>
              <hr className="about-hr" />
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
            <h1 className="is-size-2 has-text-weight-semibold has-text-black">
              Education
            </h1>
            <a className="ml-4 icon" onClick={toggleEducationExpanded}>
              <FontAwesomeIcon
                icon={faAngleDown}
                className={`rotating-icon ${educationExpanded && "open"}`}
              />
            </a>
          </div>
          {educationExpanded && (
            <>
              <hr className="about-hr" />
              <div className="mb-5">
                <p className="is-size-4 has-text-weight-medium">
                  {about.education.description}
                  <span className="ml-3 has-text-weight-normal">
                    {about.education.date}
                  </span>
                </p>
                <p className="pl-3 is-size-4 has-text-weight-normal">
                  {about.education.gpa}
                </p>
              </div>
            </>
          )}

          {/* achievements */}
          <div className="is-flex is-align-items-center">
            <h1 className="is-size-2 has-text-weight-semibold has-text-black">
              Achievements
            </h1>
            <a className="ml-4 icon" onClick={toggleAchievementsExpanded}>
              <FontAwesomeIcon
                icon={faAngleDown}
                className={`rotating-icon ${achievementsExpanded && "open"}`}
              />
            </a>
          </div>
          {achievementsExpanded && (
            <>
              <hr className="about-hr" />
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
  );
}

export async function getStaticProps() {
  const categoriesResponse = await fetch(
    "http://localhost:3000/api/categories"
  );
  const aboutResponse = await fetch("http://localhost:3000/api/about");
  const about = await aboutResponse.json();
  const categories = await categoriesResponse.json();
  const languages = categories.filter((cat) => cat.type === "lang");
  const web = categories.filter((cat) => cat.type === "web");
  const databases = categories.filter((cat) => cat.type === "db");
  const other = categories.filter((cat) => cat.type === "other");

  return {
    props: { about, languages, web, databases, other },
  };
}
