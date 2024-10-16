import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Logo from "../assets/audLearn_logo.svg";

const Footer = () => {
  return (
    <footer className="bg-[#633EA3] text-white py-12 md:py-16 px-4 md:px-[100px] relative">
      {/* Footer Links Section */}
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 px-4">
        {/* Resources Section */}
        <div className="md:border-r border-white pr-4">
          <h4 className="text-orange-500 font-bold mb-4">RESOURCES</h4>
          <ul>
            <li className="mb-2">Accreditation</li>
            <li className="mb-2">Class Schedules</li>
            <li className="mb-2">Bookstore</li>
            <li className="mb-2">Feedback</li>
          </ul>
        </div>

        {/* Information Section */}
        <div className="md:border-r border-white pr-4">
          <h4 className="text-orange-500 font-bold mb-4">INFORMATION</h4>
          <ul>
            <li className="mb-2">Prospective Students</li>
            <li className="mb-2">Current Students</li>
            <li className="mb-2">Alumni</li>
            <li className="mb-2">Visitors</li>
          </ul>
        </div>

        {/* Programs Section */}
        <div className="md:border-r border-white pr-4">
          <h4 className="text-orange-500 font-bold mb-4">PROGRAMS</h4>
          <ul>
            <li className="mb-2">Undergraduate Programs</li>
            <li className="mb-2">Graduate Programs</li>
            <li className="mb-2">Online Programs</li>
            <li className="mb-2">Adult Program</li>
          </ul>
        </div>

        {/* Connect Section */}
        <div className="md:border-r border-white pr-4">
          <h4 className="text-orange-500 font-bold mb-4">CONNECT</h4>
          <ul>
            <li className="mb-2">Apply</li>
            <li className="mb-2">Request Information</li>
            <li className="mb-2">Visit Us</li>
            <li className="mb-2">Contact Us</li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div>
          <h4 className="text-orange-500 font-bold mb-4">QUICK LINKS</h4>
          <ul>
            <li className="mb-2">Calendar of Events</li>
            <li className="mb-2">Direction</li>
            <li className="mb-2">Services</li>
            <li className="mb-2">Tips and Tricks</li>
          </ul>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="container mx-auto mt-8 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 px-4">
        <img src={Logo} alt="AudLearn Logo" className="w-20 md:w-32" />
        <div className="flex flex-col items-center md:items-start">
          <p className="text-orange-500 mb-4">
            Subscribe for our newsletter to get updates
          </p>
          <div className="flex">
            <input
              type="email"
              className="px-4 py-2 rounded-l-md border-none focus:outline-none text-black w-[200px] md:w-auto"
              placeholder="enter your email here"
            />
            <button className="bg-orange-500 text-white px-4 py-2 rounded-r-md">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Line */}
      <hr className="border-white mt-8 mx-4 md:mx-0" />

      {/* Social Links and Copyright */}
      <div className="container mx-auto mt-8 px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left Side (Copyright) */}
        <p className="text-sm md:text-base">
          © 2022 AudLearn - Learning without boundaries
        </p>
        {/* Right Side (Social Media Icons) */}
        <div className="flex space-x-4">
          <a href="#" className="text-white text-lg">
            <FaFacebookF />
          </a>
          <a href="#" className="text-white text-lg">
            <FaTwitter />
          </a>
          <a href="#" className="text-white text-lg">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
