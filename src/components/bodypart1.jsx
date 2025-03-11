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
    <div className="w-full px-6 py-4 z-[-1]">
      <div className="flex flex-col lg:flex-row w-full lg:h-[700px] bg-white py-6">
        {/* Image Section */}
        <div className="relative w-full lg:w-1/2 flex items-center justify-end bg-white overflow-hidden py-10">
          {/* Background Animation - Second GIF */}
          <img
            src={App2}
            alt="App2 animation"
            loading="lazy"
            className="absolute top-[10%] left-[15%] w-1/2 h-auto object-cover opacity-80 animate-pulse delay-3000 mr-15"
          />
          {/* Background Animation - First GIF */}
          <img
            src={App1}
            alt="App1 animation"
            loading="lazy"
            className="absolute top-[30%] left-0 w-1/2 h-auto object-cover opacity-80 animate-pulse"
          />
          {/* Foreground Image */}
          <img
            src={Man}
            alt="Landing visual"
            loading="lazy"
            className="w-[80%] sm:w-[500px] lg:w-[600px] h-auto object-contain rounded-lg"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-start px-4 sm:px-6 lg:px-12 space-y-4 sm:space-y-6">
          {/* Headings */}
          <h1 className="text-[#38393C] font-bold text-2xl sm:text-3xl lg:text-4xl leading-tight sm:leading-snug sm:mb-4">
            Transforming Co-Commuting:
          </h1>
          <h1 className="text-[#4CAF50] font-bold text-2xl sm:text-3xl lg:text-4xl leading-tight sm:leading-snug mt-0">
            Smarter, Greener, Together
          </h1>

          {/* Description */}
          <p className="text-[#323131] text-xl sm:text-lg lg:text-base leading-relaxed max-w-full sm:max-w-[90%] lg:max-w-[75%]">
            Revolutionizing urban mobility through innovative, sustainable, and
            technology-driven car-sharing solutions, fostering efficiency,
            safety, and environmental responsibility.
          </p>

          {/* Button */}
          <button
            className="bg-[#004E8F] hover:bg-[#00376a] text-white rounded-full w-[200px] sm:w-[250px] lg:w-[300px] h-[50px] flex items-center justify-center shadow-lg transition-all duration-300 cursor-pointer mt-6"
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
