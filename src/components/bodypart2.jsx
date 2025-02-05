import WhycoCar from "../assets/gifs/WhyCOo-Car.gif";
import { useNavigate } from "react-router-dom";

const Landingbody2 = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact"); 
  };
  return (
    <div className="w-full px-6 py-4">
      <h1 className="text-[#38393C] text-center mb-6 font-bold text-2xl sm:text-3xl lg:text-4xl">
        Why Choose Co-Car?
      </h1>
      <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-12 lg:pl-20">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 px-4 sm:px-6 lg:px-12">
          <p className="text-[#38393C] text-lg md:text-xl sm:text-base lg:text-4lg leading-relaxed pr-8 sm:pr-16 lg:pr-40">
            Co-Car connects commuters with{" "}
            <span className="text-[#4CAF50] font-bold">
              intelligent ride matching, real-time tracking, and verified
              drivers.
            </span>{" "}
            Enjoy safe, eco-friendly shared rides, reduce costs, and earn
            rewards-all while contributing to a greener planet!
          </p>
          <button className="mt-10 bg-[#004E8F] hover:bg-[#00376a] text-white rounded-full w-[200px] sm:w-[220px] lg:w-[230px] h-[50px] flex items-center justify-center shadow-lg transition-all duration-300 cursor-pointer" onClick={handleClick}>
            Contact Us
          </button>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={WhycoCar}
            alt="Why Co-Car animation"
            loading="lazy"
            className="rounded-lg max-w-[90%] lg:max-w-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Landingbody2;
