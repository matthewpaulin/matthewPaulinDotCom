import Navbar from "./Navbar";
import Meta from "./Meta";
import { Footer } from "./Footer";
import { AnimatePresence } from "framer-motion";
const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Navbar />
      <div id="wrapper">
        <AnimatePresence
          exitBeforeEnter
          initial={false} //disables animation when website is first loaded
        >
          {children}
        </AnimatePresence>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
