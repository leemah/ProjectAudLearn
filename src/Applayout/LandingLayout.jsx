import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const LandingLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen px-5 md:px-[100px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default LandingLayout;
