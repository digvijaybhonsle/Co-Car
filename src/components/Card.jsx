/* eslint-disable react/prop-types */
import icon from "../assets/images/Group114.svg"

const Card = ({ image, title, description }) => {
    return (
        <div className="px-6 py-2 bg-white shadow-lg rounded-2xl flex flex-col items-center text-center w-full max-w-sm border border-gray-300 gap-4 md:px-8 md:py-10 lg:max-w-md">
        {/* Card Image */}
        <img src={image} alt={title} className="w-50 h-50 object-contain mb-4" />
        
        {/* Card Title */}
        <h1 className="text-3xl font-semibold text-gray-800">{title}</h1>
        
        {/* Card Description */}
        <p className="text-sm text-gray-600 my-1 px-4 md:text-base">
          {description}
        </p>
      
        {/* Icon (Optional) */}
        <img src={icon} alt="" className="w-16 h-16" />
      </div>
      
    );
  };
  
  export default Card;
  