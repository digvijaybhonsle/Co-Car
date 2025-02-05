import Howitworks from "../assets/gifs/Howitworks.gif";
import { useNavigate } from "react-router-dom";

const Landingbody3 = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/how-it-works"); 
  };
  return (
    <div className="w-full px-6 py-4">
      <h1 className="text-[#38393C] text-center mb-6 font-bold text-2xl sm:text-3xl lg:text-4xl">
        How it Works?
      </h1>
      <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-12">
        {/* Left Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={Howitworks}
            alt="How it Works animation"
            loading="lazy"
            className="rounded-lg max-w-[90%] lg:max-w-lg"
          />
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 px-4 sm:px-6 lg:px-12">
          <p className="text-[#38393C] text-lg md:text-xl sm:text-base lg:text-4lg leading-relaxed pr-8 sm:pr-16 lg:pr-40">
            Sign up, set your route, and let Co-Car match you with shared rides.{" "}
            <span className="text-[#4CAF50] font-bold">
              Book easily, track in real-time, save on costs, and earn rewards
            </span>{" "}
            while contributing to eco-friendly commuting!
          </p>
          <button className="mt-10 bg-[#004E8F] hover:bg-[#00376a] text-white rounded-full w-[200px] sm:w-[220px] lg:w-[230px] h-[50px] flex items-center justify-center shadow-lg transition-all duration-300 cursor-pointer" onClick={handleClick}>
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landingbody3;
