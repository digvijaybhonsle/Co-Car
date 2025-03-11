import App2 from "../assets/gifs/App2.gif";
import App1 from "../assets/gifs/App1.gif";
import Man from "../assets/images/Man1.svg";
import { useNavigate } from "react-router-dom";

const Landingbody1 = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact");
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-10 py-8">
      <div className="flex flex-col lg:flex-row items-center w-full lg:h-[700px] bg-white py-6">
        
        {/* Image Section */}
        <div className="relative w-full lg:w-1/2 flex items-center justify-center lg:justify-end bg-white overflow-hidden py-10">
          {/* Background Animations */}
          <img
            src={App2}
            alt="App2 animation"
            loading="lazy"
            className="absolute top-[12%] left-[10%] w-1/3 sm:w-1/2 lg:w-1/3 opacity-80 animate-pulse"
          />
          <img
            src={App1}
            alt="App1 animation"
            loading="lazy"
            className="absolute top-[35%] left-0 w-1/3 sm:w-1/2 lg:w-1/3 opacity-80 animate-pulse"
          />
          {/* Foreground Image */}
          <img
            src={Man}
            alt="Landing visual"
            loading="lazy"
            className="w-[70%] sm:w-[450px] lg:w-[450px] h-auto object-contain rounded-lg"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-4 sm:px-6 lg:px-10 space-y-4 sm:space-y-6">
          
          {/* Headings */}
          <h1 className="text-[#38393C] font-bold text-2xl sm:text-3xl lg:text-4xl leading-tight">
            Transforming Co-Commuting:
          </h1>
          <h1 className="text-[#4CAF50] font-bold text-2xl sm:text-3xl lg:text-4xl leading-tight">
            Smarter, Greener, Together
          </h1>

          {/* Description */}
          <p className="text-[#323131] text-base sm:text-lg lg:text-lg leading-relaxed max-w-full sm:max-w-[90%] lg:max-w-[80%]">
            Revolutionizing urban mobility through innovative, sustainable, and
            technology-driven car-sharing solutions, fostering efficiency, safety,
            and environmental responsibility.
          </p>

          {/* Button */}
          <button
            className="bg-[#004E8F] hover:bg-[#00376a] text-white rounded-full px-6 sm:px-8 py-3 text-lg sm:text-xl lg:text-lg shadow-lg transition-all duration-300 cursor-pointer mt-6"
            onClick={handleClick}
          >
            Start Your Journey Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landingbody1;
