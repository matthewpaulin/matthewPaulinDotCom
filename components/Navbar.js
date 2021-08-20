import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTerminal } from "@fortawesome/free-solid-svg-icons";
export default function Navbar() {
  const [isActive, setisActive] = useState(false);
  const router = useRouter();
  return (
    <nav
      className="navbar is-fixed-top is-dark"
      role="navigation"
      aria-label="main navigation">
      <div className="navbar-brand">
        <p className="control p-2 pl-4">
          <Link href="/">
            <a className="button is-light is-hovered is-rounded has-text-weight-bold">
              <span className="icon">
                <FontAwesomeIcon icon={faTerminal} />
              </span>
              <span>Matthew Paulin's Portfolio</span>
            </a>
          </Link>
        </p>
        <a
          onClick={() => {
            setisActive(!isActive);
          }}
          role="button"
          className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div
        id="navMenuColordark"
        className={`navbar-menu ${
          isActive ? "is-active" : ""
        } has-text-centered`}>
        <div className="navbar-start">
          <Link href="/">
            <a
              href="/"
              className={`navbar-item ${
                router.pathname === "/" && "current-page has-text-weight-bold"
              }`}>
              Home
            </a>
          </Link>
          <Link href="/about">
            <a
              className={`navbar-item ${
                router.pathname === "/about" &&
                "current-page has-text-weight-bold"
              }`}>
              About
            </a>
          </Link>
          <Link href="/contact">
            <a
              className={`navbar-item ${
                router.pathname === "/contact" &&
                "current-page has-text-weight-bold"
              }`}>
              Contact
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
