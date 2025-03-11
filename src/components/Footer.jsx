import phone from "../assets/images/footerphone.svg";
import email from "../assets/images/footermail.svg";
import loca from "../assets/images/footerloca.svg";
import email2 from "../assets/images/footermail2.svg";
import linkedin from "../assets/images/Group110.svg";
import insta from "../assets/images/Group111.svg";
import logo from "../assets/images/logofooter.svg";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact");
  };
  return (
    <div className="bg-[#004E8F] px-6 py-8 lg:px-16 md:px-12 text-white mt-2">
      <div className="flex flex-col lg:flex-row justify-between items-start w-full h-auto space-y-6 lg:space-y-0">
        {/* Column 1 */}
        <div className="flex-1 mb-6 lg:mb-0 items-center justify-center lg:pl-20">
          <img className="w-50 mb-4" src={logo} alt="Logo" />
          <p className="text-base sm:text-lg lg:text-sm leading-relaxed mt-8">
            Revolutionizing Co-Commuting Towards
          </p>
          <p className="text-[#4CAF50] text-lg sm:text-xl lg:text-sm font-semibold">
            Smarter, Greener, Together
          </p>
          <button
            className="mt-7 hover:bg-[#45a049] text-white rounded-full px-8 py-2 text-base sm:text-lg lg:text-md transition-all duration-300 cursor-pointer"
            style={{
              borderRadius: "57px",
              border: "1px solid #F6F5F5",
              lineHeight: "127%",
            }}
            onClick={handleClick}
          >
            Contact Us
          </button>
        </div>
        {/* Column 2 */}
        <div className="flex-1 text-lg mb-6 lg:mb-0 items-center justify-center lg:pl-20">
          <h3 className="text-2xl font-bold mb-5">Links</h3>
          <ul className="space-y-5">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#4CAF50] underline cursor-pointer hover:underline"
                    : "hover:text-[#4CAF50] cursor-pointer hover:underline"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#4CAF50] underline cursor-pointer hover:underline"
                    : "hover:text-[#4CAF50] cursor-pointer hover:underline"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/how-it-works"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#4CAF50] underline cursor-pointer hover:underline"
                    : "hover:text-[#4CAF50] cursor-pointer hover:underline"
                }
              >
                How it works
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#4CAF50] cursor-pointer underline hover:underline"
                    : "hover:text-[#4CAF50] cursor-pointer hover:underline"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="flex-1 text-lg mb-6 lg:mb-0 items-center justify-center">
          <h3 className="text-xl font-bold mb-5">Contact Us</h3>
          <ul className="space-y-5">
            <li className="flex items-center space-x-2">
              <img className="w-4 h-4" src={phone} alt="Phone" />
              <span>
                <a href="tel:+918055295930" className="hover:underline">
                  +91 80552 95930
                </a>
                ,
                <a href="tel:+919096238060" className="hover:underline">
                  +91 90962 38060
                </a>
              </span>
            </li>

            <li className="flex items-center space-x-2">
              <img className="w-4 h-4" src={email} alt="Email" />
              <a
                href="mailto:anikeshgadekar125@gmail.com"
                className="hover:underline"
              >
                anikeshgadekar125@gmail.com
              </a>
            </li>

            {/* Location */}
            <li className="flex items-center space-x-2">
              <img className="w-4 h-4" src={loca} alt="Location" />
              <a
                href="https://www.google.com/maps/search/Pune,+Maharashtra"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Pune, Maharashtra
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="flex-1 text-lg mb-6 lg:mb-0 items-center justify-center lg:pl-30">
          <h3 className="text-xl font-bold mb-5">Socials</h3>
          <ul className="space-y-5">
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
        <p className="text-sm">
          Made with love by
          <a
            href="https://in.linkedin.com/in/digvijay-bhonsle"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            DGVJ@26
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
