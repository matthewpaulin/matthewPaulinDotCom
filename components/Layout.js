import Navbar from "./Navbar";
import Meta from "./Meta";
import { Footer } from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Navbar />
      <div id="wrapper">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
