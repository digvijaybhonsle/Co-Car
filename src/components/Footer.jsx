import phone from "../assets/images/footerphone.svg";
import email from "../assets/images/footermail.svg";
import loca from "../assets/images/footerloca.svg";
import email2 from "../assets/images/footermail2.svg";
import linkedin from "../assets/images/linkedinlogo.svg";
import insta from "../assets/images/instagramlogo.svg";
import logo from "../assets/images/logofooter.svg";
import {NavLink} from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#004E8F] px-6 py-8 lg:px-16 md:px-12 text-white mt-2">
      <div className="flex flex-col lg:flex-row justify-between items-start w-full h-auto space-y-6 lg:space-y-0">
        {/* Column 1 */}
        <div className="flex-1 mb-6 lg:mb-0 items-center justify-center lg:pl-20">
          <img className="w-40 mb-4" src={logo} alt="Logo" />
          <p className="text-base sm:text-lg lg:text-sm leading-relaxed mt-8">
            Revolutionizing Co-Commuting Towards
          </p>
          <p className="text-[#4CAF50] text-lg sm:text-xl lg:text-sm font-semibold">
            Smarter, Greener, Together
          </p>
          <button
            className="mt-7 bg-[#4CAF50] hover:bg-[#45a049] text-white rounded-full px-8 py-2 text-base sm:text-lg lg:text-sm transition-all duration-300 cursor-pointer"
            style={{
              borderRadius: "57px",
              border: "1px solid #F6F5F5",
              lineHeight: "127%",
            }}
          >
            Contact Us
          </button>
        </div>
        {/* Column 2 */}
        <div className="flex-1 mb-6 lg:mb-0 items-center justify-center lg:pl-20">
          <h3 className="text-lg font-bold mb-4">Links</h3>
          <ul className="space-y-4">
            <li>
              <NavLink
                to="/"
                className="hover:text-[#4CAF50] cursor-pointer"
                activeClassName="text-[#4CAF50]" // This will add the green color for active link
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="hover:text-[#4CAF50] cursor-pointer"
                activeClassName="text-[#4CAF50]" // Active color for "About"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/how-it-works"
                className="hover:text-[#4CAF50] cursor-pointer"
                activeClassName="text-[#4CAF50]" // Active color for "How it works"
              >
                How it works
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="hover:text-[#4CAF50] cursor-pointer"
                activeClassName="text-[#4CAF50]" // Active color for "Contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        {/* Column 3 */}
        <div className="flex-1 mb-6 lg:mb-0 items-center justify-center">
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <ul className="space-y-4">
            <li className="flex items-center space-x-2">
              <img className="w-4 h-4" src={phone} alt="Phone" />
              <span>+91 80552 95930 , +91 90962 38060</span>
            </li>
            <li className="flex items-center space-x-2">
              <img className="w-4 h-4" src={email} alt="Email" />
              <span>anikeshgadekar125@gmail.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <img className="w-4 h-4" src={loca} alt="Location" />
              <span>Pune, Maharashtra</span>
            </li>
          </ul>
        </div>
        {/* Column 4 */}
        <div className="flex-1 mb-6 lg:mb-0 items-center justify-center lg:pl-30">
          <h3 className="text-lg font-bold mb-4">Socials</h3>
          <ul className="space-y-4">
            <li className="flex items-center space-x-2">
              <img className="w-5 h-5" src={email2} alt="Email" />
              <span>Mail us</span>
            </li>
            <li className="flex items-center space-x-2">
              <img className="w-5 h-5" src={linkedin} alt="Linkedin" />
              <span>LinkedIn</span>
            </li>
            <li className="flex items-center space-x-2">
              <img className="w-5 h-5" src={insta} alt="Instagram" />
              <span>Instagram</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center">
        <p className="text-sm my-4">&copy; 2025 Co-Car. All rights reserved.</p>
        <p className="text-sm">Made with love by @dgvj_26</p>
      </div>
    </div>
  );
};

export default Footer;
