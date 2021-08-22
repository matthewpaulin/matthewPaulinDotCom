import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { navIconVariants, navMenuVariants, navLinkVariants } from "../variants";
export default function Navbar() {
  const [isActive, setisActive] = useState(false);
  const router = useRouter();
  return (
    <nav
      id="navbar"
      className="px-4"
      role="navigation"
      aria-label="main navigation"
    >
      <motion.ul
        id="dropdown"
        initial={false}
        variants={navMenuVariants}
        animate={isActive ? "opened" : "closed"}
      >
        <motion.li
          variants={navLinkVariants}
          whileHover={{ scale: 1.5 }}
          onClick={() => setisActive(false)}
        >
          <Link href="/">
            <span
              className={`${
                (router.pathname === "/" &&
                  "current-page has-text-weight-bold") ||
                "has-text-weight-light"
              }`}
            >
              Home
            </span>
          </Link>
        </motion.li>
        <motion.li
          variants={navLinkVariants}
          whileHover={{ scale: 1.5 }}
          onClick={() => setisActive(false)}
        >
          <Link href="/about">
            <span
              className={`${
                (router.pathname === "/about" &&
                  "current-page has-text-weight-bold") ||
                "has-text-weight-light"
              }`}
            >
              About
            </span>
          </Link>
        </motion.li>
        <motion.li
          variants={navLinkVariants}
          whileHover={{ scale: 1.5 }}
          onClick={() => setisActive(false)}
        >
          <Link href="/contact">
            <span
              className={`${
                (router.pathname === "/contact" &&
                  "current-page has-text-weight-bold") ||
                "has-text-weight-light"
              }`}
            >
              Contact
            </span>
          </Link>
        </motion.li>
      </motion.ul>
      <div id="main-nav">
        <Link href="/">
          <img src="/icon-big.png" />
        </Link>
        <div className="navbar-links">
          <Link href="/">
            <span
              className={`nav-link ${
                (router.pathname === "/" &&
                  "current-page has-text-weight-bold") ||
                "not-current"
              }`}
            >
              Home
            </span>
          </Link>
          <Link href="/about">
            <span
              className={`nav-link ${
                (router.pathname === "/about" &&
                  "current-page has-text-weight-bold") ||
                "not-current"
              }`}
            >
              About
            </span>
          </Link>
          <Link href="/contact">
            <span
              className={`nav-link ${
                (router.pathname === "/contact" &&
                  "current-page has-text-weight-bold") ||
                "not-current"
              }`}
            >
              Contact
            </span>
          </Link>
        </div>
        <motion.div
          variants={navIconVariants}
          animate={isActive ? "opened" : "closed"}
          whileHover={{ scale: 2 }}
          onClick={() => setisActive(!isActive)}
          className={`burger ${isActive ? "is-active" : ""}`}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5C13 4.44772 12.5523 4 12 4Z"
              fill="#fff"
            />
          </svg>
        </motion.div>
      </div>
    </nav>
  );
}
