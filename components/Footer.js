import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <footer className="footer has-background-black">
      <div className="content has-text-centered has-text-light">
        <p>
          &#169; 2021{"  |  "}
          <a
            href="https://github.com/matthewpaulin/matthewPaulinDotCom"
            target="_blank"
            className="has-text-link"
          >
            Site Source Code
          </a>
        </p>
        <p>
          <a href="mailto:matthewjpaulin@gmail.com">
            <span className="icon mx-4 has-text-light">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
          </a>

          <a href="https://github.com/matthewpaulin" target="_blank">
            <span className="icon mx-4 has-text-light">
              <FontAwesomeIcon icon={faGithub} />
            </span>
          </a>

          <a href="https://www.linkedin.com/in/matthew-paulin" target="_blank">
            <span className="icon mx-4 has-text-light">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </span>
          </a>
        </p>
      </div>
    </footer>
  );
};
